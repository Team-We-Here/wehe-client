"use client";

import "./Project.styles.scss";

import Image from "next/image";

export default function Project({ data }: any) {
  return (
    <div className="project-container">
      <div className="project__content-container">
        <div className="content__name-wrapper">
          <div className="name-box">
            <Image
              src="https://picsum.photos/200/200"
              width={20}
              height={20}
              alt="이미지"
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span className="name-box__text">
              {data.authorNickname ?? "닉네임"}
            </span>
          </div>
          <span className="deadline-text"> {`마감일 ${data.deadline}`} </span>
        </div>
      </div>
    </div>
  );
}
