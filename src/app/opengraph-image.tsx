import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Libreville Digital.IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#5B4BF5",
          color: "#ffffff",
          fontFamily: "sans-serif",
          padding: "90px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {profile.name}
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
      </div>
    ),
    { ...size }
  );
}
