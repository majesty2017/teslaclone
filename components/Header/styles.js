import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    logo: {
        width: 150,
        height: 20,
        resizeMode: 'cover'
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'cover'
    }
})

export default styles
