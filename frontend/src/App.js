import './App.css';
import React from 'react' 
import CountryScreen from './screens/CountryScreen';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalScreen from './screens/GlobalScreen';

function App() {

    return (
        <BrowserRouter>
            <Route 
                exact path = '/country'
                render = { () => <CountryScreen /> }
            />

            <Route 
                exact path = '/global'
                render = { () => <GlobalScreen /> }
            />

        </BrowserRouter>
            
        
    );
}

export default App;
