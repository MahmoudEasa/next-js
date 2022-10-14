//

import { posts } from "../../../../postsData";

const Post = async (req, res) => {
	const post = await posts.find((p) => p.id == req.query.id);

	if (post) {
		res.status(200).json(post);
	} else {
		res.status(400).json({ err: "Something Is Wrong" });
	}
	// try {
	// } catch (err) {
	// 	console.log(err);
	// }
};

export default Post;
