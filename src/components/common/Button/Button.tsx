"use client";

import type { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"button"> & {
  children: React.ReactNode;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="px-[20px] py-[10px] box-border bg-[#21827c] text-white rounded-[5px] cursor-pointer leading-[20px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
