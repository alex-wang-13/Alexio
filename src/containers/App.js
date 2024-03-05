import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import ProjectPage from '../pages/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects" element={<ProjectPage/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
