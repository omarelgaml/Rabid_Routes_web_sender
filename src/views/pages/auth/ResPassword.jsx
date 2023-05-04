import { Form, Input, Button, Typography } from "antd";
const { Title } = Typography;
import styled from "styled-components";

const ResetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
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

const ResetPasswordPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <ResetPasswordContainer>
      <ResetPasswordForm
        name="reset-password"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Title>Reset Password</Title>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="New Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your new password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm New Password" />
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

export default ResetPasswordPage;
