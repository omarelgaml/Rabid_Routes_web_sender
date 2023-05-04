import { useState } from "react";
import { Form, Input, Button, Space, Row, Col } from "antd";

const CreateParcelPage = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      form.resetFields();
    }, 2000);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Create Parcel</h1>

      <Form
        form={form}
        onFinish={handleFormSubmit}
        layout="vertical"
        autoComplete="off"
      >
        <h2>Pick-up Address</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="pickupCountry"
              rules={[{ required: true, message: "Please input the country!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City"
              name="pickupCity"
              rules={[{ required: true, message: "Please input the city!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Street"
              name="pickupStreet"
              rules={[{ required: true, message: "Please input the street!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Building Number"
              name="pickupBuildingNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the building number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Floor Number"
              name="pickupFloorNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the building number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        {/************************************************************** */}
        <h2>Drop-off Address</h2>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Country"
              name="dropOffCountry"
              rules={[{ required: true, message: "Please input the country!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="City"
              name="dropOffCity"
              rules={[{ required: true, message: "Please input the city!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Street"
              name="dropOffStreet"
              rules={[{ required: true, message: "Please input the street!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Building Number"
              name="dropOffBuildingNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the building number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Floor Number"
              name="dropOffFloorNumber"
              rules={[
                {
                  required: true,
                  message: "Please input the floor number!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item label="Notes" name="Notes">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Create Parcel
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateParcelPage;
