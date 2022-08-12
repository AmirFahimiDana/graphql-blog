import { Route, Routes } from "react-router-dom";
import AuthorPage from "./components/author/AuthorPage";
import BlogPage from "./components/blog/BlogPage";
import HomePage from "./components/home/HomePage";
import IndexLayout from "./components/layout/IndexLayout";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <IndexLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </IndexLayout>
  );
}

export default App;
