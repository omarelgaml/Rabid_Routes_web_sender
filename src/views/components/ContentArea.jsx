import CreateParcel from "./CreateParcel";
import UserInfo from "./UserInfo";
function ContentArea(props) {
  // eslint-disable-next-line react/prop-types
  const { selectedTab } = props;
  switch (selectedTab) {
    case 2:
      return <CreateParcel />;
    case 1:
      return <UserInfo />;
    // case "userInfo":
    //   return <UserInfo />;
    default:
      return null;
  }
}

export default ContentArea;
