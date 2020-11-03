import os

from data_processing.helpers import get_sum_col
from data_processing.constants import COLORS


def plot_global_data(fig, axis, plot = 'new_cases', plot_type = 'line'):
    
    dates, y = [None] * 2
    
    if plot.lower() == 'new_cases':
        dates, y = get_sum_col('New_cases')

    elif plot.lower() == 'total_cases':
        dates, y = get_sum_col('Cumulative_cases')

    elif plot.lower() == 'new_deaths':
        dates, y = get_sum_col('New_deaths')

    elif plot.lower() == 'total_deaths':
        dates, y = get_sum_col('Cumulative_deaths')

    axis.set_xlabel("Month of 2020")
    axis.tick_params(axis='x', rotation=35)

    t = [i.upper() for i in plot.split("_")]
    
    to_add = ' / Day' if t[0] == 'NEW' else ''
    
    axis.set_title(f"Global {t[0]} COVID-19 {t[1]} {to_add}")
    
    axis.set_ylabel(f"{t[0]} {t[1]}")
    
    if plot_type == 'line':
        axis.plot(
            dates, 
            y, 
            color = COLORS[0], 
            alpha = 0.75
        )
        
    else:
        axis.bar(
            dates, 
            y, 
            color = COLORS[0], 
            alpha = 0.75, 
            width = 1.0,
            edgecolor = 'white',
            align = 'center'
        )
    
    fig.tight_layout(pad = 3.0)
                
    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)
    filepath = os.path.join(backend_dir, 'temp', f"global-{plot}.png")
    fig.savefig(filepath)

    return filepath