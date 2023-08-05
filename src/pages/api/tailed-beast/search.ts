import { NextApiRequest, NextApiResponse } from 'next';
import tailedBeasts from '../data/tailedbeasts.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const tailedBeast = tailedBeasts.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!tailedBeast) {
		return res.status(404).send(`Tailed Beast with name '${name}' not found`);
	}
	return res.json(tailedBeast);
};

export default handler;
