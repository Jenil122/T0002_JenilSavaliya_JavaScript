const map = document.getElementById("map")

navigator.geolocation.getCurrentPosition((pos)=>{
    const longitude = pos.coords.longitude;
    const latitude = pos.coords.latitude
    const {accuracy} = pos.coords
    console.log("longitude: "+ longitude, "latitude: " + latitude, "accuracy: " + accuracy);
    map.innerHTML = '<iframe width="700" height="600" src="https://maps.google.com/maps?q='+latitude+','+longitude+'&amp;z=14&amp;output=embed"></iframe>'
},(error)=>{
    console.log(error);
},{
    maximumAge:0,
    enableHighAccuracy:true,
    timeout:10  
  }
)

const watch = navigator.geolocation.watchPosition((success)=>{
    console.log(success.coords.longitude, success.coords.latitude);
},(error)=>{
    console.log(error);
})

navigator.geolocation.clearWatch(watch,(error)=>{
    console.log(error);
})