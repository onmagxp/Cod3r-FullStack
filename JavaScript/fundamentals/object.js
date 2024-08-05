const prod1= {}
prod1.portable  = 'LapTop'
prod1.pricep1 = '1.30'
prod1['Cool Discount'] = 0.40 // evitar atributos com espaço.
console.log(prod1)
console.log(typeof prod1)
console.log(typeof '1.30')
console.log(typeof 0.40)

const prod2 = {
    smartphone: 'Xiaomi 15',
    pricep2: '1.530$',
    discount: '10%',
    calculateFinalPrice: function() {
        // Extrair o valor numérico do preço
        let price_numeric = this.pricep2.replace('$', '');
        price_numeric = parseFloat(price_numeric);
        
        // Extrair o valor numérico do desconto
        let discount_numeric = this.discount.replace('%', '');
        discount_numeric = parseFloat(discount_numeric);

        // Calcular o valor do desconto
        let discount_value = price_numeric * (discount_numeric / 100);

        // Subtrair o valor do desconto do preço original
        let final_price = price_numeric - discount_value;

        return final_price.toFixed(3) + '$';
    }
}

console.log(prod2)
console.log('Preço final com desconto:', prod2.calculateFinalPrice())
console.log(typeof calculateFinalPrice)
