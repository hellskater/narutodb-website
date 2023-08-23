import { NextApiRequest, NextApiResponse } from 'next';
import kara from '../data/kara.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const karaToReturn = kara.slice(startIndex, endIndex);

	return res.status(200).json({
		kara: karaToReturn,
		currentPage: page,
		pageSize: limit,
		totalKara: kara.length,
	});
};

export default handler;
