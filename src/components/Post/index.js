import React, { useState } from "react";
import {View,TouchableWithoutFeedback, Text, Image, TouchableOpacity} from "react-native";
import Video from "react-native-video";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const Post = (props) => {
    // const {post}= props;
    const [post, setPost] = useState (props.post);

    const [isLiked, setIsLiked] = useState(false);

    const [paused, setPaused] = useState(false); 

    const onPlayPausePress = () => {
        setPaused(!paused);
    }

    const onLikePress = () => {
        const likesToAdd = !isLiked ? -1 : 1;
        setPost({
            ...post,
            likes: post.likes + likesToAdd,
        });
        setIsLiked(!isLiked);
    }

    return(
        <View style={styles.container} >
            <TouchableWithoutFeedback onPress={onPlayPausePress} style={styles.video}>
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
                        <Image style={styles.profilePic} source={{uri:post.songImage}} />
                    </View>
                    <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
                        <AntDesign name={"heart"} size={40} color= {!isLiked? "red": "white"} />
                        <Text  style={styles.statsLable}>{post.likes}</Text>
                    </TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <FontAwesome name={"commenting"} size={40} color= "white" />
                        <Text  style={styles.statsLable}>{post.comments}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Fontisto name={"share-a"} size={35} color= "white" />
                        <Text  style={styles.statsLable}>{post.shares}</Text>
                    </View>
                    
                </View>

                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.handle}>@{post.user.userName}</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        
                        <View style={styles.songRow}>
                            <Entypo name={"beamed-note"} size={24} color= "white" />
                            <Text style={styles.songName}>{post.song}</Text>
                        </View>
                    </View>

                    <Image style={styles.songPic} source={{uri:post.songImage}} />
                   
                </View>
                
            </View>
         
        </View>
    )
}

export default Post