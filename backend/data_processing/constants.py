COLORS = [
    '#0984e3', 
    '#00b894', 
    '#eb4d4b' , 
    '#00cec9', 
    '#7158e2', 
    '#d63031', 
    '#fa8231', 
    '#0a3d62', 
    '#009688'
]

column_name = {
    'new cases' : 'New_cases',
    'total cases' : "Cumulative_cases",
    'new deaths' : 'New_deaths',
    'total deaths' : 'Cumulative_deaths',
}

mpl_config = {
    'new_deaths' : {
        'bg' : [51 /255, 20 /255 , 39/255],
        'plot' : [253/255, 7/255, 58/255],
        'text' : [253/255, 7/255, 58/255]
    },

    'new_cases': {
        'bg' : [21/255,29/255,51/255],
        'plot' : [0, 123/255, 253/255],
        'text' : [0, 123/255, 253/255]
    },

    'total_cases' : {
        'bg' : [24/255, 40/255, 41/255],
        'plot': [40/255, 166/255, 69/255],
        'text': [40/255, 166/255, 69/255]
    },

    'total_deaths' : {
        'bg' : [28/255, 28/255, 43/255],
        'plot': [200/255, 200/255, 200/255],
        'text': [200/255, 200/255, 200/255],
    }
}