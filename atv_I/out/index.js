"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cadastroCliente_1 = __importDefault(require("./metodos/cliente/cadastroCliente"));
const empresa_1 = __importDefault(require("./modelos/empresa"));
const listagemClientes_1 = __importDefault(require("./metodos/cliente/listagemClientes"));
const entrada_1 = __importDefault(require("./entrada"));
const excluirCliente_1 = __importDefault(require("./metodos/cliente/excluirCliente"));
const editarClientes_1 = __importDefault(require("./metodos/cliente/editarClientes"));
const cadastrarProdutos_1 = __importDefault(require("./metodos/produto/cadastrarProdutos"));
const listagemProduto_1 = __importDefault(require("./metodos/produto/listagemProduto"));
const excluirProduto_1 = __importDefault(require("./metodos/produto/excluirProduto"));
const editarProduto_1 = __importDefault(require("./metodos/produto/editarProduto"));
const cadastrarServico_1 = __importDefault(require("./metodos/servico/cadastrarServico"));
const listagemServico_1 = __importDefault(require("./metodos/servico/listagemServico"));
const excluirServico_1 = __importDefault(require("./metodos/servico/excluirServico"));
const editarServico_1 = __importDefault(require("./metodos/servico/editarServico"));
const pedirProduto_1 = __importDefault(require("./metodos/pedidos/pedirProduto"));
const listarPedidosProdutos_1 = __importDefault(require("./metodos/pedidos/listarPedidosProdutos"));
let flag = true;
const empresa = new empresa_1.default();
const entrada = new entrada_1.default();
while (flag) {
    console.clear(); // Limpa a tela ao iniciar o sistema ou após sair de uma aba
    console.log(`\n Bem vindo ao sistema da empresa`);
    console.log('0 - Sair');
    console.log('1 - Aba de clientes');
    console.log('2 - Aba de produtos');
    console.log('3 - Aba de serviços');
    console.log('4 - Aba de pedidos');
    console.log('5 - Listagens');
    const opcao = entrada.receberNumero('\n' + 'Escolha uma opção: ');
    switch (opcao) {
        case 0:
            flag = false;
            console.log("Saindo...");
            break;
        case 1:
            let flag_cliente = true;
            while (flag_cliente) {
                console.clear(); // Limpa a tela ao entrar na aba de clientes
                console.log(" \n Aba de clientes");
                console.log('0 - Sair');
                console.log('1 - Cadastrar Cliente');
                console.log('2 - Listar Clientes');
                console.log('3 - Editar cliente');
                console.log('4 - Excluir Cliente');
                const opcaoCliente = entrada.receberNumero('Escolha uma opção: ');
                switch (opcaoCliente) {
                    case 0:
                        flag_cliente = false;
                        console.log('Saindo...');
                        break;
                    case 1:
                        const cadastroCliente = new cadastroCliente_1.default(empresa.getClientes);
                        cadastroCliente.cadastrar();
                        break;
                    case 2:
                        const listagemClientes = new listagemClientes_1.default(empresa.getClientes);
                        listagemClientes.listar();
                        break;
                    case 3:
                        const editarCliente = new editarClientes_1.default(empresa.getClientes);
                        editarCliente.editar();
                        break;
                    case 4:
                        const excluirCliente = new excluirCliente_1.default(empresa.getClientes);
                        excluirCliente.excluir();
                        break;
                    default:
                        console.log('Opção inválida');
                        break;
                }
            }
            console.clear(); // Limpa a tela ao sair da aba de clientes
            break;
        case 2:
            let flag_produto = true;
            while (flag_produto) {
                console.clear(); // Limpa a tela ao entrar na aba de produtos
                console.log(" \n Aba de Produtos");
                console.log('0 - Sair');
                console.log('1 - Cadastrar Produto');
                console.log('2 - Listar Produtos');
                console.log('3 - Editar Produto');
                console.log('4 - Excluir Produto');
                const opcaoProduto = entrada.receberNumero('Escolha uma opção: ');
                switch (opcaoProduto) {
                    case 0:
                        flag_produto = false;
                        console.log('Saindo...');
                        break;
                    case 1:
                        const cadastrarProduto = new cadastrarProdutos_1.default(empresa.getProdutos);
                        cadastrarProduto.cadastrar();
                        break;
                    case 2:
                        const listagemProdutos = new listagemProduto_1.default(empresa.getProdutos);
                        listagemProdutos.listar();
                        break;
                    case 3:
                        const editarProduto = new editarProduto_1.default(empresa.getProdutos);
                        editarProduto.editar();
                        break;
                    case 4:
                        const excluirProduto = new excluirProduto_1.default(empresa.getProdutos);
                        excluirProduto.excluir();
                        break;
                    default:
                        console.log('Opção inválida');
                        break;
                }
            }
            console.clear(); // Limpa a tela ao sair da aba de produtos
            break;
        case 3:
            console.clear();
            let flag_servico = true;
            while (flag_servico) {
                console.clear(); // Limpa a tela ao entrar na aba de serviços
                console.log(" \n Aba de Serviços");
                console.log('0 - Sair');
                console.log('1 - Cadastrar Serviço');
                console.log('2 - Listar Serviços');
                console.log('3 - Editar Serviço');
                console.log('4 - Excluir Serviço');
                const opcaoServico = entrada.receberNumero('Escolha uma opção: ');
                switch (opcaoServico) {
                    case 0:
                        flag_servico = false;
                        console.log('Saindo...');
                        break;
                    case 1:
                        const cadastrarServico = new cadastrarServico_1.default(empresa.getServicos);
                        cadastrarServico.cadastrar();
                        break;
                    case 2:
                        const listagemServicos = new listagemServico_1.default(empresa.getServicos);
                        listagemServicos.listar();
                        break;
                    case 3:
                        const editarServico = new editarServico_1.default(empresa.getServicos);
                        editarServico.editar();
                        break;
                    case 4:
                        const excluirServico = new excluirServico_1.default(empresa.getServicos);
                        excluirServico.excluir();
                        break;
                    default:
                        break;
                }
            }
            break;
        case 4:
            console.clear();
            let flag_pedido = true;
            while (flag_pedido) {
                console.log("\nAba de Pedidos");
                console.log("0 - Sair");
                console.log("1 - Pedir Produto");
                console.log("2 - Pedir Serviço");
                console.log("3 - Listar Pedidos Produtos");
                const opcaoPedido = entrada.receberNumero('Escolha uma opção: ');
                switch (opcaoPedido) {
                    case 0:
                        flag_pedido = false;
                        console.log('Saindo...');
                        break;
                    case 1:
                        const pedirProtudo = new pedirProduto_1.default(empresa.getClientes, empresa.getProdutos);
                        pedirProtudo.pedir();
                        break;
                    case 2:
                        console.log("Em breve aba de pedidos de serviço");
                        break;
                    case 3:
                        const listarPedidoProduto = new listarPedidosProdutos_1.default(empresa.getClientes);
                        listarPedidoProduto.listar();
                        break;
                }
            }
            break;
        default:
            console.log('Opção inválida');
            break;
    }
}
