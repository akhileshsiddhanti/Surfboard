document.body.style.border = "5px solid blue";

var list_of_links = document.links;

function showChar(e){
    alert(
      "Key Pressed: " + String.fromCharCode(e.charCode) + "\n"
      + "charCode: " + e.charCode + "\n"
      + "CTRL key pressed: " + e.ctrlKey + "\n"
    );
}

var flag = 0;
var create = 0;

// $(document).keydown(function(e){
//     if (e.keyCode==90 && e.ctrlKey)
//         $("body").append("<p>ctrl+z detected!</p>");
// });

document.body.addEventListener("keypress", function(event){ 

    // alert(String.fromCharCode(event.charCode));
    
    if(String.fromCharCode(event.charCode)=='`'){
        if(flag == 0)
        {
            flag = 1;
            
            if(create == 0){
                create = 1;
                for ( var i=0; i < document.links.length; i++){
                    // document.links[i].title+=String(i);
                    // $(document.links[i]).tooltip();
                    document.links[i].after(di = document.createElement("span"));
                    
                    di.innerHTML=String(i);
                    di.style.position="relative"
                    di.style.color="#fff";
                    di.style.backgroundColor="black";
                    di.style.padding="0px";
                    di.style.paddingRight = "5px";
                    di.style.fontSize = "18px";
                    // di.style.left = "5px";
                    di.className = "tooltips";
                    di.style.zIndex = "1";
                    // di.style.width="-5px";
                    // di.style.right="-50%";
                    // di.style.textAlign="center";
                    document.links[i].after(arrow = document.createElement("span"));
                    // var x = di.parentElement.clientWidth;
                    var x = window.getComputedStyle(di).getPropertyValue('height'); 
                    // di.style.marginLeft = "-"+String(x+10) + "px";
            
                    arrow.innerHTML= "";
                    // arrow.style.backgroundColor = "un";
                    // arrow.style.fontSize="18px";
                    // arrow.style.marginLeft="4px";
                    // arrow.style.padding="1px";
                    // arrow.style.height=String(x)+"px";
                    arrow.style.position = "relative";
                    
                    arrow.style.width="0";
                    arrow.style.height="0";
                    
                    arrow.style.borderLeft = "10px solid transparent";
                    arrow.style.borderRight= "10px solid black";
                    arrow.style.borderTop  = "10px solid transparent";
                    arrow.style.borderBottom="10px solid transparent";
                    arrow.style.lineHeight="0px";
                    arrow.style.fontSize="0px";
                    arrow.style.top="-6px";
                    arrow.style.marginLeft="-7px";

                    // arrow.style.borderColor = "transparent black transparent transparent";
                    // arrow.style.zIndex = "1";
                    arrow.className = "tooltips"
                    
                    // arrow.style.top = "50%";
                    // arrow.style.right = "100%";
                    // arrow.style.marginTop = "-5px";
                }

                var textboxholder = document.createElement("span");
                var textbox = document.createElement("input");
                // textbox.setAttribute("type",text);
                
                // textboxholder.style.width = "200px";
                textboxholder.style.display="relative";
                textboxholder.style.top = "50%";
                textboxholder.style.left = "100px";
                textboxholder.appendChild(textbox);
                document.body.appendChild(textboxholder);              

                // var person = prompt("Please enter a tag number", "0");
                // if (person == null || person == "") {
                //     txt = "User cancelled the prompt.";
                // } else {
                //     var i = parseInt(person);
                //     if(i<document.links.length)
                //     document.links[parseInt(person)].click();
                // }

                
            }
            else{
                for(var i=0; i < document.getElementsByClassName("tooltips").length; i++){
                    document.getElementsByClassName("tooltips")[i].style.visibility = "visible";
                }
                // var person = prompt("Please enter a tag number", "0");
                // if (person == null || person == "") {
                //     txt = "User cancelled the prompt.";
                // } else {
                //     var i = parseInt(person);
                //     if(i<document.links.length)
                //     document.links[parseInt(person)].click();
                // }
                flag = 1;    
            }
        }
        else{

            for(var i=0; i < document.getElementsByClassName("tooltips").length; i++){
                document.getElementsByClassName("tooltips")[i].style.visibility = "hidden";
            }
            flag = 0;
        }
    }
        // EL { content: attr(title); }

}); 

// window.onload = function(){
        
// }
