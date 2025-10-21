"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const sponsorTiers = [
    {
        name: "Platinum",
        price: "$50,000",
        benefits: ["Logo on website", "Booth space", "Speaking slot", "10 tickets"],
        color: "from-slate-400 to-slate-600",
    },
    {
        name: "Gold",
        price: "$25,000",
        benefits: ["Logo on website", "Booth space", "5 tickets"],
        color: "from-yellow-400 to-yellow-600",
        featured: true,
    },
    {
        name: "Silver",
        price: "$10,000",
        benefits: ["Logo on website", "3 tickets"],
        color: "from-gray-300 to-gray-500",
    },
]

export default function CallForSponsors() {
    return (
        <section className="py-20 px-4 bg-muted/30">
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
                        <p className='text-slate-600 mt-3'>
                            Partner with us and reach thousands of industry leaders and innovators
                        </p>
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
                                className={`p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer ${tier.featured ? "ring-2 ring-[var(--aws-orange)] scale-105" : ""}`}
                            >
                                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${tier.color} mb-6`} />
                                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                                <p className="text-3xl font-bold text-[var(--aws-orange)] mb-6">{tier.price}</p>

                                <ul className="space-y-3 mb-8 flex-grow">
                                    {tier.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-3">
                                            <span className="text-[var(--aws-orange)] mt-1">✓</span>
                                            <span className="text-muted-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={tier.featured ? "default" : "outline"}
                                    className={`w-full transition-all duration-300 ${tier.featured ? "bg-[var(--aws-orange)] hover:bg-[#FF9900]/90 text-white" : "hover:bg-[var(--aws-orange)] hover:text-white"}`}
                                >
                                    Become a Sponsor
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <p className="text-muted-foreground mb-4">Looking for custom sponsorship packages?</p>
                    <Button
                        variant="outline"
                        className="hover:bg-[var(--aws-orange)] hover:text-white transition-all duration-300 bg-transparent"
                    >
                        Contact Our Sponsorship Team
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
