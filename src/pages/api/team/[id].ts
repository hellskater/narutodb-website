import { NextApiRequest, NextApiResponse } from 'next';
import teams from '../data/teams.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const team = teams.find(char => char.id === Number(id));
	if (!team) {
		return res.status(404).send(`Team with id '${id}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(team);
};

export default handler;
