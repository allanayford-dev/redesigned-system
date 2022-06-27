const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(200).json({ message: `API has been successfully created.` });
});

app.listen(process.env.PORT, () => {
    console.log(`This application is running on ${process.env.HOST}:${process.env.PORT}`)
})