const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const fortuneDelBtn = document.getElementById('fortuneDelButton')

const wiseWords = document.querySelector('form')

const errFunky = err => console.log(err)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

// ===========================================================

const deleteFortune = () => {
    axios.delete('http://localhost:4000/api/fortune/delete')
        .then(res => {
            const data = res.data;
            alert(data +' ==> has been deleted');
    })
    .catch(err => {
        console.log(err);
    });
};
const postWisdom = () => {
     axios.post("http://localhost:4000/api/wisdom/")
         .then(res => {
             const data2 = res.data;
             alert(data2)
     })
     .catch(err => {
             console.log(err);
     });
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
fortuneDelBtn.addEventListener('click', deleteFortune)

wiseWords.addEventListener('submit', postWisdom)