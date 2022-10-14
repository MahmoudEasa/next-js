//
import Link from "next/link";
import { postsURL } from "./../../url";

const posts = (props) => {
	return (
		<div>
			<h1>posts</h1>
			{props.posts &&
				props.posts.map((post) => (
					<div key={post.id}>
						<h2>
							<Link href={`/posts/${post.id}`}>{post.title}</Link>
						</h2>
						<p>{post.body}</p>
						<hr />
					</div>
				))}
		</div>
	);
};

export default posts;

export const getStaticProps = async () => {
	const res = await fetch(postsURL);
	const data = await res.json();

	return {
		props: {
			posts: data,
		},
	};
};
