import { NextApiRequest, NextApiResponse } from 'next';
import villages from '../data/villages.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const village = villages.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!village) {
		return res.status(404).send(`Village with name '${name}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(village);
};

export default handler;
