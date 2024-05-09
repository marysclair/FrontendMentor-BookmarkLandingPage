export default function NavButton({ text }) {
  return (
    <button
      className={`uppercase font-medium  ${
        text === "Login"
          ? "bg-red-400 text-white px-10 py-2 rounded-lg shadow-md border-[3px] border-red-400 hover:text-red-400 hover:bg-white"
          : "hover:text-red-400"
      }`}
    >
      {text}
    </button>
  );
}
