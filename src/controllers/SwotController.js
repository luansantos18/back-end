const { Swot } = require('../models')

const create = async (req, res) => {
    try {
        const swot = await Swot.create(req.body);
        return res.status(201).json({
            swot,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const swots = await Swot.findAll();
        return res.status(200).json({ swots });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const { swotId } = req.params;
        const swot = await Swot.findOne({
            where: { id: swotId }
        });
        if (swot) {
            return res.status(200).json({ swot: swot });
        }
        return res.status(404).send('Swot with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getByName = async (req, res) => {
    try {
        const { swotName } = req.params;
        const swots = await Swot.findAll({
            where: { nome: swotName }
        });
        if (swots) {
            return res.status(200).json({ swots });
        }
        return res.status(404).send('ñ tem nenhum aqui');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const update = async (req, res) => {
    try {
        const { swotId } = req.params;
        const [updated] = await Swot.update(req.body, {
            where: { id: swotId }
        });
        if (updated) {
            const updatedSwot = await Swot.findOne({ where: { id: postId } });
            return res.status(200).json({ swot: updatedSwot });
        }
        throw new Error('Swot not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const destroy = async (req, res) => {
    try {
        const { swotId } = req.params;
        const deleted = await Swot.destroy({
            force: true,
            where: { id: swotId }
        });
        if (deleted) {
            return res.status(204).send("Swot deleted");
        }
        throw new Error("Swot not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    create,
    getAll,
    getById,
    getByName,
    update,
    destroy
}