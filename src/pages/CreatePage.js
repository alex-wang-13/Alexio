import ReactQuill from "react-quill";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import './CreatePage.css';

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    ['clean']
];
const modules = {
    toolbar: toolbarOptions,
};

export default function CreatePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function createNewPost(ev) {
        const data = new FormData();

        data.set("title", title);
        data.set("file", files[0]);
        data.set("content", content);

        ev.preventDefault();

        const response = await fetch("http://localhost:4000/create", {
            method: "POST",
            body: data,
        });

        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="container-fluid p-3 min-vh-100 bg-secondary">
            <form onSubmit={createNewPost}>
                <div className="d-flex justify-content-between my-2">
                    <input type="text"
                        placeholder="Title"
                        value={title}
                        onChange={ev => setTitle(ev.target.value)} />
                    <input type="file" onChange={ev => setFiles(ev.target.files)} />
                </div>
                <ReactQuill className="bg-light"
                    value={content}
                    onChange={newValue => setContent(newValue)}
                    modules={modules} />
                <button className="my-2 rounded w-100">Create Post</button>
            </form>
        </div>
    );
}