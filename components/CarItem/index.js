import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StylesButton";

const CarItem = (props) => {
    const {name,tagline,taglineCTA,image} = props
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitles}>
                    {tagline}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
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
        </View>
    );
};

export default CarItem