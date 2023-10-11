
    function get_calc(btn){
        if(btn.value == "=" ){
            document.calc.display.value = eval(document.calc.display.value);
        }else if(btn.value == "C"){
            document.calc.display.value="";
        }else{
            if(btn.value == "x"){
                btn.value ="*";
            }else if(btn.value =="÷"){
                btn.value="/";
            }
            document.calc.display.value += btn.value;
            document.calc.multi_btn.value = "×";
            document.calc.div_btn.value ="÷";
        }
        
    }