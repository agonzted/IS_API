const { Router } = require('express');
const router = Router();

const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json({ users: users });
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const users = await User.find();
    const { user, password, email } = req.body;
    var contador = 0;
    for (x = 0; x < users.length; x++) {
        if (users[x]['user'] == user) {
            contador++;
        }
    }
    if (user && password && email) {
        if(contador>0){
            res.send('Bad request')
        }else{
            const user = new User(req.body);
            await user.save();
            res.send('received')
        }
    } else {
        res.send('Bad request')
    }
    res.json({ "titulo": "funciono xD" })
});

module.exports = router;