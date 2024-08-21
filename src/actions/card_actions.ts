export const RESET_CARD = 'RESET_CARD';

export interface ResetCardAction {
    type:  typeof RESET_CARD
};

export const resetCard = () : ResetCardAction => ({
    type: RESET_CARD
});