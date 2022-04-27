let key="dcc4e17081098a32cfdb8f781c13727e";
var container=document.getElementById("displaydetail1");
var container2=document.getElementById("displaydetail2");
let iframe=document.getElementById("gmap_canvas")
async function getWeatherData(){
    try{
        let city=document.getElementById("city").value
        let res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`);
        // console.log(res);
            let data=await res.json();
        //  console.log(data)
        sevenday(data);
        showWeather(data);
        
       
    }
    catch(err){
        console.log("err: ",err)
        // min temp, max temp, wind, clounds, sunrise, sunset 
    }
}
function showWeather(d){
    // Temperatures...................................................................................................
   
    container.innerHTML="";
    container2.innerHTML="";
    console.log(d);
    let name=document.createElement("h2");
    name.textContent=d.city.name;
    let countryn=document.createElement("h2");
    countryn.textContent=d.city.country;
    let mintemp=document.createElement("h3");
    mintemp.textContent=` min temp: ${d.list[0].main.temp_min}°`;
    let maxtemp=document.createElement("h3");
    maxtemp.textContent=` max temp: ${d.list[0].main.temp_max}°`;
    let wind=document.createElement("h3");
    wind.textContent=` wind speed: ${d.list[0].wind.speed}`;
    container.append(name,countryn,mintemp,maxtemp,wind);

// Values........................................................................................................
    
    let humidity=document.createElement("h3");
    humidity.textContent=` humidity: ${d.list[0].main.humidity}°`;
    let pressure=document.createElement("h3");
    pressure.textContent=` pressure: ${d.list[0].main.pressure}°`;
    let clouds=document.createElement("h3");
    clouds.textContent=` clouds: ${d.list[0].clouds.all}`;
    let Seven = document.getElementById("bottom");
    let weat=document.createElement("h3");
     weat.textContent=`${d.list[0].weather[0].description}`;
    container2.append(humidity,pressure,clouds,weat);
    
// Map.............................................................................................................

 iframe.src=`https://maps.google.com/maps?q=${d.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
 
// 7 Day ..................................................................

}

let Seven = document.getElementById("bottom");
function sevenday(data){
    console.log(data);
    bottom.innerText = "";

    const weekday = ["Today","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"];

    let count = 0;
    
    data.list.forEach(function (el) {

        let card = document.createElement("div");
        card.setAttribute("id","seven");


        let days = document.createElement("h5");
        days.innerText = weekday[count++];

        let icon = document.createElement("img");
        icon.src = "https://cdn-icons-png.flaticon.com/512/414/414927.png";

        let temp = document.createElement("p");
        temp.innerText = `Temp - ${el.main.temp}°`;

        card.append(days,icon,temp);
        Seven.append(card);
    })

}
