import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Repository } from '../../state/slice';

const Wrapper = styled.div`
	width: calc(100% - 60px);
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	border-bottom: 1px solid gray;
	background-color: black;
	padding: 20px;
	margin: 0px 10px;
`;

const Header = styled(Link)`
    color: blue;
    font-weight: 700;
    font-size: 26px;
`;

const Description = styled.p`font-size: 20px;`;

const RepoListItem = ({ repo }: { repo: Repository }) => {
	const { title, description } = repo;
	return (
		<Wrapper>
			<Header to={`/${title}`}>{title}</Header>
			<Description>{description}</Description>
		</Wrapper>
	);
};

export default RepoListItem;
