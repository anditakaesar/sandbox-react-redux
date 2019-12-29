import { initialState } from '../initialState';
import { SET_CHECKLIST, REM_CHECKLIST } from './checklist.action';

export const checklistReducer = (lists = initialState.checklists, action) => {
    let newC;
    // let listIndex;

    switch (action.type) {
        case SET_CHECKLIST:
            newC = action.payload
            return newC;

        // case CREATE_CHECKLIST:
        //     newC = [...lists];
        //     newC.push(action.payload);
        //     return newC;

        // case UPDATE_CHECKLIST:
        //     newC = [...lists];
        //     listIndex = newC.findIndex(l => l.id === action.payload.id);
        //     newC[listIndex] = action.payload;
        //     return newC;

        case REM_CHECKLIST:
            newC = [...lists];
            newC = newC.filter(l => l.id !== action.payload.id);
            return newC;

        default:
            return lists;
    }
}