const sub = document.getElementById("submitbtn");
const cityName = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const min_temp = document.getElementById('mintemp');
const max_temp = document.getElementById('maxtemp');
const press = document.getElementById('pressure');
const humidity = document.getElementById('humidity');

const LocFunction = async(loc) =>{
  let cityVal = loc;
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=199f221bdf35cc500b974dd35c22161c`;
    const response = await fetch(url);

    const data = await response.json();
    const arrData = [data];

    city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
    temp_real_val.innerText = arrData[0].main.temp + '°';
    min_temp.innerText = arrData[0].main.temp_min+ '°';
    max_temp.innerText = arrData[0].main.temp_max+ '°';
    press.innerText = arrData[0].main.pressure+ ' hPA';
    humidity.innerText = arrData[0].main.humidity +'%';
    const tempMood = arrData[0].weather[0].main;
    

    //condition to check sunny or cloudy
    if (tempMood == 'Clear') {
      document.getElementById("bg1").style.backgroundImage = "url(./img/imgsunny.jpg)";
      temp_status.innerHTML =
        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        
    
    } else if (tempMood == 'Clouds') {
      temp_status.innerHTML =
        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        document.getElementById("bg1").style.backgroundImage = "url(./img/imgcloud.jpg)";
        document.body.style.color = "white";
       
    } else if (tempMood == 'Rain') {
      temp_status.innerHTML =
        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        document.getElementById("bg1").style.backgroundImage = "url(./img/imgrain.jpg)";
        document.body.style.color = "white";
      
    } else {
      temp_status.innerHTML =
        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
        document.getElementById("bg1").style.backgroundImage = "url(./img/imgsunny.jpg)";
      
        }
  } catch {
  }
}


const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === '') {
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add('data_hide');
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=199f221bdf35cc500b974dd35c22161c`;
      const response = await fetch(url);

      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerText = arrData[0].main.temp + '°';
      min_temp.innerText = arrData[0].main.temp_min+ '°';
      max_temp.innerText = arrData[0].main.temp_max+ '°';
      press.innerText = arrData[0].main.pressure+ ' hPA';
      humidity.innerText = arrData[0].main.humidity +'%';
    
      const tempMood = arrData[0].weather[0].main;
      

      //condition to check sunny or cloudy
      if (tempMood == 'Clear') {
        document.getElementById("bg1").style.backgroundImage = "url(./img/imgsunny.jpg)";
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          
      
      } else if (tempMood == 'Clouds') {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
          document.getElementById("bg1").style.backgroundImage = "url(./img/imgcloud.jpg)";
         
      } else if (tempMood == 'Rain') {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          document.getElementById("bg1").style.backgroundImage = "url(./img/imgrain.jpg)";
        
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
          document.getElementById("bg1").style.backgroundImage = "url(./img/imgsunny.jpg)";
        
          }
      datahide.classList.remove('data_hide');
      cityVal = '';
    } catch {
      cityVal = ' ';
      datahide.classList.add('data_hide');
      city_name.innerText = `please enter the proper city name`;
      console.log('please add the proper city name');
    }
  }
};

submitbtn.addEventListener('click', getInfo);
        
