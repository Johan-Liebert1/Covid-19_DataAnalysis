import os

from data_processing.helpers import get_sum_col
from data_processing.constants import COLORS, mpl_config


def plot_global_data(fig, all_axes, plot = 'new_cases', plot_type = 'line', plot_all=False):
    
    dates, y, new_cases, total_cases, new_deaths, total_deaths, titles, plots, all_data = [None] * 9
    
    if not plot_all:
        if plot.lower() == 'new_cases':
            dates, y = get_sum_col('New_cases')

        elif plot.lower() == 'total_cases':
            dates, y = get_sum_col('Cumulative_cases')

        elif plot.lower() == 'new_deaths':
            dates, y = get_sum_col('New_deaths')

        elif plot.lower() == 'total_deaths':
            dates, y = get_sum_col('Cumulative_deaths')
            
    else:
        dates, new_cases = get_sum_col('New_cases')
        _, total_cases   = get_sum_col('Cumulative_cases')
        _, new_deaths    = get_sum_col('New_deaths')
        _, total_deaths  = get_sum_col('Cumulative_deaths')
        
        all_data = [new_cases, total_cases, new_deaths, total_deaths]
        titles = ["New Cases / Day", "Total Cases", "New Deaths / Day", "Total Deaths"]
        plots = ['new_cases', 'total_cases', 'new_deaths', 'total_deaths']

        
    if not plot_all:
        ax1 = all_axes

        ax1.set_xlabel("Month of 2020")
        ax1.tick_params(axis='x', rotation=35)

        t = [i.upper() for i in plot.split("_")]
        
        to_add = ' / Day' if t[0] == 'NEW' else ''
        
        ax1.set_title(f"Global {t[0]} COVID-19 {t[1]} {to_add}")
        
        ax1.set_ylabel(f"{t[0]} {t[1]}")
        
        #------------------color config-----------------------------
        ax1.set_facecolor(mpl_config[plot]['bg'] + [0.3])
        fig.patch.set_facecolor(mpl_config[plot]['bg'] + [0.3])

        ax1.spines["right"].set_visible(False)
        ax1.spines["top"].set_visible(False)

        ax1.xaxis.label.set_color(mpl_config[plot]['text'])
        ax1.tick_params(axis='x', colors=mpl_config[plot]['text'])
        ax1.yaxis.label.set_color(mpl_config[plot]['text'])
        ax1.tick_params(axis='y', colors=mpl_config[plot]['text'])
        ax1.title.set_color(mpl_config[plot]['text'])

        # setting the spine color
        for spine in ax1.spines.values():
            spine.set_edgecolor(mpl_config[plot]['plot'])
        #------------------color config-----------------------------


        if plot_type == 'line':
            ax1.plot(dates, y, color = mpl_config[plot]['plot'], alpha = 0.75)
            
        else:
            ax1.bar(dates, y, color = mpl_config[plot]['plot'], alpha = 0.75, width = 0.6)
        
        ax1.legend()
        fig.tight_layout(pad = 3.0)
        
    else:
        # plot all
        
        ((ax1, ax2), (ax3, ax4)) = all_axes
        
        axes = [ax1, ax2, ax3, ax4]
        
        for index, axis in enumerate(axes):
            axis.set_title('Global ' + titles[index])
            axis.set_ylabel(titles[index].split('/')[0])
            axis.tick_params(axis = 'x', rotation = 35)
            axis.set_xlabel('Month of 2020')
            
            # --------color config----------------------------
            axis.set_facecolor(mpl_config[plots[index]]['bg'] + [0.3])
            fig.patch.set_facecolor([0,0,0,0])

            axis.spines["right"].set_visible(False)
            axis.spines["top"].set_visible(False)

            axis.xaxis.label.set_color(mpl_config[plots[index]]['text'])
            axis.tick_params(axis='x', colors=mpl_config[plots[index]]['text'])
            axis.yaxis.label.set_color(mpl_config[plots[index]]['text'])
            axis.tick_params(axis='y', colors=mpl_config[plots[index]]['text'])
            axis.title.set_color(mpl_config[plots[index]]['text'])

            # setting the spine color
            for spine in axis.spines.values():
                spine.set_edgecolor(mpl_config[plots[index]]['plot'])
            #---------color config----------------------------

            if plot_type == 'line':
                axis.plot(
                    dates, 
                    all_data[index], 
                    color = mpl_config[plots[index]]['plot'], 
                    alpha = 0.75
                )

            else:
                axis.bar(
                    dates, 
                    all_data[index], 
                    color = mpl_config[plots[index]]['plot'], 
                    width = 1.0,
                    edgecolor = 'white'
                )
            
        fig.tight_layout(pad = 2.0)

    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)
    filepath = os.path.join(backend_dir, 'temp', f"global-{plot}.png")
    fig.savefig(filepath)

    return filepath

    
    