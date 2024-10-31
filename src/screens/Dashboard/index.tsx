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
  HighlightCards
} from './styles';
import { HighligthCard } from '../../components/HighlightCard';

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


      <HighlightCards>
        <HighligthCard 
          title='Entradas' 
          amount='R$ 17.400,00' 
          lasTransaction='Última entrada dia 30 de Outubro'
          type="up"/>

        <HighligthCard 
        title='Saídas' 
        amount='R$ 1.259,00' 
        lasTransaction='Última saída dia 21 de Outubro'
        type="down"/>
        
        <HighligthCard 
        title='Total' 
        amount='R$ 16.141,00' 
        lasTransaction='01 á 31 de Outubro'
        type='total'/>
      </HighlightCards>
    </Container>
  )
}

