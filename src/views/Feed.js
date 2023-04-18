import React from "react"; 
import {Text, View} from "react-native"
import TopBar from '../components/TopBar'

const Feed = ({navigation}) => {
    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <Text>
                This is feed screen
            </Text>
        </View>        
    );
}

export default Feed;