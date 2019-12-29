// action
export const CHECKLIST = `[Checklist]`;

// Command
export const FETCH_CHECKLIST = `${CHECKLIST} FETCH_CHECKLIST`;
export const CREATE_CHECKLIST = `${CHECKLIST} CREATE_CHECKLIST`;
export const UPDATE_CHECKLIST = `${CHECKLIST} UPDATE_CHECKLIST`;
export const DELETE_CHECKLIST = `${CHECKLIST} DELETE_CHECKLIST`;

// redux
export const SET_CHECKLIST = `${CHECKLIST} SET_CHECKLIST`;
export const ADD_CHECKLIST = `${CHECKLIST} ADD_CHECKLIST`;
export const EDIT_CHECKLIST = `${CHECKLIST} EDIT_CHECKLIST`;
export const REM_CHECKLIST = `${CHECKLIST} REM_CHECKLIST`;

// ============================================================ //

// Command Creators
export const fetchChecklist = ({query}) => ({
    type: FETCH_CHECKLIST,
    payload: query
});

export const createChecklist = ({checklist}) => ({
    type: CREATE_CHECKLIST,
    payload: checklist
});

export const updateChecklist = ({checklist}) => ({
    type: UPDATE_CHECKLIST,
    payload: checklist
});

export const deleteChecklist = ({checklist}) => ({
    type: DELETE_CHECKLIST,
    payload: checklist
});


// ============================================================ //
// redux
export const setChecklists = ({checklists}) => ({
    type: SET_CHECKLIST,
    payload: checklists
});

export const addChecklist = ({checklist}) => ({
    type: ADD_CHECKLIST,
    payload: checklist
});

export const editChecklist = ({checklist}) => ({
    type: EDIT_CHECKLIST,
    payload: checklist
});

export const remChecklist = ({checklist}) => ({
    type: REM_CHECKLIST,
    payload: checklist
});