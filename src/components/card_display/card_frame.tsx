import React from "react";

import frame_image from "../../assets/card_frames/follower/uncollectable.png";

interface Props {
  cardType: string;
  cardRarity: string;
  spellType: string;
}

const getSource = (cardType: string, cardRarity: string): string => {
  const combined = cardType + "_" + cardRarity;
  switch (combined) {
    case "follower_uncollectable":
      return frame_image;

    default:
      return "";
  }
};

const CardFrame: React.FC<Props> = ({ cardType, cardRarity, spellType }) => {
  const source: string =
    cardType === "spell"
      ? getSource(spellType, cardRarity)
      : getSource(cardType, cardRarity);

  return <img src={source} className="card-frame" alt="card-frame" />;
};

export default CardFrame;
