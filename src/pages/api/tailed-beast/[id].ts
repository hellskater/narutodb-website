import { NextApiRequest, NextApiResponse } from 'next';
import tailedBeasts from '../data/tailedbeasts.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const tailedBeast = tailedBeasts.find(char => char.id === Number(id));
	if (!tailedBeast) {
		return res.status(404).send(`Tailed Beast with id '${id}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(tailedBeast);
};

export default handler;
