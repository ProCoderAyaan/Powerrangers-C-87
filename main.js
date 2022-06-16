var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

var block_object = "";
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set
        canvas.add(block_object);
           });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log("keyPressed");
     if(keyPressed == '82')
{     new_image("rr.jpg");
console.log("The Red Ranger");
}
    if(keyPressed == '71')
{
new_image("gr.png");
console.log("The Green Ranger");
}
    if(keyPressed == '89'){
        new_image("yr.png");
        console.log("The Yellow Ranger");
    }  
      if(keyPressed == '80'){
        new_image("pr.png");
        console.log("The Pink Ranger");
    }
    if(keyPressed == '66'){
        new_image("br.png");
        console.log("The Blue Ranger");
    }
}