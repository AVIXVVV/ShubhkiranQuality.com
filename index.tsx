import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { clients, firm, homeStats, logo, pillars, standards, steps } from "@/data/site";
import { CloseBand, ContactButton, GhostLink, Kicker, Shell } from "@/components/shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISO Consultancy & Training in Nashik | Shubhkiran Quality Forum" },
      {
        name: "description",
        content:
          "SQF helps organizations build practical management systems, prepare for audits, and train their people. Nashik, since 1999.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-8 lg:grid-cols-2 lg:pt-16">
        <div>
          <Kicker>Nashik, Maharashtra · Est. {firm.established}</Kicker>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-none sm:text-6xl">
            <span className="block">Better systems.</span>
            <span className="mt-1 block">Stronger teams.</span>
            <span className="mt-1 block text-accent">Lasting quality.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{firm.lede}</p>
          <Finder />
          <div className="mt-6 flex flex-wrap gap-3">
            <ContactButton>Discuss your requirements</ContactButton>
            <GhostLink href="/services">Explore expertise</GhostLink>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted">
            Consultancy. Training. Audit readiness.{" "}
            <span className="font-semibold text-ink">
              A practical partner, from assessment to improvement.
            </span>
          </p>
        </div>
        <figure className="overflow-hidden rounded-card bg-surface ring-1 ring-line">
          <img
            src="/assets/images/training-participants.webp"
            alt="Training participants gathered for a group photograph with the SQF trainer"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                People at the heart of quality
              </p>
              <p className="mt-1 font-display text-xl font-semibold leading-tight">
                Building capability. Creating lasting relationships.
              </p>
            </div>
            <img src={logo} alt="" width={48} height={48} className="size-12 shrink-0 rounded-full object-cover" />
          </figcaption>
        </figure>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-4 px-5 py-5">
          <p className="text-xs font-semibold tracking-widest text-muted uppercase">Systems we support</p>
          {standards.map((item) => (
            <Link
              key={item.code}
              to="/contact"
              search={{ service: item.code }}
              className="min-h-11 text-sm"
            >
              <span className="font-semibold">{item.code}</span>
              <span className="text-muted"> · {item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Kicker>Your quality partner / since {firm.established}</Kicker>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
            Practical experience. Lasting relationships.
          </h2>
        </div>
        <div>
          <p className="text-lg text-muted">
            Based in Nashik and led by {firm.leaderRole.toLowerCase()} {firm.leader}, SQF helps
            organizations strengthen systems, build capability, and prepare for third-party assessment.
          </p>
          <Link to="/about" className="mt-5 inline-flex min-h-11 items-center gap-1 font-semibold">
            Meet Shubhkiran Quality Forum
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="bg-ink text-on-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <h2 className="font-display text-4xl font-semibold leading-tight">
              A complete management solution, since {firm.established}.
            </h2>
            <p className="text-on-ink/80">
              SQF is a Nashik practice of auditors and engineers. The work is hands-on: management
              systems, the people who run them, and readiness for assessment — for organizations across
              India and those that operate further afield.
            </p>
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-card bg-on-ink/15 sm:grid-cols-2 lg:grid-cols-5">
            {homeStats.map((stat) => (
              <div key={stat.label} className="bg-ink p-5">
                <dt className="font-display text-4xl font-semibold">{stat.value}</dt>
                <dd className="mt-2 text-sm text-on-ink/75">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-on-ink/60">
            Figures as presented in the SQF company profile. A certificate still depends on the scheme
            and the certification body.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Kicker>How the work moves</Kicker>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight">
          From the requirement to a system that holds.
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Plant teams, quality heads, and suppliers usually need the same four things. SQF stays with
          the work, then leaves the knowledge with the people who will use it.
        </p>
        <ol className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-card bg-surface p-5 ring-1 ring-line">
              <p className="font-display text-sm font-semibold text-accent">0{index + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>Explore SQF</Kicker>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
              Expertise for the next stage of growth.
            </h2>
          </div>
          <GhostLink href="/services">Full catalogue</GhostLink>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const className = "rounded-card bg-surface p-6 ring-1 ring-line hover:ring-ink";
            const body = (
              <>
                <p className="text-xs font-semibold text-accent">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-muted">{pillar.body}</p>
              </>
            );
            if (pillar.href === "/services") {
              return (
                <Link key={pillar.title} to="/services" hash={"hash" in pillar ? pillar.hash : undefined} className={className}>
                  {body}
                </Link>
              );
            }
            return (
              <Link key={pillar.title} to={pillar.href} className={className}>
                {body}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/assets/images/training-session.webp"
            alt="SQF trainer presenting to participants at a workshop"
            className="aspect-[3/4] w-full rounded-card object-cover"
          />
          <img
            src="/assets/images/learning-workshop.webp"
            alt="Workshop participants facing a trainer and presentation screen"
            className="mt-8 aspect-[3/4] w-full rounded-card object-cover"
          />
        </div>
        <div>
          <Kicker>People at the heart of quality</Kicker>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">
            Learn together. Improve together.
          </h2>
          <p className="mt-4 text-muted">
            Explore SQF’s training programmes, see moments from our workshops, and meet the
            organizations featured in the company profile.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GhostLink href="/training">Explore training</GhostLink>
            <GhostLink href="/clients">Clients & gallery</GhostLink>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker>Key clients — consulted services</Kicker>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Beside operations that take quality seriously.
              </h2>
            </div>
            <Link to="/clients" className="inline-flex min-h-11 items-center font-semibold">
              See the full list
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {clients.slice(0, 10).map((client) => (
              <li
                key={client.file}
                className="flex h-24 items-center justify-center rounded-2xl bg-bg px-4 ring-1 ring-line"
              >
                <img
                  src={`/assets/images/clients/${client.file}`}
                  alt={`${client.name} logo`}
                  className="max-h-12 w-full object-contain"
                />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted">
            Logos identify organizations named in the company profile. The relationship is consultancy
            and training, not a certification claim.
          </p>
        </div>
      </section>
      <CloseBand />
    </Shell>
  );
}

function Finder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  return (
    <form
      className="mt-6 flex max-w-xl items-center gap-2 rounded-full border border-line bg-surface py-1 pr-1 pl-4"
      onSubmit={(event) => {
        event.preventDefault();
        navigate({ to: "/services", search: query.trim() ? { q: query.trim() } : {} });
      }}
    >
      <Search className="size-4 shrink-0 text-muted" aria-hidden />
      <label className="sr-only" htmlFor="home-search">
        Search standards and services
      </label>
      <input
        id="home-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Find a standard — ISO 9001, IATF, HACCP…"
        suppressHydrationWarning
        className="h-11 w-full bg-transparent text-base outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="inline-flex h-11 shrink-0 items-center rounded-full bg-ink px-4 text-sm font-semibold text-on-ink"
      >
        Search
      </button>
    </form>
  );
}
