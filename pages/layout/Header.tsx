import React from 'react';
import Link from 'next/link';
import { Navigation, HeaderDiv } from '../../styles/styles';

interface Props {
	children?: React.ReactChild
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header({children}: Props): any {

	return(
		<>
			<HeaderDiv>
				<Navigation>
					<Link href="/"><a>Последние сообщения</a></Link>
					<Link href="/post/new"><a>Отправить</a></Link>
				</Navigation>
			</HeaderDiv>
				<main>
					{children}
				</main>
		</>
	)
}