/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

const GET_POST = 'ADD-POST';
const ADD_POST = 'GET-POST';

const apiUrl = 'https://simple-blog-api.crew.red/posts';

export function getPosts() {
	return async (dispatch: (arg0: { type: string; newPosts: unknown; }) => void) => {
		await axios.get(apiUrl).then((resp) => {
			const allPersons = resp.data;
			dispatch({type: GET_POST, newPosts: allPersons});
		});
	}
}

export function addPost(title: string, body: string) {
	return async (dispatch: (arg0: { type: string; newPosts: unknown}) => void) => {
		 await axios.post(apiUrl, {
			"title": title,
			"body":body
		}).then(() => {
			 dispatch({ type: ADD_POST, newPosts: { title: title, body: body } });
		 });
	}
}