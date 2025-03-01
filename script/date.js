function updateDateTime() {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate =new Date();
    const day = days [currentDate.getDay()];
    const month = months [currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${day}, <br><strong>${month} ${date} ${year}</strong>`;

    document.getElementById("date-btn").innerHTML = formattedDate;
}
updateDateTime();