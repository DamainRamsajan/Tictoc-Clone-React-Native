import React, { useState } from "react";
import {View,TouchableWithoutFeedback, Text, Image} from "react-native";
import Video from "react-native-video";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";

const Post = () => {
    const [paused, setPaused] = useState(false); 

    const onPlayPausePress = () => {
        setPaused(!paused);
    }
    return(
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video 
                    source={ require("./bob.mp4")}
                    style={styles.video}
                    resizeMode={"cover"}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
            <View style={styles.uiContainer}>

                <View style={styles.rightContainer}>
                    <View style={styles.profilePicContainer}>
                        <Image style={styles.profilePic} source={{uri:"./bob.jpg"}} />
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name={"beamed-note"} size={24} color= "white" />
                        <Text>777</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name={"beamed-note"} size={24} color= "white" />
                        <Text>777</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name={"beamed-note"} size={24} color= "white" />
                        <Text>777</Text>
                    </View>
                    
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.handle}>@DamainRamsajan</Text>
                    <Text style={styles.description}>The Legend Live</Text>
                    
                    <View style={styles.songRow}>
                        <Entypo name={"beamed-note"} size={24} color= "white" />
                        <Text style={styles.songName}>Bob Marley</Text>
                    </View>
                </View>
                
            </View>
         
        </View>
    )
}

export default Post