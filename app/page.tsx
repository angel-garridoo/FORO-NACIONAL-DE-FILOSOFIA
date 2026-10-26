"use client";

import { useMemo, useState } from "react";
import { AgendaItem, program } from "@/data/program";

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="mark">{children}</span>;
}

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <svg className={open ? "arrow arrow--open" : "arrow"} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function SessionDetails({ item }: { item: AgendaItem }) {
  return (
    <div className="session-details">
      {item.moderator && (
        <div className="moderator-row">
          <span>Modera</span>
          <p>{item.moderator}</p>
        </div>
      )}

      {item.note && <p className="session-note">{item.note}</p>}

      {item.subEvents && (
        <ol className="subevents">
          {item.subEvents.map((subEvent) => (
            <li key={`${item.id}-${subEvent.time}`}>
              <time>{subEvent.time}</time>
              <p>{subEvent.text}</p>
            </li>
          ))}
        </ol>
      )}

      {item.presentations && (
        <ol className="presentations">
          {item.presentations.map((presentation, index) => (
            <li key={`${item.id}-${presentation.speakers}-${index}`}>
              <span className="presentation-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{presentation.title}</h4>
                <p className="speaker-name">{presentation.speakers}</p>
                {presentation.affiliation && <p className="affiliation">{presentation.affiliation}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function AgendaCard({
  item,
  isOpen,
  onToggle,
}: {
  item: AgendaItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isInteractive = Boolean(
    item.kind === "mesa" || item.kind === "central" || item.presentations || item.subEvents,
  );

  return (
    <article
      className={`agenda-card agenda-card--${item.kind}${isOpen ? " agenda-card--open" : ""}`}
    >
      <div className="agenda-time">
        <time>{item.time}</time>
        {item.location && (
          <span className="location">
            <PinIcon />
            {item.location}
          </span>
        )}
      </div>

      <div className="agenda-main">
        {isInteractive ? (
          <button
            type="button"
            className="agenda-trigger"
            aria-expanded={isOpen}
            aria-controls={`${item.id}-details`}
            onClick={onToggle}
          >
            <span>
              <span className="item-type">{item.kind === "central" ? "Mesa central" : "Mesa temática"}</span>
              <h3>{item.title}</h3>
            </span>
            <span className="trigger-action">
              <span>{isOpen ? "Cerrar" : "Ver ponentes"}</span>
              <ArrowIcon open={isOpen} />
            </span>
          </button>
        ) : (
          <div className="agenda-static">
            <span className="item-type">{item.kind === "break" ? "Pausa" : "Programación"}</span>
            <h3>{item.title}</h3>
            {item.note && <p>{item.note}</p>}
          </div>
        )}

        {isInteractive && (
          <div id={`${item.id}-details`} className="details-grid" data-open={isOpen}>
            <div className="details-inner">
              <SessionDetails item={item} />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const [activeDay, setActiveDay] = useState<"dia-1" | "dia-2">("dia-1");
  const [openId, setOpenId] = useState<string | null>(null);
  const day = useMemo(() => program.find((entry) => entry.id === activeDay) ?? program[0], [activeDay]);

  function selectDay(dayId: "dia-1" | "dia-2") {
    setActiveDay(dayId);
    setOpenId(null);
    window.setTimeout(() => {
      document.getElementById("programacion")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="identity" aria-label="Ir al inicio">
          <span className="identity-mark" aria-hidden="true">UA</span>
          <span>
            <strong>Universidad del Atlántico</strong>
            <small>Facultad de Ciencias Humanas · Programa de Filosofía</small>
          </span>
        </a>
        <a href="#programacion" className="header-link">Ver programación <span>↓</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-lines" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> 19—20 de noviembre de 2026</p>
          <h1>
            <span>XX Foro Nacional</span>
            <span className="title-last"><span className="title-prefix">de</span> <Mark>Filosofía</Mark></span>
          </h1>
          <p className="hero-intro">
            <span>Programación de mesas, ponencias </span>
            <span>y encuentros de la Facultad </span>
            <span>de Ciencias Humanas.</span>
          </p>
        </div>
        <div className="hero-index" aria-label="Información del evento">
          <div><span>Edición</span><strong>XX</strong></div>
          <div><span>Jornadas</span><strong>02</strong></div>
          <div><span>Programa</span><strong>Filosofía</strong></div>
        </div>
        <a href="#programacion" className="scroll-cue" aria-label="Ir a la programación">
          <span>Explorar</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <section className="schedule" id="programacion">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--blue"><span /> Cronograma</p>
            <h2>Elige una jornada</h2>
          </div>
          <p>Selecciona una mesa para consultar sus ponencias y participantes.</p>
        </div>

        <div className="day-selector" role="tablist" aria-label="Días del foro">
          {program.map((entry) => {
            const active = entry.id === activeDay;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={active}
                className={active ? "day-tab day-tab--active" : "day-tab"}
                key={entry.id}
                onClick={() => selectDay(entry.id)}
              >
                <span className="day-number">Día {entry.number}</span>
                <span className="day-date">{entry.date}</span>
                <span className="day-year">2026</span>
              </button>
            );
          })}
        </div>

        <div className="day-content" role="tabpanel" key={day.id}>
          <div className="day-title-row">
            <p>Programación</p>
            <h2>{day.fullDate}</h2>
          </div>

          {day.sections.map((section) => (
            <section className="agenda-section" key={`${day.id}-${section.label}`}>
              <div className="agenda-section-label">
                <span />
                <h2>{section.label}</h2>
              </div>
              <div className="agenda-list">
                {section.items.map((item) => (
                  <AgendaCard
                    item={item}
                    key={item.id}
                    isOpen={openId === item.id}
                    onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-mark" aria-hidden="true">XX</div>
        <div>
          <p>XX Foro Nacional de Filosofía</p>
          <span>Universidad del Atlántico</span>
        </div>
        <div className="footer-program">Facultad de Ciencias Humanas<br />Programa de Filosofía</div>
      </footer>
    </main>
  );
}
