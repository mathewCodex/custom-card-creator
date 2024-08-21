import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Textarea from "../ui/textarea";
import { Props } from "./card_form_container";

const CardForm: React.FC<Props> = ({
  card,

  changeName,

  changeDescription,

  changeTribe,

  resetCard,
}) => {
  return (
    <div className="card-form">
      <div className="card-form-body">
        <div className="text-inputs">
          <div className="small-inputs">
            <Input
              label={"Name"}
              value={card.name}
              onChange={(e) => changeName(e.target.value)}
            />
            <Input
              label={"whats on your mind..."}
              value={card.tribe}
              onChange={(e) => changeTribe(e.target.value)}
            />
          </div>
          <Textarea
            label={"Description"}
            value={card.description}
            onChange={(e) => changeDescription(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={resetCard}>Reset</Button>
    </div>
  );
};

export default CardForm;
