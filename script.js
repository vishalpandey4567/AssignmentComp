const cvs = document.querySelector(".show-Canvas")
const context = cvs.getContext("2d")
context.font = "30px Monospace";
context.textAlign = "center";
context.textBaseline = "middle";
context.fillStyle = "white";
context.fillText("B", 8, 17);

function convert(red, green, blue) {
    return red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0')
}

const data = context.getImageData(0, 0, 16, 34).data;
let hexa_decimal = "", cnt = 0
for (let u = 0; u < data.length; u += 4) {
    let red = data[u]
    let green = data[u + 1]
    let blue = data[u + 2]
    hexa_decimal += `0x${convert(red, green, blue)}, `
    cnt = (cnt + 1) % 16
    if (cnt === 0) hexa_decimal += "\n"
}

const hexFile = new Blob([hexa_decimal], { type: "text/plain" })
document.querySelector(".downloadHexData").href = URL.createObjectURL(hexFile)
