import senior from "../assets/senior.jpg"
import seniorm from "../assets/senior-m.jpg"
import junior from "../assets/junior.jpg"
import juniors from "../assets/junior-s.jpg"
import intern from "../assets/intern.jpg"

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  level: "Senior" | "Junior" | "Intern";
  bio: string;
  email: string;
  image: string; // 👈 added
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Michael Turner",
    title: "Senior Architect",
    level: "Senior",
    bio: "Leads design direction and concept development, focusing on creating context-driven and user-centric architectural solutions.",
    email: "michael.turner@studiolume.com",
    image: seniorm,
  },
  {
    id: "team-2",
    name: "Emily Carter",
    title: "Project Architect",
    level: "Senior",
    bio: "Oversees project coordination, ensuring design integrity while aligning technical execution with project requirements.",
    email: "emily.carter@studiolume.com",
    image: senior,
  },
  {
    id: "team-3",
    name: "Ethan Walker",
    title: "Junior Architect",
    level: "Junior",
    bio: "Supports design development through drawings, models, and visual presentations across various studio projects.",
    email: "ethan.walker@studiolume.com",
    image: junior,
  },
  {
    id: "team-4",
    name: "Li Wei",
    title: "Junior Architect",
    level: "Junior",
    bio: "Assists in spatial planning, documentation, and material exploration, contributing to both concept and execution stages.",
    email: "li.wei@studiolume.com",
    image: juniors,
  },
  {
    id: "team-5",
    name: "Arjun Mehta",
    title: "Architecture Intern",
    level: "Intern",
    bio: "Engages in research, conceptual sketches, and model-making as part of ongoing academic and studio explorations.",
    email: "arjun.mehta@studiolume.com",
    image: intern,
  },
  {
    id: "team-6",
    name: "Rohit Verma",
    title: "Architecture Intern",
    level: "Intern",
    bio: "Supports ongoing studio work through documentation, basic modeling, and design research.",
    email: "rohit.verma@studiolume.com",
    image: intern,
  },
];