import ne3109_1 from "@/assets/profile/ne3109-1.jpg";
import ne3109_2 from "@/assets/profile/ne3109-2.jpg";
import ne3109_3 from "@/assets/profile/ne3109-3.jpg";
import ne3109_4 from "@/assets/profile/ne3109-4.jpg";
import fcm1 from "@/assets/profile/fcm1113-1.jpg";
import fcm2 from "@/assets/profile/fcm1113-2.jpg";
import fcm3 from "@/assets/profile/fcm1113-3.jpg";
import fcm4 from "@/assets/profile/fcm1113-4.jpg";
import fcm5 from "@/assets/profile/fcm1113-5.jpg";
import fcm6 from "@/assets/profile/fcm1113-6.jpg";
import ne2585_1 from "@/assets/profile/ne2585-1.jpg";
import ne2585_2 from "@/assets/profile/ne2585-2.jpg";
import ne2585_3 from "@/assets/profile/ne2585-3.jpg";
import ne2585_4 from "@/assets/profile/ne2585-4.jpg";
import ne0408_1 from "@/assets/profile/ne0408-1.jpg";
import ne0408_2 from "@/assets/profile/ne0408-2.jpg";
import ne0408_3 from "@/assets/profile/ne0408-3.jpg";
import ne0408_4 from "@/assets/profile/ne0408-4.jpg";
import ne1409_1 from "@/assets/profile/ne1409-1.jpg";
import ne1409_2 from "@/assets/profile/ne1409-2.jpg";
import ne1409_3 from "@/assets/profile/ne1409-3.jpg";
import ne1409_4 from "@/assets/profile/ne1409-4.jpg";
import um1_1 from "@/assets/profile/um1-1.jpg";
import um1_2 from "@/assets/profile/um1-2.jpg";
import um1_3 from "@/assets/profile/um1-3.jpg";
import um1_4 from "@/assets/profile/um1-4.jpg";
import um2_1 from "@/assets/profile/um2-1.jpg";
import um2_2 from "@/assets/profile/um2-2.jpg";
import um2_3 from "@/assets/profile/um2-3.jpg";
import um2_4 from "@/assets/profile/um2-4.jpg";

export type MachineCategory = "Filter Making" | "Filter Combining" | "Packing" | "Filter Cutting";

export interface Spec {
  label: string;
  value: string;
  /** Configuration-dependent or conflicting value that must be confirmed before publication. */
  confirm?: boolean;
}

export interface Machine {
  slug: string;
  model: string;
  name: string;
  category: MachineCategory;
  summary: string;
  overview: string[];
  images: string[];
  combination?: string[];
  features?: { title: string; text: string }[];
  specs?: Spec[];
  specNote?: string;
  advantages?: string[];
  application?: string;
  underManufacturing?: { title: string; text: string; images: string[] }[];
}

export const machines: Machine[] = [
  {
    slug: "ne-3109-acetate-filter-making-machine",
    model: "NE-3109",
    name: "Acetate Filter Making Machine",
    category: "Filter Making",
    summary:
      "Advanced filter rod production combination of the NE/TP-01 Tow Processor and NE-3109 Filter Rod Maker.",
    overview: [
      "The NE-3109 Acetate Filter Making Machine Combination is an advanced filter rod production system designed to deliver stable operation, high production efficiency, and consistent filter rod quality. The combination includes the NE/TP-01 Tow Processor and the NE-3109 Filter Rod Maker.",
      "Developed as an upgraded version of the AF2/KDF2 system, the NE-3109 retains the advantages of traditional machine structures while integrating advanced servo-control technology, communication systems, and inspection features. The NE-3109/2S configuration can achieve production speeds of up to 100–200 meters per minute, depending on configuration.",
    ],
    images: [ne3109_1, ne3109_2, ne3109_3, ne3109_4],
    combination: ["NE/TP-01 Tow Processor", "NE-3109 Filter Rod Maker"],
    features: [
      { title: "PLC Control System", text: "Provides reliable and coordinated machine operation." },
      { title: "Factory Network Connectivity", text: "Interfaces are available for factory information systems and network integration." },
      { title: "User-Friendly HMI", text: "The main machine interface enables convenient communication between operators and the machine." },
      { title: "Automatic Plug Wrap Splicing", text: "Supports splicing at different operating speeds, helping reduce speed fluctuations and improve production efficiency and rod quality." },
      { title: "Pneumatic Spray System", text: "Supports the operation of the plasticizer application system." },
      { title: "Ten Servo Drives", text: "Electronic drive coordination uses servo technology with an EtherCAT-based system." },
      { title: "Automatic Bobbin Changer", text: "Helps reduce manual intervention during production." },
      { title: "On-Screen Rod Length Setting", text: "Operators can set the required rod length through screen parameters." },
      { title: "Automatic Knife Advance", text: "Supports convenient and consistent cutting operation." },
      { title: "High-Performance Transport Jet", text: "Assists in efficient material transportation." },
      { title: "Shooter Drive System", text: "Transfers filter rods to the infeed drum." },
    ],
    specs: [
      { label: "Machine Model", value: "NE-3109" },
      { label: "Production Speed", value: "100–150 m/min (technical data)", confirm: true },
      { label: "Maximum Stated Speed", value: "Up to 200 m/min on NE-3109/2S (stated as 100–200 m/min, depending on configuration)", confirm: true },
      { label: "Base Rod Length", value: "60–150 mm" },
      { label: "Finished Rod Length", value: "60–150 mm" },
      { label: "Filter Rod Diameter", value: "6–9 mm" },
      { label: "Compressed Air Requirement", value: "20–24 m³/h at 10 bar" },
      { label: "Power Consumption", value: "22–25 kW, depending on configuration", confirm: true },
      { label: "Machine Weight", value: "Approximately 5,000 kg" },
      { label: "Machine Dimensions (L × H × W)", value: "10,500 × 4,000 × 920 mm", confirm: true },
    ],
    specNote:
      "The supplied information lists a standard rod speed of 100–150 m/min and a maximum of 100–200 m/min for the NE-3109/2S. Confirm the exact rated speed and dimensional specifications for the intended machine configuration.",
    advantages: [
      "Stable and reliable production operation.",
      "Consistent filter rod quality.",
      "Advanced servo-control and communication technology.",
      "Improved production efficiency and reduced speed fluctuations during splicing.",
      "Flexible rod-length settings through the HMI.",
      "Interfaces designed to support factory network integration.",
    ],
    application:
      "The NE-3109 is designed for industrial filter rod manufacturing operations that require reliable performance, precise control, and efficient production.",
    underManufacturing: [
      {
        title: "Under Manufacturing Machine #1",
        text: "The NE-3109 Filter Making Machine is an upgraded version of previous filter-making systems, combining a proven machine structure with advanced servo-control technology, PLC automation, and modern communication systems. Designed for stable operation, improved production efficiency, and consistent filter rod quality, it offers enhanced control, automatic functions, and flexible production settings to meet modern manufacturing requirements.",
        images: [um1_1, um1_2, um1_3, um1_4],
      },
      {
        title: "Under Manufacturing Machine #2",
        text: "The NE-3109 Filter Making Machine integrates modern automation and advanced servo technology to deliver reliable performance and consistent filter rod production. Its upgraded control system, user-friendly interface, and automated functions enhance operational stability, improve manufacturing efficiency, and support high-quality production.",
        images: [um2_1, um2_2, um2_3, um2_4],
      },
    ],
  },
  {
    slug: "ne-fcm-1113-filter-triple-combiner",
    model: "NE/FCM-1113",
    name: "Cigarette Filter Triple Combiner Machine",
    category: "Filter Combining",
    summary:
      "Combines cellulose acetate, synthetic fibres and other filter media into a single filter element with modular, servo-driven segments.",
    overview: [
      "The NE/FCM-1113 Cigarette Filter Combiner Machine is designed to combine multiple types of filter materials, including cellulose acetate, synthetic fibers, and other filter media, into a single filter element. It uses advanced mechanical systems to combine and cut filter segments to the required length, ensuring consistent quality and efficient production.",
    ],
    images: [fcm2, fcm1, fcm3, fcm4, fcm5, fcm6],
    features: [
      { title: "Modular Design", text: "Provides flexibility to configure the transport chain and arrange filter segments in different sequences." },
      { title: "Independent Servo Drives", text: "Each module is controlled by its own servo drive for precise operation and flexible configuration." },
      { title: "Quick Segment Changes", text: "Plug-and-play modules allow fast and easy conversion of filter segment patterns and sequences." },
      { title: "Touchscreen Control", text: "Filter segment arrangements can be changed through the operator screen without mechanical modifications." },
      { title: "PLC Control System", text: "Ensures reliable and coordinated machine operation." },
      { title: "Ten Servo Drives", text: "Electronic drive coordination uses servo technology with an EtherCAT-based system." },
      { title: "Factory Network Connectivity", text: "Includes interfaces for factory information systems and network integration." },
      { title: "Automatic Plug Wrap Splicing", text: "Helps reduce machine-speed fluctuations during splicing." },
      { title: "Automatic Bobbin Changer", text: "Reduces manual intervention during production." },
      { title: "On-Screen Rod Length Setting", text: "Allows operators to set the required rod length through screen parameters." },
      { title: "Automatic Knife Advance", text: "Supports efficient cutting operations." },
      { title: "Shooter Drive System", text: "Transfers filter rods to the infeed drum." },
    ],
    specs: [
      { label: "Rod Speed", value: "100–150 m/min (base)", confirm: true },
      { label: "Rod Length", value: "60–150 mm" },
      { label: "Finished Rod Length", value: "60–150 mm" },
      { label: "Filter Rod Diameter", value: "6–9 mm" },
      { label: "Filter Segment Length", value: "5–40 mm" },
      { label: "Compressed Air Requirement", value: "20–24 m³/h at 6 bar" },
      { label: "Power Consumption", value: "22–25 kW, depending on configuration", confirm: true },
      { label: "Machine Weight", value: "Approx. 5,000 kg" },
      { label: "Machine Dimensions (L × H × W)", value: "8,500 × 2,000 × 920 mm", confirm: true },
    ],
    specNote:
      "Values are reproduced from the company profile. Configuration-dependent figures should be confirmed for the intended machine set-up.",
  },
  {
    slug: "ne-2585-pyxis-shoulder-box-packer",
    model: "NE-2585",
    name: "Cigarette Pyxis Shoulder Box Packer",
    category: "Packing",
    summary: "Efficient and precise packaging of cigarette products into shoulder box-style packs.",
    overview: [
      "The NE-2585 Cigarette Pyxis Shoulder Box Packer is designed for efficient and precise packaging of cigarette products into shoulder box-style packs. Engineered for reliable operation and consistent packaging quality, the machine supports streamlined production processes and helps improve packaging efficiency in cigarette manufacturing facilities.",
    ],
    images: [ne2585_1, ne2585_2, ne2585_3, ne2585_4],
  },
  {
    slug: "ne-0408-aluminum-foil-bundle-packing",
    model: "NE-0408",
    name: "Cigarette Aluminum Foil Bundle Packing Machine",
    category: "Packing",
    summary: "Reliable bundling of cigarette packs using aluminum foil packaging.",
    overview: [
      "The NE-0408 Cigarette Aluminum Foil Bundle Packing Machine is designed for efficient and reliable bundling of cigarette packs using aluminum foil packaging. Engineered to support consistent packaging quality and smooth production operations, the machine helps streamline the packing process while improving productivity in cigarette manufacturing facilities.",
    ],
    images: [ne0408_2, ne0408_1, ne0408_3, ne0408_4],
  },
  {
    slug: "ne-1409-filter-rod-segment-slicing",
    model: "NE-1409",
    name: "Filter Rod Segment Slicing Machine",
    category: "Filter Cutting",
    summary: "Precise and efficient slicing of filter rods into specified segment lengths.",
    overview: [
      "The NE-1409 Filter Rod Segment Slicing Machine is designed for precise and efficient slicing of filter rods into specified segment lengths. Engineered to support consistent cutting accuracy and reliable operation, the machine helps maintain uniform segment dimensions, improve production efficiency, and streamline filter manufacturing processes.",
    ],
    images: [ne1409_2, ne1409_1, ne1409_3, ne1409_4],
  },
];

export const machineCategories: MachineCategory[] = [
  "Filter Making",
  "Filter Combining",
  "Packing",
  "Filter Cutting",
];

export function getMachine(slug: string) {
  return machines.find((m) => m.slug === slug);
}
