import { NextApiRequest, NextApiResponse } from 'next';
import akatsuki from '../data/akatsuki.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const akatsukisToReturn = akatsuki.slice(startIndex, endIndex);

	return res.status(200).json({
		akatsuki: akatsukisToReturn,
		currentPage: page,
		pageSize: limit,
		totalMembers: akatsuki.length,
	});
};

export default handler;
