import star from "../assets/icon-star.svg";
import Button from "./Button";

export default function Rating({
  activeTab,
  setActiveTab,
  handleClick,
  setRating,
}) {
  return (
    <>
      <div className="w-screen h-screen bg-main-bg flex items-center justify-center px-6 lg:px-514">
        <div className="p-8 bg-cont-bg rounded-2xl   ">
          <div className="bg-star-bg w-10 h-10 flex items-center justify-center rounded-full mb-2.5">
            <img src={star} alt="star" />
          </div>
          <h2 className="text-white font-bold text-2xl mb-1.5">
            How did we do?
          </h2>
          <p className="text-light-grey font-medium text-sm mb-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between">
            <Button
              number="1"
              setActiveTab={setActiveTab}
              objBoolean={{one:true}}
              setRating={setRating}
              activeTab={activeTab.one}
            />
            <Button
              number="2"
              setActiveTab={setActiveTab}
              objBoolean={{two:true}}
              setRating={setRating}
              activeTab={activeTab.two}
            />
            <Button
              number="3"
              setActiveTab={setActiveTab}
              objBoolean={{three:true}}
              setRating={setRating}
              activeTab={activeTab.three}
            />
            <Button
              number="4"
              setActiveTab={setActiveTab}
              objBoolean={{four:true}}
              setRating={setRating}
              activeTab={activeTab.four}
            />
            <Button
              number="5"
              setActiveTab={setActiveTab}
              objBoolean={{five:true}}
              setRating={setRating}
              activeTab={activeTab.five}
            />
            
          </div>
          <button
            onClick={() => handleClick()}
            className="w-full bg-orange rounded-3xl py-2 mt-6 ease-out duration-300 text-white font-bold hover:bg-white hover:text-orange"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
