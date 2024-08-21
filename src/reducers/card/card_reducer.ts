import { CHANGE_NAME, NameActionTypes } from "../../actions/name_actions";
import {
  CHANGE_DESCRIPTION,
  DescriptionActionTypes,
} from "../../actions/description_actions";
import { CHANGE_TRIBE, TribeActionTypes } from "../../actions/tribe_actions";

import {
  UPLOAD_IMAGE,
  UploadImageActionTypes,
} from "../../actions/upload_image_actions";
import { RESET_CARD, ResetCardAction } from "../../actions/card_actions";

export interface CardState {
  name: string;

  description: string;

  tribe: string;

  imageURL: string | ArrayBuffer | null;
  cardType: string;
  cardRarity: string;
  spellType: string;
}

type CardActionTypes =
  | NameActionTypes
  | DescriptionActionTypes
  | TribeActionTypes
  | UploadImageActionTypes
  | ResetCardAction;

const initialState: CardState = {
  name: "",

  description: "",

  tribe: "",

  imageURL: "",
  cardType: "follower",
  cardRarity: "uncollectable",
  spellType: "burst",
};

export default (
  state: CardState = initialState,
  action: CardActionTypes
): CardState => {
  Object.freeze(state);
  switch (action.type) {
    case CHANGE_NAME:
      return Object.assign({}, state, { name: action.payload });

    case CHANGE_DESCRIPTION:
      return Object.assign({}, state, { description: action.payload });

    case CHANGE_TRIBE:
      return Object.assign({}, state, { tribe: action.payload });

    case UPLOAD_IMAGE:
      return Object.assign({}, state, { imageURL: action.payload });
    case RESET_CARD:
      return initialState;
    default:
      return state;
  }
};
