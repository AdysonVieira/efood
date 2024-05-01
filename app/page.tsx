import CategoryNav from "./_components/category-nav";
import Header from "./_components/header";
import SearchBar from "./_components/search-bar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <SearchBar />
      </div>
      <div className="px-5">
        <CategoryNav />
      </div>
    </>
  );
}
