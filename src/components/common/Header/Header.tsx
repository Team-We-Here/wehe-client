import "./Header.styles.scss";

import Image from "next/image";

export const Header = () => {
  return (
    <header className="common-header">
      <div className="common-header__container">
        <Image
          src="/icons/mainLogo.svg"
          alt="wehe_main-logo"
          width="144"
          height="38"
        />
      </div>
    </header>
  );
};
