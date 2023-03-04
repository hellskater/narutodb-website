/* eslint-disable import/prefer-default-export */
import get from 'lodash/get';
import sampleSize from 'lodash/sampleSize';

export const generateRandomCharacters = (params: {
	setRandomCharacters: (arr: {
		images: string[];
		personal: {
			clan: string;
			status: string;
		};
	}) => void;

	characters: {
		images: string[];
		personal: {
			clan: string;
			status: string;
		};
	}[];

	limit: number;
}) => {
	const { setRandomCharacters, characters, limit } = params;
	try {
		const newCharacterArray = characters.filter(
			character =>
				get(character, ['images', 'length'], 0) > 0 &&
				get(character, ['personal', 'clan'], null) &&
				get(character, ['personal', 'status'], null),
		);

		const randomSixCharacter = sampleSize(newCharacterArray, limit);
		setRandomCharacters(randomSixCharacter);
	} catch {
		// eslint-disable-next-line no-console
		console.log('Could not find characters');
	}
};
