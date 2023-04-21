import React, {useState} from "react"; 
import {ScrollView, StyleSheet, Text, View, Modal, Pressable} from "react-native"
import TopBar from '../components/TopBar'
import Feedcard from "../components/Feedcard";
import { COLORS } from "../../assets/colors";
import Btn_solid_small from "../components/buttons/Btn_solid_small";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import DropDown from "../components/DropDown";
import Btn_solid_big from "../components/buttons/Btn_solid_big";
import InputField from "../components/InputField.js";



const Feed = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')
    const [location, setLocation] = useState('')

    return (
        <View style={styles.container}>
            <View>
                <TopBar/>
            </View>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <Btn_solid_small title="Filter" onPress={() => setModalVisible(true)} icon={<Icon name='tune' size={15} color={COLORS.white}/>}/>
                    <Btn_solid_small title='Sort' icon={<Icon name='sort-alphabetical-variant' size={15} color={COLORS.white}/>}/>
                </View>
                <Feedcard/>
                <Feedcard/>
                <Feedcard/>
                <Feedcard/>
                <Feedcard/>
                <Feedcard/>
                <Feedcard/>
            
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DropDown placehoder={type? type : 'Type'} choice={['Dog', 'Cat']} setSelected={(val) => setType(val)} defaulOption={{key: '1', value: {type}}}/>
                        <DropDown placehoder={gender? gender : 'Gender'} choice={['Male', 'Female']} setSelected={(val) => setGender(val)}/>
                        <InputField text_title="Location" value={location} onChangeText={newText => setLocation(newText)} icon={<MaterialIcons name='search' size={20} color={COLORS.black}/>}/>
                        <View style={styles.modalButton}>
                            <Btn_solid_big title='show' onPress={() =>setModalVisible(!modalVisible)}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>        
    );
}

export default Feed;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     width: '100%',
    //     height: '100%',
    // },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: null, //marginTop is set dynamically to height of TopBar
        // marginBottom: 56,
        backgroundColor: COLORS.black + '99'
    },
    contentContainer: {
        // backgroundColor: COLORS.primary,
        alignItems: 'center',
        paddingBottom: 60,
    },
    scrollView:{
    
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    modalView: {
        margin: 20,
        width: 300,
        height: 425,
        backgroundColor: COLORS.background,
        borderRadius: 4,
        borderColor: COLORS.primary,
        borderWidth: 2,
        paddingVertical: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalButton: {
        position: 'absolute',
        bottom: 0,
    },
    inputContainer: {

    }
})
