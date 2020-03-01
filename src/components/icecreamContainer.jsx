import React from "react";
import { connect } from "react-redux";
import { sellIcecream } from "../app-store";

const IcecreamContainer = props => {
  return (
    <div className="container">
      <h2>Icecream Store</h2>
      <p>Available Icecreams: {props.availableIcecreams}</p>
      <button onClick={props.sellIcecream}>Sell Icecream</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    availableIcecreams: state.icecream.availableIcecreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sellIcecream: () => {
      dispatch(sellIcecream());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
