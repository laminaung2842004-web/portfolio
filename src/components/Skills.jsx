import { skills } from "../data.js";

export default function Skills() {
  return (
    <section className="section section--muted" id="skills">
      <div className="container">
        <header className="section__head">
          <p className="section__kicker">02 — Skills</p>
          <h2 className="section__title">Tools I reach for every day</h2>
        </header>

        <div className="skills">
          {skills.map((group) => (
            <article className="card skill-card" key={group.group}>
              <h3 className="skill-card__title">{group.group}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
