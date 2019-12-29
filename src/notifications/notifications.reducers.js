import { initialState } from "../initialState";
import { SET_NOTIFICATION } from "./notifications.action";

export const notificationsReducer = (notifications = initialState.notifications, action) => {
    let newN;
    
    switch (true) {
        case action.type.includes(SET_NOTIFICATION):
            newN = [action.payload, ...notifications];
            if (newN.length > 5) {
                newN.pop();
            }
            return newN;

        default:
            return notifications;
    }
}