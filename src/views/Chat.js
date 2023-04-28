import React from "react"; 
import {Text, View} from "react-native"
import TopBar from '../components/TopBar'


const Chat = ({navigation}) => {
    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <Text>
                This is chat screen
            </Text>
        </View>        
    );
}

export default Chat;