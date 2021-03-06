import React, { useState } from 'react';
import { View } from 'react-native';

import ViewPager from '@react-native-community/viewpager';

import server from '../../../server.json';
import Feed from './Feed';

import { Container, Header, Text, Tab, Separator } from './styles';

const Home: React.FC = ({ navigation }) => {
  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);
  return (
    <Container>
      {/* <Header>
        <Tab onPress={() => setTab(1)}>
          <Text active={tab === 1}>Recommendations</Text>
        </Tab>
        <Separator>|</Separator>
        <Tab onPress={() => setTab(2)}>
          <Text active={tab === 2}>Explore</Text>
        </Tab>
      </Header> */}
      <ViewPager
        onPageSelected={e => {
          setActive(e.nativeEvent.position);
        }}
        orientation="vertical"
        style={{ flex: 1 }}
        initialPage={0}
      >
        {server.feed.map(item => (
          <View key={item.id}>
            <Feed item={item} play={Number(item.id) === active} navigation={navigation} />
          </View>
        ))}
      </ViewPager>
    </Container>
  );
};

export default Home;
