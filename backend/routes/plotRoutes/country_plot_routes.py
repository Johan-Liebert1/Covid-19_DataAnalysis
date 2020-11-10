from flask import Blueprint, send_file, request
from os.path import dirname, abspath
from os.path import join as join_path
import os
import sys
import matplotlib as mpl
mpl.use('Agg') # non GUI backend

import matplotlib.pyplot as plt

# resolve ModuleNotFound error
sys.path.insert(0, (abspath(join_path('..', '..','..', 'backend'))) )

from data_processing.countryDataPlot import plot_country_data, plot_all_data_for_a_country, compare_country_data


country_plot_routes = Blueprint('country_plot_routes', __name__)


def delete_all_files_in_temp():
    backend_dir = abspath( dirname(dirname(dirname(__file__))) )
    temp_path = join_path(backend_dir, 'temp')

    for file in os.listdir(temp_path):
        if file.endswith('.png'):
            os.remove(join_path(temp_path, file))


@country_plot_routes.route("/country/<string:country>/<string:data>/<string:plot_type>")
def country_plot(country, data, plot_type):

    delete_all_files_in_temp()

    if data != 'all':
        fig, (ax1) = plt.subplots(1,1, figsize=(10, 5))

        filename, maximum = plot_country_data(
            fig = fig, 
            ax1 = ax1, 
            countries = [country.lower()], 
            plot = data,
            plot_type = plot_type
        )

    
    else:
        fig, axes = plt.subplots(2,2, figsize=(20,10))

        filename = plot_all_data_for_a_country(
            fig = fig, 
            all_axes = axes,
            country = country,
            plot_type = plot_type
        )
    
    return send_file(filename, mimetype='image/gif'), 200


# compare countries
@country_plot_routes.route('/countries/<string:data>/<string:plot_type>')
def compare_countries_plot(data, plot_type):
    delete_all_files_in_temp()

    countries = request.args.get('countries')
    cont_list = [i.lower() for i in countries.split(',')]

    # going to be at least 2 
    isEven = len(cont_list) % 2 == 0
    rows = len(cont_list) // 2 if isEven else ( len(cont_list) + 1 ) // 2
    fig_height = 5 * rows
    fig, axes = plt.subplots( rows , 2 , figsize=(20, fig_height))
    
    if len(cont_list) > 2:
        all_axes = []
        
        for r in range(rows):
            for c in range(2):
                all_axes.append( axes[r][c] )
        
        if not isEven:
            fig.delaxes(all_axes[-1])
    

        filename = compare_country_data(
            fig = fig, 
            all_axes = all_axes,
            countries = cont_list,
            plot = data,
            plot_type = plot_type
        )
    
    else:
        filename = compare_country_data(
            fig = fig, 
            all_axes = axes,
            countries = cont_list,
            plot = data,
            plot_type = plot_type
        )


    return send_file(filename, mimetype='image/gif'), 200