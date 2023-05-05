import CreateParcel from "./CreateParcel";
import UserInfo from "./UserInfo";
import ShowParcels from "./ShowParcels";
function ContentArea(props) {
  const parcel = {
    dropoffAddress: {
      country: "USA",
      city: "New York",
      street: "Fifth Avenue",
      buildingNumber: "123",
      floorNumber: "2nd",
    },
    pickupAddress: {
      country: "USA",
      city: "Los Angeles",
      street: "Hollywood Boulevard",
      buildingNumber: "456",
      floorNumber: "3rd",
    },
    bikerName: "John Doe",
    bikerNotes: "Handle with care",
    senderNotes: "Fragile items inside",
    createdAt: new Date("2022-05-03"),
    pickedAt: new Date("2022-05-04"),
    deliveredAt: new Date("2022-05-06"),
    status: "Delivered",
  };
  // eslint-disable-next-line react/prop-types
  const { selectedTab } = props;
  switch (selectedTab) {
    case 2:
      return <CreateParcel />;
    case 1:
      return <ShowParcels />;
    // case "userInfo":
    //   return <UserInfo />;
    default:
      return null;
  }
}

export default ContentArea;
