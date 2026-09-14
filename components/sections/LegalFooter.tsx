import Link from "next/link";

/**
 * Footer pháp lý — bắt buộc xuất hiện trên mọi trang public,
 * kể cả trang thiệp khách mời xem (FR-72, FR-73).
 */
export default function LegalFooter({ muted = false }: { muted?: boolean }) {
  return (
    <footer
      className="space-y-1 py-6 text-center text-xs"
      style={muted ? { color: "var(--tpl-muted)" } : undefined}
    >
      <p className={muted ? "" : "text-zinc-400"}>
        <Link
          href="/chinh-sach-bao-mat"
          className="underline-offset-2 hover:underline"
        >
          Chính sách bảo mật
        </Link>
        <span className="mx-2">·</span>
        <Link
          href="/dieu-khoan-su-dung"
          className="underline-offset-2 hover:underline"
        >
          Điều khoản sử dụng
        </Link>
      </p>
      <p className={muted ? "opacity-80" : "text-zinc-300"}>
        © Author by Kiều Thanh Thế Anh
      </p>
    </footer>
  );
}
