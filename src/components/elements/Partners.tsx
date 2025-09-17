import partners from "@/db/Partners";
import PartnersCard from "../ui/PartnersCard";

const Partners = () => {
  return (
    <section id="speakers" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Event Partners</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {partners.map((partner) => (
            <PartnersCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
