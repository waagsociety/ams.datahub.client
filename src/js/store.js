import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"



import reducer from "./state"

const middleware = applyMiddleware(promise(), thunk, logger({ collapsed: true }))



export default createStore(reducer, middleware)
