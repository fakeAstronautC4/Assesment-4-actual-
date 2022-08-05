// const { getWisdom } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const wiseWords = document.getElementById('wisdom')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
    });
};

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postWisdom = () => {
    axios.post("http://localhost:4000/api/wisdom/", {
        someStr
    })
        .then(res => {
            const data2 = res.data;
            alert(data2)
    });
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
wiseWords.addEventListener('submit', postWisdom)