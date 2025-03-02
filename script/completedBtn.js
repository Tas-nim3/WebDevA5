document.querySelectorAll(".Completed-btn").forEach(element => {
    element.addEventListener("click",() => {
        alert("Board updated Successfully");
         const plusNumber = IntNumber("plus-number");
         const minusNumber = IntNumber("minus-number");
        
    if (plusNumber> 0 && minusNumber > 0){
        const plus = plusNumber + 1 ;
        const minus = minusNumber - 1; 
  
        setInnerText("plus-number", plus);
        setInnerText("minus-number",minus );
 
        element.disabled = true;
        function showAlertsIfComplete() {
        const disabledButtons = document.querySelectorAll(".Completed-btn[disabled]").length;

        updateTimeAndMessage(cardHeadlines[index]);
    }

}
if ( minusNumber === 1) {
   
    alert("congrats!!! You have completed all the current task");
}

let card = element.closest(".bg-blue-50");
let  taskHeadline = card.querySelector("h2.text-2xl").innerText;
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12?"PM":"AM";

hours = hours % 12||12; 
minutes = minutes<10 ?"0" + minutes:minutes;

let formattedTime = `${hours}:${minutes}${ampm}`;

let commentBox = document.createElement("div");
commentBox.className="p-3 my-3 rounded-xl bg-blue-50";
commentBox.innerHTML = `You have completed the task <span class="text-slate-600">${taskHeadline}</span> at <span class="text-slate-600">${formattedTime}</span>`;

document.getElementById("comments-section").appendChild(commentBox);

updateTime();

    });
});
