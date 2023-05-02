function newImage()

{
    fabric.Image.fromUrl('BirthdayImage.jpg', function(Img) {
    blockImageObject = Img;

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeigth(510);
    blockImageObject.set({
    top:0,
    left:0
    });
    Canvas.add(blockImageObject);
    });
}

function playSound(){
    x.play();
}