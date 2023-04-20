const express = require('express');
const {readFileSync, writeFileSync} = require('fs');
const app = express();

app.get('/', (req, res) => {
    const count = readFileSync('./count.txt', 'utf8');
    console.log('count: ', count)

    const increment = parseInt(count) + 1

    writeFileSync('./count.txt', increment.toString());

    res.send(`
    
        <DOCTYPE html>
        <HTML lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Stilo's test website</title>
        </head>
        <body>
            <h1>Welcome!</h1>
            <p>This page has been viewed ${increment} times </p>
        </body>
        </HTML>
    `);
})
 
app.get('/new', (req, res) => {
    res.send('This is a new HTTP endpoint!')
})

app.listen(3000, () => {
    console.log('Server running on port 3000.')
})