let closeEye = document.querySelector(".eye");
let eyeShow = document.querySelector(".introduction");
let eyeFlag = true;

alert("点击图标按钮有惊喜哦!~");
function clickEye(){
    console.info("点击了eye");
    if(eyeFlag){
        closeEye.src = "图片/eye.svg"
        eyeFlag = false;
        eyeShow.style.display = "block";
    }else{
        closeEye.src = "图片/eye-slash.svg"
        eyeFlag = true;
        eyeShow.style.display = "none";
        // eyeShow.innerText = "-点击查看具体内容-";
    }
    
}
closeEye.addEventListener("click", clickEye); 