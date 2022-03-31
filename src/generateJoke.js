import axios from 'axios';

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(res => {
        console.log('res', res)
        document.querySelector('#joke').innerHTML = res.data.joke;
    })
}

export default generateJoke;