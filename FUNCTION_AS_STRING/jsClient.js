const axios = require('axios');


const url = 'http://localhost:5000/getFunction?language=js';

axios.get(url)
    .then(response => {
        const data = response.data;
        const functionBody =  data.functionBody;
        const functionArgs =  data.functionArgs;

        const actualFunction = new Function(functionArgs, functionBody)

        console.log( actualFunction(2, 4));
     })
    .catch(error => console.error('Error:', error.message));
