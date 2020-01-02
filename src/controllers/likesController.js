const Dev = require('../models/dev');

module.exports = {
    async store(req, res) {
        const { dev_id } = req.params;
        const { user_id }  = req.headers;

        const loggedDev = await Dev.findById(user_id);
        const targetDev = await Dev.findById(dev_id);


        if(!targetDev){
            return res.status(400).json({ error: 'dev not exists'});
        };

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('DEU MATCH...S2')
        };

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();


        return res.json(loggedDev)
    },
};