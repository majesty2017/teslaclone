import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StylesButton";

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitles}>Starting at $69, 876</Text>
            </View>
            <StyledButton
                type="primary"
                content={"Custom Order"}
                onPress={() => {
             alert('Custom Order Was Press')
            }} />
            <StyledButton
                  type="secondary"
                  content={"Existing Inventory"}
                  onPress={() => {
             alert('Existing Inventory Was Press')
            }} />
        </View>
    );
};

export default CarItem