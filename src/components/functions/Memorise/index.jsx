import React, { useEffect, useState, useCallback, memo, useMemo} from "react";

// const Memorise = (props) => {
//   const [text, setText] = useState(1);
//   const change = useCallback((e) => { 
//     setText(e.target.value)
//     },[])


//   return (
//     <div>
//       <p>{text}</p>
//       <MyInput onChange={change}/>
//       <MyInput onChange={change}/>
//       <MyInput onChange={change}/>
//       <MyText/>
//     </div>
//   );
// };


// const Memorise = (props) => {
//     const [text, setText] = useState(1);
//     const click= useCallback((e) => { 
//       console.log("nesto");
//       },[])
 
//     useEffect(()=>{
//         click()
//     },[click])
  
//     return (
//       <div>
//         <p onClick={()=>{setText(text+1)}}>{text}</p>
//         <MyText/>
//       </div>
//     );
// };

// const Memorise = (props) => {
//     const [text, setText] = useState(1);
//     const change = useCallback((e) => { 
//       setText(e.target.innerText)
//       },[])
  
  
//     return (
//       <div>
//         <p>{text}</p>
//         <List onClick={change}/>
//       </div>
//     );
// };

const Memorise = (props) => {
    const [text, setText] = useState(1);
    
    const array = useMemo(()=>{return [{id:"neto"},{id:"dsf"},{id:"psd"}]},[]);

    const computedArray = useMemo(
        ()=>{array.filter((item)=>{
            return item.id.includes("s")
        })},[]) 
  
    return (
      <div>
        <p onClick={()=>{setText(text+1)}}>{text}</p>
        {array.map((item)=>{
            return <p id={item.id}>{item.id}</p>
        })}
      </div>
    );
};
  


const MyInput = React.memo((props) => {
  return <div>
    <span>Nesto</span>
    <input type="text" onChange={props.onChange}/>
  </div>;
});
const MyText = memo((props) => {
    return <p>Nesto</p>
})

const List = React.memo(
    (props) => {
        return [1,2,3,4].map((item)=>{
            return <div>
                    <span>{item}</span>
                    <button onClick={props.onClick}>{item}</button>
                </div>
        })
    }
) 

export default Memorise;