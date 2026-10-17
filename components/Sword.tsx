type Props = {
  size?: number | string; // ancho en px, o em/rem como string
  animated?: boolean;
  detail?: "full" | "mid" | "min";
  color?: string;
  cut?: string; // color del fondo para el fuller
  className?: string;
};

// Símbolo oficial de TitanTech: viewBox "25 13 150 175"
export default function Sword({
  size = 96,
  animated = false,
  detail = "full",
  color = "var(--ink)",
  cut = "var(--surface)",
  className = "",
}: Props) {
  const a = animated ? "sw-anim" : "";
  return (
    <svg
      width={size}
      style={{ height: "auto", display: "block", overflow: "visible" }}
      viewBox="25 13 150 175"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${a}`}
      aria-label="TitanTech"
      role="img"
    >
      {detail !== "min" && (
        <>
          <circle className="sw-pommel" cx="100" cy="26" r={detail === "mid" ? 10 : 9} fill={color} />
          <rect className="sw-grip" x={detail === "mid" ? 94 : 95} y={detail === "mid" ? 36 : 35} width={detail === "mid" ? 12 : 10} height={detail === "mid" ? 15 : 16} fill={color} />
        </>
      )}
      <polygon className="sw-guard" points="29,59 42,50 158,50 171,59 158,68 42,68" fill={color} />
      <polygon className="sw-blade" points="84,68 116,68 105,166 100,184 95,166" fill={color} />
      {detail === "full" && (
        <>
          <line className="sw-fuller" x1="94" y1="74" x2="94" y2="156" stroke={cut} strokeWidth="3" strokeLinecap="round" />
          <line className="sw-fuller" x1="106" y1="74" x2="106" y2="156" stroke={cut} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {detail !== "min" && (
        <>
          <circle className="sw-dot" cx="66" cy="94" r={detail === "mid" ? 6 : 5} fill={color} />
          <circle className="sw-dot" cx="134" cy="94" r={detail === "mid" ? 6 : 5} fill={color} />
        </>
      )}
    </svg>
  );
}
