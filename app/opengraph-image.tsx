import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";

export const alt = `${profileData.fullName} — ${profileData.displayTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0A0C0F",
        color: "#F2EEE6",
        padding: "72px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          letterSpacing: 2,
          color: "#A0A7AF",
        }}
      >
        <span>YASIR MARWAT</span>
        <span style={{ color: "#FF5A36" }}>PESHAWAR, PAKISTAN</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 116, lineHeight: 0.9, letterSpacing: -7 }}>
          Full-Stack
        </span>
        <span
          style={{
            fontSize: 116,
            lineHeight: 0.9,
            letterSpacing: -7,
            color: "#FF5A36",
          }}
        >
          Engineer.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid #272D34",
          paddingTop: 28,
          fontSize: 26,
        }}
      >
        <span>Backend-Leaning · Product-Minded</span>
        <span style={{ color: "#A0A7AF" }}>www.yasirmarwat.site</span>
      </div>
    </div>,
    size,
  );
}
