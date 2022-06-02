import { useState } from 'react';

import ProgrammingLanguageList from './components/ProgrammingLanguageList';
import MainIssue from './components/MainIssue';
import SearchIssue from './components/SearchIssue';

import './App.css';

const App: React.FC = () => {
	const [programmingLanguages, setProgrammingLanguages] = useState<string[]>(
		[]
	);
	const [searchInput, setSearchInput] = useState<string>('');
	const [showProgrammingLanguageList, setShowProgrammingLanguageList] =
		useState<boolean>(true);

	const updateProgrammingLanguage = (programmingLanguage: string) => {
		const programmingLanguageIndex = programmingLanguages.findIndex(
			prgLan => prgLan === programmingLanguage
		);
		if (programmingLanguageIndex !== -1) {
			setProgrammingLanguages(prevState =>
				prevState.filter(prgLan => prgLan !== programmingLanguage)
			);
		} else {
			setProgrammingLanguages(prevState => [...prevState, programmingLanguage]);
		}
	};

	const updateSearchInput = (searchInput: string) =>
		setSearchInput(searchInput);

	const toggleProgrammingLanguageList = () =>
		setShowProgrammingLanguageList(prevState => !prevState);

	return (
		<>
			<SearchIssue
				updateSearchInput={updateSearchInput}
				toggleProgrammingLanguageList={toggleProgrammingLanguageList}
			/>
			<div className="main-container">
				{showProgrammingLanguageList && (
					<ProgrammingLanguageList
						updateProgrammingLanguage={updateProgrammingLanguage}
						programmingLanguages={programmingLanguages}
					/>
				)}
				<MainIssue
					programmingLanguages={programmingLanguages}
					searchInput={searchInput}
				/>
			</div>
		</>
	);
};

export default App;
