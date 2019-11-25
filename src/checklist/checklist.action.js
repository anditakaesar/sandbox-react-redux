// action
export const CHECKLIST = `[Checklist]`;

export const FETCH_CHECKLIST = `${CHECKLIST} FETCH_CHECKLIST`;
export const CREATE_CHECKLIST = `${CHECKLIST} CREATE_CHECKLIST`;
export const UPDATE_CHECKLIST = `${CHECKLIST} UPDATE_CHECKLIST`;
export const DELETE_CHECKLIST = `${CHECKLIST} DELETE_CHECKLIST`;

export const fetchChecklist = () => ({
    action: FETCH_CHECKLIST,
    payload: null
});

export const createChecklist = ({checklist}) => ({
    action: CREATE_CHECKLIST,
    payload: checklist
});

export const updateChecklist = ({checklist}) => ({
    action: UPDATE_CHECKLIST,
    payload: checklist
});

export const deleteChecklist = ({checklist}) => ({
    action: DELETE_CHECKLIST,
    payload: checklist
});