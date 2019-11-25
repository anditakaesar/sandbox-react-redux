import { combineReducers } from 'redux';
import { checklistReducer } from './checklist/checklist.reducers';

export const rootReducer = combineReducers({
    checklists: checklistReducer
});