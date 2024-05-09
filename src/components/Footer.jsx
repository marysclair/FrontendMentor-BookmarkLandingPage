export default function Footer() {
  return (
    <div className="bg-blue-950 w-full">
      <div className="px-[12%] py-12 flex items-center justify-between">
        <div className="flex items-center gap-16">
          <img src="/logo-bookmark.svg" alt="" />
          <div className="flex items-center gap-12 text-slate-100 font-light uppercase text-sm">
            <h4>Features</h4>
            <h4>Pricing</h4>
            <h4>Contact</h4>
          </div>
        </div>
        <div className="flex gap-12 items-center">
          <img src="/icon-facebook.svg" alt="" />
          <img src="/icon-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
