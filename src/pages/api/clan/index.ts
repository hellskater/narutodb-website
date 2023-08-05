import { NextApiRequest, NextApiResponse } from 'next';
import clans from '../data/clans.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const clansToReturn = clans.slice(startIndex, endIndex);

	return res.status(200).json({
		clans: clansToReturn,
		currentPage: page,
		pageSize: limit,
		totalClans: clans.length,
	});
};

export default handler;
