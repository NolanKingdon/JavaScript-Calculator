window.onload = function() {
    //I thought about putting the screen here, but it changes too often. Using Let statements to keep memory good.
    var numButtons = document.getElementsByClassName("num-button");
    var equals = document.getElementById("equals");
    var del = document.getElementById("del");
    var clear = document.getElementById("clear");
    
    //Even Listeners for our numbers/main operators that can run in the eval()
    for(var i = 0; i<numButtons.length-1; i++){
        numButtons[i].addEventListener("click", function() {
            let screenFirst = document.getElementsByClassName("screen")[0].innerHTML;
            //If the first item on the screen is a 0, we remove it
            if(screenFirst === "0") {
                document.getElementsByClassName("screen")[0].innerHTML = this.value;
                //otherwise, we concat to the actual screen
            } else if (screenFirst !== "0") {
                document.getElementsByClassName("screen")[0].innerHTML += this.value;
                console.log(this.value);
            }    
        })
    }
    
    //Doing the math on the equals button
    equals.addEventListener("click", function() {
        try {
            let screen = document.getElementsByClassName("screen")[0];    
            screen.innerHTML = eval(screen.innerHTML);
        }
        catch(e) {
            document.getElementsByClassName("screen")[0].innerHTML = "Math Error";
        }
    })
    
    clear.addEventListener("click", function(){
        let screen = document.getElementsByClassName("screen")[0];
        screen.innerHTML = "0";
    })
    del.addEventListener("click", function(){
        //Going to add a bit here to make sure that we can't delete past the base of 0.
        let screen = document.getElementsByClassName("screen")[0];
        screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
    })
};
//
//Next Steps:
//
//    fix weird screen widening with large numbers
//    Style this to look more like an actual calculator
//    style this to be more pretty