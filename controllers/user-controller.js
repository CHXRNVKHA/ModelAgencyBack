const service = require('../services/user-service');

class UserController {
    constructor(){};
    
    getAllUsers = async (req, res) => {
        try {
            const result = await service.getAll(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    getUserById = async (req, res) => {
        try {
            const result = await service.getById(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    updateUser = async (req, res) => {
        try {
            const result = await service.update(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    addUser = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    deleteUser = async (req, res) => {
        try {
            const result = await service.del(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
}

module.exports = UserController;