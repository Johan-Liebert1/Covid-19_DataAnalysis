from flask import Flask, send_file, request
import os

import matplotlib as mpl
mpl.use('Agg') # non GUI backend

import matplotlib.pyplot as plt


app = Flask(__name__)

def delete_all_files_in_temp():
    for file in os.listdir('temp'):
        os.remove(os.path.join('temp',file))

@app.route("/plotdata/country/<string:country>/<string:data>/<string:plot_type>")
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


@app.route('/plotdata/global/<string:data>/<string:plot_type>')
def global_plot(data, plot_type):

    if data != 'all':
        fig, axes = plt.subplots(1,1, figsize=(10, 5))

        filename = plot_global_data(
            fig = fig, 
            all_axes = axes,
            plot = data,
            plot_type = plot_type
        )
    
    else:
        fig, axes = plt.subplots(2,2, figsize=(20, 10))

        filename = plot_global_data(
            fig = fig, 
            all_axes = axes,
            plot = data,
            plot_type = plot_type,
            plot_all = True
        )

    return send_file(filename, mimetype='image/gif'), 200


# compare continents
@app.route('/plotdata/continents/<string:data>/<string:plot_type>')
def comapre_continents_plot(data, plot_type):
    delete_all_files_in_temp()

    continents = request.args.get('conts')
    cont_list = [i.lower() for i in continents.split(',')]

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
    

        filename = compare_continent_data(
            fig = fig, 
            all_axes = all_axes,
            continents = cont_list,
            plot = data,
            plot_type = plot_type
        )
    
    else:
        filename = compare_continent_data(
            fig = fig, 
            all_axes = axes,
            continents = cont_list,
            plot = data,
            plot_type = plot_type
        )


    return send_file(filename, mimetype='image/gif'), 200

@app.route("/plotdata/continent/<string:continent>/<string:data>/<string:plot_type>")
def continent_plot(continent, data, plot_type):
    delete_all_files_in_temp()

    if data == 'all':
        fig, axes = plt.subplots(2,2, figsize=(20, 10))

        filename = plot_all_data_for_a_continent(
            fig = fig, 
            all_axes = axes,
            continent = continent,
            plot_type = plot_type
        )

    return send_file(filename, mimetype='image/gif')



# compare countries
@app.route('/plotdata/countries/<string:data>/<string:plot_type>')
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



if __name__ == "__main__":
    from data_processing.countryDataPlot import plot_country_data, plot_all_data_for_a_country, compare_country_data
    from data_processing.globalDataPlot import plot_global_data
    from data_processing.continentDataPlot import compare_continent_data, plot_all_data_for_a_continent
    app.run(debug = True, threaded = True)