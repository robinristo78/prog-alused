const { error } = require('console');
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const key = '86688134c6cbfc0eac1d2522e5772aea'; //API Key
let city = 'Tartu';

const getWeatherData = (city) => {
    return new Promise((resolve, reject) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                let description = data.weather[0].description;
                let city = data.name;
                let temp = Math.round(parseFloat(data.main.temp)-273.15);

                const result = { 
                    description: description,
                    city: city,
                    temp: temp,
                    error: null
                }
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

app.all('/', (req, res) => {
    let city;
    if (req.method == 'GET') {
        city = 'Tartu';
    }
    else if (req.method == 'POST') {
        city = req.body.cityname;
        let error = city.trim().length == 0 ? 'Your input is empty, please use correct city value.' : null;
        
        if (error) {
            res.render('index', {
                error: error
            });
            return;
        } 
    }
    getWeatherData(city)
        .then((data) => {
            res.render('index', data);
        })
        .catch(error => {
            res.render('index', {
                error: 'Problem with getting data, try again...'
            });
        });
});

// app.get('/', (req, res) => {
//     let city = 'Tartu';
//     getWeatherData(city)
//     .then((data) => {
//         res.render('index', data);
//     });
// });

// app.post('/', (req, res) => {
//     let city = req.body.cityname;
//     getWeatherData(city)
//     .then((data) => {
//         res.render('index', data);
//     });
// });

app.listen(3002, () => {
    console.log('Server started at http://localhost:3002');
});

//https://api.openweathermap.org/data/2.5/weather?q=London
//&appid=86688134c6cbfc0eac1d2522e5772aea
