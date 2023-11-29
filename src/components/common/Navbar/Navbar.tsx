"use client";

import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const handleOpenLoginModal = () => {
    console.log("Open Modal");
  };

  return (
    <div className="w-full h-full max-w-[962px] flex justify-between items-center">
      <Link href="/">
        <Image
          src="/icons/mainLogo.svg"
          alt="wehe_main-logo"
          width="144"
          height="38"
        />
      </Link>
      <Button onClick={handleOpenLoginModal}> 로그인 </Button>
    </div>
  );
}
