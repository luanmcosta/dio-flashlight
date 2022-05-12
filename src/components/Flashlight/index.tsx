import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, ToastAndroid, View } from 'react-native';

import RNShake from 'react-native-shake';
import Torch from 'react-native-torch';

import imgFlashlightOn from '../../../assets/eco-light.png';
import imgFlashlightOff from '../../../assets/eco-light-off.png';
import imgDioOn from '../../../assets/logo-dio.png';
import imgDioOff from '../../../assets/logo-dio-white.png';
import { styles } from './styles';

export function Flashlight() {
    const [imageFlashlight, setImageFlashlight] = useState(imgFlashlightOff);
    const [imageDIO, setImageDIO] = useState(imgDioOff);
    const [isFlashlightOn, setIsFlashlightOn] = useState(false);

    function handleFlashlightToogle(){
        setImageDIO(isFlashlightOn ? imgDioOff : imgDioOn);
        setImageFlashlight(isFlashlightOn ? imgFlashlightOff : imgFlashlightOn);
        setIsFlashlightOn(!isFlashlightOn);
        try{
            toogleFlashlight();
        }catch (e) {
            console.log(e);
        }
        
    }

    async function toogleFlashlight(){

        try {
            await Torch.switchState(isFlashlightOn);
           
        } catch (e) {
            ToastAndroid.show(
                'We seem to have an issue accessing your torch',
                ToastAndroid.SHORT
            );
        }
        
    }

    useEffect(()=> {

        const subs = RNShake.addListener(() => {
            handleFlashlightToogle();
        });

        return RNShake.removeAllListeners();
    }, []);

    return (
    <Pressable onPress={handleFlashlightToogle} style={styles.containerDark} >
        <Image style={styles.imageFlashlight} source={imageFlashlight} />

        <Image style={styles.imageDio} source={imageDIO} />

        <Text style={styles.text}>Shake to turn on/off!</Text>
    </Pressable>
  );
}