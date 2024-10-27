window.onload=function(){
    // delay in milisec (2000ms = 2secs)
    const delay = 5000;

    setTimeout(function(){
        document.getElementById(videoOne).play();
        document.getElementById(videotwo).play();
        document.getElementById(videothree).play();
    },delay);
};