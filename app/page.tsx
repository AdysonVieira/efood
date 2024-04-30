import Header from "./_components/header";
import SearchBar from "./_components/search-bar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <SearchBar />
      </div>
    </>
  );
}
