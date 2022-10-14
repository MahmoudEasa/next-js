//

import Navbar from "./Navbar";

const Layout = (props) => {
	return (
		<>
			<Navbar />

			{props.children}

			<footer>Footer</footer>
		</>
	);
};

export default Layout;
