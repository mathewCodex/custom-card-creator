export const CHANGE_NAME = 'CHANGE_NAME';
export const RESET_NAME = 'RESET_NAME';

interface ChangeNameAction {
    type: typeof CHANGE_NAME,
    payload: string
};

interface ResetNameAction {
    type:  typeof RESET_NAME
};

export type NameActionTypes = ChangeNameAction | ResetNameAction;

export const changeName = (name: string) : NameActionTypes => ({
    type: CHANGE_NAME,
    payload: name
});

export const resetName = () : NameActionTypes => ({
    type: RESET_NAME
});