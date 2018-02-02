broj = 2; // Math.floor(Math.random() * 100) + 1;

function guess(currentBtn){
    let itm = document.getElementById("pogodi");
    let cln = itm.cloneNode(true);
    //cln.removeAttribute("id");
     
    //console.log(cln.childNodes[3]);
    cln.childNodes[3].value = "";
    //console.log(cln.firstChild.nodeName);
    cln.childNodes[1].textContent = inkrementuj() + ":";
    let pokusaj = currentBtn.previousSibling.previousSibling.value;
    if(pokusaj == broj) 
    {
        alert("You win");
        return;
    }
    if(pokusaj < broj)
    {
        cln.childNodes[7].textContent = "Aim higher";
    }
    if(pokusaj > broj)
    {
        cln.childNodes[7].textContent = "Lower your aim";
    }
    //console.log(cln.childNodes[);
   // cln.id = " ";
    document.getElementById("buttons").appendChild(cln);


}
let inkrementuj = (function(){
    let i = 1;
    return function(){return i+=1;}
})();