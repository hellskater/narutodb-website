import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from 'next-themes';

function FooterSection() {
	const { resolvedTheme } = useTheme();
	const [lightMode, setLightMode] = useState(false);

	useEffect(() => {
		setLightMode(resolvedTheme === 'light');
	}, [resolvedTheme]);

	return (
		<div className="flex flex-col items-center justify-center border-t-[1px] bg-[#f3f4f6] py-10 dark:border-[#282828] dark:bg-[#171717]">
			<div className="bg flex flex-col items-center justify-center px-5 font-mono lg:px-10">
				<div className="flex gap-5 p-6">
					<a href="https://vercel.com/" target="_blank" rel="noreferrer">
						<div className="flex gap-1">
							<svg
								fill={lightMode ? '#000000' : '#FFFFFF'}
								width="50px"
								height="50px"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fillRule="evenodd" d="M256,48,496,464H16Z" />
							</svg>
							<div className="flex flex-col">
								<Typography
									variant="body2"
									sx={{
										fontWeight: '400',
										color: lightMode ? '#000000' : '#FFFFFF',
									}}
									noWrap
								>
									Deploys By
								</Typography>
								<Typography
									variant="h6"
									sx={{
										fontWeight: '700',
										lineHeight: 1,
										fontSize: '1.55rem',
										color: lightMode ? '#000000' : '#FFFFFF',
									}}
								>
									Vercel
								</Typography>
							</div>
						</div>
					</a>
					<a
						href="https://nextra.site/"
						target="_bl
          "
					>
						<div className="flex items-center gap-2">
							<svg
								height="45"
								viewBox="0 0 70 70"
								fill={lightMode ? '#000000' : '#FFFFFF'}
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="m64.8833 1.81335-2.8464 2.84638C47.1274 19.5692 22.9543 19.5692 8.04485 4.65972L5.19848 1.81335c-.93479-.93478-2.45037-.93478-3.38515 0-.93479.93478-.93478 2.45037 0 3.38515L4.6597 8.04487c14.9095 14.90953 14.9095 39.08263 0 53.99213l-2.84637 2.8463c-.93479.9348-.93479 2.4504 0 3.3852.93478.9348 2.45037.9348 3.38515 0l2.84637-2.8464c14.90955-14.9095 39.08255-14.9095 53.99205 0l2.8464 2.8464c.9348.9348 2.4504.9348 3.3852 0 .9347-.9348.9347-2.4504 0-3.3852l-2.8464-2.8463c-14.9095-14.9095-14.9095-39.0826 0-53.99213l2.8464-2.84637c.9347-.93478.9347-2.45037 0-3.38515-.9348-.93478-2.4504-.93478-3.3852 0Z"
									fill="currentColor"
									stroke="currentColor"
									strokeWidth="2"
								/>
							</svg>
							<div className="flex flex-col">
								<Typography
									variant="body2"
									sx={{
										fontWeight: '400',
										color: lightMode ? '#000000' : '#FFFFFF',
									}}
									noWrap
								>
									Powered By
								</Typography>
								<Typography
									variant="h6"
									sx={{
										fontWeight: '700',
										lineHeight: 1,
										fontSize: '1.55rem',
										color: lightMode ? '#000000' : '#FFFFFF',
									}}
								>
									nextra
								</Typography>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div className="mb-2">
				<span>{'<> by '}</span>
				<a
					className="font-semibold"
					href="https://twitter.com/Srinu53168"
					target="_blank"
					rel="noreferrer"
				>
					K Srinivas Rao
				</a>
				{' and'}{' '}
				<a
					className="font-semibold"
					href="https://www.linkedin.com/in/mukun-poudel/"
					target="_b
          "
				>
					Mukun Poudel
				</a>
			</div>
		</div>
	);
}
export default FooterSection;
