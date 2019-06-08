document.body.style.border = "5px solid red";

var links;
var a;
var flag = 0; //if ctrl+space has ever been pressed
var create = 0;
var textbox_created = 0;
var text_length = 0;


document.onkeydown = function(event){

    event = event || window.event;

    if(event.keyCode === 8 && textbox_created === 1) {//Backspace key 
        event.preventDefault();
        var value = document.getElementsByClassName("surfboard")[0].value;
        if(value.length>=1) document.getElementsByClassName("surfboard")[0].value = value.substr(0,value.length-1);
    }

    if(event.keyCode === 13 && textbox_created == 1){//Detect enter key
        event.preventDefault(); 
        var value = document.getElementsByClassName("surfboard")[0].value;
        if(value.length>=1 && !isNaN(value)){
            // alert(parseInt(value));
            links[parseInt(value)].click();
        }  
    }

    if (event.ctrlKey && event.keyCode == 32){ //CTRL+Space

        links = document.links;
        links[0].focus();
        if(flag == 0){
            flag = 1;
            
            if(create == 0){
                create = 1;
                for ( var i=0; i < links.length; i++){
                    links[i].after(di = document.createElement("span"));
                    
                    di.innerHTML=String(i);
                    links[i].title=String(i);
                    di.style.position="relative"
                    di.style.color="#fff";
                    di.style.backgroundColor="black";
                    di.style.padding="0px";
                    di.style.paddingRight = "5px";
                    di.style.fontSize = "18px";
                    di.className = "tooltips";
                    di.style.zIndex = "5";
                    links[i].after(arrow = document.createElement("span"));
                
                    arrow.innerHTML= "";
                    arrow.style.position = "relative";
                    arrow.style.zIndex = "5";
                    
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

                    arrow.className = "tooltips"
                    
                }

                var textbox = document.createElement("INPUT");
                textbox_created = 1;
                textbox.setAttribute("type","text");
                textbox.disabled=false;
                textbox.style.position="fixed";
                textbox.style.zIndex="9999";
                textbox.style.top = "0";
                textbox.style.marginTop="50px";
                textbox.style.marginLeft="40%";
                textbox.style.width="400px";
                textbox.className="surfboard";

                textbox.style.fontSize="20px";
                textbox.style.height="50px";
                textbox.style.backgroundColor="rgba(211,211,211,0.8)";
                textbox.style.borderWidth="thick";
                textbox.style.borderStyle="solid";
                textbox.style.borderRadius="17px";
                textbox.style.textAlign="center";

                textbox.focus();

                // textbox.value = "Enter link number here...";
            
                document.body.addEventListener("keypress", function(event){
                    textbox.value += String.fromCharCode(event.charCode);
                });  
                
                document.body.appendChild(textbox);              

            }
            else{//Labels already created, display them
                for(var i=0; i < document.getElementsByClassName("tooltips").length; i++){
                    document.getElementsByClassName("tooltips")[i].style.display = "";
                }
                document.getElementsByClassName("surfboard")[0].style.display = "";
                flag = 1;
                textbox_created=1;   
            }
        }
        else{

            for(var i=0; i < document.getElementsByClassName("tooltips").length; i++){
                document.getElementsByClassName("tooltips")[i].style.display = "none";
            }
            document.getElementsByClassName("surfboard")[0].style.display = "none";
            textbox_created=0;
            flag = 0;
        }
        
    }
};
