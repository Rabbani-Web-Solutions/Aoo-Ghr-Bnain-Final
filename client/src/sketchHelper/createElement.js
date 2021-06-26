import rough from 'roughjs/bundled/rough.esm';
import {wall, setWall} from "../sketch";

const generator = rough.generator();

export function createElement(id, x1, y1, x2, y2 , type , sWidth){
    const roughElement = type === "line"
        ? generator.line(x1,y1,x2,y2, { roughness: 0 , strokeWidth: wall})

        : type === "rectangle" ? generator.rectangle(x1, y1, x2-x1, y2-y1 , { roughness: 0 , strokeWidth: sWidth })

            : type === "ellipse" ? generator.ellipse(x1, y1, x2-x1, y2-y1 , { roughness: 0 , strokeWidth: sWidth})

                : type === "arcL" ? generator.arc(x1, y1, x2-x1, x2-x1 , Math.PI , Math.PI * 1.5, true ,  { roughness: 0 , strokeWidth: 3})

                    : type === "arcLB" ? generator.arc(x1, y1, x2-x1, x2-x1 , Math.PI * 2.5 , Math.PI * 3.0 , true ,  { roughness: 0 , strokeWidth: 3})

                        : type === "arcR" ? generator.arc(x1, y1, x2-x1, x2-x1 ,  Math.PI * 1.5 , Math.PI * 2.0, true ,  { roughness: 0 , strokeWidth: 3})

                            : type === "arcRB" ? generator.arc(x1, y1, x2-x1, x2-x1 , Math.PI * 2.0 , Math.PI * 2.5, true ,  { roughness: 0 , strokeWidth: 3})
                            
                                : type === "circle" ? generator.circle(x1, y1, x2-x1,   { roughness: 0 , strokeWidth: sWidth}) :

                                    "" ;


    return {id, x1, y1, x2, y2, type , roughElement};

}