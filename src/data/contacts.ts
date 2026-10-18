export interface ContactPerson {
  name: string;
  role: string;
  email?: string;
  phone: string;
}

export interface ContactInfoData {
  locChairman: ContactPerson;
  locSecretary: ContactPerson;
  officialEmail: string;
  universityWebsite: string;
  eventsPageUrl: string;
  venueAddress: {
    auditorium: string;
    institution: string;
    location: string;
    stateCountry: string;
  };
}

export const contactInfo: ContactInfoData = {
  locChairman: {
    name: "Dr. Jacob Sesugh Angahar",
    role: "Chairman, Local Organizing Committee (LOC)",
    email: "africanconference@wigweuniversity.edu.ng",
    phone: "+234-7063841324",
  },
  locSecretary: {
    name: "Dr. Nnaji Kennady",
    role: "Secretary, Local Organizing Committee (LOC)",
    phone: "+234-8068292927",
  },
  officialEmail: "africanconference@wigweuniversity.edu.ng",
  universityWebsite: "https://wigweuniversity.edu.ng",
  eventsPageUrl: "https://wigweuniversity.edu.ng/events",
  venueAddress: {
    auditorium: "Main Auditorium",
    institution: "Wigwe University",
    location: "Isiokpo",
    stateCountry: "Rivers State, Nigeria",
  },
};
