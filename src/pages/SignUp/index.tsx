import React from 'react';
import { FiLogIn, FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBaber" />

      <form>
        <h1>Faça seu Cadastro</h1>

        <Input
          name="user"
          icon={ FiUser }
          placeholder="Nome"/>

        <Input
          name="email"
          icon={ FiMail }
          placeholder="E-mail"/>

        <Input
          name="password"
          icon={ FiLock }
          type="password"
          placeholder="Senha" />

        <Button type="submit">Cadstrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para Logon
      </a>
    </Content>

  </Container>
);

export default SignUp;