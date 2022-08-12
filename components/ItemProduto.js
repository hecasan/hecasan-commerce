/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function ItemProduto({ produto }) {
  return (
    <div className="card">
      <Link href={`/produto/${produto.slug}`}>
        <a>
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/produto/${produto.slug}`}>
          <a>
            <h2 className="text-lg">{produto.nome}</h2>
          </a>
        </Link>
        <p className="text-gray-500">{produto.descricao}</p>
        <div className="flex justify-between">
          <p className="text-sm text-green-600">{produto.estoque} no estoque</p>
          <p className="text-sm text-yellow-400">Avaliação: {produto.rating}</p>
        </div>
        <p className="text-red-700 text-3xl">R$ {produto.preco}</p>

        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <ShoppingCartIcon
              className="h-5 w-5 text-red-800 group-hover:text-red-400"
              aria-hidden="true"
            />
          </span>
          COMPRAR
        </button>
      </div>
    </div>
  );
}
