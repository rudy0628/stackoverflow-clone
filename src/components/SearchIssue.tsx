import React, { useRef } from 'react';

import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import './SearchIssue.css';

interface SearchIssueType {
	updateSearchInput: (searchInput: string) => void;
	toggleProgrammingLanguageList: () => void;
}

const SearchIssue: React.FC<SearchIssueType> = ({
	updateSearchInput,
	toggleProgrammingLanguageList,
}) => {
	const searchRef = useRef<HTMLInputElement>(null);

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();
		updateSearchInput(searchRef.current!.value);
		searchRef.current!.value = '';
	};

	return (
		<header className="mainHeader">
			<form className="searchForm" onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="input some question..."
					ref={searchRef}
				/>
				<button>
					<AiOutlineSearch className="searchForm--icon" />
				</button>
			</form>
			<button
				className="btn--toggleList"
				onClick={toggleProgrammingLanguageList}
			>
				<AiOutlineMenu className="searchForm--icon" />
			</button>
		</header>
	);
};

export default SearchIssue;
