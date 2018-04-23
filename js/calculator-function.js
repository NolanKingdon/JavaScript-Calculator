window.onload = function() {
    //I thought about putting the screen here, but it changes too often. Using Let statements to keep memory good.
    var numButtons = document.getElementsByClassName("num-button");
    var equals = document.getElementById("equals");
    var del = document.getElementById("del");
    var clear = document.getElementById("clear");
    
    //Even Listeners for our numbers/main operators that can run in the eval()
    for(var i = 0; i<numButtons.length; i++){
        numButtons[i].addEventListener("click", function() {
            let screenFirst = document.getElementsByClassName("screen")[0];
            //If the first item on the screen is a 0, we remove it
            if(screenFirst.innerHTML === "0") {
                document.getElementsByClassName("screen")[0].innerHTML = this.value;
                //otherwise, we concat to the actual screen
            } else if (screenFirst.innerHTML !== "0") {
                console.log(this.value);
                document.getElementsByClassName("screen")[0].innerHTML += this.value;
            }
            
            //Making sure there isn't unreasonable overflow on the numbers
            if(screenFirst.innerHTML.length < 11){
                screenFirst.style.fontSize = "5em";
            }
            if(screenFirst.innerHTML.length > 11){
                screenFirst.style.fontSize = "3rem";
            } 
            if (screenFirst.innerHTML.length > 22){
                screenFirst.style.fontSize = "2rem";
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
        let screen = document.getElementsByClassName("screen")[0];
        //Making sure we can't erase our starter number
        if (screen.innerHTML.length > 1){
            screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1);
        } else if (screen.innerHTML.length <= 1 && screen.innerHTML[0] != "0"){
            //If we erase all the way back to our first number, then erase that, it will push 0
            screen.innerHTML = "0";
        }
    })
};