import React from 'react';
import Link from '@docusaurus/Link';
import './index.scss';

type FeatureItem = {
	title: string;
	description: JSX.Element;
	styleClass: string;
	link: string
};

const FeatureList: FeatureItem[] = [
	{
		title: '学习',
		description: (<>前端进阶知识</>),
		styleClass: 'item levelUp',
		link: '/docs/intro'
	},
	{
		title: '阅读',
		description: (<>遇到的难题的解决方案<br/>有趣的效果的实现方式</>),
		styleClass: 'item blog',
		link: '/blog'
	},
	{
		title: '欣赏',
		description: (<></>),
		styleClass: 'item life',
		link: '/'
	},
];

function Feature({ title, description, styleClass, link }: FeatureItem) {
	return (
		<div className={styleClass}>
			<Link to={link}>
				<div className="line"></div>
				<h3>{title}</h3>
				<p className="link">{description}</p>
			</Link>
		</div>
	);
}

export default function HomepageFeatures(props): JSX.Element {
	const top = props.top;
	return (
		<section className={`featureBox ${top > 180 ? 'showFeature' : 'hideFeature'}`}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
