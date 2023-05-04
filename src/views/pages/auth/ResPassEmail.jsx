import { Form, Input, Button, Typography } from "antd";
const { Title } = Typography;
import styled from "styled-components";

const ResetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ResetPasswordForm = styled(Form)`
  max-width: 400px;
  width: 100%;
`;

const ResetPasswordButton = styled(Button)`
  width: 100%;
`;

const ResetPasswordEmailPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <ResetPasswordContainer>
      <Title>Reset Password</Title>
      <ResetPasswordForm
        name="reset-password"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
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
        <Form.Item>
          <ResetPasswordButton type="primary" htmlType="submit">
            Reset Password
          </ResetPasswordButton>
        </Form.Item>
      </ResetPasswordForm>
    </ResetPasswordContainer>
  );
};

export default ResetPasswordEmailPage;
