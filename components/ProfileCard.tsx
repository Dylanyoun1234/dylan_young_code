import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
      <div
        style={{
          background: "linear-gradient(145deg, #1c1c1e 0%, #111113 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "40px 36px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow accent top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "160px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(163,230,53,0.6), transparent)",
          }}
        />

        {/* Avatar */}
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(163,230,53,0.4)",
            marginBottom: "20px",
            background: "#2a2a2c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Replace the src below with your actual photo path, e.g. "/photo.jpg" */}
          {/* To use: drop your photo into the /public folder of your project, then update src */}
          <img
            src="/photo.png"
            alt="Profile photo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              // Fallback initials if photo not found
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Fallback initials (shown if no photo) */}
          <span
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "32px",
              fontWeight: "400",
              color: "rgba(163,230,53,0.7)",
              letterSpacing: "2px",
              position: "absolute",
            }}
          >
            YN
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "22px",
            fontWeight: "400",
            color: "#f5f5f5",
            letterSpacing: "0.5px",
            margin: "0 0 10px 0",
            textAlign: "center",
          }}
        >
          Dylan Young
        </h1>

        {/* Divider */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(163,230,53,0.5)",
            margin: "0 0 14px 0",
          }}
        />

        {/* Headline */}
        <p
          style={{
            fontFamily:
              "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
            fontSize: "12px",
            fontWeight: "400",
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            lineHeight: "1.7",
            margin: "0 0 28px 0",
            letterSpacing: "0.3px",
          }}
        >
          I am currently pursuing a bachelor’s degree in Software Engineering at the University of Arizona. I am passionate about applying software tools to solve real-world problems, always seeking creative and innovative solutions. I enjoy exploring different approaches to tackle challenges and continually strive to expand my knowledge and skills in my field.

Top skills
        </p>

        {/* LinkedIn button */}
        <a
          href="https://www.linkedin.com/in/dylanyoungsfwe/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(163,230,53,0.08)",
            border: "1px solid rgba(163,230,53,0.2)",
            borderRadius: "100px",
            padding: "8px 18px",
            textDecoration: "none",
            color: "rgba(163,230,53,0.85)",
            fontFamily:
              "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(163,230,53,0.15)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(163,230,53,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "rgba(163,230,53,0.08)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(163,230,53,0.2)";
          }}
        >
          {/* LinkedIn icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
