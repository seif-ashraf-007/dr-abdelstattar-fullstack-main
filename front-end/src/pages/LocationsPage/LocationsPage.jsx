import Locations from "../../components/Locations/Locations";
import { Helmet } from "react-helmet-async";

function LocationsPage() {
  return (
    <>
      <Helmet>
        <title>Dr Abdelsattar Nasr - Locations</title>
      </Helmet>
      <Locations />
    </>
  );
}

export default LocationsPage;
