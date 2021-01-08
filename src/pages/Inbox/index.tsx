import React from 'react';

import { Feather, MaterialIcons } from '@expo/vector-icons';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

import { Container, Title, Header } from './styles';
import { colors, device, gStyle } from '../../constants';

// components
import PlaylistItem from '../../components/PlaylistItem';
import { Button, Block, Icon, NavBar, Text, Card } from 'galio-framework';

import rankList from '../../mockdata/rankList.json';
import theme from '../../theme';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ['#6B84CA', '#8F44CE'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';


// const styles = StyleSheet.create({
//   containerSearchBar: {
//     ...gStyle.pH3,
//     backgroundColor: colors.blackBg,
//     paddingBottom: 16,
//     paddingTop: device.iPhoneX ? 64 : 24
//   },
//   searchPlaceholder: {
//     alignItems: 'center',
//     backgroundColor: colors.white,
//     borderRadius: 6,
//     flexDirection: 'row',
//     paddingLeft: 16,
//     paddingVertical: 16
//   },
//   searchPlaceholderText: {
//     ...gStyle.textSpotify16,
//     color: colors.blackBg
//   },
//   sectionHeading: {
//     ...gStyle.textSpotifyBold18,
//     color: colors.white,
//     marginBottom: 24,
//     marginLeft: 24,
//     marginTop: 16
//   },
//   containerRow: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginLeft: 24
//   },
//   containerColumn: {
//     width: '50%'
//   },
//   iconRight: {
//     alignItems: 'center',
//     height: 28,
//     justifyContent: 'center',
//     position: 'absolute',
//     right: 24,
//     top: device.web ? 40 : 78,
//     width: 28
//   }
// });


const styles = StyleSheet.create({
  card: {
    borderColor: 'transparent',
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  left: {
    marginRight: 20,
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40
  },
  right: {
    marginLeft: 25,
    width: BASE_SIZE * 2,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  id: {
    fontWeight: 'bold'
  },
  perc: {
    right: -10
  }
});

const cards = [
  { id: 1, title: "The Queen's Gambit", rating: "93%", img: null },
  { id: 2, title: "Naruto", rating: "85%", img: null },
  { id: 3, title: "Game of Thrones", rating: "82%", img: null },
  { id: 4, title: "Big Buck Bunny", rating: "13%", img: null }
];

const Inbox: React.FC = () => {
  const renderCard = (props, index) => {
    const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;

    return (
      <>
        {/* <Gradient
          start={[0.45, 0.45]}
          end={[0.9, 0.9]}
          colors={gradientColors}
          style={[styles.gradient, styles.left]}
        >
          <Icon
            size={BASE_SIZE}
            name={props.icon}
            color={COLOR_WHITE}
            family={props.iconFamily}
          />
        </Gradient> */}
        <Card
          idx={props.id}
          flex
          borderless
          style={styles.card}
          title={props.title}
          // caption="139 minutes ago"
          location={props.rating}
          // avatar="http://i.pravatar.cc/100?id=skater"
          imageStyle={styles.cardImageRadius}
          imageBlockStyle={{ padding: theme.SIZES.BASE / 2 }}
          image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
        />
        {/* <Block flex style={styles.left}>
          <Text style={styles.id} size={BASE_SIZE * 1.125}>{props.id}</Text>
          <Text style={styles.text} size={BASE_SIZE * 1.125}>😀{props.title}</Text>
          <Text style={styles.perc} size={BASE_SIZE * 0.875} muted>
            {props.rating}
          </Text>
        </Block> */}
        {/* <Button style={styles.right}>
          <Icon
            style={styles.right}
            size={25}
            name="more-vert"
            family="material"
            color="#e279fc"
          />
        </Button> */}
      </>
    );
  };

  const renderCards = () =>
    cards.map((card, index) => renderCard(card, index));

  return (
    <Container>
      <Header>
        <Title style={{ fontSize: 30, marginTop: 10, marginBottom: 15 }}>Matches</Title>
        {/* <MaterialIcons name="arrow-drop-down" size={24} color="black" /> */}
        <Feather
          style={{ position: 'absolute', right: 30, top: 25 }}
          name="settings"
          size={24}
          color="black"
        />
      </Header>
      <ScrollView style={{ flex: 1 }}>{renderCards()}</ScrollView>
    </Container>
  );
};

export default Inbox;
