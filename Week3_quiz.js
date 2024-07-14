let width = 800;
let height = 800;

let svg = document.getElementById('Svg1');
svg.setAttribute('width', width);
svg.setAttribute('height', height);
console.log(svg);


// Define the randomInt function to generate random integers
function randomInt(max) {
    return Math.floor(Math.random() * max);
}
// Define the makeRGB function to generate an RGB color string
function makeRGB(r, g, b, a) {
    return `rgb(${r},${g},${b},${a})`;
}




// background
for (let i = 0; i < 20; i++) {
    let density = Math.abs(8 - i) * 0.2; // Calculate density based on distance from center
    let numRectangles = Math.floor(60 * density) + 1; // Calculate the number of rectangles for this position
    let totalHeight = 800;
    let startY = (totalHeight - (numRectangles * 30)) / 2; // Center the rectangles vertically

    for (let j = 0; j < numRectangles; j++) {
        svg.appendChild(createRect(i * 50, startY + j * 10, 1, 800 / numRectangles, 255, 225, 255, 0.9));
    }
}



// function meteor
function createRect(x, y, w, h, r, g, b, a, maxWidth = 800, maxHeight = 600, maxLength = 80) {
    x = x ?? randomInt(maxWidth);
    y = y ?? randomInt(maxHeight);
    w = w ?? randomInt(maxWidth);
    h = h ?? randomInt(maxLength);
    let fill = makeRGB(r, g, b, a);

    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    newRectangle.setAttribute("x", x);
    newRectangle.setAttribute("y", y);
    newRectangle.setAttribute("width", w);
    newRectangle.setAttribute("height", h);
    newRectangle.setAttribute('fill', fill);
    
    return newRectangle;
}

// white meteor
svg.appendChild(createRect(null, null, 1, null, 255, 225, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 225, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));
svg.appendChild(createRect(null, null, 1, null, 255, 255, 255, 0.6));


// meteor
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(100, null, 3, null, 255, 193, 37, 1.0));

svg.appendChild(createRect(200, null, 3, null, 250, 193, 37, 0.5));
svg.appendChild(createRect(200, null, 3, null, 250, 193, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 250, 253, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 255, 253, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 250, 253, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 275, 253, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 265, 253, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 255, 250, 37, 1.0));
svg.appendChild(createRect(200, null, 3, null, 255, 253, 37, 1.0));

svg.appendChild(createRect(300, null, 3, null, 225, 300, 100, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(300, null, 3, null, 275, 300, 100, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(300, null, 3, null, 225, 250, 0, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 250, 25, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 250, 75, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(300, null, 3, null, 250, 250, 75, 1.0));

svg.appendChild(createRect(400, null, 4, null, 225, 300, 100, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(400, null, 4, null, 275, 300, 100, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(400, null, 4, null, 225, 250, 0, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 250, 25, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 250, 75, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(400, null, 4, null, 250, 250, 75, 1.0));

svg.appendChild(createRect(500, null, 3, null, 225, 300, 100, 1.0));
svg.appendChild(createRect(500, null, 3, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(500, null, 3, null, 275, 300, 100, 1.0));
svg.appendChild(createRect(500, null, 3, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(500, null, 3, null, 225, 250, 0, 1.0));
svg.appendChild(createRect(500, null, 3, null, 250, 250, 25, 1.0));
svg.appendChild(createRect(500, null, 3, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(500, null, 3, null, 250, 250, 75, 1.0));
svg.appendChild(createRect(500, null, 3, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(500, null, 3, null, 255, 193, 37, 1.0));

svg.appendChild(createRect(600, null, 3, null, 225, 300, 100, 1.0));
svg.appendChild(createRect(600, null, 3, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(600, null, 3, null, 275, 300, 100, 1.0));
svg.appendChild(createRect(600, null, 3, null, 250, 300, 100, 1.0));
svg.appendChild(createRect(600, null, 3, null, 225, 250, 0, 1.0));
svg.appendChild(createRect(600, null, 3, null, 250, 250, 25, 1.0));
svg.appendChild(createRect(600, null, 3, null, 250, 250, 50, 1.0));
svg.appendChild(createRect(600, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(600, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(600, null, 3, null, 255, 193, 37, 1.0));

svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));
svg.appendChild(createRect(700, null, 3, null, 255, 193, 37, 1.0));



// linegradient
let myLinearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
myLinearGradient.setAttribute("id", "myLGID");
myLinearGradient.setAttribute("x1", "0%");
myLinearGradient.setAttribute("x2", "0%");
myLinearGradient.setAttribute("y1", "0%");
myLinearGradient.setAttribute("y2", "100%");

//stops
let stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("id", "myStop1");
stop1.setAttribute("offset", "1%");
stop1.setAttribute("stop-color", "#C1FFC1");

let stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("id", "myStop2");
stop2.setAttribute("offset", "99%");
stop2.setAttribute("stop-color", "	#B23AEE");

myLinearGradient.appendChild(stop1);
myLinearGradient.appendChild(stop2);
document.getElementById("mydefs").appendChild(myLinearGradient);



// background planet
function createCir1(x, y ,radium ,r, g, b, a, maxWidth = 800, maxHeight = 100, maxRadium = 12) {
    x = x ?? randomInt(maxWidth);
    y = y ?? randomInt(maxHeight);
    radium = radium ?? randomInt(maxRadium);
    let fill = makeRGB(r ,g ,b, a);

    let newCir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    newCir1.setAttribute("cx", x);
    newCir1.setAttribute("cy", y);
    newCir1.setAttribute("r", radium);
    newCir1.setAttribute('fill', fill);

    return newCir1;
}

svg.appendChild(createCir1(50, 50, null, 300, 225, 255, 0.7));
svg.appendChild(createCir1(100, 100, null, 300, 225, 225, 0.7));
svg.appendChild(createCir1(150, 150, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(200, 200, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(250, 250, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(300, 300, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(350, 350, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(400, 400, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(450, 350, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(500, 300, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(550, 250, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(600, 200, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(650, 150, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(700, 100, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(750, 50, null, 300, 225, 255, 1.0));

svg.appendChild(createCir1(50, 350, null, 300, 225, 255, 0.7));
svg.appendChild(createCir1(100, 300, null, 300, 225, 225, 0.7));
svg.appendChild(createCir1(150, 250, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(250, 150, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(300, 100, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(350, 50, null, 300, 225, 225, 1.0));

svg.appendChild(createCir1(750, 350, null, 300, 225, 255, 0.7));
svg.appendChild(createCir1(700, 300, null, 300, 225, 225, 0.7));
svg.appendChild(createCir1(650, 250, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(550, 150, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(500, 100, null, 300, 225, 225, 1.0));
svg.appendChild(createCir1(450, 50, null, 300, 225, 225, 1.0));



// Main planet
let myCircle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
myCircle1.setAttribute("id", "idCircle1");
myCircle1.setAttribute("cx", "400px");
myCircle1.setAttribute("cy", "900px");
myCircle1.setAttribute("r", "500px");
myCircle1.setAttribute("fill", "url(#myLGID)");

document.getElementById("Svg1").appendChild(myCircle1);

// Planet2
let myCircle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
myCircle2.setAttribute("id", "idCircle1");
myCircle2.setAttribute("cx", "400px");
myCircle2.setAttribute("cy", "100px");
myCircle2.setAttribute("r", "100px");
myCircle2.setAttribute("fill", "url(#myLGID)");

document.getElementById("Svg1").appendChild(myCircle2);


// Text
let textElement3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement3.setAttribute("x", "10"); 
textElement3.setAttribute("y", "800"); 
textElement3.setAttribute("fill", "white"); 
textElement3.setAttribute("font-size", "100"); 
textElement3.setAttribute("font-family", "Arial Black");
textElement3.setAttribute("opacity", "0.3");
textElement3.textContent = "Falling Meteor";
svg.appendChild(textElement3);


// Text
let textElement1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement1.setAttribute("x", "160"); 
textElement1.setAttribute("y", "760"); 
textElement1.setAttribute("fill", "white"); 
textElement1.setAttribute("font-size", "60"); 
textElement1.setAttribute("font-family", "Arial Black");
textElement1.setAttribute("opacity", "0.9");
textElement1.textContent = "Falling Meteor";
svg.appendChild(textElement1);

