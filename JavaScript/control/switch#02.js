const pedido = 'Pizza';

switch (pedido) {
    case 'Hambúrguer':
        console.log('Você pediu um Hambúrguer.');
        break;
    case 'Pizza':
        console.log('Você pediu uma Pizza.');
        break;
    case 'Salada':
        console.log('Você pediu uma Salada.');
        break;
    default:
        console.log('Opção não disponível no menu.');
}
