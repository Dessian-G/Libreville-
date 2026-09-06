import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Libreville Digital.IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Couleurs dupliquées ici en dur : Satori (moteur de next/og) ne lit pas les
// variables CSS de globals.css, seulement des styles inline statiques.
const GREEN = "#0B7A4C";
const BLUE = "#8FD3FF";
const YELLOW = "#E8A317";

export default async function Image() {
  const suffix = ".IA";
  const hasSuffix = profile.name.endsWith(suffix);
  const namePrefix = hasSuffix ? profile.name.slice(0, -suffix.length) : profile.name;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: GREEN,
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "90px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <span style={{ opacity: 0.85 }}>{namePrefix}</span>
          {hasSuffix && <span style={{ color: BLUE }}>{suffix}</span>}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 16,
            background: YELLOW,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
