import Header from '../layout/Header';
import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../Redux/reducer';
import { useState } from 'react';
import { Form, Input, Button, Textarea} from '../../styles/styles';

interface props {
	addPost(title: string, body: string): void,
}

const NewPost = (props: props) => {	

	const [text, setText] = useState("");
	const [title, setTitle] = useState("");

	const submitHundler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	}

const sendPost = () => {
	if(title && text) {
		props.addPost(title, text);
		setTitle("");
		setText("");
	}
}

	return(
		<Header>
			<Form onSubmit={submitHundler}>
				<div>
					<label>Title</label>
					<Input placeholder="Введите название темы" value={title} onChange={(e) => setTitle(e.target.value)}/>
				</div>
				<div>
					<label>Text</label>
					<Textarea placeholder="Введите текст" value={text} onChange={(e) => setText(e.target.value)}/>
				</div>
			<Button onClick={sendPost}>Отправить</Button>
			</Form>
		</Header>
	)
}

export default connect(null, {addPost})(NewPost);