import Layout from "../components/Layout";
import ItemProduto from "../components/ItemProduto.js";
import data from "../utils/data";

export default function Home() {
  return (
    <div className="bg-white">
      <Layout title="Home Page">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 xl:max-w-full xl:px-12">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.produtos.map((produto) => (
              <ItemProduto produto={produto} key={produto.slug}>
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"></div>
                <h3 className="mt-4 text-sm text-gray-700">{produto.nome}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {produto.preco}
                </p>
              </ItemProduto>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
