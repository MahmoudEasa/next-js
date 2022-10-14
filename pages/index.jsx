//

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>Hello Index Js</h1>
		</div>
	);
}

// SSG: Static Site Generation
// SSR : Server Side Rendering
// Pre render

// getStaticProps
// getStaticPath / posts/1
// getServerSideProps / posts/1
