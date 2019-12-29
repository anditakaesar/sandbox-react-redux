import { checklistMiddleware } from "./checklist/checklist.middleware";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { apiMiddleware } from "./api/api.middleware";

// core middleware
const coreMiddlewares = [
    apiMiddleware
]

const featureMiddlewares = [
    checklistMiddleware
]

// development
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(...featureMiddlewares, ...coreMiddlewares)
    )
);