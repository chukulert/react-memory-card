import Card from "./Card";
import classes from "./CardWrapper.module.css";

const CardWrapper = (props) => {
  //an array of objects with name and image
  // const allCards = () => {
  //   props.data.map((card) => (
  //     <Card
  //       name={card.name}
  //       key={card.id}
  //       id={card.id}
  //       image={card.image}
  //       cardClickHandler={props.cardClickHandler}
  //     />
  //   ));
  // };

  return (
    <div className={classes.container}>
      <ul className={classes.cardGrid}>
        {props.data.map((card) => (
          <Card
            name={card.name}
            key={card.id}
            id={card.id}
            image={card.image}
            cardClickHandler={props.cardClickHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardWrapper;
