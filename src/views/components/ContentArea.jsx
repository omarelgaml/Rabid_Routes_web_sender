import { useState } from "react";
import CreateParcel from "./CreateParcel";

function ContentArea(props) {
  const { selectedTab } = props;
  switch (selectedTab) {
    case 1:
      return <CreateParcel />;
    // case "parcelList":
    //   return <ParcelList />;
    // case "userInfo":
    //   return <UserInfo />;
    default:
      return null;
  }
}

export default ContentArea;
