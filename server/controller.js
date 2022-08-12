const { request, response } = require("express");

let fortunes = ['A faithful friend is a strong defense', 'A fresh start will put you on your way', 'A friend is a present you give yourself', 'A good time to finish old tasks', 'A pleasant surprise is waiting for you... you absolute CHAD'];

        
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let randomInd = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomInd];

        res.status(200).send(randomFortunes);
    },
    deleteFortune: (req, res) => {
        if (fortunes.length > 0) { 
            let index = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[index]
            fortunes.splice(randomFortune, 1)
            console.log(randomFortune)
            console.log(fortunes)
            res.status(200).send(randomFortune)} 
        else{
            res.status(400);
        }
    },   
    postWisdom: (request, response) => {
        console.log(request.params)
        console.log(request.body)
        let {banana} = request.params
        fortunes.push(banana)
        console.log(fortunes)
     response.status(200).send(('Thanks for sharing'))
    },
    updateWisdom: (request, response) => {
        let {updated_Wisdom, id} = request.body
        let index = parseInt(id)
        fortunes.splice(1, 1, updated_Wisdom)
        console.log(fortunes)
        response.status(200).send('wise words have turned wiser')
    }
}
