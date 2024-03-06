import image from "../images/pfp.jpg";
import Post from "../components/Post";

export default function BlogPage() {

    return (
        <div className="container-fluid bg-dark min-vh-100 ">
            <Post title="Title" href={image} blurb="Some text..." />
            <Post title="Title" href={image} blurb="Some text..." />
            <Post title="Title" href={image} blurb="Some text..." />
        </div>
    );
}