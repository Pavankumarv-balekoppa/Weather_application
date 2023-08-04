//http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=1cb6532aea3c298a830a71380eace21e

let city=document.getElementById('city')
let country=document.getElementById('country')
let digri=document.getElementById('digri')
let user_input=document.getElementById('user_input')

let searchTemp=async()=>
{
    let cityvalue=user_input.value
   if(cityvalue=="")
   {
    alert('please enter city name before search')
   }
   else
   {
    // alert(`You entered city is :  ${cityvalue}`)
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
    let data=await response.json()
    city.innerText=data.name
    country.innerText=data.sys.country
    digri.innerText=data.main.temp
   }
}
