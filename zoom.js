import React from "react";
import { View, Image } from "react-native";

// npm install @dudigital/react-native-zoomable-view
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";

export default function App() {
  return (
    <View style={{ width: "100%" }}>
      <ReactNativeZoomableView
        maxZoom={5.0}
        minZoom={0.2}
        zoomStep={1}
        initialZoom={1}
        bindToBorders={true}
        style={{
          width: "100%",
          padding: 50,
        }}
      >
        <Image
          style={{ width: "100%", height: 400 }}
          source={{
            uri: "desired image",
          }}
        />
      </ReactNativeZoomableView>
    </View>
  );
}
