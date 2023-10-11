function get_calc(target){
    
    let result = document.getElementById("result");
    let target_v = target.innerHTML;

    if(target_v == "AC"){
        result.innerHTML ="0"
    }else if(target_v =="="){
        result.innerHTML = eval(result.innerHTML)
    }else{
        if(result.innerHTML =="0"){
            result.innerHTML = target_v
        }else{
            if(btn.value =="×"){
                btn.value ="*";
            }else if(btn.value == "÷"){
                btn.value="/";
            }
            result.innerHTML += target_v
        }
        document.get_calc.display.value =""
    }

    
}