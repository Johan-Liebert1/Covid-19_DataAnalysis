import os

from data_processing.helpers import get_continent_data
from data_processing.constants import mpl_config, COLORS


def compare_continent_data(
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
    
    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok = True)
    filepath = os.path.join(backend_dir, 'temp', f"{continents}.png")
    fig.savefig(filepath)

    return filepath


def plot_continent_data(
    fig,
    axis,
    continent,
    plot = 'new_cases',
    plot_type = 'line'
    ):

    date, data = get_continent_data(continent, plot)

    to_add = '/Day' if 'new' in plot else ''
    title = f"{plot.split('_')[0].upper()} COVID-19 {plot.split('_')[1].upper()}{to_add} in {continent.upper()}"
    axis.set_title(
        title
    )

    print(title)

    axis.set_ylabel(plot.upper())
    axis.set_xlabel('Month of 2020')
    axis.tick_params(axis='x', rotation=35)

    # --------color config----------------------------
    fig.patch.set_facecolor(mpl_config[plot]['bg'] + [0.3])
    axis.set_facecolor(mpl_config[plot]['bg'] + [0.3])

    axis.spines["right"].set_visible(False)
    axis.spines["top"].set_visible(False)

    axis.xaxis.label.set_color(mpl_config[plot]['text'])
    axis.tick_params(axis='x', colors=mpl_config[plot]['text'])
    axis.yaxis.label.set_color(mpl_config[plot]['text'])
    axis.tick_params(axis='y', colors=mpl_config[plot]['text'])
    axis.title.set_color(mpl_config[plot]['text'])

    # setting the spine color
    for spine in axis.spines.values():
        spine.set_edgecolor(mpl_config[plot]['plot'])

    #---------color config----------------------------


    if plot_type == 'line':
        axis.plot(
            date,
            data,
            color = mpl_config[plot]['plot']
        )

    else:
        axis.bar(
            date,
            data,
            color = mpl_config[plot]['plot']
        )

    fig.tight_layout(pad = 3.0)

    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)
    filepath = os.path.join(backend_dir, 'temp', f"{continent}-{plot}.png")
    fig.savefig(filepath)

    return filepath



def plot_all_data_for_a_continent(fig, all_axes, continent, plot_type = 'line'):
    
    dt1, new_cases = get_continent_data(continent, plot = 'new_cases')
    dt2, total_cases = get_continent_data(continent, plot = 'total_cases')
    dt3, new_deaths = get_continent_data(continent, plot = 'new_deaths')
    dt4, total_deaths = get_continent_data(continent, plot = 'total_deaths')

    
    dates = [dt1, dt2, dt3, dt4]
    to_plot = [
        new_cases, 
        total_cases, 
        new_deaths, 
        total_deaths
    ]
    labels = ['New Cases / Day', 'Total Cases', 'New Deaths / Day', 'Total Deaths']
    plot = ['new_cases', 'total_cases', 'new_deaths', 'total_deaths']

    ((ax1, ax2), (ax3, ax4)) = all_axes
        
    axes = [ax1, ax2, ax3, ax4]

    for index, axis in enumerate(axes):
        axis.set_title(labels[index])
        axis.tick_params(axis='x', rotation=35)
        axis.set_xlabel("Month of 2020")
        y = labels[index].split('/')[0]
        axis.set_ylabel(y)

        # --------color config----------------------------
        axis.set_facecolor(mpl_config[plot[index]]['bg'] + [0.3])
        fig.patch.set_facecolor([0,0,0,0])

        axis.spines["right"].set_visible(False)
        axis.spines["top"].set_visible(False)

        axis.xaxis.label.set_color(mpl_config[plot[index]]['text'])
        axis.tick_params(axis='x', colors=mpl_config[plot[index]]['text'])
        axis.yaxis.label.set_color(mpl_config[plot[index]]['text'])
        axis.tick_params(axis='y', colors=mpl_config[plot[index]]['text'])
        axis.title.set_color(mpl_config[plot[index]]['text'])

        # setting the spine color
        for spine in axis.spines.values():
            spine.set_edgecolor(mpl_config[plot[index]]['plot'])
        #---------color config----------------------------
        
        if plot_type == 'line':
            axis.plot(
                dates[index], 
                to_plot[index],
                color = mpl_config[plot[index]]['plot']
            )

            
        if plot_type == 'bar':
            axis.bar(
                dates[index], 
                to_plot[index], 
                color = mpl_config[plot[index]]['plot'], 
                width = 0.75
            )
                
    fig.tight_layout(pad = 3.0)

    backend_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(backend_dir, 'temp'), exist_ok=True)
    filepath = os.path.join(backend_dir, 'temp', f"{continent}-all.png")
    fig.savefig(filepath)

    return filepath