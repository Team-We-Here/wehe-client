import MainBanner from "@/components/main/Banner/MainBanner";
import PopularProject from "@/components/main/Popular/PopularProject";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainBanner />
      <PopularProject />
    </main>
  );
}
