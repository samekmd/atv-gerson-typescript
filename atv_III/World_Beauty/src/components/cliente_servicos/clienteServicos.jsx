
import{ Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'servico',
        headerName: 'Serviço',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'preco',
        headerName: 'Preço',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'cliente',
        headerName: 'Cliente',
        width: 150,
        editable: true,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'genero',
        headerName: 'Gênero',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        editable: true,
    },
    {
        field: 'clienteCpf',
        headerName: 'Cliente CPF',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'Telefone',
        headerName: 'Telefone',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'data',
        headerName: 'Data',
        sortable: true,
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
];

const rows = [
    { id: 1, servico: 'Corte de Cabelo', preco: 'R$ 50,00', cliente: 'Lucas Silva', genero: 'Masculino', clienteCpf: '123.456.789-00', Telefone: '(11) 98765-4321', data: '2024-10-01' },
    { id: 2, servico: 'Coloração', preco: 'R$ 120,00', cliente: 'Maria Oliveira', genero: 'Feminino', clienteCpf: '987.654.321-00', Telefone: '(21) 91234-5678', data: '2024-10-03' },
    { id: 3, servico: 'Barba Completa', preco: 'R$ 40,00', cliente: 'João Souza', genero: 'Masculino', clienteCpf: '456.789.123-45', Telefone: '(11) 99876-5432', data: '2024-10-05' },
    { id: 4, servico: 'Hidratação Capilar', preco: 'R$ 80,00', cliente: 'Ana Paula', genero: 'Feminino', clienteCpf: '321.654.987-32', Telefone: '(31) 93456-7890', data: '2024-10-07' },
    { id: 5, servico: 'Manicure e Pedicure', preco: 'R$ 60,00', cliente: 'Carlos Mendes', genero: 'Masculino', clienteCpf: '789.123.456-78', Telefone: '(41) 94567-8901', data: '2024-10-09' },
    { id: 6, servico: 'Escova Progressiva', preco: 'R$ 200,00', cliente: 'Beatriz Santos', genero: 'Feminino', clienteCpf: '654.321.987-65', Telefone: '(51) 91234-9876', data: '2024-10-11' },
    { id: 7, servico: 'Corte de Cabelo Masculino', preco: 'R$ 45,00', cliente: 'Renato Lima', genero: 'Masculino', clienteCpf: '147.258.369-14', Telefone: '(61) 98765-1234', data: '2024-10-13' },
    { id: 8, servico: 'Penteado para Festa', preco: 'R$ 150,00', cliente: 'Fernanda Souza', genero: 'Feminino', clienteCpf: '258.369.147-25', Telefone: '(71) 93456-1234', data: '2024-10-15' },
    { id: 9, servico: 'Luzes', preco: 'R$ 180,00', cliente: 'Gabriel Costa', genero: 'Masculino', clienteCpf: '369.147.258-36', Telefone: '(81) 94567-1234', data: '2024-10-17' },
    { id: 10, servico: 'Tratamento de Barba', preco: 'R$ 55,00', cliente: 'Juliana Pereira', genero: 'Feminino', clienteCpf: '741.852.963-74', Telefone: '(91) 95678-1234', data: '2024-10-19' }
];

function ClienteServicos() {
    return(
        <Box sx={{ margin:"auto",height: 400, width: '85%' }}>
                
                <Paper elevation={5} style={{width:'100%'}}>    
                        <DataGrid

                            rows={rows}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 5,
                                },
                            },
                            }}
                            pageSizeOptions={[5,10,15,20,30]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                </Paper>
    </Box>
    );

}




export default ClienteServicos;