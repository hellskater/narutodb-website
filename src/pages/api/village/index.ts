import { NextApiRequest, NextApiResponse } from 'next';
import villages from '../data/villages.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const villagesToReturn = villages.slice(startIndex, endIndex);

	return res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({
		villages: villagesToReturn,
		currentPage: page,
		pageSize: limit,
		totalVillages: villages.length,
	});
};

export default handler;
