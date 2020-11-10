import axios from 'axios'

export const getCountryData = (country) => async (dispatch) => {
    const { data } = await axios.get(`/api/getdata/country/${country}`)

    dispatch({
        type: 'COUNTRY_DATA_REQUEST',
        payload: data
    })
}

export const getContinentData = (continent) => async (dispatch) => {
    const { data } = await axios.get(`/api/getdata/continent/${continent}`)

    dispatch({
        type: 'CONTINENT_DATA_REQUEST',
        payload: data
    })
}


export const getGlobalData = () => async (dispatch) => {
    const { data } = await axios.get(`/api/getdata/global/`)

    dispatch({
        type: 'GLOBAL_DATA_REQUEST',
        payload: data
    })
}


export const clearDataFromState = () => async (dispatch) => {
    dispatch({
        type: 'CLEAR_DATA_FROM_STATE'
    })
}