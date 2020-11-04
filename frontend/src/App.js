import React from 'react' 
import { BrowserRouter, Route } from 'react-router-dom';

import CountryScreen from './screens/CountryScreen';
import GlobalScreen from './screens/GlobalScreen';
import ContinentScreen from './screens/ContinentScreen';
import HomeScreen from './screens/HomeScreen';

function App() {

    return (
        <BrowserRouter>
            <Route 
                exact path = '/'
                render = { () => <HomeScreen /> }
            />

            <Route 
                exact path = '/country'
                render = { () => <CountryScreen /> }
            />

            <Route 
                exact path = '/global'
                render = { () => <GlobalScreen /> }
            />

            <Route 
                exact path = '/continent'
                render = { () => <ContinentScreen /> }
            />

        </BrowserRouter>
            
        
    );
}

export default App;
