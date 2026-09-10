// A comunicação com o Servidor
// O signifacado do <T> é um molde flexível
// Se a API devolver um produto, DATA será um produto
// Se devolver uma lista será PRODUCT[]
// Ele se adapta ao tipo do dado sem precisar criar uma interface nova para cada rota

export interface ApiResponse<T> {
    data: T;
    message?: string;
    status: number;
}

// Isso aqui controla a quantidade de produtos cadastrado para que não sobre carregue o backend
// Assim n carrega muitos produtos de uma vez, assim dando um limite por pagina
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}