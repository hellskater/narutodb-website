import { NextApiRequest, NextApiResponse } from 'next';
import akatsukis from '../data/akatsuki.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const akatsuki = akatsukis.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!akatsuki) {
		return res.status(404).send(`Akatsuki member with name '${name}' not found`);
	}
	return res.json(akatsuki);
};

export default handler;
