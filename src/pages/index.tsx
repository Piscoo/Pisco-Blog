import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import './index.scss'


function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	const [scrollTop, setScrollTop] = useState(0);
	useEffect(() => {
		// const nav: any = document.getElementsByTagName('nav');
		// nav[0].classList.add('hideHeader');
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [])

	const handleScroll = (e: any): void => {
		// // const nav: any = document.getElementsByTagName('nav');
		let top: number = document.documentElement.scrollTop;
		setScrollTop(top);
		// if(top > 150) {
			// nav[0].classList.add('showHeader');
			// nav[0].classList.remove('hideHeader');
		// } else {
			// nav[0].classList.remove('showHeader');
			// nav[0].classList.add('hideHeader');
		// }
	}
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className={`container ${scrollTop > 180 ? 'small' : 'normal'}`}>
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
			<HomepageFeatures top={scrollTop} />
		</header>
	);
}

export default function Home(): JSX.Element {
	// const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			description="Everything about my life!">
			<HomepageHeader />
		</Layout>
	);
}
