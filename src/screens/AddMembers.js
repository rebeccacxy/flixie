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
const mock = [
    {
        title: 'Schmidt',
        icon: 'credit-card',
        iconFamily: 'Galio',
    },
];

const AddMembers = (props) => {
    const [members, setMembers] = React.useState([]);
    const [textValue, setTextValue] = React.useState('');

    const renderHeader = () => (
        <NavBar
            title="Add Members"
            titleStyle={{ fontSize: 25 }}
            transparent={true}
            onLeftPress={() => props.navigation.openDrawer()}
            style={Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null}
        />
    );

    const renderCard = (card, index) => {
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
                <Block flex>
                    <Text size={BASE_SIZE * 1.125}>{card.title}</Text>
                    <Text size={BASE_SIZE * 0.875} muted>
                        {card.subtitle}
                    </Text>
                </Block>
                <Button style={styles.right} onPress={() => props.navigation.navigate('CreateGroup2')}>
                    <Icon
                        size={25}
                        name="check"
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
            <Block middle style={{ padding: BASE_SIZE }} >
                <Input
                    placeholder="Username"
                    style={{ width: '90%' }}
                    right
                    icon="search1"
                    family="antdesign"
                    iconSize={18}
                    iconColor="black"
                    value={textValue}
                    onChange={(e) => setTextValue(e)}
                    onSubmitEditing={() => {
                        setTextValue('');
                        setMembers(mock);
                    }}
                />
            </Block>
            {/* cards */}
            <ScrollView style={{ flex: 1 }}>{renderCards()}</ScrollView>
            {/* <Block middle space='evenly' style={{ padding: BASE_SIZE }}>
                <Button color="#e279fc" style={{ alignSelf: 'stretch', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>Create</Button>
            </Block> */}
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

export default AddMembers;
