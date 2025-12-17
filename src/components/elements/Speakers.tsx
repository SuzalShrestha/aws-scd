"use client";
import React from "react";
import { EventSpeakers } from "@/constants/EventSpeakers";
import { KeynoteSpeakers } from "@/constants/KeynoteSpeakers";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Speakers = () => {
  const shouldZoomPhoto = (speakerId: number) => {
    return speakerId === 1;
  };

  type CombinedSpeaker = {
    id: number;
    name: string;
    image: string;
    linkedin: string;
    isKeynote: boolean;
    designation?: string;
  };

  const speakers: CombinedSpeaker[] = [
    ...KeynoteSpeakers.map((s) => ({
      id: 100 + s.id,
      name: s.name,
      image: s.image,
      linkedin: s.linkedin,
      designation: s.designation,
      isKeynote: true,
      descriptioin: s.description || "",
    })),
    ...EventSpeakers.map((s) => ({
      id: s.id,
      name: s.name,
      image: s.image,
      linkedin: s.linkedin,
      designation: s.designation,
      isKeynote: false,
    })),
  ];
  return (
    <section className="section surface" id="speakers">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header"
        >
          <h2 className="section-title mb-6">Featured Speakers</h2>
          <p className="section-subtitle mx-auto">
            Brilliant AWS experts, industry leaders you’ll hear from
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {speakers.map((speaker, index) => (
            <motion.a
              key={speaker.id}
              // href={speaker.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.03, 0.25),
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-2xl border bg-card p-3 transition-shadow ${
                speaker.isKeynote
                  ? "border-[var(--aws-orange)]/30 shadow-sm"
                  : "border-border"
              }`}
              aria-label={`${speaker.name} on LinkedIn`}
            >
              {speaker.isKeynote ? (
                <div className="absolute -top-3 left-4 z-10">
                  <div className="inline-flex items-center rounded-full border border-[var(--aws-orange)]/30 bg-card px-3 py-1 text-[11px] font-semibold leading-none text-[var(--aws-orange)]">
                    Keynote
                  </div>
                </div>
              ) : null}

              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                  className={`object-cover ${
                    shouldZoomPhoto(speaker.id) ? "scale-[1.08]" : ""
                  }`}
                  priority={index < 6}
                />
                <div className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-xl bg-background/90 backdrop-blur border border-border">
                  <Link href={speaker.linkedin} target="_blank">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  </Link>
                </div>
              </div>

              <div className="mt-3 flex flex-col items-center justify-center gap-1">
                <h3 className="text-sm font-medium truncate text-center w-full">
                  {speaker.name}
                </h3>
                {speaker.designation ? (
                  <p className="text-xs text-muted-foreground leading-snug text-center line-clamp-2">
                    {speaker.designation}
                  </p>
                ) : null}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
