export type KeynoteSpeaker = {
    id: number;
    name: string;
    designation: string;
    image: string;
    linkedin: string;
    description? : string
};

export const KeynoteSpeakers: KeynoteSpeaker[] = [
    {
        id: 1,
        name: 'Anjani Phuyal',
        designation: 'CEO at Genese | AWS Ambassador',
        image: '/keynote%20speakers/anjani-phuyal.jpg',
        linkedin: 'https://www.linkedin.com/in/anjaniphuyal/',
    },
    {
        id: 2,
        name: 'Lisa Bagley',
        designation: 'Global Lead | AWS Cloud Clubs | AWS',
        image: '/keynote%20speakers/lisa-bagley.jpg',
        linkedin: 'https://www.linkedin.com/in/lisa-bagley-cpacc-0b16b47/',
    },
    {
        id: 3,
        name: 'William Antonio',
        designation: 'Principal AWS Engineer | Co-Leader AWS Users Groups',
        image: '/keynote%20speakers/william-antonio.jpg',
        linkedin: 'https://www.linkedin.com/in/wiangube/',
    },
];
