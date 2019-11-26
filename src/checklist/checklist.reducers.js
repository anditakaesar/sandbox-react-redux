import { initialState } from '../initialState';
import { FETCH_CHECKLIST, CREATE_CHECKLIST, UPDATE_CHECKLIST, DELETE_CHECKLIST } from './checklist.action';

export const checklistReducer = (lists = initialState.checklists, action) => {
    let newC;
    let listIndex;

    switch (action.type) {
        case FETCH_CHECKLIST:
            return lists;

        case CREATE_CHECKLIST:
            newC = [...lists];
            newC.push(action.payload);
            return newC;

        case UPDATE_CHECKLIST:
            newC = [...lists];
            listIndex = newC.findIndex(l => l.id === action.payload.id);
            newC[listIndex] = action.payload;
            return newC;

        case DELETE_CHECKLIST:
            newC = [...lists];
            newC = newC.filter(l => l.id !== action.payload.id);
            return newC;

        default:
            return lists;
    }
}