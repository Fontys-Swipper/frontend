import React, { useState }  from "react"; 
import {Text, View, StyleSheet, ScrollView, ImageBackground, Keyboard} from "react-native"
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS } from "../../assets/colors.js"
import InputField from "../components/InputField.js";
import LoginTopBar from "../components/LoginTopBar.js";
import Btn_solid_regular from "../components/buttons/Btn_solid_regular.js";
import SwitchInput from "../components/SwitchInput.js";
import {AddUser} from "../utils/UserApi.js";
import DropDown from "../components/DropDown.js";

const living_spaceTypes = [
    {key: '1', value: 'Under 30m2'},
    {key: '2', value: '30m2 - 50m2'},
    {key: '3', value: '50m2 - 100m2'},
    {key: '4', value: 'Over 100m2'},
  ];


const SignUp = ({navigation}) => {
    const [view, setView] = useState(1)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [living_space, setLiving_space] = useState('')
    const [hasPet, setHasPet] = useState(false)
    const [hasGarden, setHasGarden] = useState(false)
    const [companyName, setCompanyName] = useState('')
    const [warning, setWarning] = useState('')

    const CreateUser = () => {
        newUser = {
            username: username,
            firstname: firstName,
            lastname: lastName,
            password: password,
            email: email,
            address: address,
            livingSpace: living_space,
            description: description,
            companyName: companyName,
            hasPet: hasPet,
            hasGarden: hasGarden,
            likedAnimals: '',
            ownAnimals: ''
        }

        //Check if all fields are filled, if not throw error
        function validateData(){
            for (const x in newUser) {
                if(!newUser[x] && x != 'hasPet' && x != 'hasGarden' && x != 'companyName' && x != 'likedAnimals' && x != 'ownAnimals'){
                    console.log('Fill all the information: '+ x)
                    throw new Error('Please fill the all fields')
                }
            }
        }

        //Create new user
        try {
            validateData()
            setWarning('')
            AddUser(newUser).then(result => {
                navigation.navigate('NavigationBar')
            }).catch(error => {
                console.log(error)
            })
            console.log('User created')
        } catch (error) {
            setWarning(error.message)
            console.log(error)
        }

    }
    
    if(view == 1){ // First view of sign up
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={require('../../assets/images/malinois-g4dd9f780d_1920.jpg')}/>    
                    <LoginTopBar text="Create your own account" onPress={() => navigation.navigate('Start')}/>
                    <ScrollView style={styles.inputContainer} contentContainerStyle={styles.scrollContainer}>  
                        <InputField text_title="Username" text_color={COLORS.white} onChangeText={newText => setUsername(newText)} value={username} />
                        <InputField text_title="Email" text_color={COLORS.white} onChangeText={newText => setEmail(newText)} value={email} />
                        <InputField text_title="Password" text_color={COLORS.white} onChangeText={newText => setPassword(newText)} value={password} />

                        <View style={styles.buttonsContainer}>
                            <Btn_solid_regular onPress={() => setView(2)} title="Next"/>
                        </View>
                    </ScrollView>
            </View> 
        )
    }else if (view == 2){ //Second view of sign up
        return (
            <View style={styles.container}>
                <ImageBackground style={[styles.backgroundImage, {marginTop: 70,}]} resizeMode="cover" source={require('../../assets/images/cat-g2ff4963cc_1920.jpg')}/>
                <LoginTopBar text="Create your own account" onPress={() => setView(1)}/>
                <ScrollView style={styles.inputContainer} contentContainerStyle={styles.scrollContainer}>  
                    <InputField text_title="First name" text_color={COLORS.white} onChangeText={newText => setFirstName(newText)} value={firstName} />
                    <InputField text_title="Last name" text_color={COLORS.white} onChangeText={newText => setLastName(newText)} value={lastName} />
                    <InputField text_title="Address" text_color={COLORS.white} onChangeText={newText => setAddress(newText)} value={address} />
                    <InputField text_title="Company Name (Optional)" text_color={COLORS.white} onChangeText={newText => setCompanyName(newText)} value={companyName} />

                    <View style={styles.buttonsContainer}>
                        <Btn_solid_regular onPress={() => setView(3)} title="Next"/>
                    </View>
                </ScrollView>
            </View> 
        )
    }else {
        return(
            <View style={styles.container}>
                <ImageBackground style={[styles.backgroundImage, {marginTop: 70}]} resizeMode="cover" source={require('../../assets/images/cat-g2ff4963cc_1920.jpg')}/>
                <LoginTopBar text="Create your own account" onPress={() => {setView(2), setWarning('')}}/>
                <ScrollView style={[styles.inputContainer,]} contentContainerStyle={styles.scrollContainer}>  
                    <DropDown placehoder={living_space ? living_space : 'Living space'} textColor={COLORS.white} choice={living_spaceTypes} setSelected={val => setLiving_space(val)}/>
                    <SwitchInput text_title='Do you have a pet?' text_color={COLORS.white} isEnabled={hasPet} toggleSwitch={() => setHasPet(!hasPet)}/>
                    <SwitchInput text_title='Do you have a garden?' text_color={COLORS.white} isEnabled={hasGarden} toggleSwitch={() => setHasGarden(!hasGarden)}/>
                    <InputField text_title="Description" text_color={COLORS.white} onChangeText={newText => setDescription(newText)} value={description} multiline={true}/>
                    <Text style={styles.warningText} >{warning}</Text>
                    <View style={styles.buttonsContainer}>
                        <Btn_solid_regular onPress={() => CreateUser()} title="Sign up"/>
                    </View>
                </ScrollView>
            </View> 
        )
    }
    
}


export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: COLORS.black + 'b3',
        width: '100%',
        paddingTop: 40,
    },
    scrollContainer: {
        alignItems: 'center',
        gap: 10,
        paddingBottom: 50,
    },
    backgroundImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        marginTop: 0,
    },
    innerContainer: {
        flex: 1,
        gap: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonsContainer: {
        marginTop: 30,
    },
    text: {
        fontFamily: 'Gluten-SemiBold',
        fontSize: 34,
        color: COLORS.background,
        marginTop: 50,
    },
    warningText: {
        color:'red',
        fontFamily: 'Roboto-Medium',
        fontSize: 17
    }

})

