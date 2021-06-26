import {saveAs} from 'file-saver';
import {saveLayer} from '../sketch';
import {myVar} from '../sketch'
import { jsPDF } from "jspdf";
import {marla , totalLayer} from "../sketch"

import {canvWidth , canvHeight} from "../sketch"

import rough from 'roughjs/bundled/rough.esm';
import 'jspdf-autotable'
import foundation from "../img/1.jpg";



export function HandleSave() {

    saveLayer();

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext('2d');

    const canvas2 = document.getElementById("canvas2");
    const ctx  = canvas2.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "black";
    ctx.font = "bold 16px Arial";
    ctx.fillText("Aoo Ghr Bnain" , (canvas2.width / 2) - 17, (canvas2.height / 2) + 8);

    // canvas.toBlob(function (blob) {
    //     saveAs(blob, "pretty image.png")

    // });

    console.log(myVar.length)

    
    var doc = new jsPDF('l', 'mm', [420, 297]);

    var title = prompt("House Plot No.").toString()
    var title1 = prompt("Khasr No.").toString()
    var title2 = prompt("Khewat No.").toString()
    var title3 = prompt("Khatoni No.").toString()
    var title4 = prompt("Town").toString()
    var title5 = prompt("Address").toString()
    var title6 = prompt("Owner").toString()
    var title7 = prompt("S/O or D/O or W/O").toString()
    
    var north = prompt("North... Only Enter U for upper, L for lower, R for right, Le for left").toString()
    
    var title8 = "Scale : 1\" = 15.32 ... This is computer generated Scale. Don't worry about it."
    
    doc.setFont("san-serif", 'bold')
    doc.setFont("san-serif", 'underline')

    doc.text("PROPOSED PLAN OF HOUSE PLOT NO. " + title+ "\n" +"KHASR NO. "+ title1+ "\n" +"KHEWAT NO. "+ title2 + "        KHATONI NO. " +title3+ "\n" + title4+ "\n" + title5 + "\n" + title6+ "\n" +"S/O OR D/O OR W/O "+ title7+ "\n" + title8+ "\n" , 10, 10);
    
    if(north == "U"){
        doc.setFont("san-serif", 'bold','25')
        doc.text(" ^ North is Up ^ ",50, 70)

    }
    else if(north == "L"){
        doc.setFont("san-serif", 'bold','25')
        doc.text(" __ North is Down __ ",50, 70)
    }
    else if(north == "R"){
        doc.setFont("san-serif", 'bold','25')
        doc.text("North is Right  -->",50, 70)
    }
    else if(north == "Le"){
        doc.setFont("san-serif", 'bold','25')
        doc.text("<-- North is Left" ,50, 70)
    }
    
   
    
    let estimatess1totall = 0;
    let estimatess2totall = 0;

    

            for(var k = 0; k < myVar.length; k++) {

                var Data = myVar[k];

                // for(var m = 0; m < Data.length; m++) {

                    // ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.rect(0, 0, canvas2.width, canvas2.height);
                    ctx.stroke();
                
                    const roughCanvas2 = rough.canvas(canvas2);
                    Data.forEach(({roughElement}) => roughCanvas2.draw(roughElement));

                    var imgData =  canvas2.toDataURL(
                        'image/png');      
                        
                        canvas2.toBlob(function (blob) {
                            saveAs(blob, "pretty image.png")
    
                        });
                    
                    doc.addImage(imgData, 'PNG', 10, 80);
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    doc.addPage();

                    for(var m = 0; m < Data.length; m++) {

                    estimatess1totall = estimatess1totall + (Math.abs((Data[m].x2-Data[m].x1))  / 15.36);
                    estimatess2totall = estimatess2totall + (Math.abs((Data[m].y2-Data[m].y1))  / 15.36);

                }

            }

            var myWid = (canvWidth / 15.36).toString();

            var myHt = (canvHeight / 15.36).toString();
            

            // const roughCanvas2 = rough.canvas(canvas2);
            // elements.forEach(({roughElement}) => roughCanvas2.draw(roughElement));

            // var imgData =  canvas2.toDataURL(
            //     'image/png');          
            
            // doc.addImage(imgData, 'PNG', 10, 10);

            

            var covered = estimatess2totall * estimatess1totall
            var floor = totalLayer + 1;
            var total = parseInt(myWid) * parseInt(myHt) * floor

            console.log(total)

            doc.text("Area Detail (As you have created " + floor + " Floors. The total area will be calculated as ...)", 10, 10)

            if(total - covered < 0){
              var body = [["You" , "Have Created" , "Maximum"]]
            }
            else{

            var body = [[covered , total - covered , total]]
            }
            doc.autoTable({
              margin : {
                right : 200
           }	,
              head: [['Covered Area Feet', 'Open Feet', 'Total Feet']],
              body: 
                body  ,
            
            })
            doc.text("Land : ", 250, 50)

            var myMarla = marla.toString()
            
            // console.log(myMarla)

            // myWid.toString();
            // myHt.toString();

            doc.text(myMarla + "  Marla " + myWid + " * " + myHt + " Feet ", 270, 50)

          //   doc.autoTable({

             

          //     margin : {
          //       right : 100
          //  }	,
              
          //     body: [
          //       ['Floor', '10', 'Sweden'],
          //       ['Castille', '10', 'Spain'],
                
          //     ],
          //   })


            doc.text("Foundation", 230, 210)

            doc.addImage(foundation, 'JPEG', 230, 220, 150, 76);
            
            doc.save('sample-file.pdf');


            // doc.text("Hello world!", 10, 10);
            // doc.save("a4.pdf");

    alert("File Save Successfully");
    // //
    //
    // const writeJsonFile = require('write-json-file');
    // const jsonFile = "/tmp/exampleFile.json";
    // writeJsonFile(jsonFile,{canvas:true}).catch(err => console.log(err));
    //




}
