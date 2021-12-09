import { Routes, Route, Navigate } from "react-router";
import Category from "./component/Category";
import Header from "./component/Header";
import NotFound from "./component/NotFound";
import Popular from "./component/Popular";
import Random from "./component/Random";
import Search from "./component/Search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/random" />} />
        <Route path="/random" element={<Random />} />
        <Route path="/by-category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
