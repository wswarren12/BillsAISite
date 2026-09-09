import { experiences } from "./experience";
import type { Piece } from "@/components/brick/Brick";

/** Chronological steps: oldest role is step 01, current role is the last step. */
export const steps = [...experiences].reverse();

const COLORS = [
  "#3a3f4a", // 01 WilmerHale — slate (ink reads flat in iso)
  "#ffcd00", // 02 Peeps — build yellow
  "#147bd1", // 03 DAOhaus — accent blue
  "#2e9e5b", // 04 Opolis — green
  "#ffffff", // 05 Game7 — white
  "#e53935", // 06 Protocol Labs — brick red (the piece being added)
];

/** The base plate every step sits on. */
export const basePlate: Piece = {
  id: "plate",
  w: 6,
  d: 6,
  h: 0.4,
  x: -1,
  z: 0,
  y: 0,
  color: "#d9d9d9",
};

/** One brick per role, assembled as a stepped stack. */
const LAYOUT: Omit<Piece, "id" | "color">[] = [
  { w: 4, d: 2, x: 0, z: 0, y: 0.4 },
  { w: 4, d: 2, x: 0, z: 2, y: 0.4 },
  { w: 4, d: 2, x: 0, z: 4, y: 0.4 },
  { w: 4, d: 2, x: 0, z: 1, y: 1.6 },
  { w: 4, d: 2, x: 0, z: 3, y: 1.6 },
  { w: 2, d: 2, x: 1, z: 2, y: 2.8 },
];

export const pieces: Piece[] = steps.map((s, i) => ({
  id: `step-${i + 1}`,
  color: COLORS[i],
  ...LAYOUT[i],
}));

export const allPieces: Piece[] = [basePlate, ...pieces];

export const stepNo = (i: number) => String(i + 1).padStart(2, "0");

/** Headline metrics — the parts inventory on the cover. */
export const inventory = [
  { qty: "500K+", label: "Platform users", color: "#ffffff" },
  { qty: "$30M+", label: "Payroll processed", color: "#2e9e5b" },
  { qty: "28M+", label: "Tasks completed", color: "#ffffff" },
  { qty: "190+", label: "Ventures in the trust", color: "#e53935" },
];
