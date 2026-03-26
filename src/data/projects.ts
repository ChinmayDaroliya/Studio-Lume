import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  concept: string;
  materials: string[];
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "casa-serena",
    title: "Casa Serena",
    category: "Residential",
    location: "Malibu, California",
    year: "2024",
    description:
      "A modernist residence nestled among mature pines, Casa Serena embodies the seamless dialogue between interior and exterior spaces. Floor-to-ceiling glass walls dissolve boundaries, allowing nature to become an integral part of daily living.",
    concept:
      "The design philosophy centers on transparency and connection — creating a home that breathes with its surroundings. Each room frames a carefully composed view, transforming the landscape into living art.",
    materials: ["Exposed concrete", "Black steel", "White oak", "Floor-to-ceiling glass"],
    image: project1,
    images: [project1, project3],
  },
  {
    id: "meridian-tower",
    title: "Meridian Tower",
    category: "Commercial",
    location: "Chicago, Illinois",
    year: "2023",
    description:
      "A 12-story commercial tower redefining the urban office experience. The crystalline glass facade reflects the city while maintaining visual transparency, creating an ever-changing relationship with the streetscape.",
    concept:
      "We envisioned a building that doesn't dominate its context but rather amplifies it. The ground-level public arcade invites pedestrians inside, blurring the line between public and private space.",
    materials: ["Structural glass", "Polished concrete", "Brushed aluminum", "Warm LED lighting"],
    image: project2,
    images: [project2, project5],
  },
  {
    id: "atelier-loft",
    title: "Atelier Loft",
    category: "Interior",
    location: "Berlin, Germany",
    year: "2023",
    description:
      "A former industrial warehouse transformed into a refined living space. Raw concrete walls meet warm timber accents, creating a sophisticated tension between brutalism and comfort.",
    concept:
      "Respecting the building's industrial heritage while introducing warmth and domesticity. The double-height ceiling and clerestory windows flood the space with natural light throughout the day.",
    materials: ["Board-formed concrete", "Walnut millwork", "Polished screed floors", "Raw steel"],
    image: project3,
    images: [project3, project1],
  },
  {
    id: "greenway-district",
    title: "Greenway District",
    category: "Urban Planning",
    location: "Toronto, Canada",
    year: "2022",
    description:
      "A master-planned urban district prioritizing green corridors and pedestrian connectivity. The design integrates residential towers with public parks, creating a new model for sustainable urban density.",
    concept:
      "Cities should grow upward and green outward. Our plan weaves nature through the urban fabric, ensuring every resident is within a two-minute walk of open green space.",
    materials: ["Sustainable timber", "Recycled steel", "Green roofing systems", "Permeable paving"],
    image: project4,
    images: [project4, project2],
  },
  {
    id: "gallery-void",
    title: "Gallery Void",
    category: "Cultural",
    location: "Tokyo, Japan",
    year: "2024",
    description:
      "A contemporary art gallery designed around the concept of emptiness. The architecture recedes to let art speak, with carefully calibrated lighting and proportions that elevate every exhibition.",
    concept:
      "The gallery itself is an artwork — a meditation on space and light. The sequence of rooms creates a rhythm of compression and release, guiding visitors through an emotional journey.",
    materials: ["White plaster walls", "Polished concrete floors", "Track lighting systems", "Acoustic panels"],
    image: project5,
    images: [project5, project3],
  },
  {
    id: "horizon-villa",
    title: "Horizon Villa",
    category: "Residential",
    location: "Santorini, Greece",
    year: "2024",
    description:
      "A luxury coastal retreat where architecture becomes a frame for the infinite horizon. The infinity pool extends toward the sea, creating an illusion of merging with the ocean.",
    concept:
      "Living at the edge of the world. Every design decision serves one purpose: to maximize the experience of sky meeting sea, from sunrise meditation to sunset cocktails.",
    materials: ["White-washed concrete", "Local volcanic stone", "Teak decking", "Frameless glass"],
    image: project6,
    images: [project6, project1],
  },
];
