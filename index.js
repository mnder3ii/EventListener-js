var nmofbutns = document.querySelectorAll(".drum").length;

for(var i = 0; i < nmofbutns; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 

        var butninval = this.innerHTML;

        makeing_sound(butninval);
        butanim(butninval);

    });

}


document.addEventListener("keydown", function (event) {

    makeing_sound(event.key);
    butanim(event.key);

});


function makeing_sound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("./tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("./tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("./tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("./snare.mp3");
            snare.play();
        break;

        case "k":
            var crash = new Audio("./crash.mp3");
            crash.play();
        break;

        case "l":
            var kick_bass = new Audio("./kick-bass.mp3");
            kick_bass.play();
        break;

    
        default: console.log(butninval);
            break;
    }
    
}

function butanim(curkey) {
    
    var activeButton = document.querySelector("." + curkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){ 
        activeButton.classList.remove("pressed");
    }, 150);

}

