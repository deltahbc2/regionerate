export type Slide = {
  src: string;
  alt: string;
};

export type ModalContent = {
  title: string;
  image: string;
  body: React.ReactNode;
};

export type ConsiderationCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export type CareCard = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  modal: ModalContent;
};
