"use client";
import {
  AirplaneTilt,
  FileText,
  Buildings,
  MapTrifold,
  Compass,
  Bus,
  Car,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Users,
  UsersThree,
  Briefcase,
  Crown,
  Heart,
  Path,
  MagnifyingGlass,
  CaretDown,
  CaretRight,
  List,
  X,
  ArrowRight,
  Check,
  Star,
  Phone,
  Envelope,
  Clock,
  MapPin,
  InstagramLogo,
  FacebookLogo,
  Question,
} from "@phosphor-icons/react";

type Props = { name: string; className?: string; size?: number };

export default function Icon({ name, className = "w-5 h-5", size = 20 }: Props) {
  const common = { size, weight: "regular" as const, className };
  switch (name) {
    case "plane": return <AirplaneTilt {...common} />;
    case "file-badge": return <FileText {...common} />;
    case "building": return <Buildings {...common} />;
    case "map": return <MapTrifold {...common} />;
    case "compass": return <Compass {...common} />;
    case "bus": return <Bus {...common} />;
    case "car": return <Car {...common} />;
    case "shield": return <ShieldCheck {...common} />;
    case "book": return <BookOpen {...common} />;
    case "graduation": return <GraduationCap {...common} />;
    case "users": return <Users {...common} />;
    case "users-round": return <UsersThree {...common} />;
    case "briefcase": return <Briefcase {...common} />;
    case "crown": return <Crown {...common} />;
    case "heart": return <Heart {...common} />;
    case "route": return <Path {...common} />;
    case "search": return <MagnifyingGlass {...common} />;
    case "chevron-down": return <CaretDown {...common} />;
    case "chevron-right": return <CaretRight {...common} />;
    case "menu": return <List {...common} />;
    case "x": return <X {...common} />;
    case "arrow-right": return <ArrowRight {...common} />;
    case "check": return <Check {...common} />;
    case "star": return <Star {...common} weight="fill" className={className} />;
    case "phone": return <Phone {...common} />;
    case "mail": return <Envelope {...common} />;
    case "clock": return <Clock {...common} />;
    case "pin": return <MapPin {...common} />;
    case "instagram": return <InstagramLogo {...common} />;
    case "facebook": return <FacebookLogo {...common} weight="fill" className={className} />;
    default: return <Question {...common} />;
  }
}
