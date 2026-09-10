import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billsai.club"),
  title: "Bill Warren — Product Lead",
  description:
    "Product Lead at Protocol Labs (Alignment Asset). Seven years shipping 0→1 products across AI, web3, and fintech. Former Head of Product at Game7/Summon and corporate attorney.",
  openGraph: {
    title: "Bill Warren — Product Lead",
    description:
      "I turn frontier tech — AI, web3, fintech — into products people actually use.",
    type: "website",
    url: "https://billsai.club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bill Warren — Product Lead",
    description:
      "I turn frontier tech — AI, web3, fintech — into products people actually use.",
  },
};

const CONTRACT = `impeccable direction contract (seed c2f88a22, challenger games-toys-physics-play-brick-build-instructions, code-led)
THESIS: A career as a brick build-instruction book — six numbered steps that assemble one model — refusing the dark dev-portfolio hero of particles, count-ups and gradient text.
OWN-WORLD: Sky-blue instruction paper ruled by a 24px stud grid; 2px black keyline boxes as the only container; brick red for the piece being added, build yellow for inventory, accent blue for controls; Rubik at weight 900 for oversized step numerals, 400–700 for rules text; isometric SVG bricks; buttons are blocks with a hard 4px black underside that press down.
STORY: A recruiter or founder sees a finished model and its parts list, understands in one line what Bill builds, follows six steps to the current one, and emails him.
FIRST VIEWPORT: Left column: title 'Bill Warren' at ~9vw black, the fixed sentence beneath, red block button bill@billsai.club and white outline button Résumé PDF. Right: the assembled six-brick model on a stud plate inside a keyline box, with 'PIECES IN THIS SET' inventory (four metrics) pinned top-right. Below the fold: STEP 01.
FORM: Brick build-instruction book, dealt challenger (won over assigned candidate 4 of 7, The Quest Card Deck).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} antialiased`}>
        <div
          dangerouslySetInnerHTML={{ __html: `<!-- ${CONTRACT} -->` }}
          hidden
        />
        <a href="#main" className="skip-link btn btn-yellow">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
