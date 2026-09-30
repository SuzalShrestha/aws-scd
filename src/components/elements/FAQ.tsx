import { ArrowUpRight, Mail, Plus } from 'lucide-react';
import { Reveal } from '@/components/motion';
import { EVENT } from '@/constants/Event';

const faqs = [
    {
        q: 'Who can attend?',
        a: 'Students, developers and cloud enthusiasts from any background. Beginners are very welcome — no prior AWS experience required.',
    },
    {
        q: 'How much does it cost?',
        a: "Nothing. It's free — you only need to register in advance, and seats are limited.",
    },
    {
        q: 'When and where is it?',
        a: `${EVENT.dateLong}, in Pokhara. We'll announce the venue soon — the 2025 edition was held at Ranjit Event Center.`,
    },
    {
        q: 'What should I bring?',
        a: 'A valid student or government-issued ID, your laptop if you want to join hands-on sessions, and lots of curiosity.',
    },
    {
        q: 'Will there be networking?',
        a: 'Absolutely. You’ll meet AWS experts, community leaders and fellow students all day — especially during breaks and the closing hi-tea.',
    },
    {
        q: 'I’m coming from outside Pokhara. Any tips?',
        a: 'Pokhara is about 25 minutes by air or 6–8 hours by road from Kathmandu. Arrive a day early — sunrise from Sarangkot is worth it.',
    },
    {
        q: 'How can I speak or sponsor?',
        a: `Email us at ${EVENT.email}. The call for speakers and partnership packages open in the coming months.`,
    },
];

const FAQ = () => {
    return (
        <section id='faq' className='section border-t border-ink/[0.06] bg-snow'>
            <div className='shell grid gap-12 lg:grid-cols-12'>
                <Reveal className='lg:col-span-5'>
                    <p className='eyebrow mb-6 flex items-center gap-3 text-stone'>
                        <span className='text-glow'>09</span>
                        <span className='h-px w-8 bg-ink/20' />
                        FAQ
                    </p>
                    <h2 className='display text-[clamp(2.5rem,6vw,5rem)]'>
                        Questions, <span className='accent text-glow-deep'>answered.</span>
                    </h2>
                    <div className='card mt-10 p-7'>
                        <p className='font-medium'>Still curious?</p>
                        <p className='mt-1 text-sm text-stone'>
                            We reply faster than the Pokhara breeze.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <a href={`mailto:${EVENT.email}`} className='btn-ink'>
                                <Mail className='size-4' /> Email us
                            </a>
                            <a href={EVENT.linkedin} target='_blank' rel='noopener noreferrer' className='btn-line'>
                                LinkedIn <ArrowUpRight className='size-4' />
                            </a>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.1} className='lg:col-span-7'>
                    <div className='border-b border-ink/10'>
                        {faqs.map((f, i) => (
                            <details key={f.q} className='group border-t border-ink/10' open={i === 0}>
                                <summary className='flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-medium tracking-tight transition-colors hover:text-glow-deep'>
                                    {f.q}
                                    <span className='grid size-9 shrink-0 place-items-center rounded-full border border-ink/10 transition-all duration-300 group-open:rotate-45 group-open:border-glow group-open:bg-glow'>
                                        <Plus className='size-4' />
                                    </span>
                                </summary>
                                <p className='max-w-xl pb-6 pr-12 leading-relaxed text-stone'>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FAQ;
