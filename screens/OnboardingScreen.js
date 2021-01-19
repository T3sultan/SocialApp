import React from 'react';
import {View, Text,Button,Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) =>{
    return (
        <Onboarding
         onSkip={()=>navigation.navigate('Login')}
         onDone={()=>navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#98da11',
            image: <Image source={require('../assets/logo.png')} 
            style={{height:150,width:300}}/>,
            title: 'React Native Color',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/undraw_Destination_re_sr74.png')} 
            style={{height:300,width:400}}/>,
            title: 'Searching Map',
            subtitle: 'Selected location Bangladesh',
          },
          {
            backgroundColor: '#fdeb90',
            image: <Image source={require('../assets/undraw_Confirmation_re_b6q5.png')} 
            style={{height:300,width:400}}/>,
            title: 'Text Box',
            subtitle: 'Friends conversation all time',
          },
          {
            backgroundColor: '#87ceeb',
            image: <Image source={require('../assets/undraw_my_app_re_gxtj.png')} 
            style={{height:300,width:400}}/>,
            title: 'Online Platfrom',
            subtitle: 'Twitter news update',
          },
          {
            backgroundColor: '#ee82ee',
            image: <Image source={require('../assets/onboarding-img3.png')} 
            style={{height:300,width:400}}/>,
            title: 'Shopping Card',
            subtitle: 'Shopping card react native every person',
          },
          {
            backgroundColor: '#ffdab9',
            image: <Image source={require('../assets/undraw_Selection_re_poer.png')} 
            style={{height:300,width:400}}/>,
            title: 'Notification ',
            subtitle: 'Media notification alert for Human ',
          },
          {
            backgroundColor: '#98fb98',
            image: <Image source={require('../assets/undraw_subscribe_vspl.png')} 
            style={{height:300,width:400}}/>,
            title: 'Mail Box',
            subtitle: 'Gmail selected for new person that candidat',
          },
         
         
         
        ]}
      />
    );
};
export default OnboardingScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})