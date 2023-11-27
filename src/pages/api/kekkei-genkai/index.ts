import { NextApiRequest, NextApiResponse } from 'next';
import kekkeiGenkais from '../data/kekkeiGenkai.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const kekkeiGenkaisToReturn = kekkeiGenkais.slice(startIndex, endIndex);

	return res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({
		kekkeigenkai: kekkeiGenkaisToReturn,
		currentPage: page,
		pageSize: limit,
		totalKekkeiGenkai: kekkeiGenkais.length,
	});
};

export default handler;
