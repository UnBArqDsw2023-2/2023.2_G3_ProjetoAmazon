import { Transportadora } from './Transportadora';
import { Cliente } from './Cliente';

const transportadora = new Transportadora();
const cliente1 = new Cliente(
    1,
    'Alice Smith',
    BigInt('12345678909'),
    'alice@example.com',
    '1990-05-14',
    'São Paulo',
    'São Paulo',
    'Vila Mariana',
    'Rua Vergueiro',
    1234,
    BigInt('01504001')
);

const cliente2 = new Cliente(
    2,
    'Bob Johnson',
    BigInt('98765432109'),
    'bob@example.com',
    '1985-10-23',
    'Rio de Janeiro',
    'Rio de Janeiro',
    'Copacabana',
    'Avenida Atlântica',
    5678,
    BigInt('22070010')
);

transportadora.inscrever(cliente1);
transportadora.inscrever(cliente2);

transportadora.setStatus('Pacote enviado!');
transportadora.setStatus('Pacote em trânsito!');
transportadora.setStatus('Pacote entregue!');

transportadora.desinscrever(cliente1);

transportadora.setStatus('Pacote devolvido!');