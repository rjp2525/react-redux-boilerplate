import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
              	thunkMiddleware,
              	loggerMiddleware,
                apiMiddleware
            ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}
