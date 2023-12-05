import React, { useState } from "react";
import Data from "./data";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Review = () => {
  const [count, setCount] = useState(0);

  const { id, name, job, image, text } = Data[count];

  const checkNumber = (number) => {
    if (number < 0) {
      return Data.length - 1;
    }
    if (number > Data.length - 1) {
      return 0;
    } else {
      return number;
    }
  };

  const prevItem = () => {
    setCount((count) => {
      let item = count - 1;
      return checkNumber(item);
    });
  };
  const nextItem = () => {
    setCount((count) => {
      let item = count + 1;
      return checkNumber(item);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * Data.length);
    console.log(randomNumber);
    if (randomNumber === count) {
      randomNumber = randomNumber + 1;
    }
    setCount(checkNumber(randomNumber));
  };

  return (
    <section
      key={id}
      className=" hover:shadow-2xl max-w-2xl p-10  text-center  "
    >
      <div>
        <img
          src={image}
          alt={name}
          className="w-64 h-64 mx-auto  rounded-full object-cover "
        />
      </div>
      <footer>
        <div className="">
          <h1 className="text-4xl capitalize ">{name}</h1>
          <h3 className="text-xl capitalize text-sky-500 mb-2">{job}</h3>
        </div>
        <p>{text}</p>
        <div className="flex items-center justify-center mt-2">
          <button
            className="text-sky-500 mr-4 text-lg p-1 hover:border border-black"
            onClick={prevItem}
          >
            <SlArrowLeft />
          </button>
          <button
            className="text-sky-500 ml-4 text-lg p-1 hover:border border-black"
            onClick={nextItem}
          >
            <SlArrowRight />
          </button>
        </div>
        <button
          onClick={randomPerson}
          className="bg-sky-500 text-lg p-2 capitalize rounded-lg mt-3 hover:bg-sky-700"
        >
          random
        </button>
      </footer>
    </section>
  );
};
export default Review;
