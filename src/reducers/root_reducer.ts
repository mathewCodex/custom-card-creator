import { combineReducers } from 'redux';
import cardReducer from './card/card_reducer';

export default combineReducers({
    card: cardReducer
});