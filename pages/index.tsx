import Header from './layout/Header';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../Redux/reducer';
import Link from 'next/link';
import {Ul, Li} from '../styles/styles.js'

interface post {
	title: string,
	body: string,
	id: number,
}

interface props {
	getPosts(): void,
	posts: post[],
}

const Home = (props: props)=> {

	useEffect( () => {
		props.getPosts()
	}, []);

	if(props.posts.length === 0) {
		return <Header>
			<h1>Loading...</h1>
		</Header>
	}

	return(
		<Header>
			<Ul>
			{
				props.posts.map((list) => {
					return(
						<Li key={list.id}>
							<Link href={'/post/[id]'} as={`/post/${list.id}`}><a>{list.title}</a></Link>
							<hr/>
							{list.body}
						</Li>
					)
				})
			}
			</Ul>
			</Header>
	)
}

interface state {
	posts: Array<post>
}

const mapStateToProps = (state: state) => {
	return {
		posts: state.posts,
	}
}

export default connect(mapStateToProps, {getPosts,})(Home);