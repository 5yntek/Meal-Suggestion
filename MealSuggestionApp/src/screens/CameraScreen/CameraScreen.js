import { render } from "react-dom";
import { withNavigationFocus } from "react-navigation";
import { Camera } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import { View, Text, Image } from "react-native";
import React from "react";
import * as Permissions from "expo-permissions";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Overlay from "../../shared/Overlay";

function CameraScreen(props) {
  const { navigation } = props;

  const [hasPermission, setHasPermission] = useState();
  const camera = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const picture = await camera.current.takePictureAsync();
      navigation.navigate("PictureApproval", { picture: picture });
    }
  };

  const renderCamera = () => {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={camera}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundColor: "transparent",
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                margin: 20,
              }}
              onPress={takePicture}
            >
              <Ionicons name="camera" style={{ color: "#fff", fontSize: 56 }} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  };

  if (hasPermission === undefined) return <View />;
  if (!hasPermission) return <Text>No access to camera</Text>;
  else return renderCamera();
}

export default CameraScreen;
