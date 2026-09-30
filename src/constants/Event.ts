// Single source of truth for 2026 event details — update here, the whole site follows.
export const EVENT = {
    name: 'AWS Student Community Day',
    city: 'Pokhara',
    year: 2026,
    edition: '2nd edition',
    startsAt: '2026-12-26T08:00:00+05:45',
    dateShort: '26 Dec 2026',
    dateLong: 'Saturday, 26 December 2026',
    venue: 'Venue announcing soon',
    email: 'awscc@ioepas.edu.np',
    linkedin:
        'https://www.linkedin.com/company/aws-cloud-club-ioe-pashchimanchal-campus',
    meetup: {
        ioe: 'https://www.meetup.com/aws-cloud-club-at-institute-of-engineering-pashchimanchal/',
        pnc: 'https://www.meetup.com/aws-cloud-club-at-prithvi-narayan-campus/',
    },
};

export const mailto = (subject: string) =>
    `mailto:${EVENT.email}?subject=${encodeURIComponent(subject)}`;

export const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pokhara', href: '#pokhara' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Partners', href: '#partners' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
];

// Unsplash License — credit kept in the footer.
export const photoCredits = [
    { handle: 'samrat_khadka', href: 'https://unsplash.com/@samrat_khadka' },
    { handle: 'maniac96', href: 'https://unsplash.com/@maniac96' },
    { handle: 'saraang_xinjalee', href: 'https://unsplash.com/@saraang_xinjalee' },
    { handle: 'chirvisuals', href: 'https://unsplash.com/@chirvisuals' },
    { handle: 'ksubedi', href: 'https://unsplash.com/@ksubedi' },
    { handle: 'shepherd98', href: 'https://unsplash.com/@shepherd98' },
];
