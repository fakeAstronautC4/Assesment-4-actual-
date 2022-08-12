const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById('fortuneButton')
const fortuneDelBtn = document.getElementById('fortuneDelButton')

const uWisdom = document.querySelector('#fff')

const wiseWords = document.querySelector('#share')


const getFortune = (event) => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCompliment = (event) => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

// ===========================================================

const deleteFortune = (event) => {
    axios.delete('http://localhost:4000/api/fortune/delete')
        .then(res => {
            const data = res.data;
            alert(data +' ==> has been deleted');
    })
    .catch(err => {
        console.log(err);
    });
};
const postWisdom = (event) => {
    event.preventDefault()
    const inputField = document.querySelector('#wisdom')
    console.log(inputField.value)
    let wisdom = inputField.value
    let wisdomObj = {
        wisdom
    }
    axios.post(`http://localhost:4000/api/wisdom/${wisdom}`, wisdomObj)
        .then(res => {
            const data2 = res.data;
            alert(data2)
        })
        .catch(err => {
            console.log(err);
        });
}

const updateWisdom = (event) => {
    event.preventDefault()
    const wiseWordField = document.getElementById('#updatewisdom')
    const idToChange = document.getElementById('#id_wisdom')

    let upwisdomObj = {
        new_wisdom: wiseWordField.value,
        id_toChange: idToChange.value
    }
    console.log(upwisdomObj)
    
    axios.put("http://localhost:4000/api/wisdom/update", upwisdomObj)
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
uWisdom.addEventListener('submit', updateWisdom)