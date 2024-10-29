import React from 'react';
import {
  Container,
  Header,
  UserWrapper,
  UseInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
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
          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  )
}
