const socket = io();
const textArea = getElement('text')
const size = getElement('size');
const bold = getElement('bold');
const italic = getElement('italic');
const underline = getElement('underline');
const left = getElement('left');
const right = getElement('right');
const center = getElement('center');
const justify = getElement('justify');
const font = getElement('font');
const fontColor = getElement('font-color');
const bg = getElement('bg');
const bgColor = getElement('bg-color');

function getElement(id){
    return document.getElementById(id)
}

socket.on('connect',() => {
    console.log("Connected to Server");
})

socket.on('message',(data) => {
    textArea.value = data
})

socket.on('size',(sizee) => {
    textArea.style.fontSize = sizee + "px";
    size.value = sizee
})

socket.on('bold',(bold) => {
    textArea.style.fontWeight = bold;
})

socket.on('italic',(italic) => {
    textArea.style.fontStyle = italic;
})

socket.on('underline',(underline) => {
    textArea.style.textDecoration = underline;
})

socket.on('left',(left) => {
    textArea.style.textAlign = left;
})

socket.on('right',(right) => {
    textArea.style.textAlign = right;
})

socket.on('center',(center) => {
    textArea.style.textAlign = center;
})

socket.on('justify',(justify) => {
    textArea.style.textAlign = justify;
})

socket.on('color',(color) => {
    textArea.style.color = color;
    fontColor.value = color;
})

socket.on('bgcolor',(bgcolor) => {
    textArea.style.background = bgcolor;
    bgColor.value = bgcolor;
})

socket.on('disconnect',() =>{
    console.log("Disconnected from Server");
})

textArea.addEventListener('keyup',() => {
    const text = textArea.value;
    const msg = {
        newText: text
    }
    socket.send(JSON.stringify(msg));
});

size.addEventListener('click',() => {
  let text = size.options[size.selectedIndex].text;
  const msg = {
    newSize: text
  }
socket.send(JSON.stringify(msg));
  textArea.style.fontSize = text +"px";
})

bold.addEventListener('click',() => {
    const msg = {
        bold: 600
    }
    socket.send(JSON.stringify(msg))
    textArea.style.fontWeight = 600;
})

italic.addEventListener('click',() => {
    const msg = {
        italic: "italic"
    }
    socket.send(JSON.stringify(msg))
    textArea.style.fontStyle = "italic";
})

underline.addEventListener('click',() => {
    const msg = {
        underline: "underline"
    }
    socket.send(JSON.stringify(msg))
    textArea.style.textDecoration = "underline";
})


left.addEventListener('click',() => {
    const msg = {
        left: "left"
    }
    socket.send(JSON.stringify(msg))
    textArea.style.textAlign = "left"
})

right.addEventListener('click',() => {
    const msg = {
        right: "right"
    }
    socket.send(JSON.stringify(msg))
    textArea.style.textAlign = "right"
})

center.addEventListener('click',() => {
    const msg = {
        center: "center"
    }
    socket.send(JSON.stringify(msg))
    textArea.style.textAlign = "center"
})

justify.addEventListener('click',() => {
    const msg = {
        justify: "justify"
    }
    socket.send(JSON.stringify(msg))
    textArea.style.textAlign = "justify"
})


fontColor.addEventListener('change',() => {
    const color = fontColor.value
    const msg = {
        color: color
    }
    socket.send(JSON.stringify(msg))
    textArea.style.color = color; 
});

bgColor.addEventListener('change',() => {
    const bgcolor = bgColor.value
    const msg = {
        bgcolor: bgcolor
    }
    socket.send(JSON.stringify(msg))
    textArea.style.background = bgcolor ;
}); 