import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearDataFromState, getGlobalData } from '../actions/mainActions';
import { plotType, plotWhat, mapping } from "../constants";
import ShowDataComponent from './ShowDataComponent';

const GlobalFormComponent = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    const [pws, setPws] = useState('')
    const [pts, setPts] = useState('')

    const [plotWhatState, setPlotWhatState] = useState(plotWhat[0])
    const [plotTypeState, setPlotTypeState] = useState(plotType[0])
    const [showImage, setShowImage] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setShowImage(true)
        setPws(plotWhatState)
        setPts(plotTypeState)  

        dispatch(getGlobalData())
    }

    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const imageStyle = {
        width: windowWidth * 0.95, height: windowHeight * 0.95 
    }

    useEffect(() => {
        dispatch(clearDataFromState())
    }, [])

    return (
        <div style = {{ width: '100%' }}>
        <form onSubmit = {submitHandler} className = 'mb-5 container'>
        <div className = 'form-row'>
            
            <div className = 'form-group col-md-3'>
                <label htmlFor='country'>Select Plot</label>
                <select 
                    className = 'form-control'
                    onChange = {(e) => setPlotWhatState(e.target.value)}
                    style = {{
                        backgroundColor: "transparent",
                        color: 'white'
                    }}
                >
                    {
                        plotWhat.map((p, index) => 
                            <option key = {index} style = {{
                                backgroundColor: 'rgb(14, 22, 29)',
                                color: "white"
                            }}>{p}</option>
                        )
                    }
                </select>
            </div>

            <div className = 'form-group col-md-3'>
                <label htmlFor='country'>Select Plot Type</label>
                <select 
                    className = 'form-control'
                    onChange = {(e) => setPlotTypeState(e.target.value)}
                    style = {{
                        backgroundColor: "transparent",
                        color: 'white'
                    }}
                >
                    {
                        plotType.map((p, i) => <option key = {i} style = {{
                            backgroundColor: 'rgb(14, 22, 29)',
                            color: "white"
                        }}>{p}</option>)
                    }
                </select>
            </div>

        </div>
        <div className = 'form-row'>
            <button 
                type = 'submit' 
                className='btn btn-outline-primary col-md-2'>Plot Data</button>
        </div>
        
        </form>
        
        <div style = {{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: '3rem'
            }}
        >

        {
            showImage && 
            <img 
                src = {`api/plotdata/global/${mapping[pws]}/${mapping[pts]}`} 
                alt = {`global-${mapping[pws]}-${mapping[pts]}`}
                style= { mapping[pws] === 'all' ? imageStyle : {} }
            />
        }
        </div>

        <div 
            className='container'
        >
            <div 
                className = 'row'
                style = {{
                display: "flex",
                justifyContent: 'center'
            }}
            >
                {   Object.keys(data).length > 0 && 
                    ['new_cases', 'new_deaths'].map(
                        (k, index) =>
                        <ShowDataComponent key={index} dataType = {k} data = {data[k]} c = 'global' /> 
                    )
                }
            </div>
        </div>

        </div>
    )
}

export default GlobalFormComponent
