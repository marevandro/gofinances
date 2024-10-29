import React from 'react';
import { Text } from 'react-native'
import {
  Container,
  Header,
  UserWrapper,
  UseInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UseInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62778708?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Márcio</UserName>
            </User>
          </UseInfo>
        </UserWrapper>

      </Header>
    </Container>
  )
}

