import ParcelCard from "./ParcelCard";
import { ParcelsLoadingSelector, ParcelsSelector } from "../../state/Selectors";
import { getParcelsThunk } from "../../state/thunks/ParcelsThunk";
import Spinner from "./Spinner";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ParcelsCardsContainer } from "./styles";
const ParcelList = () => {
  const dispatch = useDispatch();
  const parcels = useSelector((state) => ParcelsSelector(state));
  const loading = useSelector((state) => ParcelsLoadingSelector(state));

  useEffect(() => {
    if (!parcels) dispatch(getParcelsThunk());
  }, [parcels, dispatch]);
  return (
    <ParcelsCardsContainer>
      {loading && <Spinner />}
      {parcels &&
        parcels.map((parcel) => (
          <ParcelCard parcel={parcel} key={parcel._id} />
        ))}
    </ParcelsCardsContainer>
  );
};

export default ParcelList;
