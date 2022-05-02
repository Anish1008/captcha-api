const express = require('express');
const path = require('path');
const {Blob} = require('buffer');
// const cors = require('cors');
const {Canvas} = require('canvas-constructor/cairo');
const bodyParser = require('body-parser');
const canvas = require('canvas');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
    origin: '*'
}));
app.get('/', (req, res) => {
    let a = parseInt((Math.random(0,10))*10);
let b = parseInt((Math.random(0,10))*10);
let c = parseInt((Math.random(0,10))*10);
let f = parseInt((Math.random(0,10))*10);
let d = parseInt((Math.random(0,10))*10);
let e = parseInt((Math.random(0,10))*10);
let s = ""
s+=a+""+b+""+""+c+""+d+""+e+""+f
    let image = new Canvas(300, 80)
    .setColor('#000')
    .setTextFont('28px Impact')
    .translate(20,10)
    .rotate(30*Math.PI/180)
    .printText(a,20, 10 )
    // .translate(-20, -10)
    .rotate(-30*Math.PI/180)
    .printText(b,60, 60 )
    .translate(150,30)
    .rotate(330*Math.PI/180)
    .printText(c,-15, 10 )
    .rotate(-330*Math.PI/180)
    .translate(-150,-30)
    .printText(d,180, 60 )
    .translate(240,20)
    .rotate(330*Math.PI/180)
    .printText(e,-15, 5 )
    .translate(-240,-20)
    .rotate(-300*Math.PI/180)
    // .rotate(30*Math.PI/180)
    .translate(0,-180)
    .printText(f,160, 10 )
    // .translate(0,180)
    .beginPath()
    .rotate(45*Math.PI/180)
    .moveTo(80,-150)
    .lineTo(0,600)
    .stroke();
    let img_url = image.toDataURL('image/png');
    console.log(img_url.toString());
        // var binary = atob(img_url.split(',')[1]);
        // var array = [];
        // for(var i = 0; i < binary.length; i++) {
        //     array.push(binary.charCodeAt(i));
        // }
        // img_url =  new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
        // console.log(img_url);
//         var u = img_url.split(',')[1],
//     binary = atob(u),
//     array = [];

// for (var i = 0; i < binary.length; i++) {
//     array.push(binary.charCodeAt(i));
// }

// var typedArray = new Uint8Array(array);
// console.log(typedArray.buffer);
// var byteString = atob(img_url.split(',')[1]);

// // separate out the mime component
// var mimeString = img_url.split(',')[0].split(':')[1].split(';')[0]

// // write the bytes of the string to an ArrayBuffer
// var ab = new ArrayBuffer(byteString.length);

// // create a view into the buffer
// var ia = new Uint8Array(ab);

// // set the bytes of the buffer to the correct values
// for (var i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
// }

// // write the ArrayBuffer to a blob, and you're done
// var blob = new Blob([ab], {type: mimeString});
// console.log(blob);
    res.json([{image:img_url.toString(),
    "text":s}]);
        
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));