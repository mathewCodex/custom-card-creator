export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const RESET_DESCRIPTION = 'RESET_DESCRIPTION';

interface ChangeDescriptionAction {
    type: typeof CHANGE_DESCRIPTION,
    payload: string
};

interface ResetDescriptionAction {
    type:  typeof RESET_DESCRIPTION
};

export type DescriptionActionTypes = ChangeDescriptionAction | ResetDescriptionAction;

export const changeDescription = (description: string) : DescriptionActionTypes => ({
    type: CHANGE_DESCRIPTION,
    payload: description
});

export const resetDescription = () : DescriptionActionTypes => ({
    type: RESET_DESCRIPTION
});