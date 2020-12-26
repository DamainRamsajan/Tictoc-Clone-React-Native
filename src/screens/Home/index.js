import React from "react";
import {View, FlatList, Dimensions, Text} from "react-native";
import Post from "../../components/Post";
import posts from "../../data/posts"

const Home = () => {
    return (
        <View> 
           <FlatList 
                data={posts}
                renderItem={({item}) => <Post post={item} />}
                snapToInterval= {Dimensions.get("window").height}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
           />
        </View> 
    )
}
export default Home

