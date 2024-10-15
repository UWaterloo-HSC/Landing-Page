import React from "react";
import { logo } from "../../assets/index";

const Coming = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Center the text, make it bold and larger */}
      <div className="text-4xl font-bold text-center text-lightText mb-8">
        Coming Soon ...
      </div>
      {/* Center the image, make it circular and nicely sized */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[20rem] h-[20rem] object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Coming;
