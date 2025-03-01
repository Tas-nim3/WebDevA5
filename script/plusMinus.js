function IntNumber(id){
    const value = document.getElementById(id).innerText;
    const convertV = parseInt(value);
    return convertV;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value ;
}

