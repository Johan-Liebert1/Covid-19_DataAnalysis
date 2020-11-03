import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../styles/NavbarStyles.css'

const NavbarComponent = ({ match }) => {

    return (
        <nav>
            <Link to = '/' 
                className = {`link ${match.url === '/' ? 'active' : ''}`}>
                <p>
                    Home
                </p>
            </Link>

            <Link to = '/country' 
                className = {`link ${match.url === '/country' ? 'active' : ''}`}>
                <p>
                    Country Data
                </p>
            </Link>
            <Link to = '/continent' className = {`link ${match.url === '/continent' ? 'active' : ''}`}>
                <p>
                    Continent Data
                </p>
            </Link>
            <Link to = '/global' className = {`link ${match.url === '/global' ? 'active' : ''}`}>
                <p>
                    Global Data
                </p>
            </Link>
        </nav>
    )
}

export default withRouter(NavbarComponent)
