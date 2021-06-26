import {distance} from "../sketch";

export const isWithinElement = (x,y, element) => {
    const {x1, y1, x2, y2, type} = element;
    if(type === "line" )
    {
        const a ={x : x1, y : y1};
        const b ={x : x2, y : y2}
        const c ={x,y}
        const offset = distance(a,b) - (distance(a,c) + distance(b,c));
        return Math.abs(offset)<1;

    }
    else if (type === "rectangle")
    {
        const minX = Math.min(x1,x2);
        const maxX = Math.max(x1,x2);
        const minY = Math.min(y1,y2);
        const maxy = Math.max(y1,y2);
        return x >= minX && x <= maxX && y <= maxy && y >= minY;
    }
    else if (type === "circle")
    {
        const minX = Math.min(x1,x2);
        const maxX = Math.max(x1,x2);
        const minY = Math.min(y1,y2);
        const maxy = Math.max(y1,y2);

        const radX = maxX + minX;
        const radY = maxy + minY;

        return x >= minX && x <= maxX && y <= maxy && y >= minY && radX && radY;
    }
    else if (type === "ellipse")
    {
        const minX = Math.min(x1,x2);
        const maxX = Math.max(x1,x2);
        const minY = Math.min(y1,y2);
        const maxy = Math.max(y1,y2);
        return x >= minX && x <= maxX && y <= maxy && y >= minY;

    }
    else if (type === "arcL")
    {
        const minX = Math.min(x1,x2);
        const maxX = Math.max(x1,x2);
        const minY = Math.min(y1,y2);
        const maxy = Math.max(y1,y2);
        return x >= minX && x <= maxX && y <= maxy && y >= minY;

    }
    else{
        const minX = Math.min(x1,x2);
        const maxX = Math.max(x1,x2);
        const minY = Math.min(y1,y2);
        const maxy = Math.max(y1,y2);
        return x >= minX && x <= maxX && y <= maxy && y >= minY;

    }

};