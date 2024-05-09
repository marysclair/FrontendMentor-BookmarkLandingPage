import NavButton from "./NavButton";

export default function Nav() {
  return (
    <div className="py-12 flex items-center justify-between">
      <img src="/logo-bookmark.svg" alt="" />
      <div className="flex items-center gap-16">
        <NavButton text="Features" />
        <NavButton text="Pricing" />
        <NavButton text="Contact" />
        <NavButton text="Login" />
      </div>
    </div>
  );
}
