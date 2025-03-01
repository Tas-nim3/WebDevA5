document.querySelectorAll(".Completed-btn").forEach(element => {
    element.addEventListener("click",() => {
        alert("Board updated Successfully");
         const plusNumber = IntNumber("plus-number");
         const minusNumber = IntNumber("minus-number");
        //  console.log(plusNumber);
          console.log(minusNumber);
    if (plusNumber> 0 && minusNumber > 0){
        const plus = plusNumber + 1 ;
        const minus = minusNumber - 1;
  
        setInnerText("plus-number", plus);
        setInnerText("minus-number",minus );
 
        element.disabled = true;
        function showAlertsIfComplete() {
        const disabledButtons = document.querySelectorAll(".Completed-btn[disabled]").length;

        
    }

}
if ( minusNumber === 1) {
   
    alert("congrats!!! You have completed all the current task");
}

updateTime();

    })
})
