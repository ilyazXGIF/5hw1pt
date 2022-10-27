const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eu = document.querySelector('#eu');

const convert = (element, target,trigger, isTrue) => {
    element.addEventListener('input', () =>{
        const request = new XMLHttpRequest();
        request.open("GET", "usd.json");
        request.setRequestHeader("Content-type", "application/js");
        request.send();
        request.addEventListener("load", () =>{
            const response = JSON.parse(request.response);
                if (isTrue){
                    target.value = (element.value / response.usd).toFixed(2);
                    trigger.value = (element.value / response.eu).toFixed(2);
                } else {
                    target.value = (element.value * response.usd).toFixed(2)
                    trigger.value = element.value
                }
        });
    });
}
convert(som, usd, eu, 42)
convert(usd, som, eu, "")

