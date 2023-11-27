import { NextApiRequest, NextApiResponse } from 'next';
import kekkeiGenkais from '../data/kekkeiGenkai.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const kekkeiGenkai = kekkeiGenkais.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!kekkeiGenkai) {
		return res.status(404).send(`Kekkei Genkai with name '${name}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(kekkeiGenkai);
};

export default handler;
