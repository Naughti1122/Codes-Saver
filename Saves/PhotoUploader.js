// import React, { useState, useEffect } from 'react';
// import { Button, Image, View, Platform, SafeAreaView, TouchableOpacity, Text } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Ionicons } from '@expo/vector-icons';

// const PhotoUploader = () => {

// const [image, setImage] = useState(null);

// const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.uri);
//     }
//   };

// let imagePick = ''
//     if(image == null){
//         imagePick = <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Ionicons name="md-person-outline" size={150} color="black" />
//         <Text >ADD PROFILE PHOTO</Text>
//         </SafeAreaView> 
//     }else{
//         imagePick= image && (
//         <Image
//             source={{ uri: image }}
//             style={{ width: 300, height: 300 }}
//         />
//         )
//     }

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <TouchableOpacity onPress={pickImage}>
//                 {imagePick}
//             </TouchableOpacity>
//         </View>
//     );
// }

// export default PhotoUploader;









//expo install expo-image-picker
//npm i react-native-vector-icons