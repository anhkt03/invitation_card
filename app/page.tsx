import GraduationInvitation, {
  type GraduationInvitationData,
} from "@/components/GraduationInvitation";

const invitation: GraduationInvitationData = {
  graduateName: "Kiều Thanh Thế Anh",
  degree: "Ngành Kỹ thuật Phần mềm",
  school: "Trường Đại học FPT Hà Nội",
  ceremonyName: "LỄ TỐT NGHIỆP",
  dateTime: "2026-09-16T16:00",
  eventNote: "",
  venueName: "Hội trường MMH - Trung Tâm Hội Nghị Quốc Gia",
  venueAddress: "",
  openingLetter:
    "Bốn năm thanh xuân giảng đường sẽ gói gọn lại trong những bức ảnh cùng các bạn.\nMình rất mong có các bạn trong khoảnh khắc đặc biệt này - ngày mình chính thức tốt nghiệp!",
  invitation: "Sự hiện diện của bạn là niềm vui và vinh dự của mình!",
  journey:
    "2022 - Ngày đầu nhập học, bỡ ngỡ giảng đường\n2024 - Giải Nhì nghiên cứu khoa học cấp trường\n12-2025 - Bảo vệ khóa luận 9.7/10 và tốt nghiệp loại Giỏi",
  coverPhoto: "/templates/graduation/2/7.jpg",
  gallery: [
    "/templates/graduation/2/1.jpg",
    "/templates/graduation/2/2.jpg",
    "/templates/graduation/2/3.jpg",
    "/templates/graduation/2/4.jpg",
  ],
  agenda: "/templates/graduation/2/6.jpg",
  thankYou:
    "Cảm ơn gia đình, thầy cô và những người bạn đã đồng hành suốt chặng đường vừa qua.\nHẹn gặp nhau trong ngày vui này nhé!",
};

export default function HomePage() {
  return <GraduationInvitation data={invitation} />;
}
