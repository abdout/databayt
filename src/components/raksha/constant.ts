export interface IconProps {
  src: string;
  width: number;
  path: string;
}

export interface WelcomeProps {
  title: string;
  desc: string;
  book: string;
  icon: IconProps[];
}

export const welcome: WelcomeProps[] = [
  {
    title: "Raksha",
    desc: "Raksha is focused on transforming gasoline tuk-tuks into electric vehicles, enhancing sustainability and efficiency in Sudan's transportation system.",
    book: "Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
    icon: [
      {
        src: "ph:book-fill",
        width: 65,
        path: "",
      },
      {
        src: "ph:book-fill",
        width: 65,
        path: "",
      },
    ],
  },
  {
    title: "Bulet",
    desc: "Bulet aims to convert gasoline-powered tuk-tuks into electric vehicles, promoting eco-friendly and efficient transportation in Sudan.",
    book: "Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
    icon: [
      {
        src: "ph:book-fill",
        width: 65,
        path: "",
      },
      {
        src: "ph:book-fill",
        width: 65,
        path: "",
      },
    ],
  },
  {
    title: "Frnas",
    desc: "Frnas is dedicated to converting gasoline-powered tuk-tuks into electric vehicles, supporting sustainability and efficiency in Sudan's transportation sector.",
    book: "Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
    icon: [
      {
        src: "ph:book-fill",
        width: 65,
        path: "",
      },
      {
        src: "ph:book-fill",
        width: 65,
        path: "",
      },
    ],
  },
];
