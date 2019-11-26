// action
export const CHECKLIST = `[Checklist]`;

export const FETCH_CHECKLIST = `${CHECKLIST} FETCH_CHECKLIST`;
export const CREATE_CHECKLIST = `${CHECKLIST} CREATE_CHECKLIST`;
export const UPDATE_CHECKLIST = `${CHECKLIST} UPDATE_CHECKLIST`;
export const DELETE_CHECKLIST = `${CHECKLIST} DELETE_CHECKLIST`;

export const fetchChecklist = () => ({
    type: FETCH_CHECKLIST,
    payload: null
});

export const createChecklist = (checklist) => ({
    type: CREATE_CHECKLIST,
    payload: checklist
});

export const updateChecklist = (checklist) => ({
    type: UPDATE_CHECKLIST,
    payload: checklist
});

export const deleteChecklist = (checklist) => ({
    type: DELETE_CHECKLIST,
    payload: checklist
});