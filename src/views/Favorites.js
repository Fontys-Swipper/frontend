import React from "react"; 
import {Text, View} from "react-native"
import TopBar from '../components/TopBar'

const Favorites = ({navigation}) => {
    return (
        <View>
            <View>
                <TopBar/>
            </View>
            <Text>
                This is favorites screen
            </Text>
        </View>        
    );
}

export default Favorites;