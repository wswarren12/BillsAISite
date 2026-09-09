/* Isometric SVG bricks — the book's only illustration system. */

export type Piece = {
  id: string;
  w: number; // studs along x
  d: number; // studs along z
  h?: number; // height in stud units (1.2 brick, 0.4 plate)
  x: number;
  z: number;
  y: number; // elevation
  color: string;
  ink?: string; // text/keyline color on the piece
};

const COS = 0.866;
const SIN = 0.5;

export function project(s: number, x: number, y: number, z: number) {
  return [(x - z) * s * COS, (x + z) * s * SIN - y * s] as const;
}

function pts(s: number, list: [number, number, number][]) {
  return list.map(([x, y, z]) => project(s, x, y, z).join(",")).join(" ");
}

export function BrickShape({
  p,
  s,
  ghost = false,
}: {
  p: Piece;
  s: number;
  ghost?: boolean;
}) {
  const { w, d, x, z, y, color } = p;
  const h = p.h ?? 1.2;
  const top = pts(s, [
    [x, y + h, z],
    [x + w, y + h, z],
    [x + w, y + h, z + d],
    [x, y + h, z + d],
  ]);
  const right = pts(s, [
    [x + w, y + h, z],
    [x + w, y + h, z + d],
    [x + w, y, z + d],
    [x + w, y, z],
  ]);
  const left = pts(s, [
    [x, y + h, z + d],
    [x + w, y + h, z + d],
    [x + w, y, z + d],
    [x, y, z + d],
  ]);
  const stroke = ghost ? "rgba(17,17,17,0.45)" : "var(--ink)";
  const fillTop = ghost ? "rgba(255,255,255,0.35)" : color;
  const fillR = ghost ? "rgba(255,255,255,0.2)" : `color-mix(in srgb, ${color}, #111 22%)`;
  const fillL = ghost ? "rgba(255,255,255,0.1)" : `color-mix(in srgb, ${color}, #111 38%)`;
  const sw = ghost ? 1.5 : 2;
  const studs: React.ReactNode[] = [];
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < d; j++) {
      const [cx, cy] = project(s, x + i + 0.5, y + h, z + j + 0.5);
      const rx = s * 0.3;
      const ry = s * 0.3 * SIN;
      const sh = s * 0.18;
      studs.push(
        <g key={`${i}-${j}`}>
          <path
            d={`M ${cx - rx} ${cy} a ${rx} ${ry} 0 0 0 ${rx * 2} 0 v ${-sh} a ${rx} ${ry} 0 0 1 ${-rx * 2} 0 z`}
            fill={ghost ? "rgba(255,255,255,0.2)" : `color-mix(in srgb, ${color}, #111 22%)`}
            stroke={stroke}
            strokeWidth={sw * 0.75}
          />
          <ellipse cx={cx} cy={cy - sh} rx={rx} ry={ry} fill={fillTop} stroke={stroke} strokeWidth={sw * 0.75} />
        </g>
      );
    }
  }
  return (
    <g strokeLinejoin="round" strokeDasharray={ghost ? "4 3" : undefined}>
      <polygon points={left} fill={fillL} stroke={stroke} strokeWidth={sw} />
      <polygon points={right} fill={fillR} stroke={stroke} strokeWidth={sw} />
      <polygon points={top} fill={fillTop} stroke={stroke} strokeWidth={sw} />
      {studs}
    </g>
  );
}

/** Bounding box of a set of pieces at scale s, for viewBox sizing. */
export function bounds(pieces: Piece[], s: number) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const p of pieces) {
    const h = p.h ?? 1.2;
    const corners: [number, number, number][] = [
      [p.x, p.y, p.z], [p.x + p.w, p.y, p.z], [p.x, p.y, p.z + p.d], [p.x + p.w, p.y, p.z + p.d],
      [p.x, p.y + h + 0.3, p.z], [p.x + p.w, p.y + h + 0.3, p.z], [p.x, p.y + h + 0.3, p.z + p.d], [p.x + p.w, p.y + h + 0.3, p.z + p.d],
    ];
    for (const [x, y, z] of corners) {
      const [px, py] = project(s, x, y, z);
      minX = Math.min(minX, px); maxX = Math.max(maxX, px);
      minY = Math.min(minY, py); maxY = Math.max(maxY, py);
    }
  }
  return { minX, minY, maxX, maxY };
}

/** Painter's order: back to front, bottom to top. */
export function sortPieces(pieces: Piece[]) {
  return [...pieces].sort((a, b) => (a.y - b.y) || ((a.x + a.z) - (b.x + b.z)));
}

export function Model({
  pieces,
  s = 20,
  ghostIds = [],
  hideIds = [],
  highlightId,
  arrow = false,
  entered = true,
  pad = 12,
  className,
  title,
}: {
  pieces: Piece[];
  s?: number;
  ghostIds?: string[];
  hideIds?: string[];
  highlightId?: string;
  arrow?: boolean;
  /** false = hold the highlighted piece invisible until the step scrolls in */
  entered?: boolean;
  pad?: number;
  className?: string;
  title?: string;
}) {
  const visible = pieces.filter((p) => !hideIds.includes(p.id));
  const b = bounds(pieces, s);
  const hl = arrow ? pieces.find((p) => p.id === highlightId) : undefined;
  const arrowLen = s * 2.4;
  const topPad = hl ? pad + arrowLen : pad;
  const vb = `${b.minX - pad} ${b.minY - topPad} ${b.maxX - b.minX + pad * 2} ${b.maxY - b.minY + pad + topPad}`;
  let arrowNode: React.ReactNode = null;
  let seatNode: React.ReactNode = null;
  if (hl) {
    // dashed landing zone: the seat footprint plus a half-stud margin so it stays visible once seated
    const m = 0.45;
    seatNode = (
      <polygon
        points={pts(s, [
          [hl.x - m, hl.y, hl.z - m],
          [hl.x + hl.w + m, hl.y, hl.z - m],
          [hl.x + hl.w + m, hl.y, hl.z + hl.d + m],
          [hl.x - m, hl.y, hl.z + hl.d + m],
        ])}
        fill="rgba(20,123,209,0.18)"
        stroke="var(--blue)"
        strokeWidth={2}
        strokeDasharray="5 4"
        strokeLinejoin="round"
      />
    );
    const [cx, cy] = project(s, hl.x + hl.w / 2, hl.y + (hl.h ?? 1.2) + 0.35, hl.z + hl.d / 2);
    const y0 = cy - arrowLen;
    const y1 = cy - s * 0.25;
    const head = s * 0.55;
    arrowNode = (
      <g className="arrow-pulse" style={{ transformOrigin: `${cx}px ${y0}px` }}>
        <line x1={cx} y1={y0} x2={cx} y2={y1 - head} stroke="var(--blue)" strokeWidth={s * 0.22} strokeLinecap="round" strokeDasharray={`${s * 0.4} ${s * 0.3}`} />
        <polygon points={`${cx - head * 0.8},${y1 - head} ${cx + head * 0.8},${y1 - head} ${cx},${y1}`} fill="var(--blue)" stroke="var(--ink)" strokeWidth={2} strokeLinejoin="round" />
      </g>
    );
  }
  return (
    <svg
      viewBox={vb}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {sortPieces(visible).map((p) => {
        const isHl = p.id === highlightId;
        return (
          <g key={p.id}>
            {isHl && seatNode}
            <g
              className={isHl ? (entered ? "piece-in" : "piece-wait") : undefined}
              style={isHl ? ({ "--drop": `${arrowLen}px` } as React.CSSProperties) : undefined}
            >
              <BrickShape p={p} s={s} ghost={ghostIds.includes(p.id)} />
            </g>
          </g>
        );
      })}
      {arrowNode}
    </svg>
  );
}

/** A single brick drawn alone (for 1:1 call-outs). */
export function Callout({ piece, s = 14, className }: { piece: Piece; s?: number; className?: string }) {
  const p: Piece = { ...piece, x: 0, z: 0, y: 0 };
  return <Model pieces={[p]} s={s} className={className} pad={6} />;
}
