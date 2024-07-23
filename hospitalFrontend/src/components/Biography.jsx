import React from "react";

const Biography = ({ image }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={image} alt="img" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h2>Hospital Management Biography</h2>
        <p>
          We are leaders in hospital management, combining advanced technology
          with compassionate care. Our journey started with a goal to improve
          healthcare, focusing on patients and efficiency.
        </p>
        <p>
          We innovate to provide better patient experiences and improve
          healthcare outcomes. Collaboration and continuous improvement are core
          to our approach, empowering our teams to deliver exceptional care.
        </p>
        <p>
          We prioritize quality and safety, setting high standards in healthcare
          management. Our commitment drives us to excel and make a positive
          impact on healthcare globally.
        </p>
        <p>
          We are dedicated to transforming healthcare delivery worldwide, driven
          by passion and a commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default Biography;
