module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ['A faithful friend is a strong defense', 'A fresh start will put you on your way', 'A friend is a present you give yourself', 'A good time to finish old tasks', 'A pleasant surprise is waiting for you... you absolute CHAD'];

        let randomInd = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomInd];

        res.status(200).send(randomFortunes);
    },
    postWisdom: (req, res) => {
     fortunes.push(req.body)
     res.status(200).send('Thanks for sharing')
    }
    
}