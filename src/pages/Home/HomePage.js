import React from "react";
import {
  Header,
  Footer,
  ContactUs,
  GetInvolved,
  OurMission,
  ClientJourney,
  OurServices,
  Banner,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <OurMission />
      <OurServices />
      <ClientJourney />
      <GetInvolved />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
