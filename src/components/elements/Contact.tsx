"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Users
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { sendToDiscord } from "@/lib/sendToDiscord"
import toast from "react-hot-toast"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await sendToDiscord(formData)
        toast.success("Your Form is Submitted.")
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "contact@event.com",
            href: "mailto:contact@event.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+9770000000000",
            href: "tel:+9770000000000",
        },
        {
            icon: MapPin,
            label: "Address",
            value: "123 Event Street, City, State 12345",
            href: "#",
        },
    ]

    const venueDetails = [
        {
            icon: MapPin,
            title: "Venue Address",
            description: "Pokhara",
        },
        {
            icon: Clock,
            title: "Event Time",
            description: "December",
        },
        {
            icon: Users,
            title: "Capacity",
            description: "Up to 5,000 attendees with world-class facilities",
        },
    ]

    return (
        <section className="py-20 px-4 bg-background">
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
                            Get in Touch & Event Details
                        </h2>
                        <div className='h-1 w-24 bg-[var(--aws-orange)] rounded-full mx-auto'></div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-[var(--aws-orange)]">Contact Information</h3>
                            <div className="grid gap-4 mb-8">
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon
                                    return (
                                        <motion.div
                                            key={info.label}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                        >
                                            <Card className="p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                                                <div className="flex gap-4">
                                                    <div className="p-2 bg-[var(--aws-orange)]/10 rounded-lg h-fit">
                                                        <Icon className="w-5 h-5 text-[var(--aws-orange)]" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                                                        <Link
                                                            href={info.href}
                                                            className="text-muted-foreground hover:text-[var(--aws-orange)] transition-colors"
                                                        >
                                                            {info.value}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <Card className="p-6 transition-all duration-300 hover:shadow-lg">
                                <h3 className="text-xl font-bold text-foreground mb-4">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                                        <Input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                            className="focus:outline-none focus:ring-2 focus:ring-none focus:ring-offset-0"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your message here..."
                                            rows={4}
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[var(--aws-orange)] text-white hover:bg-[#FF9900]/90 transition-all duration-300"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--aws-orange)] mb-2">Event Location</h3>
                            <p className="text-muted-foreground mb-6">Join us at our premier venue in the heart of the city</p>
                        </div>

                        <Card className="overflow-hidden h-80 transition-all duration-300 hover:shadow-lg">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224976.98467519842!2d83.7918074927415!3d28.22962361481451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1761019661751!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" />
                        </Card>

                        <div className="space-y-3">
                            {venueDetails.map((detail, index) => {
                                const Icon = detail.icon
                                return (
                                    <motion.div
                                        key={detail.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                                    >
                                        <Card className="p-4 transition-all duration-300 hover:shadow-lg cursor-pointer">
                                            <div className="flex gap-3">
                                                <div className="p-2 bg-[var(--aws-orange)]/10 rounded-lg h-fit">
                                                    <Icon className="w-5 h-5 text-[var(--aws-orange)]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-1">{detail.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
