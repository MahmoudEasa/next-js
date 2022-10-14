//
import { postsURL } from "./../../url";

const posts1 = (props) => {
	const post = props.post;

	console.log(props);

	return (
		<div>
			{post && (
				<>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</>
			)}
		</div>
	);
};

export default posts1;

export const getStaticPaths = async () => {
	const res = await fetch(postsURL);
	const data = await res.json();

	const paths = await data.map((path) => {
		return {
			params: { id: `${path.id}` },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const url = `${postsURL}/${context.params.id}`;
	const res = await fetch(url);
	const data = await res.json();

	return {
		props: {
			post: data,
		},
	};
};

// export const getServerSideProps = async (context) => {
// 	const url = `https://jsonplaceholder.typicode.com/posts/${context.params.id}`;
// 	const res = await fetch(url);
// 	const data = await res.json();

// 	return {
// 		props: {
// 			post: data,
// 		},
// 	};
// };
