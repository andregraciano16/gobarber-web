import React, { useRef, useCallback } from 'react';
import { FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useHistory, useLocation } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;

}

const ResetPassword: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const location = useLocation();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
          .oneOf([Yup.ref('password'), ''], 'A senha informada é diferente')
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {password, password_confirmation} = data;

        const token = location.search.replace('?token=', '');
        
        if(!token) {
          throw new Error();
        }
        await api.post('password/reset', {
          password,
          passwordConfirmation: password_confirmation,
          token
        })
        history.push('/')
      } catch (err) {
        console.log()
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return ;
        }
        addToast({
          type: 'error',
          title: 'Erro resetar senha',
          description: 'Ocorreu um erro ao resetar senha, tente novamente.'
        });
      }
  }, [ addToast, history, location ]);
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBaber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar Senha</h1>

            <Input name="password" icon={FiLock} type="password" placeholder="Nova senha" />

            <Input name="password_confirmation" icon={FiLock} type="password" placeholder="Confirmação da senha" />

            <Button type="submit">Alterar senha</Button>
          </Form>
          
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
