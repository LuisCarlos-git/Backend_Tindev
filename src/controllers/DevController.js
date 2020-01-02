const axios = require('axios')
const Dev = require('../models/dev');

module.exports = {
    async index(req, res) {
        const { user_id } = req.headers;
        
        const loggedDev = await Dev.findById(user_id)

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user_id }},
                { _id: { $nin: loggedDev.likes }},
                { _id: { $nin: loggedDev.dislikes }},
            ]
        });

        return res.json(users);
    },

    async store(req, res){
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if(userExists){
            return res.json(userExists)
        };


        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, avatar_url: avatar, bio } = response.data;
        
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar,
        });


        return res.json(dev);
    },
};