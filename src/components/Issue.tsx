import { Issue as IssueModel } from '../models/Issue.model';

import './Issue.css';

interface IssueType {
	issue: IssueModel;
}

const Issue: React.FC<IssueType> = ({ issue }) => {
	return (
		<div className="issue">
			<h2 className="issue--title">
				<a href={issue.link}>{issue.title}</a>
			</h2>
			<div className="issue--info">
				<div className="issue--user">
					<img src={issue.owner.profile_image} alt={issue.owner.display_name} />
					<span>{issue.owner.display_name}</span>
				</div>
				<span className="issue--time">
					{new Date(issue.creation_date * 1000).toLocaleDateString('zh-tw')}
				</span>
			</div>
			<p className="issue--score">Score: {issue.score}</p>
			<div className="issue--tags">
				{issue.tags.map((tag: string, i: number) => (
					<span key={i}>{tag}</span>
				))}
			</div>
		</div>
	);
};

export default Issue;
