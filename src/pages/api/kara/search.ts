import { NextApiRequest, NextApiResponse } from 'next';
import karas from '../data/kara.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const kara = karas.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!kara) {
		return res.status(404).send(`Kara member with name '${name}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(kara);
};

export default handler;
