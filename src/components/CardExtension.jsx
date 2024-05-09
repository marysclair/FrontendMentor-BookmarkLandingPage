export default function CardExtension({ extensionInfo }) {
  return (
    <div className="flex flex-col items-center shadow-xl pt-12 pb-8 gap-3 rounded-lg">
      <img className="h-32 w-32" src={extensionInfo.imagePath} alt="" />
      <h3 className="font-semibold mt-4 text-2xl">{extensionInfo.title}</h3>
      <p class="text-lg text-slate-400 mb-4">{extensionInfo.paragraph}</p>
      <img src="bg-dots.svg" alt="" className="w-full" />
      <button className="bg-primary text-white font-medium py-4 w-4/5 rounded-md mt-4">
        Add & Install Extension
      </button>
    </div>
  );
}
