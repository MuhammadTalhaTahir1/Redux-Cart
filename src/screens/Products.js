import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addaddItemToCart } from "../Redux/Actions/AddRemoveCartActions";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const itemWidth = (width - 32 - 16) / 2; // Subtracting padding and margin

const Products = () => {
  const data = [
    {
      name: "t-shirt 1",
      price: 300,
      image:
        "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg",
    },
    {
      name: "t-shirt 2",
      price: 349,
      image:
        "https://png.pngtree.com/png-clipart/20190515/original/pngtree-white-t-shirt-mockup-png-image_3610313.jpg",
    },
    {
      name: "t-shirt 3",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGRe7Gwzr_YOtd_nFxSGfzM9H17HZo6RPrATeLBGIWdXWzvXPFNLy0c43QVsOH480jtc&usqp=CAU",
    },
    {
      name: "t-shirt 4",
      price: 299,
      image:
        "https://png.pngtree.com/png-vector/20201128/ourmid/pngtree-cotton-t-shirt-png-image_2401873.jpg",
    },
    {
      name: "t-shirt 5",
      price: 399,
      image:
        "https://png.pngtree.com/element_our/png/20180828/dark-blue-t-shirt-mockup-png_72947.jpg",
    },
  ];
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addaddItemToCart(item));
  };
  const totalbill = (price) => {
  };
  const totalItem = useSelector((state) => state.AddRemove);
  let showTotalItems = [];
  showTotalItems = totalItem;
  return (
    <View style={styles.containerr}>
      <View style={styles.header}>
        <Text style={styles.reduxText}>Redux Text</Text>
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={() => navigation.navigate("Cart")}
        >
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{showTotalItems.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                addToCart(item);
                totalbill(item.price)
              }}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.container}
        numColumns={2}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    paddingTop: 20,
    marginTop: 10,
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row", // Arrange items in same line
    justifyContent: "space-between", // Align items to opposite ends of the container
    alignItems: "center", // Center items vertically
    paddingHorizontal: 16,
    marginTop: 10, // Add margin from the top
    marginBottom: 10,
  },
  reduxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  itemContainer: {
    width: itemWidth,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  cartIcon: {
    flexDirection: "row", // Set flexDirection to row to align icon and badge horizontally
    alignItems: "center", // Center items vertically
  },
  cartBadge: {
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5, // Add margin between the icon and badge
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
