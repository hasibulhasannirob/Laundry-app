import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://www.kindpng.com/picc/m/209-2097861_laundry-apps-builder-laundry-pick-up-hd-png.png",
    "https://img.freepik.com/free-vector/person-doing-laundry-illustration_52683-36577.jpg",
    "https://img.freepik.com/premium-vector/laundry-service-room-vector-illustration-washing-drying-machines-with-cleansers-shelf-iron-ironing-board-clean-clothes_313242-429.jpg",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactivityDotColor={"#90A4AE"}
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
