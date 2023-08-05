import { NextApiRequest, NextApiResponse } from 'next';
import tailedBeasts from '../data/tailedBeasts.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const tailedBeastsToReturn = tailedBeasts.slice(startIndex, endIndex);

	return res.status(200).json({
		tailedBeasts: tailedBeastsToReturn,
		currentPage: page,
		pageSize: limit,
		totalTailedBeasts: tailedBeasts.length,
	});
};

export default handler;
