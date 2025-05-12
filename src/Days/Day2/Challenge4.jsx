import { useRef, useState } from "react";
import useAnimation from "./useAnimation";

export default function Challenge4() {
  const [play, setPlay] = useState(false);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useAnimation(play, box1, box2, box3);

  function handlePlay() {
    setPlay((prev) => !prev);
  }

  return (
    <>
      <div className="flex justify-center items-center h-[600px] gap-4">
        <div className="w-14 h-14 bg-blue-700" ref={box1} />
        <div className="w-14 h-14 bg-green-700" ref={box2} />
        <div className="w-14 h-14 bg-orange-700" ref={box3} />
      </div>
      <div className="text-center text-white">
        {play ? (
          <button
            className="p-3 rounded-md font-semibold bg-red-600 shadow-lg"
            onClick={handlePlay}
          >
            Reset
          </button>
        ) : (
          <button
            className="p-3 rounded-md font-semibold bg-green-600 shadow-lg"
            onClick={handlePlay}
          >
            Play
          </button>
        )}
      </div>
    </>
  );
}
