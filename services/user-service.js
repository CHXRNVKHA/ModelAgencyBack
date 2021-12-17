const User = require('../models/user');
const { Op } = require("sequelize")

const getAll = async function (req) {
    return await User.findAll({raw: true});
};

const getById = async function (req) {
    return await User.findOne({
        where: {idUser: req.params.id},
    });
};

const del = async function (req) {
    return await User.destroy({where: {idUser: req.params.id}});
};


const update = async function (req) {
    return await User.update({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    }, {where: {
        idUser: req.params.id,
    }});
};

const add = async function (req) {
    return await User.create({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    });
};


module.exports = {
    getAll,
    getById,
    update,
    add,
    del,
}