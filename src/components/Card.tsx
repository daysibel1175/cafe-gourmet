import '../assets/products.css'
interface CardComponentProps {
    image: string;
    title: string;
    price: string;
    discountedPrice: string;
    buttonText: string;
}
const CardComponent: React.FC<CardComponentProps>  = ({ image, title, price, discountedPrice, buttonText }) => {
    return (
        <div className='card'>
            <img src={image} alt="" className='card-img'/>
                <h3>
                    {title}
                </h3>
                <h4>
                     {price}<span style={{ textDecoration: 'line-through', fontWeight:'300', fontSize:'0.7rem' }}>{discountedPrice}</span>
                </h4>
                <button ><a href="">{buttonText}</a></button>
        </div>
    );
};

export default CardComponent;
