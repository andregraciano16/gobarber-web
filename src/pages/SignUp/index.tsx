import React from 'react';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBaber" />

        <Form onSubmit={handleSubmit} >
          <h1>Faça seu Cadastro</h1>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome" />

          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha" />

          <Button type="submit">Cadstrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>

    </Container>
  );
}

export default SignUp;
