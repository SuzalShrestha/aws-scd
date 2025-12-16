"use client";

import { EventSpeakers } from "@/constants/KeynoteSpeakers";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const KeynoteSpeakers = () => {
  const shouldZoomPhoto = (speakerId: number) => {
    return speakerId === 1;
  };

  return (
    <section className="section surface" id="speakers">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="section-header text-center"
        >
          <h2 className="section-title mb-6">Keynote Speakers</h2>
          <p className="section-subtitle mx-auto">
            Voices shaping the future of AWS
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
          {EventSpeakers.map((speaker, index) => (
            <motion.a
              key={speaker.id}
              href={speaker.linkedin}
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
              aria-label={`${speaker.name} on LinkedIn`}
              className="w-[230px] sm:w-[250px] rounded-2xl border border-border bg-card p-3"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="240px"
                  className={`object-cover ${
                    shouldZoomPhoto(speaker.id) ? "scale-[1.08]" : ""
                  }`}
                  priority={index < 6}
                />
                <div className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-xl bg-background/90 backdrop-blur border border-border">
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center">
                <h3 className="text-sm font-medium truncate text-center">
                  {speaker.name}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
