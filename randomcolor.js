const container=document.querySelector(".container")

for(let index=0;index<33;index++){
    const colorContainer=document.createElement("div")
    colorContainer.classList.add("color-container")
    container.appendChild(colorContainer)
}
const colorContainers=document.querySelectorAll(".color-container")
generateColors()

function generateColors(){
    colorContainers.forEach((container)=>{
        const newColor=randomColor()
        container.style.backgroundColor="#"+newColor
        container.innerText="#"+newColor

    })

}

function randomColor(){
    const chars="0123456789abcdef"
    const colorCodeLength=6
    let color=""
    for(let index=0;index<colorCodeLength;index++){
        const randomNum=Math.floor(Math.random()*chars.length)
        color+=chars[randomNum]
    }
    return color
}


