import { Form, Input, Button, Typography } from "antd";
const { Title } = Typography;
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97vh;
`;

const LoginForm = styled(Form)`
  max-width: 400px;
  width: 100%;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;
const StylesTitle = styled(Title)`
  text-align: center;
`;

const SignupLink = styled.a`
  float: right;
`;

const ForgotPasswordLink = styled.a`
  float: left;
`;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <LoginContainer>
      <LoginForm
        name="login"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <StylesTitle level={2}>Login to Rapid Routes</StylesTitle>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <LoginButton type="primary" htmlType="submit">
            Login
          </LoginButton>
          <Link to="/signup">
            <SignupLink>Signup</SignupLink>
          </Link>
          <Link to="/">
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </Link>
        </Form.Item>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
