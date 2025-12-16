'use client';

import { scheduleTables, type ScheduleItem, type ScheduleTable } from '@/constants/Schedules';
import { motion } from 'framer-motion';

const TypeBadge = ({ label }: { label: string }) => {
    return (
        <span className='inline-flex items-center rounded-full border border-[var(--aws-orange)]/20 bg-[var(--aws-orange)]/10 px-2 py-0.5 text-[11px] font-semibold leading-none text-[var(--aws-orange)]'>
            {label}
        </span>
    );
};

type RenderRowOptions = {
    cellPaddingClass?: string;
    dense?: boolean;
};

const renderScheduleRow = (item: ScheduleItem, opts?: RenderRowOptions) => {
    const cellPaddingClass = opts?.cellPaddingClass ?? 'px-5 py-4';

    if (item.isBreak) {
        return (
            <tr
                key={item.id}
                className='border-t border-border bg-amber-50/70'
            >
                <td colSpan={2} className={cellPaddingClass}>
                    <div className='font-semibold text-amber-900'>
                        {item.topic}
                    </div>
                </td>
            </tr>
        );
    }

    return (
        <tr key={item.id} className='border-t border-border'>
            <td
                className={`${cellPaddingClass} align-top whitespace-nowrap text-muted-foreground`}
            >
                {item.time}
            </td>
            <td className={cellPaddingClass}>
                <div className='font-medium leading-snug'>{item.topic}</div>
                {(item.type || item.speaker) && (
                    <div
                        className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground ${
                            opts?.dense ? 'leading-snug' : ''
                        }`}
                    >
                        {item.type ? <TypeBadge label={item.type} /> : null}
                        {item.speaker ? (
                            <span className='leading-snug'>{item.speaker}</span>
                        ) : null}
                    </div>
                )}
            </td>
        </tr>
    );
};

const ScheduleTableView = ({ table }: { table: ScheduleTable }) => {
    return (
        <div className='rounded-2xl border border-border bg-card overflow-hidden'>
            <div className='px-5 py-4 border-b border-border'>
                <h3 className='text-base sm:text-lg font-semibold leading-tight'>
                    {table.title}
                </h3>
                {table.subtitle ? (
                    <p className='mt-1 text-sm text-muted-foreground'>
                        {table.subtitle}
                    </p>
                ) : null}
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                    <thead className='bg-muted/60'>
                        <tr className='text-xs text-muted-foreground'>
                            <th className='w-28 sm:w-36 px-5 py-3 font-medium'>
                                Time
                            </th>
                            <th className='px-5 py-3 font-medium'>Topic</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {table.items.map((item) => renderScheduleRow(item))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ScheduleTableWithParallelTracks = ({
    table,
}: {
    table: ScheduleTable;
}) => {
    const lunchIdx = table.items.findIndex((i) => i.id === 'lunch-break');
    const before = lunchIdx >= 0 ? table.items.slice(0, lunchIdx + 1) : table.items;
    const after = lunchIdx >= 0 ? table.items.slice(lunchIdx + 1) : [];

    return (
        <div className='rounded-2xl border border-border bg-card overflow-hidden'>
            <div className='px-5 py-4 border-b border-border'>
                <h3 className='text-base sm:text-lg font-semibold leading-tight'>
                    {table.title}
                </h3>
            </div>

            <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                    <thead className='bg-muted/60'>
                        <tr className='text-xs text-muted-foreground'>
                            <th className='w-28 sm:w-36 px-5 py-3 font-medium'>
                                Time
                            </th>
                            <th className='px-5 py-3 font-medium'>Topic</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {before.map((item) => renderScheduleRow(item))}

                        {lunchIdx >= 0 ? (
                            <tr className='border-t border-border bg-muted/30'>
                                <td colSpan={2} className='px-5 py-5'>
                                    <div className='text-xs font-semibold text-muted-foreground'>
                                        Parallel Sessions
                                    </div>
                                    <div className='mt-3 grid gap-4 md:grid-cols-2'>
                                        <div className='rounded-xl border border-border bg-background overflow-hidden'>
                                            <div className='px-4 py-3 border-b border-border text-sm font-semibold'>
                                                {scheduleTables.halls.main.title}
                                            </div>
                                            <div className='overflow-x-auto'>
                                                <table className='w-full text-left'>
                                                    <tbody className='text-sm'>
                                                        {scheduleTables.halls.main.items.map(
                                                            (item) =>
                                                                renderScheduleRow(
                                                                    item,
                                                                    {
                                                                        cellPaddingClass:
                                                                            'px-4 py-3',
                                                                        dense: true,
                                                                    }
                                                                )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className='rounded-xl border border-border bg-background overflow-hidden'>
                                            <div className='px-4 py-3 border-b border-border text-sm font-semibold'>
                                                {scheduleTables.halls.side.title}
                                            </div>
                                            <div className='overflow-x-auto'>
                                                <table className='w-full text-left'>
                                                    <tbody className='text-sm'>
                                                        {scheduleTables.halls.side.items.map(
                                                            (item) =>
                                                                renderScheduleRow(
                                                                    item,
                                                                    {
                                                                        cellPaddingClass:
                                                                            'px-4 py-3',
                                                                        dense: true,
                                                                    }
                                                                )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ) : null}

                        {after.map((item) => renderScheduleRow(item))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const Schedule = () => {
    return (
        <section className='section surface-muted' id='schedule'>
            <div className='page-container max-w-5xl'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='section-header'
                >
                    <h2 className='section-title mb-6'>Full Day Schedule</h2>
                    <p className='section-subtitle mx-auto'>
                        A day full of learning, networking, and innovation with
                        AWS
                    </p>
                </motion.div>

                <div className='space-y-8'>
                    <ScheduleTableWithParallelTracks
                        table={scheduleTables.common[0]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Schedule;
