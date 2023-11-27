import { NextApiRequest, NextApiResponse } from 'next';
import clans from '../data/clans.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const clan = clans.find(char => char.id === Number(id));
	if (!clan) {
		return res.status(404).send(`Clan with id '${id}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(clan);
};

export default handler;
