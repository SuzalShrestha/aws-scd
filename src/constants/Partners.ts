export type PartnerLogo = {
    id: string;
    name: string;
    logo: string;
};

export type PartnerCategory = {
    title: string;
    items: PartnerLogo[];
};

export const partnerCategories: PartnerCategory[] = [
    {
        title: 'Sponsors',
        items: [
            {
                id: 'aws',
                name: 'Amazon Web Services',
                logo: '/Sponsors%20Logo/aws.png',
            },
            {
                id: 'github-education',
                name: 'GitHub Education',
                logo: '/Sponsors%20Logo/github%20education.png',
            },
            {
                id: 'karnovation',
                name: 'Karnovation',
                logo: '/Sponsors%20Logo/karnovation.png',
            },
        ],
    },
    {
        title: 'Community Partners',
        items: [
            {
                id: 'acs',
                name: 'ACS',
                logo: '/Community%20Partners%20Logo/acs%20logo.png',
            },
            {
                id: 'csit',
                name: 'CSIT',
                logo: '/Community%20Partners%20Logo/CSIT.jpg',
            },

            {
                id: 'girls-tech',
                name: 'Girls Tech',
                logo: '/Community%20Partners%20Logo/girlstechlogo.png',
            },
            {
                id: 'ices',
                name: 'i-CES',
                logo: '/Community%20Partners%20Logo/i-CES%20Logo.svg',
            },
            {
                id: 'robotics-club',
                name: 'Robotics Club',
                logo: '/Community%20Partners%20Logo/Robotics%20Club.jpeg',
            },
            {
                id: 'shetech-pnc',
                name: 'SheTech PNC',
                logo: '/Community%20Partners%20Logo/SheTechPNC%20logo.png',
            },
            {
                id: 'stem-sisters',
                name: 'STEM Sisters',
                logo: '/Community%20Partners%20Logo/Stem%20sisters.png',
            },
        ],
    },
    {
        title: 'Media Partner',
        items: [
            {
                id: 'parichay',
                name: 'Parichay',
                logo: '/Media%20Partners/parichay.jpg',
            },
        ],
    },
    {
        title: 'Internet Partner',
        items: [
            {
                id: 'worldlink',
                name: 'Worldlink',
                logo: '/Internet%20Partner/worldlink-logo.jpg',
            },
        ],
    },
    {
        title: 'Training Partner',
        items: [
            {
                id: 'aws-pathaway',
                name: 'AWS Pathaway',
                logo: '/Training%20Partner/AWs%20pathaway%20png%20log.png',
            },
        ],
    },
    
];
