"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthProduto {
    constructor(produtos) {
        this.produtos = produtos;
    }
    autenticarProduto(nome_produto) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].getNome === nome_produto) {
                return true;
            }
        }
        return false;
    }
}
exports.default = AuthProduto;
