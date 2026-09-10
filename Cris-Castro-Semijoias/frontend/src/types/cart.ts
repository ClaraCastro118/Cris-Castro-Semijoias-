// O carrinho de compras

import { Product } from './product';

export interface CartItem {
    product: Product;
    quantity: number; // Quantidade que o cliente selecionou
    selectedVariation?: string; // Tamanho do produto que o cliente selecionou
}

// Cart quer dizer a lista atual de produtos que está dentro da sacola
export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number, variation?: string) => void; // Adicionar peça no carrinho
    removeFromCart: (productId: string) => void; // Remover peça do carrinho
    updateQuantity: (productId: string, quantity: number) => void; // Alterar a quantidade de produtos dentro do carrinho
    clearCart: () => void; // Esvaziar todo o carrinho
    totalItems: number; // Quantidade de itens selecionado dentro do carrinho
    totalPrice: number; // Total das pecas do selecionadas Valores em Reais
}