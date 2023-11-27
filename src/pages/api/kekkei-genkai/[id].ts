import { NextApiRequest, NextApiResponse } from 'next';
import kekkeiGenkais from '../data/kekkeiGenkai.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const kekkeiGenkai = kekkeiGenkais.find(char => char.id === Number(id));
	if (!kekkeiGenkai) {
		return res.status(404).send(`Kekkei Genkai with id '${id}' not found`);
	}
	return res.json(kekkeiGenkai);
};

export default handler;
