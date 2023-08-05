import * as React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import get from 'lodash/get';

type Props = {
	characterData: {
		id: string;
		name: string;
		images: string[];
		personal: {
			status: string;
			clan: string;
		};
	};
};

export default function MultiActionAreaCard({ characterData }: Props) {
	const status = get(characterData, ['personal', 'status'], false);

	const getResolvedImageUrl = () => {
		let imageURL = '';
		if (get(characterData, ['images', 0], '').includes('.png')) {
			imageURL = `${get(characterData, ['images', 0], '').split('.png')[0]}.png`;
			return imageURL;
		}
		if (get(characterData, ['images', 0], '').includes('.jpg')) {
			imageURL = `${get(characterData, ['images', 0], '').split('.jpg')[0]}.jpg`;
			return imageURL;
		}
		if (get(characterData, ['images', 0], '').includes('.PNG')) {
			imageURL = `${get(characterData, ['images', 0], '').split('.PNG')[0]}.PNG`;
			return imageURL;
		}
		return false;
	};

	return (
		<Card sx={{ maxWidth: 450, minWidth: 330, fontFamily: 'Naruto' }} elevation={4}>
			<CardActionArea
				onClick={() =>
					window.open(`https://narutodb.xyz/api/character/${characterData.id}`, '_blank')
				}
			>
				<CardMedia
					sx={{
						maxHeight: '8rem',
						minWidth: '16rem',
					}}
					component="img"
					height="140"
					image={
						getResolvedImageUrl() ||
						'https://c4.wallpaperflare.com/wallpaper/738/62/544/naruto-chidori-naruto-naruto-uzumaki-rasengan-naruto-sasuke-uchiha-hd-wallpaper-preview.png'
					}
					alt="Character Image"
				/>
				<CardContent>
					<Typography
						variant="body2"
						color="text.secondary"
						component="div"
						sx={{
							fontFamily: 'Naruto',
							wordSpacing: '0.5rem',
						}}
					>
						{characterData?.name || '-'}
					</Typography>
					{status === 'Deceased' ? (
						<>
							<FiberManualRecordIcon color="error" fontSize="small" />
							<Typography
								gutterBottom
								color="text.secondary"
								variant="caption"
								sx={{
									fontFamily: 'Naruto',
								}}
							>
								Dead
							</Typography>
						</>
					) : (
						<>
							<FiberManualRecordIcon color="success" fontSize="small" />
							<Typography
								gutterBottom
								variant="caption"
								color="text.secondary"
								sx={{
									fontFamily: 'Naruto',
								}}
							>
								Alive
							</Typography>
						</>
					)}
					<Typography
						gutterBottom
						variant="caption"
						color="text.secondary"
						component="div"
						sx={{
							fontFamily: 'Naruto',
						}}
					>
						Clan: {characterData?.personal?.clan || '-'}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
