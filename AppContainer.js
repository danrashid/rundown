import React from "react";
import { AppComponent } from "./AppComponent";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = {};

const Container = props => <AppComponent {...props} />;

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
