import React from 'react'
import style from "./MainButton.module.css"
function MainButton(props) {
    const {text="Click me", color, radius, size}=props;
    const getColor = () => {
        switch(color){
            case "dark":
                return style.main;
            case "red":
                return style.red;
            case "yellow":
                return style.yellow;
            case "white":
                return style.white;
            default: return style.main
        }
    }
    const getRadius = () => {
        switch(radius){
            case "xs":
                return style.radiusxs;
            case "sm":
                return style.radiussm;
            case "md":
                return style.radiusmd;
            case "lg":
                return style.radiuslg;
            default: return style.radiusxs
        }
    }

    const getSize = () => {
        switch(size){
            case "xs":
                return style.sizexs;
            case "sm":
                return style.sizesm;
            case "md":
                return style.sizemd;
            case "lg":
                return style.sizelg;
            default: return style.sizexs
        }
    }



  return (
    <button className={`${getColor()} ${getRadius()} " " ${getSize()}`}  >{text}</button>
  )
}

export default MainButton