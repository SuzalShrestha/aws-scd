export type ScheduleItem = {
    id: string;
    /** Omit for break rows (rendered full-width). */
    time?: string;
    topic: string;
    /** Shown as a badge below the topic. */
    type?: string;
    /** Shown below the badge. */
    speaker?: string;
    /** When true, renders as a full-width break row with no time. */
    isBreak?: boolean;
};

export type ScheduleTable = {
    title: string;
    subtitle?: string;
    items: ScheduleItem[];
};

export const scheduleTables: {
    common: ScheduleTable[];
    halls: {
        main: ScheduleTable;
        side: ScheduleTable;
    };
} = {
    common: [
        {
            title: 'Event Schedule',
            items: [
                {
                    id: 'registration-tea',
                    time: '8:30 – 9:00',
                    topic: 'Registration + Tea',
                },
                {
                    id: 'welcome-speech',
                    time: '9:20 – 9:30',
                    topic: 'Welcome Speech',
                    speaker: 'Yojana Ghimire (Head) & Upendra Prasad Neupane',
                },
                {
                    id: 'keynote-1',
                    time: '9:30 – 9:45',
                    topic: 'Keynote Session',
                    type: 'Keynote',
                    speaker: 'Lisa and William',
                },
                {
                    id: 'morning-break-1',
                    time: '9:45 – 10:00',
                    topic: 'Break',
                    isBreak: true,
                },
                {
                    id: 'virtual-experience-sharing',
                    time: '10:00 – 10:25',
                    topic: 'Virtual Experience Sharing / Keynote',
                    type: 'Keynote',
                    speaker: 'Anjani Phuyal',
                },
                {
                    id: 'ice-breaking',
                    time: '10:30 – 10:55',
                    topic: 'Ice-breaking Session',
                },
                {
                    id: 'talk-kushal',
                    time: '11:00 – 11:25',
                    topic: 'Talk',
                    type: 'Speaker Session',
                    speaker: 'Kushal Subedi',
                },
                {
                    id: 'panel-discussion',
                    time: '11:40 – 12:25',
                    topic: 'Panel Discussion',
                    speaker: 'Panelists: Lajah, Upendra, Yojana, Desh Deepak',
                },
                {
                    id: 'lunch-break',
                    time: '12:30 – 1:30',
                    topic: 'Lunch Break',
                    isBreak: true,
                },
                {
                    id: 'closing-activities',
                    time: '4:05 – 4:35',
                    topic: 'Closing Activities',
                },
                {
                    id: 'networking-tea',
                    time: '4:40 – 5:00',
                    topic: 'Networking and Hi-Tea',
                },
            ],
        },
    ],
    halls: {
        main: {
            title: 'Main Hall Sessions',
            items: [
                {
                    id: 'ai-around-business',
                    time: '1:35 – 2:00',
                    topic: 'AI Around Business',
                    type: 'Speaker Session',
                    speaker: 'Abiral Sangroula',
                },
                {
                    id: 'event-driven-aws',
                    time: '2:05 – 2:30',
                    topic: 'Understanding Event-Driven Architecture on AWS',
                    type: 'Speaker Session',
                    speaker: 'Sushovan Paudyal',
                },
                {
                    id: 'agentic-ai-aws',
                    time: '2:35 – 3:00',
                    topic: 'Agentic AI on AWS: From Prompt Engineering to Orchestration',
                    type: 'Speaker Session',
                    speaker: 'Nischal Shakya',
                },
                {
                    id: 'automate-everything',
                    time: '3:05 – 3:30',
                    topic: 'Automate Everything Mindset with AWS',
                    type: 'Speaker Session',
                    speaker: 'Desh Deepak Dhobi',
                },
                {
                    id: 'resume-ai',
                    time: '3:35 – 4:00',
                    topic: 'AI for Résumé Building',
                    type: 'Speaker Session',
                    speaker: 'Bishworaj Poudel',
                },
            ],
        },
        side: {
            title: 'Sidehall Sessions',
            items: [
                {
                    id: 'gh-actions-deployment',
                    time: '1:35 – 2:00',
                    topic: 'End-to-End Deployment Automation to AWS Using GitHub Actions',
                    type: 'Speaker Session',
                    speaker: 'Munashree Bhattarai',
                },
                {
                    id: 'serverless-speedrun',
                    time: '2:05 – 2:30',
                    topic: 'Serverless Speedrun: Build Your Custom AI Bot in 15 Minutes Using AWS Step Functions',
                    type: 'Workshop',
                    speaker: 'Rashika Karki',
                },
                {
                    id: 'production-rules',
                    time: '2:35 – 3:00',
                    topic: 'Surviving and Thriving in Production: The Unwritten Rules',
                    type: 'Speaker Session',
                    speaker: 'Tara Prasad Gurung',
                },
                {
                    id: 'customizing-llms',
                    time: '3:05 – 3:30',
                    topic: 'Customizing LLM Foundation Models on AWS',
                    type: 'Speaker Session',
                    speaker: 'Raju Mandal',
                },
            ],
        },
    },
};
