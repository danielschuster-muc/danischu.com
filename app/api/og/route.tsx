/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          width: "1200px",
          height: "630px",
          backgroundImage: "linear-gradient(to top right, #eef5ff, #f9ffeb)",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
          }}>
          <img
            alt="Avatar"
            src="https://avatars.githubusercontent.com/danielschuster-muc"
            style={{ width: "300px", height: "300px", borderRadius: "50%" }}
          />
        </div>
        <h2
          style={{
            fontSize: 40,
            fontStyle: "normal",
            marginTop: 30,
            color: "#254884",
          }}>
          Portfolio of
        </h2>
        <h1
          style={{
            fontSize: 60,
            fontStyle: "normal",
            color: "transparent",
            backgroundImage: "linear-gradient(to right, #facc15, #4ade80)",
            backgroundClip: "text",
          }}>
          Daniel Schuster
        </h1>
      </div>
    ),
  );
}
