window.onload = function() {
    
    var elements = document.getElementsByTagName("button");
    
    for(var i = 0; i<elements.length; i++){
        elements[i].addEventListener("click", function() {
            var screen = document.getElementsByClassName("screen")[0].innerHTML;
            if(screen === "0") {
                document.getElementsByClassName("screen")[0].innerHTML = this.value;
            } else {
                document.getElementsByClassName("screen")[0].innerHTML += this.value;
            }
        })
    }
};
//
//Next Steps:
//
//    Actual Math
//    fix weird screen widening with large numbers
//    Add a clear button 
//    Style this to look more like an actual calculator
//    style this to be more pretty