import React, { useState } from "react";

import FeaturesContext from "./FeaturesContext";

const FeaturesContextProvider = ({ children }) => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      featuresTitle: "Vaccination tracker",
      featuresDescription:
        "Are you wondring how to track all the needed vacines for your kids wihouy=t missing anyone? Vaccinne App is here to aleviate your worries with our upto date vaccine tracking software.  We record all the required vaccines and send series of remiders to ensure you dont miss any dosage.",
      featuresSvg: "../assets/vaccination_tracker.svg",
    },
    {
      id: 2,
      featuresTitle: "Medication Tracker",
      featuresDescription:
        "This will record the creation of a medication log for a user. Thereafter, a form to be filled concerning the full medication, the illness being treated, the dosage, duration. Name of medication, medication certification number (optional). etc. There would also be options to select common disease for a speedy diagnosis and there are other slots that allow for the inputting of another name. For medication, there should be options to select popular medications for selected diseases. Especially something like malaria there will be many pre-options plus auto fill for medication dosage and duration but this should be editable after auto filling.",
      featuresSvg: "../assets/meditation_tracker.svg",
    },
    {
      id: 3,
      featuresTitle: "DOC Chat",
      featuresDescription:
        "Doctors on call in the app and when a VIP (user) clicks on the chat with a doctor icon he is taken to a page where he can select from the list of doctors online. Doctors have a profile picture and their names attached to their accounts. When a VIP(user) selects a doctor, they proceed to chat with that doctor. This is a paid feature and costs 300 naira a session, a session lasts for 20 mins only.",
      featuresSvg: "../assets/doc_chat.svg",
    },

    {
      id: 4,
      featuresTitle: "Health Blog",
      featuresDescription:
        "This is a straight health blog where health news, stories, and articles will be updated regularly.",
      featuresSvg: "../assets/health_blog.svg",
    },
    {
      id: 5,
      featuresTitle: "USSD",
      featuresDescription:
        "Patients should be able to view their records via USSD. But for now, it should be taken under advisement",
      featuresSvg: "../assets/ussd.svg",
    },

    {
      id: 6,
      featuresTitle: "Government Hospital Incorporation",
      featuresDescription:
        "The system should be something that can be presented to a hospital and connected with our database. So anywhere the patient goes their records are accessible not only on the app but in any hospital with the available hospital software.",
      featuresSvg: "../assets/government_hospital_incorporation.svg",
    },
    {
      id: 7,
      featuresTitle: "Hospital Database",
      featuresDescription:
        "Medatapp will have the information and location of all hospitals in Nigeria organized by state and city with call buttons attached to contact them with. There will be icons to specify the ones with special services like Ambulances etc. The App will also have a map feature where you can see the health institutions closest to you.",
      featuresSvg: "../assets/hospital_database.svg",
    },
  ]);

  return (
    <FeaturesContext.Provider value={{ features, setFeatures }}>
      {children}
    </FeaturesContext.Provider>
  );
};

export default FeaturesContextProvider;
