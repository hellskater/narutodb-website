import { NextApiRequest, NextApiResponse } from 'next';
import characters from '../data/characters.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const charactersToReturn = characters.slice(startIndex, endIndex);

	return res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({
		characters: charactersToReturn,
		currentPage: page,
		pageSize: limit,
		totalCharacters: characters.length,
	});
};

export default handler;
