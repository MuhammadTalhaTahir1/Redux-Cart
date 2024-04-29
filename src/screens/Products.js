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
      name: "Cartier Cle",
      price: 300,
      image:
        "https://i.pinimg.com/736x/a9/35/20/a9352080b2127da1678cad38303a235e.jpg",
    },
    {
      name: "1976 Cartier",
      price: 349,
      image:
        "https://a.1stdibscdn.com/cartier-paris-vendome-2-tone-large-watch-34mm-manual-wind-circa-1973-1976-for-sale/j_14082/j_203882121694975273482/j_20388212_1694975273968_bg_processed.jpg",
    },
    {
      name: "Moon Phase",
      price: 200,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Ebh9TqRnr_DLKrn6FEeXA_JiJTINd0-uZiGeIv0YZ1kMcmQzz1xhp3SyDrwlfxMA6-s&usqp=CAU",
    },
    {
      name: "Cartebert Electra",
      price: 299,
      image:
        "https://clipground.com/images/watch-clipart-2.png",
    },
    {
      name: "Reef Tiger",
      price: 399,
      image:
        "https://ae01.alicdn.com/kf/HTB1Iq1cXtfvK1RjSspoq6zfNpXas.jpg_640x640q90.jpg",
    },
    {
      name: "Mar Classoc",
      price: 399,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHRZsGS4tyvZxaqsXAx82IATiD1vGox8pMA&usqp=CAU",
    },
    {
      name: "Dilang Automatic",
      price: 460,
      image:
        "https://parspng.com/wp-content/uploads/2023/06/watchpng.parspng.com-8-300x300.png",
    },
    {
      name: "Couple Watch",
      price: 790,
      image:
        "https://freepngimg.com/thumb/watch/22656-5-rolex-watch-transparent-thumb.png",
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
        <Text style={styles.reduxText}>Wrist Watches</Text>
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
            <View style={styles.lowerBox}>
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
    // alignItems:'center'
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
    fontSize: 26,
    fontWeight: "bold",
  },
  container: {
    // paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 20,
  },
  itemContainer: {
    width: itemWidth,
    // margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    // padding: 16,
    elevation: 3,
    // paddingVertical:16,
    marginBottom: 8,
    marginHorizontal: 8,
    // paddingHorizontal: 16,
    // paddingBottom: 16

  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode: 'contain'
    // marginBottom: 10,
  },
  lowerBox: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    backgroundColor: '#D3D3D3',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#454545",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FF5733",
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
