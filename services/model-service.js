const Model = require('../models/model');
const { Op } = require("sequelize")

const getAll = async function (req) {
    if (req.query.name) return await Model.findAll({
        where: {
            name: {
                [Op.like]: `${req.query.name}%`
            }
        }
    });
    return await Model.findAll({raw: true});
};

const getById = async function (req) {
    return await Model.findOne({
        where: {idModel: req.params.id},
    });
};

const update = async function (req) {
    return await Model.update({
          name: req.body.name,
          lastName: req.body.lastName,
          country: req.body.country,
          email: req.body.email,
          age: req.body.age,
          address: req.body.address,
          gender: req.body.gender,
          birthday: req.body.birthday,
          growth: req.body.growth,
          bust: req.body.bust,
          waist: req.body.waist,
          footSize: req.body.footSize,
          weight: req.body.weight,
          appearance: req.body.appearance,
          eyeColor: req.body.eyeColor,
          hairColor: req.body.hairColor,
          hairType: req.body.hairType,
          notes: req.body.notes,
    }, {where: {
        idModel: req.params.id,
    }});
};

const add = async function (body) {
    return await Model.create({
        name: body.name,
        lastName: body.lastName,
        country: body.country,
        email: body.email,
        age: body.age,
        address: body.address,
        gender: body.gender,
        birthday: body.birthday,
        growth: body.growth,
        bust: body.bust,
        waist: body.waist,
        footSize: body.footSize,
        weight: body.weight,
        appearance: body.appearance,
        eyeColor: body.eyeColor,
        hairColor: body.hairColor,
        hairType: body.hairType,
        notes: body.notes,
    });
};

const del = async function (req) {
    return await Model.destroy({where: {idModel: req.params.id}});
};

module.exports = {
    getAll,
    getById,
    update,
    add,
    del,
}
