canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d")
car_1_width=130;
car_1_height=70;
car_1_img="car1.png";
car_1_x=10;
car_1_y=10;


car_2_width=130;
car_2_height=70;
car_2_img="car2.jfif";
car_2_x=10;
car_1_y=100;

background_image="racing.jfif";
function add(){
    background_imageTag= new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;

    car1_imageTag=new Image();
    car1_imageTag.onload=uploadcar1;
    car1_imageTag.src=car_1_img;

    car2_imageTag=new Image();
    car2_imageTag.onload=uploadcar2;
    car2_imageTag.src=car_2_img;

}
function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx/drawImage(car1_imageTag,0,0,car_1_width,car_1_height);
}
function uploadcar2(){
    ctx/drawImage(car2_imageTag,0,0,car_2_width,car_2_height);
}
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        car1_up();
        console.log("Up arrow key");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down arrow key");
    }
    
    if(keyPressed=='37'){
        car1_left();
        console.log("Left arrow key");
    }
    
    if(keyPressed=='39'){
        car1_right();
        console.log("Right arrow key");
    }
    
    if(keyPressed=='87'){
        car2_up();
        console.log("W key");
    }
    
    if(keyPressed=='65'){
        car2_down();
        console.log("A key");
    }
    
    if(keyPressed=='83'){
        car2_left();
        console.log(" a key");
        if(keyPressed=='68'){
            car2_right();
            console.log("D key");
        }
        
    
    }
    

}
function car1_up(){
    if(car_1_y>=0){
        car_1_y=car_1_y-10;
        console.log("When Arrow key up pressed,x="+car_1_x+"Y="+car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if(car_1_y>=0){
        car_1_y=car_1_y+10;
        console.log("When Arrow key up pressed,x="+car_1_x+"Y="+car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left(){
    if(car_1_x>=0){
        car_1_x=car_1_x-10;
        console.log("When Arrow key up pressed,x="+car_1_x+"Y="+car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if(car_1_x>=0){
        car_1_x=car_1_y+10;
        console.log("When Arrow key up pressed,x="+car_1_x+"Y="+car_1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up(){
    if(car_2_y>=0){
        car_2_y=car_2_y-10;
        console.log("When W key  pressed,x="+car_2_x+"Y="+car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_down(){
    if(car_2_y>=0){
        car_2_y=car_2_y+10;
        console.log("When S key  pressed,x="+car_2_x+"Y="+car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}function car2_left(){
    if(car_2_x>=0){
        car_2_x=car_2_x-10;
        console.log("When A key  pressed,x="+car_2_x+"Y="+car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}function car2_right(){
    if(car_2_x>=0){
        car_2_x=car_2_x+10;
        console.log("When D key  pressed,x="+car_2_x+"Y="+car_2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}