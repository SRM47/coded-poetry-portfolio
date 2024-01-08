import SectionTitle from "./sectionTitle";
import { useState } from "react";
import poems from "../poems";

function PoemCycler() {
  const [activePoemIndex, setActivePoemIndex] = useState(0);

  const handleHeaderClick = (index) => {
    setActivePoemIndex(index);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        {poems.map((poem, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleHeaderClick(index)}
          >
            <h3
              className={`text-xl font-bold ${
                index === activePoemIndex ? "text-blue-500" : "text-gray-600"
              }`}
            >
              {poem.title}
            </h3>
            {index === activePoemIndex && (
              <p className="my-2 prose">{poem.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Poems() {
  return (
    <div>
      <SectionTitle title="Poems" />
      <PoemCycler />
    </div>
  );
}

export default Poems;
