import { NextApiRequest, NextApiResponse } from 'next';
import characters from '../data/characters.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (!id) {
		return res.status(400).send(`Id parameter is required`);
	}

	const character = characters.find(char => char.id === Number(id));
	if (!character) {
		return res.status(404).send(`Character with id '${id}' not found`);
	}
	return res.setHeader('Access-Control-Allow-Origin', '*').json(character);
};

export default handler;
