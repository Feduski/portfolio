import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Fede Garcia - Full Stack Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle at 25% 25%, #001499 0%, transparent 50%), radial-gradient(circle at 75% 75%, #5F0085 0%, transparent 50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#E5E7EB",
            marginBottom: "24px",
            lineHeight: 1.1,
          }}
        >
          Fede Garcia
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "#9CA3AF",
            marginBottom: "32px",
            maxWidth: "800px",
          }}
        >
          Full-stack developer building clean, fast web experiences with Next.js and modern tooling
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "24px",
            color: "#001499",
          }}
        >
          <span>Next.js</span>
          <span style={{ color: "#5F0085" }}>•</span>
          <span>React</span>
          <span style={{ color: "#5F0085" }}>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
