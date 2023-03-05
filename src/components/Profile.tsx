import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import get from 'lodash/get';
import { useTheme } from 'next-themes';
import styles from '../styles/styles.module.scss';

// credit: https://codesandbox.io/s/laughing-swirles-fweirz?file=/src/App.js:0-3960

type Props = {
	profileDetails: {
		name: string;
		profile_image_url: string;
		designation: string;
		github_url: string;
		twitter_url: string;
		linkedin_url: string;
	};
};

export default function Profile({ profileDetails }: Props) {
	const { resolvedTheme } = useTheme();
	const [lightMode, setLightMode] = useState(false);

	useEffect(() => {
		setLightMode(resolvedTheme === 'light');
	}, [resolvedTheme]);

	return (
		<Box
			sx={{
				backgroundColor: lightMode ? '#FFFFFF' : '#000000',
			}}
			className={styles.card}
			key={get(profileDetails, ['name'])}
		>
			<div className={`${styles.card} ${styles.ds_top}`} />
			<div className={styles.avatar_holder}>
				<img
					src={get(profileDetails, ['profile_image_url'])}
					alt={get(profileDetails, ['name'], 'User Image')}
				/>
			</div>
			<div className={styles.name}>{get(profileDetails, ['name'], 'User Name')}</div>

			<div className={styles.designation}>{get(profileDetails, ['designation'])}</div>

			<div className={styles.ds_info}>
				<div className={`${styles.ds} ${styles.twitter}`}>
					<a href={get(profileDetails, ['twitter_url'])} target="_blank" rel="noreferrer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							width="32px"
							height="32px"
							fill="#00acee"
						>
							<path d="M 28 8.558594 C 27.117188 8.949219 26.167969 9.214844 25.171875 9.332031 C 26.1875 8.722656 26.96875 7.757813 27.335938 6.609375 C 26.386719 7.171875 25.332031 7.582031 24.210938 7.804688 C 23.3125 6.847656 22.03125 6.246094 20.617188 6.246094 C 17.898438 6.246094 15.691406 8.453125 15.691406 11.171875 C 15.691406 11.558594 15.734375 11.933594 15.820313 12.292969 C 11.726563 12.089844 8.097656 10.128906 5.671875 7.148438 C 5.246094 7.875 5.003906 8.722656 5.003906 9.625 C 5.003906 11.332031 5.871094 12.839844 7.195313 13.722656 C 6.386719 13.695313 5.628906 13.476563 4.964844 13.105469 C 4.964844 13.128906 4.964844 13.148438 4.964844 13.167969 C 4.964844 15.554688 6.660156 17.546875 8.914063 17.996094 C 8.5 18.109375 8.066406 18.171875 7.617188 18.171875 C 7.300781 18.171875 6.988281 18.140625 6.691406 18.082031 C 7.316406 20.039063 9.136719 21.460938 11.289063 21.503906 C 9.605469 22.824219 7.480469 23.609375 5.175781 23.609375 C 4.777344 23.609375 4.386719 23.585938 4 23.539063 C 6.179688 24.9375 8.765625 25.753906 11.546875 25.753906 C 20.605469 25.753906 25.558594 18.25 25.558594 11.742188 C 25.558594 11.53125 25.550781 11.316406 25.542969 11.105469 C 26.503906 10.410156 27.339844 9.542969 28 8.558594 Z" />
						</svg>
					</a>
				</div>

				<div className={`${styles.ds} ${styles.github}`}>
					<a href={get(profileDetails, ['github_url'])} target="_blank" rel="noreferrer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							width="32px"
							height="32px"
							fill={lightMode ? '#000000' : '#FFFFFF'}
						>
							<path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
						</svg>
					</a>
				</div>

				<div className={`${styles.ds} ${styles.linkedin}`}>
					<a
						href={get(profileDetails, ['linkedin_url'])}
						target="_blank"
						rel="noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 30 30"
							width="30px"
							height="30px"
							fill="#0072b1"
						>
							<path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
						</svg>
					</a>
				</div>
			</div>
		</Box>
	);
}
