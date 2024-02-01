import Category from "@/components/Category";
import Header from "@/components/Header";
import Setting from "@/components/Setting";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[40px] flex gap-4">
      <Sidebar />
      <div className="w-full ">
        <Header />
        <div className="flex flex-wrap">
          <div className="w-[429px]">
            <Category />
          </div>
          <div className="w-[330px]">
            <Setting />
          </div>
        </div>
      </div>
    </main>
  );
}
