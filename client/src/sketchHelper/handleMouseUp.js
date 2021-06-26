import {setAction, setSelectedElement} from "../sketch";

export const handleMouseUp = () => {
    setSelectedElement(null);
    setAction("none");
};