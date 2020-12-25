import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create ({
    container: {
        width: "100%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        
    },
    uiContainer: {
        height: "100%",
        justifyContent: "flex-end",
    },
    rightContainer: {
        alignSelf: "flex-end",
    },
    bottomContainer: {
        padding: 10,
        marginBottom: 20
    },
    video: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right:0
    },
    handle: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10
    },
    description: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        marginBottom: 10
    },
    songRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    songName: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        marginLeft:5
    },
    profilePic: {
        width: 50,
        height: 50,
    }
    
})

export default styles;