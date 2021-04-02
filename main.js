var lastpostionofY, lastpostionofX
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d')
color = "black";
widthofline = 1;
var width = screen.width;
new_width = screen.width - 70;
var height = screen.height
new_height = screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow="hidden";
    canvas.addEventListener("touchstart",my_touchstart)
}

function my_touchstart(e) {
    color = document.getElementById("color").value;
    console.log(color)

    widthofline = document.getElementById("width_line").value;
    console.log(widthofline)
    
    lastpostionofX= e.touches[0].clientX - canvas.offsetLeft;
    lastpostionofY= e.touches[0].clientY -canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    CurrentPositionofx = e.touches[0].clientX - canvas.offsetLeft;
    CurrentPositionofy = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        console.log("lastpostionofxandy=")
        console.log("x="+lastpostionofX+"y="+lastpostionofY)
        ctx.moveTo(lastpostionofX,lastpostionofY)
        console.log("Currentpostionofxandy=")
        console.log("x="+CurrentPositionofx+"y="+CurrentPositionofy)
        ctx.lineTo(CurrentPositionofx,CurrentPositionofy)
        ctx.stroke();
    lastpostionofX=CurrentPositionofx;
    lastpostionofY=CurrentPositionofy;
}
function clearAera(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}