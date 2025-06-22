import React from "react";

import Logo from "../img/Logo_PunCafe.png"

const ProfileWebS = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#feae00] to-[#ff5900]">
      <div className="flex flex-col items-center text-center">
        <img 
          src={Logo}
          alt="PunCafe Logo"
          className=" drop-shadow-[7px_7px_3px_rgba(0,0,0,0.5)] w-full max-w-[300px]
                                                                md:max-w-[550px]
                                                                lg:w-[650px]
                                                                max-auto "
        />
     </div>
    </div>
  );
}

export default ProfileWebS;