import '../assets/products.css'
import Card from '../components/Card'
import primerproduto from '../images/produto1.png'
import segundoproduto from '../images/produto2.png'
import tercerproduto from '../images/produto3.png'
import cuartoproduto from '../images/produto4.png'
import quintoproduto from '../images/produto5.png'

function Products() {
 

  return (
    <div id='mais-vendidos'>
        <h2>Mais Vendidos</h2>
        <div id="cards">
            <Card
                image={primerproduto}
                title="Café Arábica"
                price="R$ 25.99"
                discountedPrice="35.99"
                buttonText="Comprar"
            />
            <Card
                image={segundoproduto}
                title="Café Robusta Premium"
                price="R$ 95.75"
                discountedPrice="119.99"
                buttonText="Comprar"
            />
               <Card
                image={tercerproduto}
                title="Café Descafeinado"
                price="R$ 35.99"
                discountedPrice="45.99"
                buttonText="Comprar"
            />
            <Card
                image={cuartoproduto}
                title="Café Fair Trade"
                price="R$ 13.89"
                discountedPrice="25.99"
                buttonText="Comprar"
            />
               <Card
                image={quintoproduto}
                title="Café Saborizado"
                price="R$ 45.99"
                discountedPrice="55.99"
                buttonText="Comprar"
            />
            <Card
                image={segundoproduto}
                title="Café Orgânico"
                price="R$ 65.99"
                discountedPrice="75.99"
               buttonText="Comprar"
            />
        </div>
    </div>
  )
}

export default Products
