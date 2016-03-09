var ref=document.getElementById("hideRowButton");
ref.addEventListener("click",hideRowFunc);
function hideRowFunc(){
     document.getElementsByTagName('table').item(0).className = 'odd-rows-hidden';
    
}
