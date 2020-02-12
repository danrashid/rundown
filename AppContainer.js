import React from "react";
import { AppComponent } from "./AppComponent";
import { connect } from "react-redux";
import { setGoal, start, stop } from "./actionCreators";

const mapStateToProps = state => state;

const mapDispatchToProps = { setGoal, start, stop };

const Container = props => <AppComponent {...props} />;

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
