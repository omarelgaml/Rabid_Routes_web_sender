/* eslint-disable react/prop-types */
import ParcelCard from "./ParcelCard";
import {
  ParcelsLoadingSelector,
  ParcelsSelector,
  ParcelsStatusesSelector,
} from "../../state/Selectors";
import {
  getParcelsThunk,
  getStatusesThunk,
} from "../../state/thunks/ParcelsThunk";
import Spinner from "./Spinner";
import { Select, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  ParcelsCardsContainer,
  StyledSelect,
  ParcelPageContainer,
} from "./styles";

const { Option } = Select;
const ParcelList = (props) => {
  const dispatch = useDispatch();
  const parcels = useSelector((state) => ParcelsSelector(state));
  const loading = useSelector((state) => ParcelsLoadingSelector(state));
  const statuses = useSelector((state) => ParcelsStatusesSelector(state));
  const [filter, setFilter] = useState("");
  const { editClicked } = props;
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredParcels =
    filter && filter != 0
      ? parcels.filter((parcel) => parcel.status._id === filter)
      : parcels;

  useEffect(() => {
    if (!parcels) dispatch(getParcelsThunk());
    if (statuses && !statuses.length) dispatch(getStatusesThunk());
  }, [parcels, statuses, dispatch]);
  return (
    <ParcelPageContainer>
      <Row>
        <Col span={3}>
          <StyledSelect defaultValue={0} onChange={handleFilterChange}>
            <Option value={0}>All</Option>
            {statuses &&
              statuses.length > 0 &&
              statuses.map((stat) => (
                <Option value={stat._id} key={stat._id}>
                  {stat.name}
                </Option>
              ))}
          </StyledSelect>
        </Col>
      </Row>
      <ParcelsCardsContainer>
        {loading && <Spinner />}
        {filteredParcels &&
          filteredParcels.map((parcel) => (
            <ParcelCard
              edit={(parcel) => editClicked(parcel)}
              parcel={parcel}
              key={parcel._id}
            />
          ))}
      </ParcelsCardsContainer>
    </ParcelPageContainer>
  );
};

export default ParcelList;
