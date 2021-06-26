import {    mouse ,
            myArr ,
            setMyArr , 
            elements , 
            setElements ,
            getElementAtPosition , 
            setAction , 
            selectedElement,
            setSelectedElement, 
            tool } 
        
            from "../sketch";


import {createElement} from "./createElement";

export const handleMouseDown = (event) => {
    // const { clientX , clientY} = event;
    if (tool === "selection") {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;

            setSelectedElement({...element,offsetX,offsetY});
            setAction("moving");
        }

    }
    else if(tool === "eraser")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});
            setAction("eraser");
        }
    }

    else if(tool === "text")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});
            setAction("text");
        }
    }
    else if(tool === "resize")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});
            setAction("resize");
        }
    }

    else if(tool === "sizes")
    {
        const element = getElementAtPosition(mouse.x, mouse.y, elements);
        if(element)
        {
            const offsetX = mouse.x - element.x1 ;
            const offsetY = mouse.y - element.y1 ;
            setSelectedElement({...element,offsetX,offsetY});

            setAction("sizes")
        }
    }

    else {
        setAction("drawing");
        // const {clientX, clientY} = event;
        const id = elements.length;
        const element =  createElement(id, mouse.x, mouse.y, mouse.x, mouse.y, tool);
        setElements(prevState => [...prevState, element]);


    }
};