import os

from data_processing.helpers import get_continent_data
from data_processing.constants import mpl_config, COLORS


def plot_continent_data(
    fig,
    all_axes,
    continents = ['asia'], 
    plot = 'new_cases', 
    plot_type = 'line', 
    one_plot = True
    ):
    
    if not (isinstance(continents, list) or isinstance(continents, tuple)):
        raise ValueError("Please pass in a list/tuple of continent/continents")


    # if len(continents) > 1, only one thing can be plotted

    if len(continents) > 1:
        dates, all_continent_data = [], []

        for c in continents:
            date, data = get_continent_data(c, plot)
            dates.append(date)
            all_continent_data.append(data)

        fig.patch.set_facecolor([0,0,0,0])

        for index, cont in enumerate(continents):
            # --------color config----------------------------
            all_axes[index].set_facecolor(mpl_config[plot]['bg'] + [0.3])

            all_axes[index].spines["right"].set_visible(False)
            all_axes[index].spines["top"].set_visible(False)

            all_axes[index].xaxis.label.set_color(mpl_config[plot]['text'])
            all_axes[index].tick_params(axis='x', colors=mpl_config[plot]['text'])
            all_axes[index].yaxis.label.set_color(mpl_config[plot]['text'])
            all_axes[index].tick_params(axis='y', colors=mpl_config[plot]['text'])
            all_axes[index].title.set_color(COLORS[index])

            # setting the spine color
            for spine in all_axes[index].spines.values():
                spine.set_edgecolor(mpl_config[plot]['plot'])

            #---------color config----------------------------

            to_add = ' / Day' if 'new' in plot else ''
            all_axes[index].set_title(
                f"{plot.split('_')[0].upper()} COVID-19 {plot.split('_')[1].upper()}{to_add} in {cont.upper()}"
            )

            all_axes[index].set_xlabel('Month of 2020')
            all_axes[index].set_ylabel(plot.upper())

            if plot_type == 'line':
                all_axes[index].plot(
                    dates[index],
                    all_continent_data[index],
                    color = COLORS[index]
                )
            
            else:
                all_axes[index].bar(
                    dates[index],
                    all_continent_data[index],
                    color = COLORS[index],
                    width = 1.0,
                    edgecolor = 'white'
                )
        fig.tight_layout(pad = 2.0)
    
    
    # if plot_type == 'line' and one_plot:
    #     axis = all_axes
        
    #     dates_x, ys = [], []
        
    #     for c in continents:
        
    #         dates, y = get_continent_data(c, plot = plot)
    #         dates_x.append(dates)
    #         ys.append(y)
        
        
    #     to_add = ' / Day' if 'new' in plot else ''
    #     axis.set_title(f"{plot.split()[0].upper()} COVID-19 {plot.split()[1].upper()}{to_add}")
    #     axis.set_xlabel('Month of 2020')
    #     axis.set_ylabel(plot.upper())
        
        
    #     for i in range(len(dates_x)):
    #         axis.plot(
    #             dates_x[i], 
    #             ys[i], 
    #             color = mpl_config, 
    #             label = continents[i]
    #         )
            
    #     axis.legend()
        
    #     fig.tight_layout(pad = 3.0)
   
            
    # else:
    #     dates_x, ys = [], []
        
    #     for c in continents:
    #         a, b = get_continent_data(c, plot)
    #         dates_x.append(a)
    #         ys.append(b)

        
    #     if len(continents) > 2:
    #         num = len(continents) // 2 if len(continents) % 2 == 0 else len(continents) // 2 + 1
            
    #     else:
    #         num = 2
        
    #     fig, all_axis_objs = plt.subplots(num, 2, figsize=(10, 2.5 * num))
        
    #     axes = []
        
    #     s0 = all_axis_objs.shape[0]
        
    #     s1 = all_axis_objs.shape[1]
   
    #     for i in range(s0):
    #         for j in range(s1):
    #             axes.append(all_axis_objs[i][j])

    #     axes = axes if len(continents) % 2 == 0 else axes[:-1]
        
    #     for index, axis in enumerate(axes):
    #         if index < len(dates_x):
    #             to_add = ' / Day' if 'new' in plot else ''
    #             axis.set_xlabel('Month of 2020')
    #             axis.set_ylabel(plot.upper())
    #             axis.set_title(f"{plot.split()[0].upper()} COVID-19 {plot.split()[1].upper()}{to_add} in {continents[index]}")
    #             axis.tick_params(axis = 'x', rotation = 35)
                
    #             if plot_type == 'line':
    #                 axis.plot(dates_x[index], ys[index], color = COLORS[index])
                    
    #             else:
    #                 axis.bar(dates_x[index], ys[index], color = COLORS[index], width = 0.5)
    
    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)
    filepath = os.path.join(backend_dir, 'temp', f"{continents}.png")
    fig.savefig(filepath)

    return filepath