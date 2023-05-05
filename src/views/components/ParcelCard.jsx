/* eslint-disable react/prop-types */
import { Card, Row, Col, Typography, Button } from "antd";
import styled from "styled-components";
const { Title, Text } = Typography;
import { Divider } from "antd";
const ParcelCard = ({ parcel }) => {
  const {
    dropoffAddress,
    pickupAddress,
    biker,
    bikerNotes,
    senderNotes,
    createdAt,
    datePicked,
    dateDelivered,
    status,
  } = parcel;

  const StyledCard = styled(Card)`
    width: 100%;
    margin-bottom: 40px;
    boarder-radius: 10px;
  `;

  const StyledRow = styled(Row)`
    margin-bottom: 20px;
  `;

  const labelStyle = {
    fontWeight: "bold",
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    return formattedDate;
  };
  return (
    <>
      {parcel && (
        <StyledCard>
          <Title level={5}>Parcel Details</Title>

          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Dropoff Address:</Text>
              <div>{`${dropoffAddress.country}, ${dropoffAddress.city}, ${dropoffAddress.street}, ${dropoffAddress.buildingNumber}, ${dropoffAddress.floor}`}</div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Pickup Address:</Text>
              <div>{`${pickupAddress.country}, ${pickupAddress.city}, ${pickupAddress.street}, ${pickupAddress.buildingNumber}, ${pickupAddress.floor}`}</div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Biker Name:</Text>
              <div>{biker ? biker.name : "Not assigned"}</div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Biker Notes:</Text>
              <div>{bikerNotes ? bikerNotes : "--"}</div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Sender Notes:</Text>
              <div>{senderNotes}</div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Created At:</Text>
              <div>{formatDateTime(createdAt)}</div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={12}>
              <Text style={labelStyle}>Picked Date:</Text>
              <div>
                {datePicked ? formatDateTime(datePicked) : "Not picked yet"}
              </div>
            </Col>
            <Col span={12}>
              <Text style={labelStyle}>Delivered Date:</Text>
              <div>
                {dateDelivered
                  ? formatDateTime(dateDelivered)
                  : "Not delivered yet"}
              </div>
            </Col>
          </StyledRow>
          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={24}>
              <Text style={labelStyle}>Status:</Text>
              <div>{status.name}</div>
            </Col>
          </StyledRow>

          <Divider />
          <StyledRow gutter={[16, 16]}>
            <Col span={3} offset={21}>
              <Button type="primary" danger htmlType="submit" loading={false}>
                Delete Parcel
              </Button>
            </Col>
          </StyledRow>
        </StyledCard>
      )}
    </>
  );
};

export default ParcelCard;
