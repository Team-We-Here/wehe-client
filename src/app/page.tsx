import MainBanner from "@/components/main/Banner/MainBanner";
import PopularProject from "@/components/main/Popular/PopularProject";

const getProjectLists = async () => {
  const response = await fetch(
    "https://port-0-wehe-k19y2kljve3tgo.sel4.cloudtype.app/api/v1/post?page=0",
    {
      next: {
        revalidate: 300,
      },
    }
  );
  return response.json();
};

export default async function Home() {
  const projectData = await getProjectLists();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainBanner />
      <PopularProject projectData={projectData} />
    </main>
  );
}
