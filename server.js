const express = require('express');
const app = express();
const port = 3000;

app.get('/getFunction', (req, res) => {
    const language = req.query.language;
    let functionName = '';
    let functionDefinition = '';
    let functionBody = '';
    let functionArgs = [];

    switch (language) {
        case 'php':
            functionName = 'addNumbers'
            functionDefinition = `function ${functionName}($num1, $num2) {
                return intval($num1) + intval($num2);
            }`;
            functionBody = `return intval($num1) + intval($num2);`
            functionArgs = ['$num1', '$num2'];
            break;
        case 'python':
            functionName = 'add_numbers'
            functionDefinition = `def ${functionName}(num1, num2):
            \treturn int(num1) + int(num2)`;
            functionBody = `return int(num1) + int(num2)`;
            functionArgs = ['num1', 'num2'];
            break;
        default:
            functionName = 'addNumbers'
            functionDefinition = `function ${functionName}(num1, num2) {
                return Number(num1) + Number(num2);
            }`;
            functionBody = `return Number(num1) + Number(num2)`;
            functionArgs = ['num1', 'num2'];
            break;
    }

    const response = {
        functionName: functionName,
        functionArgs: functionArgs,
        functionDefinition: functionDefinition,
        functionBody: functionBody
    };

    res.json(response);
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


