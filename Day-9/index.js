const BMI = ()=>{
    const weight = Number(document.getElementById("val1").value);
    const height = Number(document.getElementById("val2").value);
    const print = document.getElementById('bmi');
    let h = height/100;
    // console.log(h)
    hei = h*h;
    let final = weight/hei;
    let ans = Math.round(final*10)/10;
    // console.log(ans)
    

    if(ans<18.6){
       print.innerHTML = ans + " Under Weight";
       print.style.background = "orange";
    }else if(ans>18.6&&ans<24.9){
        print.innerHTML = ans + " Normal";
        print.style.background = "green";
    }else if(ans>24.9){
       print.innerHTML = "Over weight";
       print.style.background = "red";

    }else{
        print.innerHTML = ans + " Only NUMBERS !";
        print.style. background= "#fdf0d5";
    }

}

