import Image from "next/image";

export default function PopularProject() {
  return (
    <div className="w-full max-w-[962px] flex-col items-center gap-[5px] pt-[14px]">
      <div className="flex items-center">
        <Image
          src="/icons/popularIcon.svg"
          alt="popular_icon"
          width="36"
          height="36"
        />
        <h3 className="m-0 p-[10px] text-[20px]"> 인기 프로젝트 </h3>
      </div>
    </div>
  );
}
