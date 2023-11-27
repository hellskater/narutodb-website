import { NextApiRequest, NextApiResponse } from 'next';
import clans from '../data/clans.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const clan = clans.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!clan) {
		return res.status(404).send(`Clan with name '${name}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(clan);
};

export default handler;
