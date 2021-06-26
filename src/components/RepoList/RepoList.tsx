import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Repository } from '../../state/slice';
import { RootState } from '../../state/store';
import RepoListItem from './RepoListItem';

const Header = styled.h2`
	background-color: black;
	color: white;
	margin: 0;
	padding: 20px;
`;

const RepoList = () => {
	const repos = useSelector<RootState, Repository[]>((state) => state.repos);
	return (
		<React.Fragment>
			<Header>GoDaddy GitHub Repositories</Header>
			<React.Fragment>{repos.map((repo) => <RepoListItem repo={repo} />)}</React.Fragment>
		</React.Fragment>
	);
};

export default RepoList;
