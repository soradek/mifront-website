// Linia wymiarowa jak na rysunku stolarskim: znaczniki na końcach i opis pośrodku.
export default function Measure({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`measure ${className}`} aria-hidden="true">
      <span className="measure__line" />
      <span className="measure__label">{label}</span>
      <span className="measure__line" />
    </div>
  );
}
