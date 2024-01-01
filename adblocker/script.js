setInterval(function(){
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button-modern");
    if(skipButton != undefined && skipButton.length > 0){
        console.log("Ad Detected");
        skipButton[0].click()
    }
}, 1000)