import { profile, stats } from "../data.js";

export default function Hero({ onNavigate }) {
  return (
    <section className="hero section" id="home">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Hi, I&apos;m {profile.name}.
            <br />
            <span className="text-gradient">{profile.role}</span>
          </h1>
          <p className="hero__text">{profile.tagline}</p>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => onNavigate("contact")}>
              Get in touch
            </button>
            <button className="btn btn--ghost" onClick={() => onNavigate("about")}>
              About me
            </button>
          </div>

          <ul className="hero__socials">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__panel">
          <div className="portrait">
            {profile.photo ? (
              <img
                className="portrait__photo"
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
              />
            ) : (
              <span className="portrait__initials" aria-hidden="true">
                {profile.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </span>
            )}
            <span className="portrait__ring" aria-hidden="true" />
          </div>

          <ul className="stats">
            {stats.map((stat) => (
              <li key={stat.label} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
