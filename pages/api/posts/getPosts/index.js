//
import { posts } from "../../../../postsData";

const getPosts = (req, res) => {
	res.status(200).json(posts);
};
export default getPosts;
