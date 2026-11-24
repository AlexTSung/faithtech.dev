import { TrendingUp, Users, Zap, type LucideIcon } from "lucide-react";
import caseBibleApp from "@/assets/case-bible-app.jpg";
import caseStateOfTheBible from "@/assets/case-state-of-the-bible.jpg";
import caseOutreach from "@/assets/case-outreach.jpg";

export type WorkCase = {
  slug: string;
  image: string;
  imageAlt: string;
  title: string;
  clientType: string;
  description: string;
  audiencePath?: string;
  metrics: { label: string; value: string; icon: LucideIcon }[];
};

export const workCases: WorkCase[] = [
  {
    slug: "the-bible-app",
    image: caseBibleApp,
    title: "The Bible App",
    clientType: "Bible / digital ministry",
    description:
      "Habit formation, community, and content personalization drove double-digit growth for the world's most-used Bible App. If your ministry needs people to open Scripture more often and stay for the long haul, this is the playbook: clear retention loops, thoughtful content, and product decisions measured against real engagement. The same principles scale from a single church app to a global platform.",
    imageAlt:
      "The Bible App Discover screen showing Spoken Gospel Just Released video devotionals for Romans, Nahum, and Titus",
    audiencePath: "/for-faithtech",
    metrics: [
      { label: "Installs", value: "109M+", icon: Zap },
      { label: "MAU (L28)", value: "53.5M+", icon: Users },
      { label: "DAU", value: "5.7M+", icon: TrendingUp },
    ],
  },
  {
    slug: "state-of-the-bible",
    image: caseStateOfTheBible,
    title: "State of the Bible",
    clientType: "Bible / translations",
    description:
      "Giving away the digital Bible for free around the world with Bible societies, translators, and partners. We built the platform so global Bible partners can upload content and Bible versions with less friction, while staying current on trends and insights from the Bible App. For publishers and ministry leaders, that means faster distribution, clearer partner workflows, and decisions grounded in how people actually engage Scripture today.",
    imageAlt:
      "State of the Bible stage panel with Focus on the Family Bible App Impact for 2025 showing 404,381 lives impacted",
    audiencePath: "/for-faithtech",
    metrics: [
      { label: "Bibles", value: "1,480+", icon: Zap },
      { label: "Publishers", value: "34+", icon: Users },
      { label: "Languages", value: "1,280+", icon: TrendingUp },
    ],
  },
  {
    slug: "digital-outreach-strategy-for-churches",
    image: caseOutreach,
    title: "Digital Outreach Strategy for Churches",
    clientType: "Denomination / church network",
    description:
      "Bridging digital Bible engagement with local church community and growth. When people meet God in an app, the next step should be a real church family, not a dead end online. This work helps denominations and church networks turn digital interest into visits, belonging, and measurable church growth without losing the mission in the metrics.",
    imageAlt:
      "Digital Outreach Strategy for Churches conference ballroom with audience facing a magenta-lit stage and LED screens",
    audiencePath: "/for-churches",
    metrics: [
      { label: "Churches", value: "20K+", icon: Users },
      { label: "Countries", value: "150+", icon: Zap },
      { label: "Growth of churches", value: "215+%", icon: TrendingUp },
    ],
  },
];
