export default function HeroButton({ text }) {
  return (
    <button className="text-gray-600 border-[3px] border-gray-600 text-lg font-medium px-6 py-2 rounded-lg hover:border-primary hover:text-primary shadow">
      {text}
    </button>
  );
}
