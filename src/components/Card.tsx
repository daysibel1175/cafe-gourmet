import '../assets/products.css'
import {  Typography} from '@mui/material';
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
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <h4>
                     {price}<span style={{ textDecoration: 'line-through', fontWeight:'300', fontSize:'0.7rem' }}>{discountedPrice}</span>
                </h4>
                <button ><a href="">{buttonText}</a></button>
        </div>
    );
};

export default CardComponent;
