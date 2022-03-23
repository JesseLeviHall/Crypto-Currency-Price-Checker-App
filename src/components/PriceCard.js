import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class PriceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: {
        USD: 0,
        EUR: 0,
      },
    };
  }

  componentDidMount() {
    fetch(
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR&api_key=413682da60752fe450873bcbce6b3a81d72443d5e64e8ea3e58d274442d0b3bf"
    )
      .then((Response) => {
        return Response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          price: {
            USD: json.USD,
            EUR: json.EUR,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={s.container}>
        <Text style={s.label}>Current Bitcoin Price:</Text>
        <Text style={s.price}> ${this.state.price.USD}</Text>
        <Text style={s.price}> €{this.state.price.EUR}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    margin: 30,
    minWidth: 300,
    maxWidth: 350,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderWidth: 2,
    backgroundColor: "cornflowerblue",
    borderRadius: 10,
  },
  label: {
    fontSize: 26,
    textAlign: "center",
    color: "black",
  },
  price: {
    fontSize: 50,
    textAlign: "center",
    justifyContent: "center",
  },
});
