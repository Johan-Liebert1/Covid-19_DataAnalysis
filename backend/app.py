from flask import Flask, send_file
import os
import matplotlib
matplotlib.use('Agg') # non GUI backend
import matplotlib.pyplot as plt


app = Flask(__name__)

def delete_all_files_in_temp():
    for file in os.listdir('temp'):
        os.remove(os.path.join('temp',file))

@app.route("/getdata/<string:country>/<string:data>/<string:plot_type>")
def return_data(country, data, plot_type):
    delete_all_files_in_temp()
    fig, (ax1) = plt.subplots(1,1, figsize=(10, 5))

    filename, maximum = plot_country_data(
        fig = fig, 
        ax1 = ax1, 
        countries = [country.lower()], 
        plot = data,
        plot_type = plot_type
    )
    
    return send_file(filename, mimetype='image/gif'), 200

if __name__ == "__main__":
    from data_processing.countryDataPlot import plot_country_data
    app.run(debug = True)