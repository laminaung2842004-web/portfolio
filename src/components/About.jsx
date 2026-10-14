import { about } from "../data.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section__head">
          <p className="section__kicker">01 — About</p>
          <h2 className="section__title">A developer who sweats the details</h2>
        </header>

        <div className="about">
          <div className="about__text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <dl className="facts">
              {about.facts.map((fact) => (
                <div className="fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
