import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

// minor change
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function App({ Component, pageProps }: any) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
}
