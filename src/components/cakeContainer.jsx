import React from "react";
import { connect } from "react-redux";
import { sellCake } from "../app-store";

const CakeContainer = props => {
  return (
    <div className="container">
      <h2>Cake Store</h2>
      <p>Available Cakes: {props.availableCakes}</p>

      <button onClick={props.sellCake}>Sell cake</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    availableCakes: state.cake.availableCakes
  };
};

const matchDispatchToProps = dispatch => {
  return {
    sellCake: () => dispatch(sellCake())
  };
};

export default connect(mapStateToProps, matchDispatchToProps)(CakeContainer);
