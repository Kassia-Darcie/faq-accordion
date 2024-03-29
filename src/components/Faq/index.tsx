import { Accordion } from './Accordion';
import StarIcon from '../../assets/icons/icon-star.svg?react';
import style from './styles.module.css';

export const Faq = () => {
	return (
		<div className={style.container}>
			<div className={style.card}>
				<h1>
					<StarIcon />

					<span>FAQ's</span>
				</h1>
				<Accordion
					question="What is Frontend Mentor, and how will it help me?"
					answer="Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building."
				/>
				<Accordion
					question="Is Frontend Mentor free?"
					answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels."
				/>
				<Accordion
					question="Can I use Frontend Mentor projects in my portfolio?"
					answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!
"
				/>
				<Accordion
					question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
					answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.

"
				/>
			</div>
			<div className={style.attribution}>
				Challenge by{' '}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href="https://www.linkedin.com/in/kassialeao/">Kassia Leão</a>.
			</div>
		</div>
	);
};
