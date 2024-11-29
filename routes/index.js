const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index')
})



router.get('/submit-data', function(req, res, next) {
    const formData = req.query
    console.log(formData)

    const height = Number(formData.height) //Number() turns number string into an integer
    console.log(height)
    const weight = Number(formData.weight)
    console.log(weight)

    if (height > 0 && weight > 0) { //If valid height and weight is entered, BMI is calculated and sent to an HTML file
        const BMI = weight / (height * height)
        console.log(BMI)
        res.render('result', { //If inputs arent valid, redirects to an error page
            bmi: BMI
        })
    } else {
        res.render('error')
    }
})



module.exports= router