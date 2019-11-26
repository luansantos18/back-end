//index, show , store ,update ,destroy
import { Plano_Acao } from '../models'

const create = async (req, res) => {
    try {
        const planoAcao = await Plano_Acao.create(req.body);
        return res.status(201).json({
            planoAcao: planoAcao,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const planoAcoes = await Plano_Acao.findAll();
        return res.status(200).json({ planoAcoes });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getById = async (req, res) => {
    try {
        const { planoAcaoId } = req.params;
        const planoAcao = await Plano_Acao.findOne({
            where: { id: planoAcaoId }
        });
        if (planoAcao) {
            return res.status(200).json({ planoAcao: planoAcao });
        }
        return res.status(404).send('Plano acao with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const update = async (req, res) => {
    try {
        const { planoAcaoId } = req.params;
        const [updated] = await Plano_Acao.update(req.body, {
            where: { id: planoAcaoId }
        });
        if (updated) {
            const updatedPlanoAcao = await Plano_Acao.findOne({ where: { id: planoAcaoId } });
            return res.status(200).json({ planoAcao: updatedPlanoAcao });
        }
        throw new Error('PlanoAcao not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const destroy = async (req, res) => {
    try {
        const { planoAcaoId } = req.params;
        const deleted = await Plano_Acao.destroy({
            where: { id: planoAcaoId }
        });
        if (deleted) {
            return res.status(204).send("Plano Acao deleted");
        }
        throw new Error("Plano Acao not found");
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