import Hero from "components/Hero/Hero";
import IndividualFurniture from "components/IndividualFurniture/IndividualFurniture";
import OurHistory from "components/OurHistory/OurHistory";
import LastPublic from "components/LastPublic/LastPublic";
import Form from "components/Form/Form";
import CompanyInfo from "components/CompanyInfo/CompanyInfo";

function Main() {
  return (
    <div>
      <Hero />
      <IndividualFurniture />
      <OurHistory />
      <LastPublic />
      <Form />
      <CompanyInfo />
    </div>
  );
}

export default Main;
