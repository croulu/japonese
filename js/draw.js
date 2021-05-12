// https://nokomprendo.frama.io/tuto_fonctionnel/posts/tuto_fonctionnel_32/2018-12-16-fr-README.html

const r = 0
const g = 0
const b = 0
const color = rgbToHex(r, g, b)
const radius = 4

// find position in canvas, from mouse event
function getXY(canvas, evt) {
    const rect = canvas.getBoundingClientRect()
    const x = evt.clientX - rect.left
    const y = evt.clientY - rect.top
    return {x, y}
}

// convert color from RGB triplet to hex code
// for example: 255, 0, 255 -> '#FF00FF'
function componentToHex(c) {
    const hex = Number(c).toString(16)
    return hex.length === 1 ? '0' + hex : hex
}

function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}


// start drawing
const defineOnMouseDownEventHandlerForCanvasDraw = () => {
    const canvasDraw = document.getElementById('canvas_draw')
    canvasDraw.onmousedown = function (evt0) {
        // get canvas context and initial position
        const ctx = canvasDraw.getContext('2d')
        let p0 = getXY(canvasDraw, evt0)

        // set callback function for mousemove event
        canvasDraw.onmousemove = function (evt1) {
            // draw a line from previous position to current position
            const p1 = getXY(canvasDraw, evt1)
            ctx.beginPath()
            ctx.strokeStyle = color
            ctx.fillStyle = color
            ctx.lineWidth = 2 * radius
            ctx.lineCap = 'round'
            ctx.moveTo(p0.x, p0.y)
            ctx.lineTo(p1.x, p1.y)
            ctx.fill()
            ctx.stroke()
            // update position
            p0 = p1
        }
    }
}


// remove callback function when mouse up
const defineOnMouseUpEventHandlerForCanvasDraw = () => {
    const canvasDraw = document.getElementById('canvas_draw')
    canvasDraw.onmouseup = function (evt) {
        canvasDraw.onmousemove = {}
    }
}

// clear canvasDraw when clicking on button_clear
const defineOnClickEventHandlerForClearDraw = () => {
    const clearDraw = document.getElementById('button_clear')
    clearDraw.onclick = function () {
        const width = canvasDraw.clientWidth
        const height = canvasDraw.clientHeight
        const ctx = canvasDraw.getContext('2d')
        ctx.beginPath()
        ctx.clearRect(0, 0, width, height)
        ctx.stroke()
    }
}
