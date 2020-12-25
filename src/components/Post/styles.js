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
    videoPlayButton: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right:0,
        zIndex: 100,
    },
    video: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right:0
    },
    bottomContainer: {
        padding: 10,
        marginBottom: 20,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: 'rgba(255,0,0,.2)',
        padding: 6,
        borderRadius:15,
        marginRight: 8,
        marginLeft: 8
    },
    handle: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 10,
        marginLeft: 10
    },
    description: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        marginBottom: 10,
        marginLeft: 10
    },
    songRow: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginBottom: 10,
    },
    songName: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        marginLeft:5
    },
    songPic: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: "grey",
        marginBottom: 10,
        marginRight: 10
        
    },
    rightContainer: {
        alignSelf: "flex-end",
        height: 300,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'rgba(255,0,0,.2)',
        padding: 6,
        borderRadius:10,
        marginRight: 8
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: 8
    },
    statsLable: {
        color: "white",
        fontSize: 16,
        fontWeight: "300",
        marginTop: 5
    },
    iconContainer: {
        alignItems: "center"
    },
    iconContainer: {
        alignItems: "center"
    },
 
})

export default styles;