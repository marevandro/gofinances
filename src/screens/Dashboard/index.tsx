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
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export default function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vedas',
        icon: 'dollar-sign'
      },
      date: '14/10/2024'
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '22/10/2024'
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.000,00",
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: '09/10/2024'
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />} />

      </Transactions>
    </Container>
  )
}

