export const mainReducer = (state = { data : {} }, action) => {
    switch (action.type) {
        case 'COUNTRY_DATA_REQUEST':
            return { data: action.payload }
        default:
            return state
    }
}