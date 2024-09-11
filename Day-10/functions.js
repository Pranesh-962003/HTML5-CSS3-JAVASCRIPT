

function PAlindrome() {
    let name = document.getElementById('palindrome').value
   name =  name.toUpperCase();
    console.log(name);
    console.log(name.split(""));
    const rev = name.split("").reverse().join("");
   if(name===rev){
    console.log("PAlindrome");
   }else{
    
   console.log("not PAlindrome");
   }

}

