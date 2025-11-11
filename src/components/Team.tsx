import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import team5 from "@/assets/team-5.jpg";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Amara Okonkwo",
    role: "Chief Executive Officer",
    image: team1,
  },
  {
    name: "Kwame Mensah",
    role: "Chief Technology Officer",
    image: team2,
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Director of Conservation",
    image: team3,
  },
  {
    name: "Michael Chen",
    role: "Head of Data Science",
    image: team4,
  },
  {
    name: "Zara Patel",
    role: "Community Engagement Lead",
    image: team5,
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate experts dedicated to conservation innovation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
};
