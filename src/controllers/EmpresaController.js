//index, show , store ,update ,destroy
import { Empresa, Valor } from '../models'

import models from '../models'

const create = async (req, res) => {
    try {

        const { valores, ...data } = req.body;
        const empresa = await Empresa.create(data);

        if (valores && valores.length > 0) {
            empresa.setValores(valores);
        }

        return res.status(201).json({
            empresa,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const empresas = await Empresa.findAll({

            include: [
                {
                    model: models.Valor,
                    as: 'valores'
                }
            ]
        }
        );
        return res.status(200).json(empresas);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const { empresaId } = req.params;
        const empresa = await Empresa.findOne({
            where: { id: empresaId }
        });
        if (empresa) {
            return res.status(200).json({ empresa: empresa });
        }
        return res.status(404).send('Empresa with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        const { empresaId } = req.params;
        const [updated] = await Empresa.update(req.body, {
            where: { id: empresaId }
        });
        if (updated) {
            const updatedEmpresa = await Empresa.findOne({ where: { id: empresaId } });
            return res.status(200).json({ empresa: updatedEmpresa });
        }
        throw new Error('Empresa not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const destroy = async (req, res) => {
    try {
        const { empresaId } = req.params;
        const deleted = await Empresa.destroy({
            where: { id: empresaId }
        });
        if (deleted) {
            return res.status(204).send("Empresa deleted");
        }
        throw new Error("Empresa not found");
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