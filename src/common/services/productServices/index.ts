import { PRODUCTS_BASE_URL } from "../../constants/endpoints";
import { IHttp } from "../../interfaces/http.interface";
import { IProductService } from "../../interfaces/productService.interface";
import { Product } from "../../types/product";

// Implementação da interface abstrata IProductService.
// Este módulo depende da abstração IHttp (e não diretamente de uma implementação como axios),
// permitindo a inversão de dependência e o desacoplamento entre o ProductService e o cliente HTTP.
//
// Ao receber o http como parâmetro, aplicamos o princípio da Inversão de Dependência (D - SOLID),
// o que permite substituir facilmente a implementação do cliente HTTP sem alterar o ProductService.
//
// Aqui, implementamos o método fetchProducts, que consome a API para buscar produtos.


const ProductService = (http: IHttp): IProductService => {
  return {
    fetchProducts: async () => {
      try {
        const response = await http.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL
        );
        return response.products;
      } catch (error) {
        throw new Error("Erro ao buscar produtos.");
        console.log(error)
      }
    },
  };
};

export default ProductService;
