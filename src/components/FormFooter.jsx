export default function FormFooter() {
  return (
    <div className="bg-primary py-20">
      <div className="mx-auto w-[22%] text-white text-center ">
        <h6 className="uppercase font-light tracking-widest mb-6">
          35.000 + already joined
        </h6>
        <h5 className="font-medium text-3xl">
          Stay up-to-date with what we're doing
        </h5>
        <div className="flex justify-between mt-12">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-lg placeholder-slate-400 px-4 py-3 w-[62%]  border-[3px] border-white invalid:border-red-500 text-slate-800"
          />
          <button className="bg-red-400 rounded-lg text-lg text-white px-4 py-3 border-[3px] hover:bg-white hover:text-red-400 border-red-400 font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
