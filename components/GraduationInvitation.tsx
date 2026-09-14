"use client";

import RevealOnScroll from "@/components/effects/RevealOnScroll";
import SectionDivider from "@/components/effects/SectionDivider";
import AgendaGallery from "@/components/sections/AgendaGallery";
import Countdown from "@/components/sections/Countdown";
import CoverHero from "@/components/sections/CoverHero";
import EventDetails from "@/components/sections/EventDetails";
import HostsIntro from "@/components/sections/HostsIntro";
import LegalFooter from "@/components/sections/LegalFooter";
import MapSection from "@/components/sections/MapSection";
import OpeningLetter from "@/components/sections/OpeningLetter";
import PhotoGallery from "@/components/sections/PhotoGallery";
import StoryTimeline from "@/components/sections/StoryTimeline";
import ThankYouFooter from "@/components/sections/ThankYouFooter";

export type GraduationInvitationData = {
  graduateName: string;
  degree: string;
  school: string;
  ceremonyName: string;
  dateTime: string;
  eventNote?: string;
  venueName: string;
  venueAddress: string;
  openingLetter: string;
  invitation?: string;
  journey?: string;
  coverPhoto: string;
  gallery: string[];
  agenda?: string;
  thankYou?: string;
};

export default function GraduationInvitation({
  data,
}: {
  data: GraduationInvitationData;
}) {
  const date = data.dateTime ? new Date(data.dateTime) : null;
  const validDate = date && !Number.isNaN(date.getTime()) ? date : null;
  const dateLabel = validDate
    ? `${String(validDate.getDate()).padStart(2, "0")} - ${String(
        validDate.getMonth() + 1,
      ).padStart(2, "0")} - ${validDate.getFullYear()}`
    : "";

  return (
    <div
      className="tpl-body relative min-h-full"
      style={{
        "--tpl-primary": "#2f4d7e",
        "--tpl-accent": "#b08d57",
        "--tpl-bg": "#f5f7fa",
        "--tpl-surface": "#ffffff",
        "--tpl-text": "#26303f",
        "--tpl-muted": "#7d8a9e",
        "--tpl-font-heading": "var(--font-playfair)",
        "--tpl-font-script": "var(--font-dancing)",
        "--tpl-font-body": "var(--font-be-vietnam)",
        "--tpl-scale": "1",
        backgroundColor: "var(--tpl-bg)",
        color: "var(--tpl-text)",
      } as React.CSSProperties}
    >
      <div className="mx-auto w-full max-w-[480px]">
        <CoverHero photo={data.coverPhoto} kicker="Graduation Day" title={data.graduateName} subtitle="Trân trọng kính mời tới dự lễ tốt nghiệp" dateLabel={dateLabel} particles={false} />
        <div className="relative z-10 -mt-8 space-y-12 pb-10">
          <RevealOnScroll><OpeningLetter heading="Thư mời" body={data.openingLetter} invitation={data.invitation} /></RevealOnScroll>
          <RevealOnScroll><HostsIntro hosts={[{ label: "Tân cử nhân loại Giỏi", names: `${data.degree}\n${data.school}` }]} headline={data.graduateName} /></RevealOnScroll>
          <SectionDivider />
          <RevealOnScroll><EventDetails ceremonyName={data.ceremonyName} date={validDate} note={data.eventNote} venueName={data.venueName} address={data.venueAddress} /></RevealOnScroll>
          <RevealOnScroll><Countdown target={validDate} passedLabel="Đã chính thức tốt nghiệp!" /></RevealOnScroll>
          <RevealOnScroll><AgendaGallery heading="Chương trình" images={data.agenda ? [data.agenda] : []} /></RevealOnScroll>
          <SectionDivider />
          {/* {data.journey && <RevealOnScroll><StoryTimeline heading="Hành trình" milestones={data.journey} /></RevealOnScroll>} */}
          <RevealOnScroll><PhotoGallery heading="Kỷ niệm" images={data.gallery} /></RevealOnScroll>
          <SectionDivider />
          <RevealOnScroll><MapSection heading="Đường tới hội trường" venueName={data.venueName} address={data.venueAddress} /></RevealOnScroll>
          <RevealOnScroll><ThankYouFooter heading="Hẹn gặp bạn!" message={data.thankYou} signature={data.graduateName} /></RevealOnScroll>
        </div>
        <LegalFooter muted />
      </div>
    </div>
  );
}