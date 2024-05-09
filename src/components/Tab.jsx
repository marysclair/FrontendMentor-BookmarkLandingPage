export default function Tab({ setTabInfo, tabInfo }) {
  const tabInfo1 = {
    name: "Simple Bookmarking",
    title: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-dand-drop interface gives you complete control over how you manage your favourite sites.",
    imagePath: "/illustration-features-tab-1.svg",
  };
  const tabInfo2 = {
    name: "Speedy Searching",
    title: "Intelligente search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imagePath: "/illustration-features-tab-2.svg",
    class: "ml-16 h-[60%]",
  };
  const tabInfo3 = {
    name: "Easy Sharing",
    title: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imagePath: "/illustration-features-tab-3.svg",
    class: "ml-16 h-[60%]",
  };
  return (
    <div className="mx-auto w-3/5 flex text-lg border-b-[3px] mt-12 border-b-slate-200">
      <button
        className={`text-slate-600 font-medium hover:text-red-400 py-4 px-10 w-2/6 ${
          tabInfo.name === "Simple Bookmarking" &&
          "border-b-[3px] border-b-red-500 -mb-[3px]"
        }`}
        onClick={() => setTabInfo(tabInfo1)}
      >
        Simple Bookmarking
      </button>
      <button
        className={`text-slate-600 font-medium hover:text-red-400 py-4 px-10 w-2/6 ${
          tabInfo.name === "Speedy Searching" &&
          "border-b-[3px] border-b-red-500 -mb-[3px]"
        }`}
        onClick={() => setTabInfo(tabInfo2)}
      >
        Speedy Searching
      </button>
      <button
        className={`text-slate-600 font-medium hover:text-red-400 py-4 px-10 w-2/6 ${
          tabInfo.name === "Easy Sharing" &&
          "border-b-[3px] border-b-red-500 -mb-[3px]"
        }`}
        onClick={() => setTabInfo(tabInfo3)}
      >
        Easy Sharing
      </button>
    </div>
  );
}
