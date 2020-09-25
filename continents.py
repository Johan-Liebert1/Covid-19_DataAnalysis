from urllib.request import urlopen
from bs4 import BeautifulSoup as bs

url = 'http://statisticstimes.com/geography/countries-by-continents.php'

html = urlopen(url)

parsed_html = bs(html, 'html.parser')

table = parsed_html.find_all(id = 'table_id')

rows = table[0].findChildren(['tr'])

mapping = {}

for row in rows[1:]:
    all_td = row.findChildren(['td'])

    country = all_td[1].string
    continent = all_td[6].string

    mapping[country] = continent

keys_sorted = sorted(mapping)

with open('continents_and_countries.py', 'w') as file:
    file.write('mapping = {')
    
    
    for key in keys_sorted:
        file.write(f"'{str(key)}' : '{str(mapping[key])}',\n")
        
    file.write('}')
        

    
    
    
    