//Catalago da Loja, o Id unico, o nome do produto, e o nome formatado no arquivo  Url

export interface Category {
    id: string;
    name: string;
    slug: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number; // preço atual
    originalPrice?: number; // Preco original se caso haja alguma promoção
    images: string[]; //Criação de Arrays para fotos do produto
    category: Category;
    categoryId: string;
    material?: string; // Tipo de Material usado no produto
    stock: number; // Se não houver mais produto no estoque
    isFeatured?: boolean; // Expositor na tela principal V and F
    createdAt: string;

}