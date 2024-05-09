import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQBlock({ text }) {
  const [textIsVisible, setTextIsVisible] = useState(false);
  return (
    <div
      onClick={() => {
        setTextIsVisible(!textIsVisible);
      }}
      className="cursor-pointer group"
    >
      <div className="py-6 flex justify-between">
        <h4 className="font-medium text-xl group-hover:text-red-400">{text}</h4>
        {textIsVisible ? (
          <ChevronUp className="mr-4" size={32} color="#ef4444" />
        ) : (
          <ChevronDown className="mr-4 " size={32} color="#5368DF" />
        )}
      </div>
      {textIsVisible && (
        <p className="text-lg text-slate-500 mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iure
          qui vitae alias quis enim quisquam deserunt dignissimos rerum nihil
          voluptate a eligendi, nam beatae eaque! Laboriosam itaque qui esse
          doloremque accusamus veritatis! Quasi itaque nisi perferendis amet,
          unde maiores, adipisci et placeat ducimus, expedita consequatur veniam
          dicta dolorum qui?
        </p>
      )}
    </div>
  );
}
