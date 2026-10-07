export default function CoderBoy({ className = "" }) {
  return (
    <svg
      viewBox="0 0 360 420"
      className={`text-foreground ${className}`}
      role="img"
      aria-label="Animated coder at a desk"
    >
      <style>{`
        .cb-idle { animation: cb-idle 3.2s ease-in-out infinite; transform-origin: 150px 260px; }
        .cb-head { animation: cb-head 4s ease-in-out infinite; transform-origin: 148px 168px; }
        .cb-blink { animation: cb-blink 5s infinite; transform-origin: 168px 156px; transform-box: fill-box; }
        .cb-hand { animation: cb-hand 0.42s ease-in-out infinite; }
        .cb-mouse { animation: cb-mouse 2.6s ease-in-out infinite; }
        .cb-scroll { animation: cb-scroll 4.5s linear infinite; }
        .cb-cursor { animation: cb-cursor 1.05s steps(1) infinite; }
        .cb-led { animation: cb-led 1.8s ease-in-out infinite; }
        .cb-float-a { animation: cb-float 5s ease-in-out infinite; }
        .cb-float-b { animation: cb-float 6s ease-in-out 0.8s infinite; }
        .cb-float-c { animation: cb-float 5.5s ease-in-out 1.4s infinite; }
        @keyframes cb-idle {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-1.4deg); }
        }
        @keyframes cb-head {
          0%, 100% { transform: rotate(0deg); }
          40% { transform: rotate(4deg); }
          70% { transform: rotate(-2deg); }
        }
        @keyframes cb-blink {
          0%, 46%, 52%, 100% { transform: scaleY(1); }
          49% { transform: scaleY(0.1); }
        }
        @keyframes cb-hand {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(3px, 2px); }
        }
        @keyframes cb-mouse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -2px); }
        }
        @keyframes cb-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-36px); }
        }
        @keyframes cb-cursor {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes cb-led {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }
        @keyframes cb-float {
          0%, 100% { transform: translateY(0); opacity: 0.28; }
          50% { transform: translateY(-10px); opacity: 0.7; }
        }
      `}</style>

      <rect width="360" height="420" rx="28" className="fill-foreground/[0.04]" />

      <text x="42" y="86" className="cb-float-a fill-foreground font-mono" fontSize="22">{`{ }`}</text>
      <text x="292" y="120" className="cb-float-b fill-foreground font-mono" fontSize="18">&lt;/&gt;</text>
      <text x="300" y="220" className="cb-float-c fill-foreground font-mono" fontSize="16">;</text>

      {/* chair */}
      <rect x="58" y="214" width="78" height="88" rx="16" className="fill-foreground/15" />
      <rect x="64" y="300" width="14" height="62" rx="4" className="fill-foreground/40" />
      <rect x="116" y="300" width="14" height="62" rx="4" className="fill-foreground/40" />
      <rect x="52" y="198" width="18" height="78" rx="8" className="fill-foreground/25" />

      <g className="cb-idle">
        {/* torso */}
        <path d="M86 214c8-38 36-54 70-48 22 4 38 22 42 48v78H90l-4-78z" className="fill-foreground" />

        {/* neck */}
        <rect x="138" y="176" width="22" height="28" rx="8" className="fill-background stroke-foreground" strokeWidth="2" />

        <g className="cb-head">
          {/* hair back */}
          <ellipse cx="148" cy="148" rx="38" ry="40" className="fill-foreground" />
          {/* headphone band */}
          <path d="M118 148c8-36 52-44 72-16" fill="none" className="stroke-foreground" strokeWidth="7" strokeLinecap="round" />
          <rect x="108" y="148" width="16" height="28" rx="6" className="fill-foreground" />
          <rect x="176" y="148" width="16" height="28" rx="6" className="fill-foreground" />
          {/* face profile */}
          <path
            d="M132 132c22-24 58-22 64 8 4 18-2 34-14 42-6 8-4 16 4 20h-48c-8-10-12-28-8-46 2-10 4-16 2-24z"
            className="fill-background stroke-foreground"
            strokeWidth="2.4"
          />
          <path d="M132 138c16-20 50-18 56 6" className="fill-foreground" />
          {/* eye */}
          <g className="cb-blink">
            <ellipse cx="168" cy="156" rx="4.5" ry="5" className="fill-foreground" />
          </g>
          {/* nose / smile */}
          <path d="M186 164c6 2 8 8 4 12" fill="none" className="stroke-foreground" strokeWidth="2" strokeLinecap="round" />
          <path d="M170 180c8 6 16 4 20-2" fill="none" className="stroke-foreground" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* typing arm */}
        <g className="cb-hand">
          <path d="M168 232c28 8 48 22 54 40-16 8-34 4-52-10-8-8-14-18-18-30z" className="fill-foreground" />
          <ellipse cx="224" cy="274" rx="11" ry="8" className="fill-background stroke-foreground" strokeWidth="2" />
        </g>
      </g>

      {/* mouse arm */}
      <g className="cb-mouse">
        <path d="M150 250c8 18 4 34-8 46 18 2 36-6 46-20 6-10 8-22 4-32z" className="fill-foreground/90" />
        <rect x="178" y="292" width="22" height="12" rx="6" className="fill-background stroke-foreground" strokeWidth="2" />
      </g>

      {/* desk */}
      <rect x="24" y="308" width="312" height="12" rx="4" className="fill-foreground" />
      <rect x="48" y="320" width="12" height="56" className="fill-foreground/35" />
      <rect x="300" y="320" width="12" height="56" className="fill-foreground/35" />

      {/* monitor */}
      <rect x="196" y="148" width="132" height="92" rx="10" className="fill-foreground" />
      <rect x="204" y="156" width="116" height="76" rx="6" className="fill-background" />
      <rect x="252" y="240" width="16" height="28" className="fill-foreground" />
      <rect x="228" y="266" width="64" height="8" rx="3" className="fill-foreground" />
      <circle cx="256" cy="146" r="3" className="cb-led fill-foreground" />

      {/* scrolling code */}
      <clipPath id="cb-screen">
        <rect x="210" y="162" width="104" height="64" rx="4" />
      </clipPath>
      <g clipPath="url(#cb-screen)">
        <g className="cb-scroll">
          <rect x="218" y="168" width="18" height="4" rx="2" className="fill-foreground/80" />
          <rect x="240" y="168" width="40" height="4" rx="2" className="fill-foreground/35" />
          <rect x="226" y="180" width="62" height="4" rx="2" className="fill-foreground/55" />
          <rect x="218" y="192" width="28" height="4" rx="2" className="fill-foreground/70" />
          <rect x="250" y="192" width="36" height="4" rx="2" className="fill-foreground/30" />
          <rect x="226" y="204" width="48" height="4" rx="2" className="fill-foreground/50" />
          <rect x="218" y="216" width="22" height="4" rx="2" className="cb-cursor fill-foreground" />
          <rect x="218" y="228" width="18" height="4" rx="2" className="fill-foreground/80" />
          <rect x="240" y="228" width="40" height="4" rx="2" className="fill-foreground/35" />
          <rect x="226" y="240" width="62" height="4" rx="2" className="fill-foreground/55" />
          <rect x="218" y="252" width="28" height="4" rx="2" className="fill-foreground/70" />
        </g>
      </g>

      {/* keyboard */}
      <rect x="168" y="298" width="86" height="12" rx="3" className="fill-foreground/80" />
      <rect x="174" y="301" width="8" height="5" rx="1" className="fill-background" />
      <rect x="186" y="301" width="8" height="5" rx="1" className="fill-background" />
      <rect x="198" y="301" width="8" height="5" rx="1" className="fill-background" />
      <rect x="210" y="301" width="8" height="5" rx="1" className="fill-background" />
      <rect x="222" y="301" width="8" height="5" rx="1" className="fill-background" />
    </svg>
  );
}
