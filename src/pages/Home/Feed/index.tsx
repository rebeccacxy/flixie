import React from 'react';
import {
  Text,
  Button,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

import musicFly from '../../../assets/lottie-animations/music-fly.json';

// import '../Expandedscreen.js';

// import CollapseView from '../Collapseview.js';

import {
  Container,
  Details,
  Actions,
  User,
  Tags,
  Music,
  MusicBox,
  BoxAction,
  TextAction,
} from './styles';

interface Item {
  id: number;
  username: string;
  tags: string;
  music: string;
  likes: number;
  comments: number;
  uri: string;
}

interface Props {
  play: boolean;
  item: Item;
}

const Feed= ({ play, item, navigation }) => {
  // const spinValue = new Animated.Value(0);

  // Animated.loop(
  //   Animated.timing(spinValue, {
  //     toValue: 1,
  //     duration: 10000,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }),
  // ).start();

  // const rotateProp = spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg'],
  // });

  // const onPress = (e) => {
  //       this.setState(iconColor: "blue")
  //   };

  const vids = [
    require("../../../assets/got1.mp4"),
    require("../../../assets/big-buck-bunny1.mp4"),
    require("../../../assets/queensgambit1.mp4"),
    require("../../../assets/naruto1.mp4"),
  ]

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,.3)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '70%',
        }}
      />
      <Container>
        <Video
          source={vids[item.id]}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={play}
          isLooping
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Container>
      <Details>
        <User>{item.username}</User>
        <Tags>{item.tags}</Tags>
        <MusicBox>
          <TouchableOpacity
            onPress={() => navigation.navigate('Info')}
          >
            <Music>{item.music}</Music>
          </TouchableOpacity>
        </MusicBox>

        <BoxAction>
          <AntDesign
            // onPress={()=> this.setState(colorCode: 'green')}
            style={{ alignSelf: 'center', paddingHorizontal: 110 }}
            name="heart"
            size={50}
            color="#fff"
          />
          <FontAwesome
            style={{ alignSelf: 'center' }}
            name="times"
            size={60}
            color="#fff"
          />

          <TextAction>{item.likes}</TextAction>
        </BoxAction>
      </Details>
      <Actions>
        <BoxAction>
          {/* <Animated.View
            style={{
              borderRadius: 50,
              borderWidth: 12,
              borderColor: '#292929',
              transform: [
                {
                  rotate: play ? rotateProp : 0,
                },
              ],
            }}
          >
            <Image
              style={{
                width: 35,
                height: 35,
                borderRadius: 25,
              }}
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/45601574',
              }}
            />
          </Animated.View> */}

          {/* <Lottie
            source={musicFly}
            progress={play ? spinValue : 0}
            style={{ width: 150, position: 'absolute', bottom: 0, right: 0 }}
          /> */}
        </BoxAction>
      </Actions>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.4)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%',
        }}
      />
    </>
  );
};

export default Feed;
