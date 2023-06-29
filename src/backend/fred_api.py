import requests
import pandas as pd
from datetime import datetime, timedelta
import matplotlib.pyplot as plt

def search_series_id(api_key, description):
    base_url = "https://api.stlouisfed.org/fred/series/search"
    
    params = {
        "api_key": api_key,
        "file_type": "json",
        "search_text": description
    }
    
    response = requests.get(base_url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        series = data['seriess']
        if series:
            return series[0]['id']
        else:
            return None
    else:
        return f"Error: {response.status_code}"

def get_fred_data(api_key, series_id, start_date=None, end_date=None):
    base_url = "https://api.stlouisfed.org/fred/series/observations"
    
    # If no start_date is provided, default to two years ago
    if start_date is None:
        start_date = (datetime.now() - timedelta(days=2*365)).strftime('%Y-%m-%d')
    
    # If no end_date is provided, default to today
    if end_date is None:
        end_date = datetime.now().strftime('%Y-%m-%d')
    
    params = {
        "series_id": series_id,
        "api_key": api_key,
        "file_type": "json",
        "observation_start": start_date,
        "observation_end": end_date
    }
    
    response = requests.get(base_url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        observations = data['observations']
        df = pd.DataFrame(observations)
        return df
    else:
        return f"Error: {response.status_code}"

# Example usage:
api_key = "1853fb4e14eed771593dbc6c8fbfaa6a"
description = "United states labor participation rate"
series_id = search_series_id(api_key, description)

if series_id:
    data = get_fred_data(api_key, series_id)
    
    # Convert the 'date' column to datetime and 'value' column to numeric
    data['date'] = pd.to_datetime(data['date'])
    data['value'] = pd.to_numeric(data['value'])
    
    # Use matplotlib to plot the data as a scatter plot
    plt.figure(figsize=(10, 5))
    plt.scatter(data['date'], data['value'], color='blue')
    plt.xlabel('Date')
    plt.ylabel('Core CPI')
    plt.title(f'{description} for the Last Two Years')
    plt.grid(True)
    plt.xticks(rotation=45)
    plt.tight_layout()
    
    # Show the plot
    plt.show()
else:
    print("Series ID not found")
