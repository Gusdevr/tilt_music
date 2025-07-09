import { Container, Title, Form, Input, Button } from './styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, senha });
  };

  return (
    <Container>
      <Title>Entrar</Title>
      <Form onSubmit={handleLogin}>
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
        <Button type="submit">Login</Button>
        <p>
          Não tem uma conta? <Link to="/register">Cadastre-se</Link>
        </p>
      </Form>
    </Container>
  );
};

export default Login;
