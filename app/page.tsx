import Banner from "./_components/banner";
import ProductsCarrousel from "./_components/products-carrousel";
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
      <div className="p-5">
        <Banner src="/BannerPizza.png" alt="Banner de desconto para pizzas" />
      </div>
      <ProductsCarrousel title="Pratos recomendados" />
      <div className="p-5">
        <Banner
          src="/BannerBurguer.png"
          alt="Banner de desconto para hamburgueres"
        />
      </div>
    </>
  );
}
