import React from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

// galio components
import { Button, Block, Icon, Text, NavBar, Input } from 'galio-framework';
import theme from '../theme';
import Logo from '../components/Logo';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ['#6B84CA', '#8F44CE'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';

// mock data
const members = [
    {
        title: 'JohnDoe23',
        icon: 'list-bullet',
        iconFamily: 'Galio',
    },
    {
        title: 'JaneDoe12',
        icon: 'bag-17',
        iconFamily: 'Galio',
    }
];

const CreateGroup2 = (props) => {
    const renderHeader = () => (
        <NavBar
            title="Create Group"
            titleStyle={{ fontSize: 25 }}
            transparent={true}
            onLeftPress={() => props.navigation.openDrawer()}
            style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
    );

    const renderCard = (props, index) => {
        return (
            <Block
                row
                center
                shadow
                card
                space="between"
                style={styles.card}
                key={props.title}
            >
                {/* <Icon
                    size={BASE_SIZE}
                    name={props.icon}
                    color={COLOR_WHITE}
                    family={props.iconFamily}
                /> */}

                <Block flex>
                    <Text size={BASE_SIZE * 1.125}>{props.title}</Text>
                    <Text size={BASE_SIZE * 0.875} muted>
                        {props.subtitle}
                    </Text>
                </Block>
                <Button style={styles.right}>
                    <Icon
                        size={25}
                        name="circle-with-cross"
                        family="Entypo"
                        color="#e279fc"
                    />
                </Button>
            </Block>
        );
    };

    const renderCards = () =>
        members.map((card, index) => renderCard(card, index));

    return (
        <Block safe flex>
            {/* header */}
            {renderHeader()}

            {/* stats */}
            {/* {renderStats()} */}
            <Block middle style={{ padding: BASE_SIZE }}>
                <Input placeholder="Group Name" value='Classmates' />
                <Button
                    round
                    onPress={() => props.navigation.navigate('Preferences')}
                    style={{ alignSelf: 'stretch', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                    color="#B23AFC"

                >
                    Invite Friends
                </Button>
            </Block>

            {/* cards */}
            <ScrollView style={{ flex: 1 }}>{renderCards()}</ScrollView>
            <Block middle space='evenly' style={{ padding: BASE_SIZE }}>
                <Button
                    color="#B23AFC"
                    style={{ alignSelf: 'stretch', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                    onPress={() => props.navigation.navigate('Dashboard2')}
                >Create</Button>
            </Block>
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
    },
    right: {
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

export default CreateGroup2;
