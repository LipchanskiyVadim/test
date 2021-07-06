import styled from 'styled-components';

export const Ul = styled.ul`
max-width: 85%;
margin: 0px auto;`;

export const Li = styled.li`
margin: 25px;
padding: 20px;
border-radius: 25px;
list-style-type: none;
background: #dadce6;

a{
	text-decoration: underline;
	font-family: Arial;
	font-size: 18px;
}`;

export const Input = styled.input`
	display: flex;
	min-width: 60%;
	padding: 5px;
	margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
	display: flex;
	min-width: 60%;
	resize: none;
	min-height: 250px;
	padding: 5px;
`;

export const Button = styled.button`
	min-width: 15%;
	height: 30px;
	border-radius: 5px;
	margin-top: 10px;
`;

export const Form = styled.form`
	margin: 20px 100px;
`;

export const Div = styled.div`
margin: 25px;
padding: 20px;
border-radius: 25px;
list-style-type: none;
background: #dadce6;
span{
		font-family: Arial;
		font-size: 20px;
}`;

export const HeaderDiv = styled.div`
	background: #645cfa;
`;

export const Navigation = styled.div`
max-width: 100%;
padding: 15px 0px;
}

a{
font-size: 20px;
color: white;
padding: 0px 60px 0px 30px;
transition: 0.3s;
}

@media (max-width: 668px) {
display: flex;
flex-direction: column;
a{
	padding: 10px 15px;
	font-size: 16px;
}
}

a:hover{
text-shadow: 1px 2px 2px black;
transition: 0.3s;
}`;

export const X = styled.span`
	float: right;
	padding: 0px 20px 20px 0px;
`;
