// import React, {useState} from 'react';
// import {View, SafeAreaView} from 'react-native';
// import TextHeading from './TextHeading';
// import SelectImage from '../components/SelectImage';
// import Btn_solid_regular from '../components/buttons/Btn_solid_regular';
// import Btn_back_arrow from '../components/buttons/Btn_back_arrow';
// import InputField from '../components/InputField';
// import AddListingPageTwo from './AddListingPageTwo';
// import TopBar from '../components/TopBar';
// import NavigationBarContainer from '../components/NavigationBarContainer';
// import DescriptionBox from '../components/DescriptionBox';
// import {COLORS} from '../../assets/colors';
// import Btn_solid_small from '../components/buttons/Btn_solid_small';

// const AddListingPageThree = ({navigation}) => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const [url, setUrl] = useState('');

//   const handleAddListing = async () => {
//     try {
//       const response = await fetch(
//         'https://swipperresource.azurewebsites.net/api/listing',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             images: selectedImages,
//             url,
//             name,
//             gender,
//             type,
//             kind,
//             species,
//             age,
//             size,
//           }),
//         },
//       );
//       const data = await response.json();
//       console.log(data); // handle response data
//     } catch (error) {
//       console.error(error); // handle error
//     }
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         position: 'absolute',
//         height: '100%',
//         width: '100%',
//         justifyContent: 'space-around',
//         backgroundColor: COLORS.white,
//       }}>
//       <View style={{flex: 1}}>
//         <TopBar style={{position: 'absolute'}} />
//         <Btn_back_arrow onPress={() => navigation.navigate('AddListing2')} />
//         <View>
//           <TextHeading text_title="Add Listing" />
//           <SelectImage
//             selectedImages={selectedImages}
//             setSelectedImages={setSelectedImages}
//           />
//         </View>
//         <View>
//           <InputField
//             text_title="Input the url"
//             value={url}
//             onChangeText={setUrl}
//           />
//         </View>
//         <View
//           style={{alignSelf: 'center', marginTop: 600, position: 'absolute'}}>
//           <Btn_solid_regular title="Add" onPress={handleAddListing} />
//         </View>
//       </View>
//       {/* <NavigationBarContainer style={{ position: 'absolute' }} /> */}
//     </SafeAreaView>
//   );
// };

// export default AddListingPageThree;
