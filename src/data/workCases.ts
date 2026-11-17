import { TrendingUp, Users, Zap, type LucideIcon } from "lucide-react";
import caseEngagement from "@/assets/case-engagement.png";
import casePlatform from "@/assets/case-platform.png";
import caseTransformation from "@/assets/case-transformation.png";

export type WorkCase = {
  slug: string;
  image: string;
  title: string;
  clientType: string;
  description: string;
  audiencePath?: string;
  metrics: { label: string; value: string; icon: LucideIcon }[];
};

export const workCases: WorkCase[] = [
  {
    slug: "global-scripture-engagement",
    image: caseEngagement,
    title: "Global Scripture Engagement",
    clientType: "Bible / digital ministry",
    description:
      "Drove double-digit growth with habit formation, community, and content personalization.",
    audiencePath: "/for-faithtech",
    metrics: [
      { label: "Installs", value: "109M+", icon: Zap },
      { label: "MAU (L28)", value: "53.5M+", icon: Users },
      { label: "DAU", value: "5.7M+", icon: TrendingUp },
    ],
  },
  {
    slug: "youversion-platform",
    image: casePlatform,
    title: "YouVersion Platform",
    clientType: "Bible / platform",
    description:
      "Giving developers around the world access to our technology to build Bible apps. Build applications and integrate with the world's most popular Bible platform.",
    audiencePath: "/for-faithtech",
    metrics: [
      { label: "Bibles", value: "1,480+", icon: Zap },
      { label: "Publishers", value: "34+", icon: Users },
      { label: "Languages", value: "1,280+", icon: TrendingUp },
    ],
  },
  {
    slug: "bible-users-to-churches",
    image: caseTransformation,
    title: "Connecting Bible Users to Churches",
    clientType: "Denomination / church network",
    description:
      "Bridging digital Bible engagement with local church community and growth.",
    audiencePath: "/for-churches",
    metrics: [
      { label: "Churches", value: "20K+", icon: Users },
      { label: "Countries", value: "150+", icon: Zap },
      { label: "Growth of churches", value: "215+%", icon: TrendingUp },
    ],
  },
];
