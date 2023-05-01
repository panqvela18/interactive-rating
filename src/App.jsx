import Rating from "./Components/Rating";
import Submited from "./Components/Submited";
import { useState } from "react";

function App() {
  const [activeTab,setActiveTab] = useState({
    one:false,
    two:false,
    three:false,
    four:false,
    five:false,
})
const [submit,setSubmit] = useState(false)
const [rating,setRating] = useState(0)

 const handleClick = () =>{
  if(rating===0){
    return
  }
  setSubmit(true)
 }

  return (
    <>
    {
      submit ? <Submited rating={rating} setSubmit={setSubmit} /> : <Rating handleClick={handleClick} rating={rating} setRating={setRating}  activeTab={activeTab} setActiveTab={setActiveTab} />
    }
    
    
    </>
  );
}

export default App;
