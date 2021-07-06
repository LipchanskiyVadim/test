import Header from "../layout/Header";
import { NextPageContext } from "next";
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import { Div } from "../../styles/styles";

export interface myPost {
	title: string,
	id: number,
	body: string,
}

interface postPageProps {
	posts: myPost,
	deletePost(): void,
}

export default function Post({ posts: serverPost }: postPageProps): unknown {

	const router = useRouter();

	const [post, setPost] = useState(serverPost);

	useEffect(() => {
		async function load() {
		 await axios(`https://simple-blog-api.crew.red/posts/${router.query.id}`)
			.then((res) => {
				setPost(res.data)
			 })
		}

		if (!serverPost) {
			load();
		}
	}, [])

	if (!post) {
		return <Header>
			<h1>Loading...</h1>
		</Header>
	}

	return (
		<Header>
			<Div>
				<p><span>{post.title} | id-{post.id}</span></p>
				<hr/>
				<p>{post.body}</p>
			</Div>
		</Header >
	)
}

interface nen extends NextPageContext {
	query: {
		id: string,
	}
}

Post.getInitialProps = async ({ query, req }: nen) => {

	if (!req) {
		return {
			posts: null
		}
	}

	let data;

	 await axios(`https://simple-blog-api.crew.red/posts/${query.id}`)
	 	.then((res) => {
			data = res.data;
		 })

		 return {
			 data,
		 }
}