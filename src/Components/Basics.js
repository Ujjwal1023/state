import React,{useState}from "react";


const Basics = () => {
  let [a,func1]=useState(200);
  

function increasex(){
    func1(a+1);

}
let b=10;
function increasey() {
    console.log(b);
}
    
    return (
        <div>
        <h1>{a}</h1>
       <button onClick={increasex}>increasex</button>
       <button onClick={increasey}>increasey</button>
        </div>
    )


}

export default Basics;


// let a =10;

// function increase(){
//     a=a+1;
//     console.log(a);