// screens/DriverScoreScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { fetchDriverScore } from "../services/driverScoreService";

export default function DriverScoreScreen() {
  const [score, setScore] = useState(null);

  const getDriverScore = async () => {
    try {
      const driverScore = await fetchDriverScore();
      setScore(driverScore);
    } catch (error) {
      console.error("Error fetching driver score:", error.message);
    }
  };

  useEffect(() => {
    getDriverScore();
  }, []);

  return (
    <View>
      <Text>Driver Score:</Text>
      <Text>{score !== null ? score : "Loading..."}</Text>
    </View>
  );
}
