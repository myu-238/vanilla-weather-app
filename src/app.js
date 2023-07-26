function displayTemperature(response) {
        consolel.log(response.data.main.temp);
}

let apiKey = "28842fobf1a190b0t62a268683055905";
let city = "New York";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metrics`;

axios.get(apiUrl).then(displayTemperature);
