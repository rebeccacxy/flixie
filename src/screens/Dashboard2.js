import React from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// galio components
import { Button, Block, Icon, Text, NavBar } from 'galio-framework';
import theme from '../theme';
import Logo from '../components/Logo';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ['#6B84CA', '#8F44CE'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';

// mock data
const cards = [
  {
    title: 'Family',
    subtitle: '3 Members',
    icon: 'list-bullet',
    iconFamily: 'Galio',
  },

  {
    title: 'Friends',
    subtitle: '0 Members',
    icon: 'bag-17',
    iconFamily: 'Galio',
  },
  {
    title: 'GF',
    subtitle: '2 Members',
    icon: 'credit-card',
    iconFamily: 'Galio',
  },
  {
    title: 'Class',
    subtitle: '2 Members',
    icon: 'credit-card',
    iconFamily: 'Galio',
  }
];
const statsTitles = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

const Dashboard = (props) => {
  const renderHeader = () => (
    <NavBar
      title="Groups"
      titleStyle={{ fontSize: 30 }}
      transparent={true}
      onLeftPress={() => props.navigation.openDrawer()}
      leftIconColor={theme.COLORS.MUTED}
      right={
        <Button
          color="transparent"
          style={styles.settings}
          onPress={() => props.navigation.navigate('Preferences')}
        >
          <Icon
            size={30}
            name="plus"
            family="font-awesome"
            color={theme.COLORS.MUTED}
          />
        </Button>
      }
      style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
    />
  );

  const renderStats = () => {
    const GradientStats = () => (
      <Defs key="gradient">
        <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor={theme.COLORS.THEME} />
          <Stop offset="100%" stopColor={theme.COLORS.INFO} />
        </LinearGradient>
      </Defs>
    );

    const statsActive = Array.from({ length: 20 }, () =>
      parseFloat((Math.random() * 0.8 + 1).toFixed(3)),
    );
    const statsInactive = Array.from({ length: 12 }, () =>
      parseFloat((Math.random() * 0.7 + 1).toFixed(3)),
    );

    return (
      <Block style={{ marginBottom: BASE_SIZE * 3 }}>
        <AreaChart
          yMin={0}
          yMax={Math.max(...statsActive) + 1}
          data={statsInactive}
          curve={shape.curveNatural}
          style={[StyleSheet.absoluteFill]}
          contentInset={{
            bottom: -BASE_SIZE * 0.15,
            right: -BASE_SIZE * 0.15,
            left: -BASE_SIZE * 0.15,
          }}
          svg={{
            strokeWidth: 1,
            stroke: 'rgba(0,0,0,0.2)',
            strokeDasharray: 4,
          }}
        >
          <GradientStats />
        </AreaChart>
        <AreaChart
          yMin={0}
          yMax={Math.max(...statsActive) + 1}
          data={statsActive}
          curve={shape.curveNatural}
          style={{ height: BASE_SIZE * 10 }}
          contentInset={{
            bottom: -BASE_SIZE * 0.21,
            right: -BASE_SIZE * 0.21,
            left: -BASE_SIZE * 0.21,
          }}
          svg={{ strokeWidth: BASE_SIZE * 0.1875, stroke: 'url(#gradient)' }}
        >
          <GradientStats />
        </AreaChart>
        <Block row space="evenly" style={{ marginTop: BASE_SIZE }}>
          {statsTitles.map(title => (
            <Text key={title} size={theme.SIZES.FONT * 0.85} muted>
              {title}
            </Text>
          ))}
        </Block>
      </Block>
    );
  };

  const renderCard = (card, index) => {
    const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;

    return (
      <Block
        row
        center
        card
        shadow
        space="between"
        style={styles.card}
        key={card.title}
      >
        {/* <Gradient
          start={[0.45, 0.45]}
          end={[0.9, 0.9]}
          colors={gradientColors}
          style={[styles.gradient, styles.left]}
        >
          <Icon
            size={BASE_SIZE}
            name={card.icon}
            color={COLOR_WHITE}
            family={card.iconFamily}
          />
        </Gradient> */}

        <Block flex style={styles.left}>
          <Text size={BASE_SIZE * 1.125}>{card.title}</Text>
          <Text size={BASE_SIZE * 0.875} muted>
            {card.subtitle}
          </Text>
        </Block>
        <Button style={styles.right} onPress={() => props.navigation.navigate('Info')}>
          <Icon
            style={styles.right}
            size={25}
            name="more-vert"
            family="material"
            color="#e279fc"
          />
        </Button>
      </Block>
    );
  };

  const renderCards = () =>
    cards.map((card, index) => renderCard(card, index));

  return (
    <Block safe flex>
      {/* header */}
      {renderHeader()}

      {/* stats */}
      {/* {renderStats()} */}
      <Logo />

      {/* cards */}
      <ScrollView style={{ flex: 1 }}>{renderCards()}</ScrollView>
    </Block>
  );
};

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
    marginRight: BASE_SIZE,
    marginLeft: 10,
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
});

export default Dashboard;
