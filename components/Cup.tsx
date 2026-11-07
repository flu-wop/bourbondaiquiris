const BODY = "M44 128H176L160 318Q159 330 147 330H73Q61 330 60 318Z";
const EMPTY = "#d9c8f0";

type Props = { colors: string[]; id: string; solid?: boolean; level?: number; className?: string; label?: string };

/** Frosted cup with banded flavor layers and a frozen swirl on top. `solid` = one color, driven by GSAP in the staged menu. */
export default function Cup({ colors, id, solid = false, level = 1, className, label }: Props) {
  const n = colors.length;
  const top = n ? colors : [EMPTY];
  const stops: { o: number; c: string }[] = [];
  colors.forEach((c, i) => {
    stops.push({ o: i === 0 ? 0 : i / n + 0.04, c });
    stops.push({ o: i === n - 1 ? 1 : (i + 1) / n - 0.04, c });
  });
  const y = 330 - 202 * level;
  const fill = solid ? top[0] : n ? `url(#${id}-g)` : "none";
  return (
    <svg className={className} viewBox="0 0 220 340" role="img" aria-label={label ?? "A frozen daiquiri cup"}>
      <defs>
        <clipPath id={`${id}-c`}><path d={BODY} /></clipPath>
        <linearGradient id={`${id}-g`} x1="0" y1="1" x2="0" y2="0">
          {stops.map((s, i) => <stop key={i} offset={s.o} stopColor={s.c} style={{ transition: "stop-color .45s" }} />)}
        </linearGradient>
        <linearGradient id={`${id}-f`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".28" /><stop offset=".4" stopColor="#fff" stopOpacity=".05" /><stop offset="1" stopColor="#fff" stopOpacity=".2" />
        </linearGradient>
      </defs>
      <rect x="113" y="4" width="11" height="124" rx="5.5" transform="rotate(10 118 70)" fill="#8dff3d" />
      <g data-dome>
        <path className="fl" d="M36 134C30 104 56 92 110 92S190 104 184 134Z" fill={top[0]} style={{ transition: "fill .45s" }} />
        <path className="fl" d="M52 102C50 80 76 70 110 70S170 80 168 102C150 94 70 94 52 102Z" fill={top[1 % top.length]} style={{ transition: "fill .45s" }} />
        <path className="fl" d="M84 74C84 52 104 44 118 38C116 50 140 58 136 74C122 68 98 68 84 74Z" fill={top[2 % top.length]} style={{ transition: "fill .45s" }} />
        <path d="M60 106C70 98 90 94 104 96" stroke="#fff" strokeOpacity=".4" strokeWidth="5" strokeLinecap="round" fill="none" />
      </g>
      <path d={BODY} fill="rgba(255,255,255,.07)" />
      <g clipPath={`url(#${id}-c)`}>
        <rect data-liquid x="40" y={y} width="140" height={202 * level + 2} fill={fill} />
      </g>
      <path d={BODY} fill={`url(#${id}-f)`} stroke="rgba(255,255,255,.35)" strokeWidth="2" />
      <g clipPath={`url(#${id}-c)`}><rect x="40" y="200" width="140" height="54" fill="#801aae" opacity=".92" /></g>
      <text x="110" y="228" textAnchor="middle" style={{ fontFamily: "var(--display)" }} fontSize="22" letterSpacing="1" fill="#8dff3d">BOURBON</text>
      <text x="110" y="246" textAnchor="middle" style={{ fontFamily: "var(--display)" }} fontSize="14" letterSpacing="1.5" fill="#ffcc33">DAIQUIRIS</text>
    </svg>
  );
}
