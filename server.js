const express = require('express');

const app = express();
const fs = require('fs');
const bodyparser = require('body-parser');

const users = JSON.parse(fs.readFileSync('./json/users.json', 'utf-8'));
const rand = function() {
    return Math.random().toString(36).substr(2);
};

const token = function() {
    return rand() + rand(); 
};
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

app.get('/get-playlists/:user_id', (req, res) => {
    const userId = Number(req.params.user_id);
    const user = users.find((u) => u.id === userId);

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

app.get('/get-user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);

    if (user) {
        res.json({ error: false, user });
    } else {
        res.json({ error: true });
    }
});

app.post('/addUser',function(req,res){
    let data = req.body;
    let lastId = users[users.length-1].id;
    try {
        users.push({id : lastId+1, ...data});
        fs.writeFileSync('json/users.json',JSON.stringify(users));
        res.json({error:false});
    }catch(e){
        res.json({error:true})
    }
})

app.post('/isLogged',function(req,res){
    let data = req.body;
    let user = users.find(x=>x.id ==data.id && x.token == data.token);
    if(user)
    {
        res.json({access:true});
    }
    else {
        res.json({access:false});
    }
})

app.post('/login',function(req,res){
    let data = req.body;
    let user = users.find(x=>x.login ==data.login && x.mdp == data.mdp);
    if(user){
        user.token = token();
        fs.writeFileSync('json/users.json',JSON.stringify(users));
        res.json({logged:true, token : user.token, userId:user.id})
    }
    else {
        res.json({logged:false});
    }
})

app.get('/user-like-track/:user_id/:track_id/:is_liked', (req, res) => {
    const userId = Number(req.params.user_id);
    const user = users.find((u) => u.id === userId);
    const trackId = Number(req.params.track_id);
    const isLiked = req.params.is_liked;

    if (user) {
        if (user.likes.includes(trackId) && isLiked === 'true') {
            // Unlike this previously-liked track.
            user.likes.splice(user.likes.indexOf(trackId), 1);
        } else if (!user.likes.includes(trackId) && isLiked === 'false') {
            // Like this track.
            user.likes.push(trackId);
        }

        fs.writeFileSync('./json/users.json', JSON.stringify(users, null, 4));

        res.json({ error: false, likes: user.likes });
    } else {
        res.json({ error: true });
    }
});

app.listen(4201);
