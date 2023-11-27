import { NextApiRequest, NextApiResponse } from 'next';
import villages from '../data/villages.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const village = villages.find(char => char.id === Number(id));
	if (!village) {
		return res.status(404).send(`Village with id '${id}' not found`);
	}
	return res.json(village);
};

export default handler;
