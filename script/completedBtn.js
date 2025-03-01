document.querySelectorAll(".Completed-btn").forEach(element => {
    element.addEventListener("click",() => {
        alert("Board updated Successfully");
         const plusNumber = IntNumber("plus-number");
         const minusNumber = IntNumber("minus-number");
        //  console.log(plusNumber);
          console.log(minusNumber);
    if (plusNumber>0 && minusNumber>0){
        const plus = plusNumber + 1 ;
        const minus = minusNumber - 1;
        // document.getElementById("plus-number").innerText=plus;
        // document.getElementById("minus-number").innerText=minus;
        setInnerText("plus-number", plus);
        setInnerText("minus-number",minus );

    }

        

    })
})