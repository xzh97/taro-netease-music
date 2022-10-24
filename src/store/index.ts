import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk";
import rootReducers from "../reducers";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middleWares = [
    thunkMiddleWare,
]

if(process.env.NODE_ENV === 'development'){
    middleWares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
    applyMiddleware(...middleWares),
)

export default function configStore(){
    const store = createStore(rootReducers, enhancer)
    return store
}