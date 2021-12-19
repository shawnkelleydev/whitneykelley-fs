import ReactMarkdown from "react-markdown";
import schedule from "./Schedule";

const Performances = (props) => {
  const today = new Date();
  return (
    <div className="Performances">
      <h1>performances</h1>
      <ul>
        {schedule.map((event, i) => {
          const eventDate = new Date(event.datecode);
          if (eventDate > today) {
            return (
              <li key={i} className="performance">
                <a href={event.link} target="_blank" rel="noreferrer">
                  <h3>{event.name}</h3>
                </a>

                <p>{event.datetime}</p>
                <p>{event.notes}</p>
                <ul className="rep">
                  {event.rep1 ? (
                    <li>
                      <ReactMarkdown children={event.rep1} />
                    </li>
                  ) : null}
                  {event.rep2 ? (
                    <li>
                      <ReactMarkdown children={event.rep2} />
                    </li>
                  ) : null}
                  {event.rep3 ? (
                    <li>
                      <ReactMarkdown children={event.rep3} />
                    </li>
                  ) : null}
                </ul>
                <p>
                  Adults: $27, Senior: $19, Student: $12, Kids (&lt;12): Free
                </p>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
};

export default Performances;
