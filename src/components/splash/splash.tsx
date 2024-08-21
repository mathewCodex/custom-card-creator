import React from "react";
import CardFormContainer from "../card_form/card_form_container";
import CardDisplay from "../card_display/card_display";
import ImageContent from "../Image_content/imagecontent";

const Splash: React.FC = () => (
  <div className="splash">
    <CardDisplay />
    <CardFormContainer />
    <ImageContent src={""} />
  </div>
);

export default Splash;
