import Link from "next/link";
import React from "react";
import LogoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Image from "next/image";

const DesignStudioLogo = () => {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/drift-code"}>
          <Image
            priority
            style={{ width: "100%", height: "100%",objectFit:"contain" }}
            src={LogoWhite2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
};

export default DesignStudioLogo;
