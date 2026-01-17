import React from "react";
import landingbg from "../Image/valentine.webp";

const LandigImg = () => {
  return (
    <div
      className="w-full relative"  style={{ minHeight: "calc(100vh - 170px)" }} >
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-cover"
        style={{ backgroundImage: `url(${landingbg})`}}>

        </div>
    </div>
  );
};

export default LandigImg;
