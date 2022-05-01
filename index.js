const express = require('express');
const path = require('path');
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
    img_url = image.toDataURL('image/png');
    console.log(img_url);
    res.json({
                "image": img_url,
                'text': s
            }
        )
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));