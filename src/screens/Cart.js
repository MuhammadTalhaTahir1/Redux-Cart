import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../Redux/Actions/AddRemoveCartActions";

const { width } = Dimensions.get("window");
const itemWidth = (width - 32 - 16) / 2; // Subtracting padding and margin
const Cart = () => {
  const navigation = useNavigation();
  const items = useSelector((state) => state.AddRemove); //show krwany k liye selecter simple meaning
  const dispatch = useDispatch();
  const removeItem = (index) => {
    dispatch(removeItemFromCart(index));
  };
  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          removeItem(index);
        }}
      >
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    elevation: 3,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    paddingRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    paddingLeft: 10,
  },
  price: {
    fontSize: 14,
    color: "#888",
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
