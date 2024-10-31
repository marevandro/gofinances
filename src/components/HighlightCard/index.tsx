import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from "./styles";

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lasTransaction: string;
}

//nessa representação de icones, devemos entender que o valor passado para o name e totalmente baseado em variaveis
//icon[type] = arrow-up-circle[up] => se eu receber por props de type o up, ele vai acessar o icone up em icon
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighligthCard({
  type,
  title,
  amount,
  lasTransaction
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lasTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}