let windspeed = document.getElementById("windspeed").textContent;
windspeed = Number(windspeed.substr(11));
let temperature = document.getElementById("current-temp").innerHTML;
temperature = Number(temperature.substr(0, 2));
// check to make sure they meet the specification limits (<=50°F and>3.0mph) allowed to officially calculate the wind chill, and

if (windspeed < 3 || temperature > 50) {
    const windchill = document.getElementById("windchill");
    windchill.innerHTML = "Windchill: N/A";
} else {
    // 35.74+0.6216*T=35.75*v^0.16+0,4275*T*v^0.16
    const windchill = document.getElementById("windchill");
    const windchillValue = 35.74 + 0.6216 * temperature - 35.75 * windspeed ** 0.16 + 0.4275 * temperature * windspeed ** 0.16;
    windchill.innerHTML = `Windchill: ${windchillValue.toFixed(2)}`;
}