import { connect } from "react-redux";

import { changeName } from "../../actions/name_actions";

import { changeDescription } from "../../actions/description_actions";

import { changeTribe } from "../../actions/tribe_actions";

import { resetCard } from "../../actions/card_actions";
import { CardState } from "../../reducers/card/card_reducer";
import CardForm from "./card_form";

interface RootState {
  card: CardState;
}

export interface Props {
  card: CardState;

  changeName: typeof changeName;

  changeDescription: typeof changeDescription;

  changeTribe: typeof changeTribe;

  resetCard: typeof resetCard;
}

const mapStateToProps = ({ card }: RootState) => ({
  card,
});

const mapDispatchToProps = {
  changeName,

  changeTribe,
  changeDescription,

  resetCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
