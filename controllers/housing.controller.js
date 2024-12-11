const { sequelize } = require("../config/db")
const { Models } = require('../models/modelValidations');

const housing = Models.Housing;

exports.createProperty = async (req, res) => {
    try {
        const { title, description, location, price, features } = req.body;
        if (!title || !location || !price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        if (!Array.isArray(location) || location.length !== 2 || 
            typeof location[0] !== 'number' || typeof location[1] !== 'number') {
            return res.status(400).json({ error: 'Location must be an array [latitude, longitude]' });
        }
        const property = await housing.create({
            title,
            description,
            location,
            price,
            features,
        });
        return res.status(201).json({
            property: property,
            message: "Property created succesfully"
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getAllProperties = async (req, res) => {
    let filter = {};
    if(req.query.id){
        filter.id = req.query.id;
    }

    let offset = parseInt(req.query.offset) || 0;
    let limit = parseInt(req.query.limit) || 10;

    try {
        const properties = await housing.findAndCountAll({
            where: filter,
            order: [['id', 'ASC']],
            offset: offset,
            limit: limit
        })
        return res.status(200).json(properties);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.getPropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await housing.findByPk(id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        return res.status(200).json(property);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.updatePropertyById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Define allowed fields for update
        const allowedFields = ['title', 'description', 'location', 'price', 'status', 'features'];

        // Filter the updatedData object
        const filteredData = Object.keys(updatedData)
        .filter(key => allowedFields.includes(key))
        .reduce((obj, key) => {
            obj[key] = updatedData[key];
            return obj;
        }, {});

        // Check if there's anything to update
        if (Object.keys(filteredData).length === 0) {
            return res.status(400).json({ error: 'No valid fields are provided for update' });
        }

        const property = await housing.findByPk(id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        await property.update(filteredData);

        return res.status(200).json({
            property: property,
            message: "Property Updated Succesfully"
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deletePropertyById = async (req, res) => {
    try {
        const { id } = req.params;

        const property = await housing.findByPk(id);

        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        await property.update({ status: 'deleted' });
        
        return res.status(200).json({ 
            message: 'Property marked as deleted successfully',
            property: { id: property.id, status: property.status }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};