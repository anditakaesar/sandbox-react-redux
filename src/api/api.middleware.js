import { API_REQUEST, apiSuccess, apiError } from "./api.action";
import Axios from "axios";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
        const { url, method, feature } = action.meta;
        Axios({
            method: method,
            url: url,
            body: action.payload
        }).then(response => {
            dispatch(apiSuccess({ response: response.data, feature: feature }));
        })
        .catch(err => {
            dispatch(apiError({ error: err, feature: feature }));
        });
    }
}