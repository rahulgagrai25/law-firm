'use client';

import React, { useState } from "react";
import Image from "next/image";

type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
  socials?: { facebook?: string; linkedin?: string; pinterest?: string; twitter?: string };
};

const members: Member[] = [
  { id: 1, name: "Sharan Shahier", role: "Head", image: "/team/p9.png" },
  { id: 2, name: "Rebecca Campbell", role: "Partner", image: "/team/p2.png" },
  { id: 3, name: "Kevin King", role: "Partner", image: "/team/p3.png" },
  { id: 4, name: "Steven Scott", role: "Partner", image: "/team/p4.png" },
  { id: 5, name: "Olivia Brown", role: "Associate", image: "/team/p5.png" },
  { id: 6, name: "Liam Carter", role: "Associate", image: "/team/p6.png" },
  { id: 7, name: "Ava Wilson", role: "Counsel", image: "/team/p7.png" },
  { id: 8, name: "Noah Harris", role: "Counsel", image: "/team/p8.png" },
];

function Team({ data = members, perPage = 4 }: { data?: Member[]; perPage?: number }) {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(data.length / perPage));

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pages - 1, p + 1));

  const start = page * perPage;
  const visible = data.slice(start, start + perPage);

  return (
    <section className="team" aria-label="Our Lawyer Team">
      <div className="team__ghost" aria-hidden>
        TEAM
      </div>

      <div className="team__inner">
        <div className="team__left">
          <div className="team__meta">
            <span className="team__bar" />
            <span className="team__kicker">Team</span>
          </div>

          <h2 className="team__title">Our Lawyer Team</h2>
        </div>

        <div className="team__grid">
          {visible.map((m) => (
            <article className="team__card" key={m.id}>
              <div className="team__media">
                <Image src={m.image} alt={m.name} width={300} height={375} />
              </div>

              <div className="team__info">
                <div className="team__name">{m.name}</div>
                <div className="team__role">{m.role}</div>

                <div className="team__socials" aria-hidden>
                  <a href={m.socials?.facebook || "#"} className="icon" aria-label="facebook">
                    {/* facebook */}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12.07C22 6.53 17.52 2 12 2S2 6.53 2 12.07c0 4.99 3.66 9.12 8.44 9.95v-7.04H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.83 8.44-4.96 8.44-9.93z"/></svg>
                  </a>
                  <a href={m.socials?.linkedin || "#"} className="icon" aria-label="linkedin">
                    {/* linkedin */}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 5 3.78 6.2 2.28 6.2S-.42 5 . - sorry  "/></svg>
                    {/* short inline placeholder - style uses color: var(--accent) */}
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 5 3.78 6.2 2.28 6.2S-.42 5 ."/></svg>
                  </a>
                  <a href={m.socials?.pinterest || "#"} className="icon" aria-label="pinterest">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.66 3.37 8.53 7.81 9.4-.11-.8-.2-2.03.04-2.9.22-.95 1.42-6.06 1.42-6.06s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.77 1.53 1.7 0 1.04-.66 2.58-1 4.02-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.52 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.46 2.57-5.46 5.24 0 1.03.4 2.13.9 2.73.1.12.12.22.09.34-.1.38-.32 1.2-.36 1.36-.06.22-.2.27-.46.16-1.70-.78-2.76-3.30-2.76-5.26 0-4.28 3.11-8.21 9-8.21 4.74 0 8.43 3.38 8.43 7.90 0 4.72-2.97 8.51-7.08 8.51-1.39 0-2.7-.72-3.14-1.57 0 0-.75 2.86-.9 3.43-.27 1.04-1 .62-1.5.38C5.57 21.93 4 17.18 4 12.07 4 6.5 8.48 2 14 2s8 4.5 8 10c0 5.5-4.48 10-10 10S4 17.5 4 12.07z"/></svg>
                  </a>
                  <a href={m.socials?.twitter || "#"} className="icon" aria-label="twitter">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.54 1.57-1.4 1.89-2.43-.84.5-1.77.86-2.76 1.05C18.2 4.9 17 4.5 15.7 4.5c-2.12 0-3.84 1.72-3.84 3.84 0 .3.04.6.1.88-3.19-.16-6.02-1.69-7.90-4.02-.33.57-.52 1.22-.52 1.92 0 1.33.68 2.5 1.72 3.19-.63-.02-1.22-.19-1.73-.48v.05c0 1.85 1.32 3.4 3.07 3.75-.32.08-.66.12-1.01.12-.25 0-.5-.02-.74-.07.51 1.6 2 2.76 3.77 2.79-1.38 1.08-3.11 1.72-4.99 1.72-.32 0-.64-.02-.95-.06 1.75 1.12 3.83 1.77 6.06 1.77 7.27 0 11.25-6.03 11.25-11.25v-.51C21 7.6 21.8 6.84 22.46 6z"/></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="team__pager" role="navigation" aria-label="Team pages">
          <button className="pager__btn" onClick={prev} disabled={page === 0} aria-label="Previous">
            ‹
          </button>
          <button className="pager__btn" onClick={next} disabled={page >= pages - 1} aria-label="Next">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default Team;