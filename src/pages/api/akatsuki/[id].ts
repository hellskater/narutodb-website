import { NextApiRequest, NextApiResponse } from 'next';
import akatsukis from '../data/akatsuki.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const akatsuki = akatsukis.find(char => char.id === Number(id));
	if (!akatsuki) {
		return res.status(404).send(`Akatsuki member with id '${id}' not found`);
	}
	return res.json(akatsuki);
};

export default handler;
