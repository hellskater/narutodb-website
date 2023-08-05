import { NextApiRequest, NextApiResponse } from 'next';
import teams from '../data/teams.json';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 20;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;

	const teamsToReturn = teams.slice(startIndex, endIndex);

	return res.status(200).json({
		teams: teamsToReturn,
		currentPage: page,
		pageSize: limit,
		totalTeams: teams.length,
	});
};

export default handler;
