import Link from 'next/link';

type DocLinkProps = {
	link: string;
	text: string;
};

function DocLink({ link, text }: DocLinkProps) {
	return (
		<Link href={`/docs/${link}`} className="text-orange-500 underline underline-offset-[5px]">
			{text}
		</Link>
	);
}

export default DocLink;
