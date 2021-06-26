import {action, 
        setAction ,
        elements, 
        getElementAtPosition, 
        mouse, 
        selectedElement, 
        tool,
        setElementWidth , 
        setElementLength ,
        wall,
        setElementStrokeWidth } from "../sketch";
import {updateElement} from "./updateElement";

export const handleMouseMove = (event) => {
    // const {clientX, clientY} = event;

    let bounds = event.target.getBoundingClientRect();
    mouse.x = event.pageX - bounds.left - window.scrollX;  // is window.scrollX same for Y
    mouse.y = event.pageY - bounds.top - window.scrollY;

    if(tool === "selection")
    {
        event.target.style.cursor = getElementAtPosition(mouse.x, mouse.y, elements)
            ? "move" : "default";
    }

    if(tool === "text")
    {
        event.target.style.cursor = getElementAtPosition(mouse.x, mouse.y, elements)
            ? "text" : "default";
    }

    if(tool === "eraser")
    {
        event.target.style.cursor = getElementAtPosition(mouse.x, mouse.y, elements)
            ? "move" : "default";
    }
    if(tool === "resize")
    {
        event.target.style.cursor = getElementAtPosition(mouse.x, mouse.y, elements)
            ? "resize" : "default";
    }
    // if(tool === "rectangle" || tool ==="circle" || tool ==="wall" || tool ==="arcL" ||
    //     tool ==="arcR" || tool ==="ellipse"){
    //
    //     event.target.style.cursor = getCvsAtPosition(canvas.getBoundingClientRect().width , canvas.getBoundingClientRect().height, elements)
    //         ? "crosshair" : "default";
    // }

    if(action === "drawing") {
        const index = elements.length - 1;
        const {x1,y1} = elements[index];
        const sWidth = wall
        updateElement(index, x1 , y1 , mouse.x, mouse.y , tool , sWidth);

    }
    else if (action === "moving")
    {
        const {id , x1, x2, y1, y2 , type , offsetX, offsetY} = selectedElement;
        const sWidth = selectedElement.roughElement.options.strokeWidth
        const width = x2-x1;
        const height = y2-y1;
        const nexX1 = mouse.x- offsetX;
        const nexY1 = mouse.y - offsetY;

        // type.scale(mouse.x , mouse.y);

        updateElement(id, nexX1, nexY1, nexX1 + width, nexY1 + height, type , sWidth);
        
    }
    else if (action === "eraser")
    {
        const {id , x1, x2, y1, y2 , type , offsetX, offsetY} = selectedElement;
        const width = x2-x1;
        const height = y2-y1;
        const nexX1 = mouse.x- offsetX;
        const nexY1 = mouse.y - offsetY;

        // type.scale(mouse.x , mouse.y);

        updateElement(id, nexX1, nexY1, nexX1 + width, nexY1 + height, null);
    }

    else if (action === "resize")
    {
        const {id , x1, x2, y1, y2 , type , offsetX, offsetY} = selectedElement;
        const sWidth = selectedElement.roughElement.options.strokeWidth
        const width = x2-x1;
        const height = y2-y1;
        const nexX1 = mouse.x- offsetX;
        const nexY1 = mouse.y - offsetY;

        alert("Your previous Width was " + width / 15.36)

        alert("Your previous length was " + height / 15.36)
        
        alert("Please Note that this will be your Internal Dimensions. We will minus walls area automatically. Thanks For your inconvenience !!!")

        const newx1 = prompt("Your previous x-axis was " + x1 + " Enter x-axis ")
        // const newx2 = prompt("Your previous width was " + x2 + " Enter x2 ")
        let newWidth = prompt("Your previous width was " + width / 15.36 + "Feet. Enter new Width in feet ")
        newWidth = newWidth * 15.45
        // newWidth = newWidth - newx1
        
        const newy1 = prompt("Your previous y-axis was " + y1 + " Enter y-axis ")
        // const newy2 = prompt("Your previous y2 was " + y2 + " Enter y2 ")
        let newHeight = prompt("Your previous height was " + height / 15.36 + "Feet. Enter new height in feet ")
        newHeight = newHeight * 15.45
        // newHeight = newHeight - newy1
       
        // type.scale(mouse.x , mouse.y);

        if(newx1 && newWidth && newy1 && newHeight)
        {
        // updateElement(id, newx1, newy1, newx2, newy2, type, sWidth);
        updateElement(id, newx1, newy1, newWidth , newHeight, type, sWidth);

        }
        else{
            updateElement(id, nexX1, nexY1, nexX1 + width, nexY1 + height, type, sWidth);
        }
        setAction("selection")

        alert("Now Consider clicking on selection tool and then the line which is shown to draw your re - factor sketch and think to move your cursor slightly")
    }

    else if (action === "sizes")
    {
        const {id , x1, x2, y1, y2 , type , offsetX, offsetY, strokeWidth} = selectedElement;
        const width = x2-x1;
        const height = y2-y1;
        const nexX1 = mouse.x- offsetX;
        const nexY1 = mouse.y - offsetY;

        // type.scale(mouse.x , mouse.y);

        setElementWidth(width);
        setElementLength(height); 
        
        // console.log(selectedElement)
        setElementStrokeWidth(selectedElement.roughElement.options.strokeWidth)
    }

};