export const CHANGE_TRIBE = 'CHANGE_TRIBE';

interface ChangeTribeAction {
    type: typeof CHANGE_TRIBE,
    payload: string
};

export type TribeActionTypes = ChangeTribeAction;

export const changeTribe = (tribe: string) : TribeActionTypes => ({
    type: CHANGE_TRIBE,
    payload: tribe
});