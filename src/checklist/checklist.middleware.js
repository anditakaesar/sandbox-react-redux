import { FETCH_CHECKLIST, setChecklists, DELETE_CHECKLIST, remChecklist, CHECKLIST } from "./checklist.action";
import { setNotification } from "../notifications/notifications.action";
import { apiRequest, API_SUCCESS, API_ERROR } from "../api/api.action";

const CHECKLIST_API_URL = `http://localhost:3002/api/list`;

export const checklistMiddleware = () => (next) => (action) => {
    next(action);

    // to perform api call, set notif, set ui
    switch (action.type) {
        case FETCH_CHECKLIST:
            next(setNotification({ message: 'Fetching list from server... ', feature: CHECKLIST }));
            next(apiRequest({ body: null, method: 'GET', url: CHECKLIST_API_URL, feature: CHECKLIST }));            
            break;

        case `${CHECKLIST} ${API_SUCCESS}`:
            next(setNotification({ message: 'Fetching SUCCESS', feature: CHECKLIST }));
            next(setChecklists({ checklists: action.payload.checklists }));
            break;

        case `${CHECKLIST} ${API_ERROR}`:
            next(setNotification({ message: action.payload.message, feature: CHECKLIST }));
            break;

        case DELETE_CHECKLIST:
            next(remChecklist({ checklist: action.payload}));
            break;

        default:
            break;
    }
}