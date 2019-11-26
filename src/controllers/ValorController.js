//create, getAll , getById ,update ,destroy
import { Valor } from '../models'

const create = async (req, res) => {
    try {
        const valor = await Valor.create(req.body);
        return res.status(201).json({
            valor: valor,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const valores = await Valor.findAll();
        return res.status(200).json({ valores });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const { valorId } = req.params;
        const valor = await Valor.findOne({
            where: { id: valorId }
        });
        if (valor) {
            return res.status(200).json({ valor: valor });
        }
        return res.status(404).send('Valor with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        const { valorId } = req.params;
        const [updated] = await Valor.update(req.body, {
            where: { id: valorId }
        });
        if (updated) {
            const updatedValor = await Valor.findOne({ where: { id: valorId } });
            return res.status(200).json({ valor: updatedValor });
        }
        throw new Error('Valor not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const destroy = async (req, res) => {
    try {
        const { valorId } = req.params;
        const deleted = await Valor.destroy({
            where: { id: valorId }
        });
        if (deleted) {
            return res.status(204).send("Valor deleted");
        }
        throw new Error("Valor not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    destroy
}