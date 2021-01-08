import React from 'react';

import { Feather, MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Header } from './styles';

const Inbox: React.FC = () => {
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
    </Container>
  );
};

export default Inbox;
