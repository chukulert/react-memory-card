import classes from './Header.module.css';
import foodImage from '../../assets/food-icon.png'

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={foodImage} alt='food logo' />
            <h1>Food Memory Game</h1>
        </div>
    )
}

export default Header;