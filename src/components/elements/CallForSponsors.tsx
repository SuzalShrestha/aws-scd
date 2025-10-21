"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const sponsorTiers = [
    {
        name: "Bronze",
        price: "RS.5,000",
        benefits: [
            "Social media shoutouts and mentions leading up to the event.",
            "Sponsor's logo placement on all event promotional materials, including posters, banners, and social media posts.",
            "Sponsor’s establishment’s name will be included on all publication materials and captions: Brought to you by",
            "Sponsor’s advertisement videos will be showcased before, during, and after event",
            "Sponsor’s recognition during the event",
            "Sponsor may set up their booth at the Venue",
            "Sponsors may provide a brief company introduction or announcement during the event: 1 Minute."
        ],
        color: "from-[#cd7f32] to-[#b87333]",
    },
    {
        name: "Gold",
        price: "RS.15,000",
        benefits: [
            "Social media shoutouts and mentions leading up to the event.",
            "Sponsor's logo placement on all event promotional materials, including posters, banners, and social media posts.",
            "Sponsor’s establishment’s name will be included on all publication materials and captions: Major Sponsor",
            "Sponsor’s advertisement videos will be showcased before, during, and after event",
            "Sponsor’s recognition during the event",
            "Sponsor may set up their booth at the Venue",
            "Sponsor’s one (1) chosen publication material will be shared by the Association of Computer Science Student’s Page and Executives.",
            "Sponsors may provide a brief company introduction or announcement during the event: 5 Minutes.",
            "Recap Publication Material, Video and Highlights. Sponsors will be highlighted after our event’s publication materials."
        ],
        featured: true,
        color: "from-yellow-400 to-yellow-600",
    },
    {
        name: "Silver",
        price: "RS.10,000",
        benefits: [
            "Social media shoutouts and mentions leading up to the event.",
            "Sponsor's logo placement on all event promotional materials, including posters, banners, and social media posts.",
            "Sponsor’s establishment’s name will be included on all publication materials and captions: Powered by",
            "Sponsor’s advertisement videos will be showcased before, during, and after event",
            "Sponsor’s recognition during the event",
            "Sponsor may set up their booth at the Venue",
            "Sponsor’s special recognition during opening and closing ceremonies",
            "Sponsors may provide a brief company introduction or announcement during the event: 1 Minute."
        ],
        color: "from-[#C0C0C0] to-[#A9A9A9]",
    },

]

export default function CallForSponsors() {
    return (
        <section className="py-10 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className='inline-block space-y-3 mb-10'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--aws-orange)] tracking-tight'>
                            Call for Sponsors
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                        {/* <p className='text-slate-600 mt-3'>
                            Partner with us and reach thousands of industry leaders and innovators
                        </p> */}
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {sponsorTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <Card
                                className={`px-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${tier.featured ? "ring-2 ring-[var(--aws-orange)] scale-105" : ""}`}
                            >
                                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${tier.color}`} />
                                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                                <p className="text-3xl font-bold text-[var(--aws-orange)]">{tier.price}</p>

                                <ul className="space-y-2 flex-grow">
                                    {tier.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3">
                                            <span className="text-[var(--aws-orange)] mt-1">✓</span>
                                            <span className="text-muted-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={"#"}>
                                    <Button
                                        variant={tier.featured ? "default" : "outline"}
                                        className={`w-full transition-all duration-300 cursor-pointer ${tier.featured ? "bg-[var(--aws-orange)] hover:bg-[#FF9900]/90 text-white" : "hover:bg-[var(--aws-orange)] hover:text-white"}`}
                                    >
                                        Become a Sponsor
                                    </Button>
                                </Link>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        className="hover:bg-[var(--aws-orange)] hover:text-white transition-all duration-300 bg-transparent"
                    >
                        Contact Our Sponsorship Team
                    </Button>
                </motion.div> */}
            </div>
        </section>
    )
}
