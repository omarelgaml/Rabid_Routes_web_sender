import { Form, Input } from "antd";

import {
  StyledContainer,
  StyledForm,
  StylesButton,
  StyledTitle,
} from "./styles";
const ResetPasswordEmailPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <StyledContainer>
      <StyledTitle>Reset Password</StyledTitle>
      <StyledForm
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
          <StylesButton type="primary" htmlType="submit">
            Send Email
          </StylesButton>
        </Form.Item>
      </StyledForm>
    </StyledContainer>
  );
};

export default ResetPasswordEmailPage;
