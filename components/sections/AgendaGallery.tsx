type Props = {
  images: string[];
  heading?: string;
};

/** Hiển thị ảnh chương trình nguyên vẹn, không cắt theo khung gallery. */
export default function AgendaGallery({ images, heading }: Props) {
  const list = images.filter(Boolean);
  if (list.length === 0) return null;

  return (
    <section className="px-6">
      {heading && (
        <h2
          className="tpl-script mb-5 text-center text-3xl"
          style={{ color: "var(--tpl-primary)" }}
        >
          {heading}
        </h2>
      )}
      <div className="space-y-3">
        {list.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element -- hỗ trợ ảnh blob cục bộ
          <img
            key={`${i}-${src}`}
            src={src}
            alt={`Chương trình ${i + 1}`}
            loading="lazy"
            className="h-auto w-full rounded-xl object-contain"
          />
        ))}
      </div>
    </section>
  );
}