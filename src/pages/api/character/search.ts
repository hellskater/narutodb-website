import { NextApiRequest, NextApiResponse } from 'next';
import characters from '../data/characters.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const name = req.query.name as string;

	if (!name) {
		return res.status(400).send(`Name query parameter is required`);
	}

	const character = characters.find(char => char.name.toLowerCase() === name.toLowerCase());
	if (!character) {
		return res.status(404).send(`Character with name '${name}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(character);
};

export default handler;
