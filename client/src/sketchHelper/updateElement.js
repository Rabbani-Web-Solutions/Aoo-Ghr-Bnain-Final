import {elements, setElements , canvWidth , canvHeight , setError} from "../sketch";
import {createElement} from "./createElement";

export const updateElement = (id, x1 , y1 , x2 , y2 , element , sWidth) => {

    if(x2 < 0 || y2 < 0 || x1 < 0 || y1 < 0 || x2 > canvWidth || y2 > canvHeight) 
    {
        setError(true)
       }

    
    else
    {
    const updatedElement = createElement(id, x1 , y1 , x2 , y2 , element , sWidth);
    const elementsCopy = [...elements];
    elementsCopy[id] = updatedElement;
    setElements(elementsCopy);
    setError(false)
    }
};