"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const imgData = [
  //   {
  //     id: 121,
  //     url: "https://images.unsplash.com/photo-1668972022223-8aba817ce671?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  //   },
  //   {
  //     id: 122,
  //     url: "https://images.unsplash.com/photo-1704242472249-948e3d1fb9b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  //   },
  //   {
  //     id: 123,
  //     url: "https://images.unsplash.com/photo-1704137479004-33fc72950bd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  //   },
  //   {
  //     id: 124,
  //     url: "https://images.unsplash.com/photo-1703762855767-d3a8d554b72e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  //   },
  //   {
  //     id: 125,
  //     url: "https://images.unsplash.com/photo-1704213863605-058e647a0598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  //   },
  // ];

  const imgData = [
    "https://images.unsplash.com/photo-1668972022223-8aba817ce671?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",

    "https://images.unsplash.com/photo-1704242472249-948e3d1fb9b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",

    "https://images.unsplash.com/photo-1704137479004-33fc72950bd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",

    "https://images.unsplash.com/photo-1703762855767-d3a8d554b72e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",

    "https://images.unsplash.com/photo-1704213863605-058e647a0598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === imgData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? imgData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => {
      clearTimeout(autoSlide);
    };
  }, [currentIndex]);

  return (
    <div className="flex flex-col justify-center items-center w-full my-6 ">
      <h1 className="mb-10 text-xl font-bold">Hello Image slider</h1>
      <div className="flex gap-4 ">
        <button className="font-semibold" onClick={handlePrev}>
          Prev
        </button>
        <img
          src={imgData[currentIndex]}
          alt="nature"
          className="w-[300px] h-[300px] object-cover object-center"
        />
        <button className="font-semibold" onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  );
}
