import React from "react";
import landingbg from "../Image/valentine.webp";
import mobileval from "../Image/mobilevalentine.webp";

const LandigImg = () => {
  return (
    <div className="w-full flex" style={{ minHeight: "calc(100vh - 170px)" }}>
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileval} />
        <img
          src={landingbg}
          alt="Landing background"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};

export default LandigImg;
