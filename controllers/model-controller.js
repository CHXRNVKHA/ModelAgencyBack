const service = require('../services/model-service');

class ModelController {
    constructor(){};

    getAllModels = async (req, res) => {
        try {
            const result = await service.getAll(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    getModelById = async (req, res) => {
        try {
            const result = await service.getById(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    updateModel = async (req, res) => {
        try {
            const result = await service.update(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    addModel = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };

    deleteModel = async (req, res) => {
        try {
            const result = await service.del(req);
            res.send(result);
        }
        catch (e) {
            res.status(400).send({error:e.message});
        }
    };
}

module.exports = ModelController;