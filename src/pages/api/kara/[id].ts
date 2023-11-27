import { NextApiRequest, NextApiResponse } from 'next';
import karas from '../data/kara.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const kara = karas.find(char => char.id === Number(id));
	if (!kara) {
		return res.status(404).send(`Kara member with id '${id}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(kara);
};

export default handler;
