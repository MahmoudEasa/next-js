//
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
		<div className={styles.navContainer}>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/contact">Contact</Link>
			<Link href="/posts">Posts</Link>
		</div>
	);
};

export default Navbar;
