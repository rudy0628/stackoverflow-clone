import './ProgrammingLanguageList.css';

const programmingLanguageArr: string[] = [
	'C',
	'Java',
	'Python',
	'C++',
	'C# ',
	'Visual Basic',
	'JavaScript',
	'PHP',
	'SQL',
	'Assembly language',
	'R',
	'Groovy',
];

interface ProgrammingLanguageListType {
	updateProgrammingLanguage: (programmingLanguage: string) => void;
	programmingLanguages: string[];
}

const ProgrammingLanguageList: React.FC<ProgrammingLanguageListType> = ({
	updateProgrammingLanguage,
	programmingLanguages,
}) => {
	return (
		<aside className="programmingLanguageList">
			<ul>
				{programmingLanguageArr.map((lan: string, i: number) => (
					<li key={i}>
						<button
							className={
								programmingLanguages.findIndex(prgLan => prgLan === lan) === -1
									? ''
									: 'select-prg'
							}
							onClick={() => updateProgrammingLanguage(lan)}
						>
							{lan}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default ProgrammingLanguageList;
