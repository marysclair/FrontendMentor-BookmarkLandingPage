import { useState } from "react";
import Tab from "./Tab";

export default function TabSection() {
  const [tabInfo, setTabInfo] = useState({
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-dand-drop interface gives you complete control over how you manage your favourite sites.",
    imagePath: "/illustration-features-tab-1.svg",
  });

  function changeTabInfo(newTabInfo) {
    console.log(newTabInfo);
    setTabInfo(newTabInfo);
  }
  return (
    <>
      <Tab tabInfo={tabInfo} setTabInfo={changeTabInfo} client:visible />
      <div className="flex justify-center gap-36 mt-20">
        <div className="w-[55%]">
          <img
            className={`absolute z-10 w-[35%] ${tabInfo.class}`}
            src={tabInfo.imagePath}
            width="700"
            alt=""
          />
          <div className="absolute h-[50%] w-[50%] bg-primary rounded-r-full mt-28 right-[56%]"></div>
        </div>
        <div className="w-[45%] pt-20">
          <h2 className="text-4xl font-semibold mb-6">{tabInfo.title}</h2>
          <p className="text-lg text-slate-400">{tabInfo.paragraph}</p>
          <button className="bg-primary text-white py-3 px-8 rounded-lg shadow-md mt-8">
            More info
          </button>
        </div>
      </div>
    </>
  );
}
