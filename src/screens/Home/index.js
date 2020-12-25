import React from "react";
import {View, Text} from "react-native";
import Post from "../../components/Post";

const post1 = {
    id: "p1",
    videoUri: "https://www.youtube.com/watch?v=rf8GjhXvOjU",
    user: {
        id: "u1",
        userName: "DamainRamsajan",
    },
    description: "The King of Legends",
    song: "Stir it up",
    songImage: "https://img.apmcdn.org/871dda86bfe2251e4fe5514562da006647a8115d/uncropped/df6bb3-20110211-bob-marley.jpg",
    likes: "999",
    comments: "222",
    shares: "888",
};

const Home = () => {
    return (
        <View> 
            <Post post = {post1}/>
        </View> 
    )
}
export default Home

