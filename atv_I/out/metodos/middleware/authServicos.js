"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthServico {
    constructor(servicos) {
        this.servicos = servicos;
    }
    autenticarServico(nome_servico) {
        for (let i = 0; i < this.servicos.length; i++) {
            if (this.servicos[i].getNome === nome_servico) {
                return true;
            }
        }
        return false;
    }
}
exports.default = AuthServico;
