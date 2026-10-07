import { useEffect, useMemo, useState } from "react";

const USER = "ChristianAlicaba2002";
const PROFILE = `https://github.com/${USER}`;
const API = `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`;
const CACHE_KEY = "gh-contrib-last-year";
const CACHE_MS = 60 * 60 * 1000;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LEVEL = [
  "bg-border",
  "bg-foreground/25",
  "bg-foreground/45",
  "bg-foreground/70",
  "bg-foreground",
];

function parseDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (Date.now() - data.ts > CACHE_MS) return null;
    return data.payload;
  } catch {
    return null;
  }
}

function writeCache(payload) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), payload }));
  } catch {
    /* ignore quota */
  }
}

function toWeeks(days) {
  if (!days.length) return [];
  const lead = parseDate(days[0].date).getDay();
  const padded = [...Array(lead).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    const chunk = padded.slice(i, i + 7);
    while (chunk.length < 7) chunk.push(null);
    weeks.push(chunk);
  }
  return weeks;
}

function monthLabels(weeks) {
  let last = -1;
  return weeks.map((week) => {
    const day = week.find(Boolean);
    if (!day) return "";
    const month = parseDate(day.date).getMonth();
    if (month === last) return "";
    last = month;
    return MONTHS[month];
  });
}

function streaks(days) {
  let longest = 0;
  let run = 0;
  for (const day of days) {
    if (day.count > 0) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 0;
    }
  }

  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i -= 1;
  while (i >= 0 && days[i].count > 0) {
    current += 1;
    i -= 1;
  }

  return { current, longest };
}

function formatCount(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

export default function GithubStats() {
  const [days, setDays] = useState(() => readCache()?.contributions ?? null);
  const [total, setTotal] = useState(() => readCache()?.total ?? null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (days) return;
    let cancelled = false;

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const contributions = Array.isArray(data.contributions) ? data.contributions : [];
        const yearTotal = data.total?.lastYear ?? contributions.reduce((sum, d) => sum + d.count, 0);
        const payload = { contributions, total: yearTotal };
        writeCache(payload);
        setDays(contributions);
        setTotal(yearTotal);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [days]);

  const weeks = useMemo(() => (days ? toWeeks(days) : []), [days]);
  const labels = useMemo(() => monthLabels(weeks), [weeks]);
  const stats = useMemo(() => (days ? streaks(days) : { current: 0, longest: 0 }), [days]);

  const cell = 11;
  const gap = 3;
  const col = cell + gap;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-foreground">GitHub</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Public contributions from the last twelve months.
          </p>
        </div>
        <a
          href={PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
        >
          {USER}
        </a>
      </div>

      {error && !days ? (
        <p className="mt-8 text-sm text-muted">
          Couldn&apos;t load activity.{" "}
          <a
            href={PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border underline-offset-4 hover:decoration-foreground"
          >
            Open GitHub
          </a>
        </p>
      ) : (
        <>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
            <div>
              <dt className="text-xs text-muted">Contributions</dt>
              <dd className="mt-1 font-mono text-xl text-foreground">
                {total == null ? "—" : formatCount(total)}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Current streak</dt>
              <dd className="mt-1 font-mono text-xl text-foreground">
                {days ? `${stats.current}d` : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Longest streak</dt>
              <dd className="mt-1 font-mono text-xl text-foreground">
                {days ? `${stats.longest}d` : "—"}
              </dd>
            </div>
          </dl>

          <div className="mt-8 overflow-x-auto">
            <div
              className="min-w-max"
              role="img"
              aria-label={
                total == null
                  ? "GitHub contribution graph"
                  : `${formatCount(total)} GitHub contributions in the last year`
              }
            >
              <div className="relative mb-2 h-4">
                {labels.map((label, i) =>
                  label ? (
                    <span
                      key={`${label}-${i}`}
                      className="absolute font-mono text-[10px] text-muted"
                      style={{ left: i * col }}
                    >
                      {label}
                    </span>
                  ) : null
                )}
              </div>

              <div className="flex" style={{ gap }}>
                {(weeks.length ? weeks : Array.from({ length: 53 }, () => Array(7).fill(null))).map(
                  (week, wi) => (
                    <div key={wi} className="flex flex-col" style={{ gap }}>
                      {week.map((day, di) => {
                        const level = day ? Math.min(4, day.level ?? 0) : 0;
                        return (
                          <span
                            key={di}
                            title={
                              day
                                ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                                : undefined
                            }
                            className={`block rounded-[2px] ${
                              !days
                                ? `animate-pulse ${LEVEL[0]}`
                                : day
                                  ? LEVEL[level]
                                  : "bg-transparent"
                            }`}
                            style={{ width: cell, height: cell }}
                          />
                        );
                      })}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-muted">
            <span>Less</span>
            {LEVEL.map((cls) => (
              <span
                key={cls}
                className={`block rounded-[2px] ${cls}`}
                style={{ width: cell, height: cell }}
              />
            ))}
            <span>More</span>
          </div>
        </>
      )}
    </div>
  );
}
