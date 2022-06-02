import { useEffect, useState } from 'react';
import { Issue as IssueType } from '../models/Issue.model';
import useFetch from '../hooks/useFetch';

import Issue from './Issue';
import LoadingSpinner from './UI/LoadingSpinner/LoadingSpinner';

import { MdOutlineSort } from 'react-icons/md';
import './MainIssue.css';

interface MainIssueType {
	programmingLanguages: string[];
	searchInput: string;
}

const MainIssue: React.FC<MainIssueType> = ({
	programmingLanguages,
	searchInput,
}) => {
	const [issues, setIssues, isLoading] = useFetch();
	const [sortBy, setSortBy] = useState<string>('SCORE');

	useEffect(() => {
		let url: string;
		if (programmingLanguages.length !== 0 || searchInput !== '') {
			const programmingLanguageURI = programmingLanguages.join(';');
			url = `https://api.stackexchange.com/2.3/search?order=desc&sort=activity&tagged=${programmingLanguageURI}&intitle=${searchInput}&site=stackoverflow`;
		} else {
			url =
				'https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow';
		}

		setIssues(url);
	}, [programmingLanguages, searchInput, setIssues]);

	// sort
	const sortHandler = (): void => {
		setSortBy(prevState => (prevState === 'SCORE' ? 'DATE' : 'SCORE'));
	};

	if (sortBy === 'SCORE') {
		issues.sort((a, b) => b.score - a.score);
	} else if (sortBy === 'DATE') {
		issues.sort((a, b) => b.creation_date - a.creation_date);
	}

	return (
		<div>
			<p className="sort">
				<span>
					Search: {searchInput} | Tag: {programmingLanguages.join('|')}
				</span>
				<button onClick={sortHandler}>
					<MdOutlineSort className="sort--icon" />
					By {sortBy === 'SCORE' ? 'date' : 'score'}
				</button>
			</p>
			{!isLoading && (
				<section className="section-MainIssue">
					{issues.map((issue: IssueType, i: number) => (
						<Issue key={i} issue={issue} />
					))}
				</section>
			)}
			{isLoading && <div className='center'><LoadingSpinner /></div>}
		</div>
	);
};

export default MainIssue;
