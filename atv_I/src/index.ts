import CadastroCliente from "./metodos/cliente/cadastroCliente";
import Empresa from "./modelos/empresa";
import ListagemClientes from "./metodos/cliente/listagemClientes";
import Entrada from "./entrada";
import ExcluirCliente from "./metodos/cliente/excluirCliente";
import EditarClientes from "./metodos/cliente/editarClientes";
import CadasTrarProduto from "./metodos/produto/cadastrarProdutos";
import ListagemProdutos from "./metodos/produto/listagemProduto";
import ExcluirProduto from "./metodos/produto/excluirProduto";
import EditarProduto from "./metodos/produto/editarProduto";
import CadastrarServico from "./metodos/servico/cadastrarServico";
import ListagemServico from "./metodos/servico/listagemServico";
import ExcluirServico from "./metodos/servico/excluirServico";
import EditarServico from "./metodos/servico/editarServico";
import PedirProduto from "./metodos/pedidos/pedirProduto";
import ListarPedidosProdutos from "./metodos/pedidos/listarPedidosProdutos";
import PedirServico from "./metodos/pedidos/pedirServicos";
import ListarPedidosServicos from "./metodos/pedidos/listarPedidosServicos";
import DezClientesMais from "./metodos/listagens/ClientesConsumo";
import ClientesPorGenero from "./metodos/listagens/clientesPorGenero";
import ServicosProdutosConsumo from "./metodos/listagens/servicosProdutosConsumo";
import ServicosProdutosGenero from "./metodos/listagens/servicosProdutosGenero";
import ClientesConsumo from "./metodos/listagens/ClientesConsumo";





let flag = true
const empresa = new Empresa()
const entrada = new Entrada()




while (flag) {
    console.clear();  // Limpa a tela ao iniciar o sistema ou após sair de uma aba
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
                console.clear();  // Limpa a tela ao entrar na aba de clientes
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
                        const cadastroCliente = new CadastroCliente(empresa.getClientes);
                        cadastroCliente.cadastrar();
                        break;
                    case 2:
                        const listagemClientes = new ListagemClientes(empresa.getClientes);
                        listagemClientes.listar();
                        break;
                    case 3:
                        const editarCliente = new EditarClientes(empresa.getClientes);
                        editarCliente.editar();
                        break;
                    case 4:
                        const excluirCliente = new ExcluirCliente(empresa.getClientes);
                        excluirCliente.excluir();
                        break;
                    default:
                        console.log('Opção inválida');
                        break;
                }
            }
            console.clear();  // Limpa a tela ao sair da aba de clientes
            break;

        case 2:
            let flag_produto = true;
            while (flag_produto) {
                console.clear();  // Limpa a tela ao entrar na aba de produtos
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
                        const cadastrarProduto = new CadasTrarProduto(empresa.getProdutos);
                        cadastrarProduto.cadastrar();
                        break;
                    case 2:
                        const listagemProdutos = new ListagemProdutos(empresa.getProdutos);
                        listagemProdutos.listar();
                        break;
                    case 3:
                        const editarProduto = new EditarProduto(empresa.getProdutos);
                        editarProduto.editar();
                        break;
                    case 4:
                        const excluirProduto = new ExcluirProduto(empresa.getProdutos);
                        excluirProduto.excluir();
                        break;
                    default:
                        console.log('Opção inválida');
                        break;
                }
            }
            console.clear();  // Limpa a tela ao sair da aba de produtos
            break;

            

        case 3:
            console.clear();
            let flag_servico = true;
            while (flag_servico) {
                console.clear();  // Limpa a tela ao entrar na aba de serviços
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
                        const cadastrarServico = new CadastrarServico(empresa.getServicos);
                        cadastrarServico.cadastrar();
                        break;
                    case 2:
                        const listagemServicos = new ListagemServico(empresa.getServicos);
                        listagemServicos.listar();
                        break;
                    case 3:
                        const editarServico = new EditarServico(empresa.getServicos);
                        editarServico.editar();
                        break;
                    case 4:
                        const excluirServico = new ExcluirServico(empresa.getServicos);
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
            
            while(flag_pedido){
        
        
            console.log("\nAba de Pedidos")
            console.log("0 - Sair")
            console.log("1 - Pedir Produto")
            console.log("2 - Pedir Serviço")
            console.log("3 - Listar Pedidos Produtos")
            console.log("4 - Listar Pedidos Serviços")
            const opcaoPedido = entrada.receberNumero('Escolha uma opção: ');
            switch(opcaoPedido){
                case 0:
                    flag_pedido = false;
                    console.log('Saindo...');
                    break;

                case 1:
                     const pedirProtudo = new PedirProduto(empresa.getClientes, empresa.getProdutos, empresa);
                     pedirProtudo.pedir();
                     break;

                case 2:
                    const pedirServico = new PedirServico(empresa.getClientes, empresa.getServicos, empresa)
                    pedirServico.pedir();
                    break;

                case 3:
                    const listarPedidoProduto = new ListarPedidosProdutos(empresa.getClientes);
                    listarPedidoProduto.listar();
                    break;

                case 4:
                    const listarPedidoServico = new ListarPedidosServicos(empresa.getClientes)
                    listarPedidoServico.listar();
                    break;
            }
            
            
        
        }

            break;



        
        case 5:
            console.clear();
            let flag_listagens = true;
            while (flag_listagens){
                console.log("\nAba das Listagens especiais")
                console.log("0 - Sair")
                console.log("1 - 10 clientes que mais consumirarm produtos ou serviços")
                console.log("2 - Clientes por genêro")
                console.log("3 - Serviços ou produtos mais consumidos")
                console.log("4 - Serviços ou Produtos mais consumidos por genêro")
                console.log("5 - 10 clientes que menos consumiram produtos ou serviços")
                console.log("6 - 5 clientes que mais consumiram em valor, não quantidade")
                
                const opcaoListagens = entrada.receberNumero('Escolha uma opção: ');
                switch(opcaoListagens){
                    case 0:
                        flag_listagens = false;
                        console.log('Saindo...');
                        break;

                    case 1:
                        const listagemDezMais = new ClientesConsumo(empresa.getClientes);
                        listagemDezMais.listarClientesQueMaisConsumiram();
                        break;

                    case 2:
                        const listagemGenero = new ClientesPorGenero(empresa.getClientes);
                        listagemGenero.listarClientesPorGenero();
                        break;

                    case 3:
                        const listagemProdutosServicos = new ServicosProdutosConsumo(empresa.getProdutos, empresa.getServicos);
                        listagemProdutosServicos.listarProdutoServicoMaisConsumido();
                        break;

                    case 4:
                        const listagemGeneroProdutosServicos = new ServicosProdutosGenero(empresa.getClientes,empresa.getProdutos, empresa.getServicos);
                        listagemGeneroProdutosServicos.listarServicosProdutosGenero();
                       
                        break;

                    case 5:
                        const listagemDezMenos = new ClientesConsumo(empresa.getClientes);
                        listagemDezMenos.listarClientesQueMenosConsumiram();
                        break;

                    case 6:
                        const listagemClientesGastos = new ClientesConsumo(empresa.getClientes);
                        listagemClientesGastos.listarClientesQueMaisGastaram();
                        break;


            }


    }
    
    default:
        console.log('Opção inválida');
        break;
}
}

