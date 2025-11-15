import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import team6 from "@/assets/team-6.jpg"; // add your 6th image
import { Linkedin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const teamMembers = [
  {
    name: "TINASHE HUNDA",
    role: "Chief Executive Officer",
    image: team1,
  },
  {
    name: "NYASHA E. SHENJE",
    role: "Chief Technology Officer",
    image: team2,
  },
  {
    name: "KWANELE MANUNGO",
    role: "Chief Director - Strategy",
    image: team3,
  },
  {
    name: "GODFREY MUNKULI",
    role: "Chief Communications Officer",
    image: team4,
  },
  {
    name: "NKOSINOMUSA NYONI",
    role: "Chief Marketing and Growth Officer",
    image: team5,
  },
  {
    name: "NEW MEMBER",
    role: "New Role",
    image: team6,
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mwanawev is powered by a diverse team of innovators, entrepreneurs, 
              and industry experts who share a passion for meaningful change.
            </p>
          </div>
        </FadeIn>

        {/* 3 in a row - cards made smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <FadeIn key={index} direction="scale" delay={index * 100}>
              <div className="group text-center max-w-[260px] mx-auto">
                <div className="relative mb-4 overflow-hidden rounded-lg shadow-md border-2 border-[#51682C]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-accent text-white p-2 rounded-full hover:bg-accent/90 transition-colors">
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#DB6B2E] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
