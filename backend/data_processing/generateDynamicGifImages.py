from matplotlib import pyplot as plt
import pandas as pd
import geopandas as gpd
import os
import matplotlib
matplotlib.use('Agg')

df = pd.read_csv('WHO-COVID-19-global-data.csv')
df.columns = [i.strip() for i in df.columns]
dates = df['Date_reported'].unique()

world = gpd.read_file('shapefiles/World_Map.shp')

# replace in the world dataset

to_replace = ['Bolivia', 'Cape Verde', "Cote d'Ivoire", 'Czech Republic', "Korea, Democratic People's Republic of",
              'Holy See (Vatican City)', 'Libyan Arab Jamahiriya', 'Micronesia, Federated States of', 'Burma',
              'The former Yugoslav Republic of Macedonia', 'Northern Mariana Islands', 'Palestine',
              'Korea, Republic of', 'Russia', 'Saint Martin', 'Sudan', 'United Kingdom', 'United States', 'Venezuela',
              'Wallis and Futuna Islands'
              ]

to_replace_with = ['Bolivia (Plurinational State of)', 'Cabo Verde', 'Côte d’Ivoire', 'Czechia',
                   "Democratic People's Republic of Korea", 'Holy See', 'Libya', 'Micronesia (Federated States of)',
                   'Myanmar', 'North Macedonia', 'Northern Mariana Islands (Commonwealth of the)',
                   'occupied Palestinian territory, including east Jerusalem', 'Republic of Korea',
                   'Russian Federation', 'Sint Maarten', 'South Sudan', 'The United Kingdom',
                   'United States of America', 'Venezuela (Bolivarian Republic of)', 'Wallis and Futuna']

to_drop_from_df = ['Bonaire, Sint Eustatius and Saba', 'Curaçao',
                   'Eswatini', 'Kosovo[1]', 'Other', 'Saint Barthélemy']

world.replace(to_replace, to_replace_with, inplace=True)
world.rename(columns={'NAME': 'Country'}, inplace=True)


world.set_index('Country', inplace=True)
df.set_index('Country', inplace=True)

world_countries = world.index.to_list()
df_countries = df.index.unique()
countries_in_world_but_not_in_df = [
    i for i in world_countries if i not in df_countries
]

for country in countries_in_world_but_not_in_df:
    world.drop(country, inplace=True)

for country in to_drop_from_df:
    df.drop(country, inplace=True)

countries_in_df_but_not_in_world = [
    i for i in df.index.unique() if i not in world.index
]

for country in countries_in_df_but_not_in_world:
    df.drop(country, inplace=True)

date_groups = df.groupby('Date_reported')

cases_bin = [100, 500, 1000, 5000, 10000, 20000, 50000,
             100000, 250000, 500000, 750000, 10000000, 15000000]
deaths_bin = [100, 500, 1000, 2000, 3000, 5000, 10000,
              20000, 50000, 70000, 90000, 100000, 150000, 200000]


def generate_images(column, cmap):
    directory = column
    os.makedirs(column, exist_ok=True)

    for i, date in enumerate(dates):

        merge = world.join(date_groups.get_group(date))

        ax = merge.plot(column=column,
                        cmap=cmap,
                        legend=True,
                        edgecolor='black',
                        scheme='user_defined',

                        classification_kwds={
                            'bins': cases_bin if column == 'Cumulative_cases' else deaths_bin
                        },

                        linewidth=0.2,
                        figsize=(12, 7)
                        )

        plt.gcf().tight_layout(pad=2.0)
        ax.set_axis_off()
        legend = ax.get_legend()
        legend.set_bbox_to_anchor((0.17, 0.5))
        legend.get_frame().set_linewidth(0)
        ax.set_title(
            f"Cumulative COVID-19 {'Cases' if column == 'Cumulative_cases' else 'Deaths'} on {date}")

        plt.gcf().set_facecolor([21/255, 29/255, 51/255])
        ax.title.set_color('white')

        for legend_text in legend.get_texts():
            new_text = legend_text.get_text()

            new_text = new_text.replace('(', '')
            new_text = new_text.replace(')', '')
            new_text = new_text.replace('[', '')
            new_text = new_text.replace(']', '')

            part1 = new_text.split(',')[0].strip().split('.')[0]
            part2 = new_text.split(',')[1].strip().split('.')[0]
            final_text = part1 + ' '*2*(8 - len(part1)) + ',' + part2
            legend_text.set_text(f'{final_text}')

        plt.gcf().savefig(f'{directory}/{i}.png', format='png')
        plt.close()  # close the current figure to release memeory


generate_images('Cumulative_deaths', 'YlOrRd')  # reversed winter colormap
