import "./Header.styles.scss";

import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="common-header">
      <div className="common-header__container">
        <Link href="/">
          <Image
            src="/icons/mainLogo.svg"
            alt="wehe_main-logo"
            width="144"
            height="38"
          />
        </Link>
        <Button> 로그인 </Button>
      </div>
    </header>
  );
};
