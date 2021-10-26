import classes from "./Score.module.css";

const Score = (props) => {
  return <div className={classes.score}>
      <p>Highest Score: {props.bestScore}</p>
      <p>Current Score: {props.currentScore}</p>
  </div>;
};

export default Score;
