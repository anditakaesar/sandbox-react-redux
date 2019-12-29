import { combineReducers } from 'redux';
import { checklistReducer } from './checklist/checklist.reducers';
import { notificationsReducer } from './notifications/notifications.reducers';

export const rootReducer = combineReducers({
    checklists: checklistReducer,
    notifications: notificationsReducer
});