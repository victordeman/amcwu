export interface KeynoteSpeaker {
  id: string;
  name: string;
  title: string;
  role: string;
  institution: string;
  bio: string;
  topic?: string;
  image?: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  role: string;
  institution?: string;
  phone?: string;
}

export interface SpeakersData {
  keynoteSpeakers: KeynoteSpeaker[];
  organizingCommittee: CommitteeMember[];
}

export const keynoteSpeakers: KeynoteSpeaker[] = [
  {
    id: "keynote-1",
    name: "Prof. Abubakar Sani Sambo",
    title: "Prof. Abubakar Sani Sambo, FAS, FNSE",
    role: "Keynote Speaker",
    institution: "Usmanu Danfodiyo University, Sokoto & Former Director-General, Energy Commission of Nigeria",
    bio: "Prof. Abubakar Sani Sambo is a renowned Nigerian professor of Mechanical Engineering, scholar, and pioneer in renewable energy research and energy policy implementation in Africa. He served as Director-General and Chief Executive Officer of the Energy Commission of Nigeria (ECN) and Vice-Chancellor of Abubakar Tafawa Balewa University, Bauchi.",
    topic: "Emerging Technologies and Sustainable Energy Transition in Africa: Policy, Infrastructure, and Innovation",
  },
  {
    id: "keynote-2",
    name: "Prof. Mosto Onuoha",
    title: "Prof. Mosto Onuoha, FAS",
    role: "Keynote Speaker",
    institution: "University of Nigeria, Nsukka & Former President, Nigerian Academy of Science",
    bio: "Prof. Mosto Onuoha is an eminent Nigerian geophysicist, Emeritus Professor, and former President of the Nigerian Academy of Science (NAS). He has published extensively on energy resource exploration, environmental geophysics, and sustainable resource management across Sub-Saharan Africa.",
    topic: "Geospatial Innovations and Green Economy Transition: Harnessing Natural Resources Safely in Developing Nations",
  },
];

export const organizingCommittee: CommitteeMember[] = [
  {
    id: "conference-chairman",
    name: "Prof Kingsley Ukaoha",
    title: "Prof Kingsley Ukaoha",
    role: "Conference Chairman",
    institution: "Wigwe University",
    phone: "+234 802 877 9315",
  },
  {
    id: "chair-loc",
    name: "Dr. Jacob Sesugh Angahar",
    title: "Dr. Jacob Sesugh Angahar",
    role: "Chairman LOC",
    institution: "Wigwe University",
    phone: "+234-7063841324",
  },
  {
    id: "co-chair-loc",
    name: "Dr. Nnaji Kennady",
    title: "Dr. Nnaji Kennady",
    role: "Secretary LOC",
    institution: "Wigwe University",
    phone: "+234-8068292927",
  },
];

export const speakersData: SpeakersData = {
  keynoteSpeakers,
  organizingCommittee,
};

// Backwards compatibility export
export const speakers = keynoteSpeakers;
