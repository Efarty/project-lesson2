import Option from "./option";
import React,{useState} from "react";
import ToFirst from "./toFirst";

function App() {
  const [show,setShow]=useState(true);

  const Option=()=>{
    setShow(false);
  }
  return (
    <div>
   <h1>hi  </h1>
   { show && <ToFirst AAA={Option} txt="Hi I am efrat and I am genius"/>}
    </div>
  );
}

export default App;
