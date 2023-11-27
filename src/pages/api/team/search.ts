import { NextApiRequest, NextApiResponse } from 'next';
import teams from '../data/teams.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const team = teams.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!team) {
		return res.status(404).send(`Team with name '${name}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(team);
};

export default handler;
