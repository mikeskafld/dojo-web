import { ImageResponse } from "next/og"

export const runtime = "edge"

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get("title") || "Dojo - Master Any Skill"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "48px",
              fontWeight: "300",
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            dojo
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 60px",
            maxWidth: "1000px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 40 ? "48px" : "56px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: "400",
            }}
          >
            The First Marketplace Powered by Cognitive Scaffolding
          </span>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #00d4ff, #22d3ee, transparent)",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
