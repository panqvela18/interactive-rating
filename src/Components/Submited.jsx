import React from "react";
import photo from "../assets/illustration-thank-you.svg";

export default function Submited({ rating, setSubmit }) {
  return (
    <div className="w-screen h-screen bg-main-bg flex items-center justify-center px-6 ">
      <div className="p-8 bg-cont-bg rounded-2xl flex flex-col text-center w-327 sm:w-412 items-center">
        <div className="flex items-center justify-center">
          <img className="mb-4 w-36" src={photo} alt="illustration" />
        </div>
        <h3 className="text-orange py-5 px-5 w-168 bg-star-bg rounded-3xl border-none mb-4">
          You selected {rating} out of 5
        </h3>
        <h2 className="font-bold text-2xl text-white mb-2">Thank you!</h2>
        <p className="text-light-grey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        <button
          className="w-full bg-orange rounded-3xl py-2 mt-6 ease-out duration-300 text-white font-bold hover:bg-white hover:text-orange"
          onClick={() => setSubmit(false)}
        >
          Back To Home Page
        </button>
      </div>
    </div>
  );
}
