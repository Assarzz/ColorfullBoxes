for (let index = 0; index < 200; index++) {
    
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;

    r.toString();
    g.toString();
    b.toString();

    console.log("rgb("+r+","+g+","+b+")");


    const element = document.createElement("div");
    element.classList.add("small-box");
    element.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    document.querySelector("body").appendChild(element);
    
}