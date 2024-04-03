

h1 = document.querySelector("h1");

function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color changed");
        }, delay);
    });
}