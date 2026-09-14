import Link from "next/link";

export default function TermsPage() {
  return <main className="mx-auto max-w-xl space-y-4 px-6 py-12"><h1 className="text-2xl font-semibold">Điều khoản sử dụng</h1><p>Nội dung thiệp được cung cấp bởi người gửi và chỉ dùng cho mục đích thông báo sự kiện.</p><Link className="underline" href="/">Quay lại thiệp</Link></main>;
}