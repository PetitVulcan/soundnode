const express = require('express');

const app = express();
const fs = require('fs');
const bodyparser = require('body-parser');

const users = JSON.parse(fs.readFileSync('./json/users.json', 'utf-8'));

app.use(bodyparser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-control-Allow-origin', '*');
    res.header('Access-control-Allow-headers', 'content-type');
    res.header('Access-control-Allow-methods', 'GET');
    next();
});

app.get('/get-playlists/:user_id', (req, res) => {
    const id = Number(req.params.user_id);
    const user = users.find((u) => u.id === id);

    if (user) {
        const playlistsJSON = JSON.parse(
            fs.readFileSync('./json/playlists.json', 'utf-8'),
        );

        if (playlistsJSON) {
            const playlists = playlistsJSON.filter((p) => user.playlists.includes(p.id));

            res.json({ error: false, playlists });
        } else {
            res.json({ error: true });
        }
    } else {
        res.json({ error: true });
    }
});

app.listen(4201);
