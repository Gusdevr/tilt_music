import { Container, Title, Form, Input, Button } from './styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Cadastro:', { email, senha });
  };

  return (
    <Container>
      <Title>Cadastrar</Title>
      <Form onSubmit={handleRegister}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
        <p>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
