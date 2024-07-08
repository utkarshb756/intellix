import {
  Code,
  Code2,
  Code2Icon,
  Facebook,
  Github,
  ImageIcon,
  Instagram,
  LayoutDashboard,
  MessageCircleCodeIcon,
  MessageSquare,
  Music,
  Settings,
  Twitter,
  VideoIcon,
} from "lucide-react";

export const MAX_FREE_COUNTS = 10 as const;

export const TESTIMONIALS = [
  {
    name: "John",
    image: "/testimonials/user-1.jpeg",
    title: "Software Developer",
    description:
      "Impressive AI tools for generating code and music effortlessly.",
  },
  {
    name: "Olivia",
    image: "/testimonials/user-2.jpeg",
    title: "UX Designer",
    description:
      "Intuitive AI tools transforming user experiences with creative visuals and music.",
  },
  {
    name: "Michael",
    image: "/testimonials/user-3.jpeg",
    title: "Digital Marketer",
    description:
      "Revolutionary platform for AI-generated images that enhance marketing campaigns.",
  },
  {
    name: "Sophia",
    image: "/testimonials/user-4.jpeg",
    title: "Graphic Designer",
    description: "Incredible features and user-friendly design. Love it!",
  },
] as const;

export const TOOLS = [
  {
    label: "ChatGenius",
    icon: MessageCircleCodeIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "BeatBuilder",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-violet-500/10",
    href: "/music",
  },
  {
    label: "PhotoGenius",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "MotionMaker",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "CodeSmith",
    icon: Code2Icon,
    color: "text-blue-500",
    bgColor: "bg-blue-700/10",
    href: "/code",
  },
] as const;

export const ROUTES = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  ...TOOLS,
  {
    label: "Review",
    icon: MessageSquare,
    href: "/review",
    color: "text-green-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: null,
  },
] as const;
