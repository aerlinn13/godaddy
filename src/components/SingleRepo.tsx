import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Repository } from '../state/slice';
import { RootState } from '../state/store';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 0px 20px;
`;

const BackLink = styled(Link)`
    padding: 20px;
    font-size: 18px;
`;

const GithubLink = styled.a``;

const Header = styled.h1``;

const Details = styled.p``;

const Description = styled.p`font-size: 20px;`;

const SingleRepo = () => {
	const { repoName } = useParams<any>();
	const repo = useSelector<RootState, Repository | undefined>((state) =>
		state.repos.find((repo) => repo.title === repoName)
	);

	if (!repo) {
		return null;
	}

	const { title, description, url, language, issuesCount, forksCount, watchersCount } = repo;

	return (
		<Wrapper>
			<BackLink to="/">Back</BackLink>
			<Header>{title}</Header>
			<Details>
				{`● Language: ${language} ● Open Issues: ${issuesCount} ● Forks: ${forksCount} ● Watchers: ${watchersCount}`}
			</Details>
			<Description>{description}</Description>
			<GithubLink href={url} target="_blank">
				Open on GitHub
			</GithubLink>
		</Wrapper>
	);
};

export default SingleRepo;
