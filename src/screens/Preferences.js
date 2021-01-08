import * as React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';
import { Button, Icon, NavBar } from 'galio-framework';
import theme from '../theme';

// components
import PlaylistItem from '../components/PlaylistItem';
import TouchIcon from '../components/TouchIcon';

// icons
import SvgSearch from '../components/icons/Svg.Search';

// mock data
import browseAll from '../mockdata/searchBrowseAll.json';
import topGenres from '../mockdata/searchTopGenres.json';

class Search extends React.Component {
  constructor(props) {
    super(props);

    // search start (24 horizontal padding )
    const searchStart = device.width - 48;

    this.state = {
      scrollY: new Animated.Value(0),
      searchStart,
      searchEnd: searchStart - 40,
      isPressed: []
    };
  }

  renderHeader = () => (
    <NavBar
      title="Genres"
      titleStyle={{ fontSize: 40, marginTop: 30 }}
      transparent={true}
      onLeftPress={() => props.navigation.openDrawer()}
      leftIconColor={theme.COLORS.MUTED}
      // right={
      //   <Button
      //     color="transparent"
      //     style={styles.settings}
      //     onPress={() => props.navigation.navigate('Preferences')}
      //   />
      //     <Icon
      //       size={30}
      //       name="plus"
      //       family="font-awesome"
      //       color={theme.COLORS.MUTED}
      //     />
      //   </Button>
      // }
      style={{ marginTop: '5%', height: 125 }}
    />
  );

  render() {
    const { scrollY, searchStart, searchEnd } = this.state;

    const opacity = scrollY.interpolate({
      inputRange: [0, 48],
      outputRange: [searchStart, searchEnd],
      extrapolate: 'clamp'
    });

    return (
      <React.Fragment>
        {this.renderHeader()}
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
        >
          <View style={{ height: 0 }} />
          {/* <View style={styles.containerSearchBar}>
            <Animated.View style={{ width: opacity }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => null}
                style={styles.searchPlaceholder}
              >
                <View style={gStyle.mR1}>
                  <SvgSearch />
                </View>
                <Text style={styles.searchPlaceholderText}>
                  Artists, songs or podcasts
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View> */}

          {/* <Text style={styles.sectionHeading}>Your top genres</Text>
          <View style={styles.containerRow}>
            {Object.keys(topGenres).map((index) => {
              const item = topGenres[index];

              return (
                <View key={item.id} style={styles.containerColumn}>
                  <PlaylistItem
                    bgColor={item.color}
                    onPress={() => null}
                    title={item.title}
                  />
                </View>
              );
            })}
          </View> */}

          <Text style={styles.sectionHeading}></Text>
          <View style={styles.containerRow}>
            {Object.keys(browseAll).map((index) => {
              const item = browseAll[index];

              return (
                <View key={item.id} style={{ width: '50%' }}>
                  <PlaylistItem
                    styleParent={this.state.isPressed.includes(item.id) ? { borderColor: 'black', borderWidth: '3%' } : {}}
                    // styleParent={{ borderColor: 'black', borderWidth: '1%' }}
                    bgColor={item.color}
                    onPress={() => this.setState((prevProps) => {
                      var tmp = prevProps.isPressed
                      tmp.push(item.id);
                      return {
                        ...prevProps,
                        isPressed: tmp
                      };
                    })}
                    title={item.title}
                  />
                </View>
              );
            })}
          </View>
        </Animated.ScrollView>
{/* 
        <View style={styles.iconRight}>
          <TouchIcon
            icon={<FontAwesome color={colors.white} name="microphone" />}
            onPress={() => null}
          />
        </View> */}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerSearchBar: {
    ...gStyle.pH3,
    backgroundColor: colors.blackBg,
    paddingBottom: 16,
    paddingTop: device.iPhoneX ? 64 : 24
  },
  searchPlaceholder: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 6,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 16
  },
  searchPlaceholderText: {
    ...gStyle.textSpotify16,
    color: colors.blackBg
  },
  sectionHeading: {
    ...gStyle.textSpotifyBold18,
    color: colors.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 24
  },
  containerColumn: {
    width: '50%'
  },
  iconRight: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: device.web ? 40 : 78,
    width: 28
  }
});

export default Search;
