import { useState } from 'react';
import PlusIcon from '../../assets/icons/icon-plus.svg?react';
import MinusIcon from '../../assets/icons/icon-minus.svg?react';
import style from './accordion.module.css';

type Props = {
	question: string;
	answer: string;
	/* expand: boolean;
	OnExpand: () => void; */
};

export const Accordion = ({ question, answer }: Props) => {
	const [expanded, setExpanded] = useState(false);

	const handleExpand = () => {
		setExpanded((expanded) => !expanded);
	};
	return (
		<div className={style.container}>
			<div className={style.question}>
				<span onClick={handleExpand}>{question}</span>
				<span
					className={style.icon}
					onClick={handleExpand}
				>
					{expanded ? <MinusIcon /> : <PlusIcon />}
				</span>
				{/* <ExpandIcon
					expanded={expanded}
					onExpand={() => setExpanded((expanded) => !expanded)}
				/> */}
			</div>
			{expanded && <div className={style.answer}>{answer}</div>}
		</div>
	);
};
