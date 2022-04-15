window.addEventListener("load",setup)
var x=document
var pro_type=localStorage.getItem('pro_type')   
function setup(){
    console.log(ml5.version);
x.getElementById("version").innerHTML="ML5 Version - "+ml5.version
if(pro_type==1){

x.getElementById("title_link").innerHTML="My Project" 




}
cs=0
z=0
x=0
y=0
}
function cam_on(){
    z=0
    Webcam.reset("#cam_div")
    x=1
        Webcam.set({
            width:550,
            height:400,
            
            image_format:"png",
            image_quality:90
        })
        document.getElementById("cam_div").style.animationPlayState="running"
        setTimeout(
    function(){
        document.getElementById("cam_div").style.animationPlayState="paused"
        document.getElementById("cam_div").style.opacity=1
        Webcam.attach("#cam_div")
        setTimeout(function(){document.getElementById("selfie").style.cursor="pointer"
        z=1},1000)
        
    },700
    
        )
}
function take_pic(){
    if(z==1){
       
    Webcam.set({
        width:550,
        height:400,        
        image_format:"png",
        image_quality:90
    })
    
     
        document.getElementById("pic_div").style.animationPlayState="running"
        setTimeout(
    function takeSnapshot(){

        Webcam.snap(function snap(data_uri){
            document.getElementById("pic_div").style.height = "400px";
            document.getElementById("pic_div").style.width = "565px";
        document.getElementById("pic_div").innerHTML="<img id='img_pic' src='"+data_uri+"'>"
        })
    },700

    
        )
        if(x==1){
        y = 1
    x=0}
console.log(y)
setTimeout(
    function(){
        if(y == 1){

            console.log("hhh");
            document.getElementById("select").style.visibility="visible"
            cs=1
            document.getElementById("select").style.animationPlayState="running"
            y=0
        }},1000
)
    }
}
var c = "https://teachablemachine.withgoogle.com/models/Yp8t4GKKD/model.json"
function send(){
    if(cs==1){
        
        alert("My existance is of no utilization at the moment, although it will be given significant importace in the following project! Keep waiting mam...! :)")
}
}


