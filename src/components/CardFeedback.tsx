import '../assets/cardfeedback.css'
import {  Typography} from '@mui/material';
interface CardComponentProps {
    image: string;
    title: string;
    feedback :string;
    isMain: boolean
}
        const CardComponent: React.FC<CardComponentProps> = ({ image, title, feedback, isMain }) => {
            return (
                <div id='card-feedback' className={isMain ? 'main-card' : 'side-card' }>
                   <div className='card-feedback-container-img'>
                   <img src={image} alt="" className='card-feedback-img' />
                    </div> 
                    {isMain && (
                        <div className='card-feedback-text'>
                            <Typography gutterBottom variant="h6" component="div">
                                {title}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                {feedback}
                            </Typography>
                        </div>
                    )}
                </div>
            );
        
};

export default CardComponent;
