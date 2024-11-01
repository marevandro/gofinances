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
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';
import { HighligthCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export default function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vedas',
        icon: 'dollar-sign'
      },
      date: '14/10/2024'
    },
    {
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vedas',
        icon: 'dollar-sign'
      },
      date: '14/10/2024'
    },
    {
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vedas',
        icon: 'dollar-sign'
      },
      date: '14/10/2024'
    }
  ];

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
          type="up" />

        <HighligthCard
          title='Saídas'
          amount='R$ 1.259,00'
          lasTransaction='Última saída dia 21 de Outubro'
          type="down" />

        <HighligthCard
          title='Total'
          amount='R$ 16.141,00'
          lasTransaction='01 á 31 de Outubro'
          type='total' />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />} 
          showsVerticalScrollIndicator={false}/>

      </Transactions>
    </Container>
  )
}

