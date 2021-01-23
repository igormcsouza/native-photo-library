import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PhotoCard: React.FC<{ user: string }> = (props) => {
  const [like, setLike] = useState(false);
  const [heartProps, setHeartProps] = useState<{
    name: "ios-heart-outline" | "ios-heart";
    color: string;
  }>({ name: "ios-heart-outline", color: "black" });

  useEffect(() => {
    like
      ? setHeartProps({ name: "ios-heart", color: "red" })
      : setHeartProps({ name: "ios-heart-outline", color: "black" });
  }, [like]);

  return (
    <View>
      <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
        <Image
          style={{ marginRight: 15, width: 40, height: 40, borderRadius: 20 }}
          source={{ uri: `https://github.com/${props.user}.png` }}
        />
        <Text style={{ fontWeight: "bold" }}>@{props.user}</Text>
      </View>

      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: `https://github.com/${props.user}.png` }}
      />

      <View style={{ paddingLeft: 15, paddingTop: 5 }}>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <Ionicons name={heartProps.name} size={24} color={heartProps.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoCard;
