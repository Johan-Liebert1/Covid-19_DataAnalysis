import axios from 'axios'

export const getCountryData = (country) => async (dispatch) => {
    const { data } = await axios.get(`/api/getdata/country/${country}`)

    dispatch({
        type: 'COUNTRY_DATA_REQUEST',
        payload: data
    })
}