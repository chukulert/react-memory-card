import classes from './Card.module.css';

const Card = (props) => {
    return (
        <li className={classes.cardContainer}>
            <div className={classes.card} onClick={props.cardClickHandler}>
                <img src={props.image} alt='card'/>
                <h3>{props.name}</h3>
            </div>
        </li>
    )
}

export default Card;