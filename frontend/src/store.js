import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from './reducers/mainReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    data : {}
}

const store = createStore(
    mainReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)


export default store