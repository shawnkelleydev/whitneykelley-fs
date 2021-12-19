import pub from "./Releases";
import ReactMarkdown from "react-markdown";

const Publications = (props) => {
  return (
    <div className="Publications">
      <h1>publications</h1>
      <ul>
        {pub.map((item, i) => {
          return (
            <li key={i}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <ReactMarkdown children={item.name + ", " + item.parent} />
                </a>
              ) : (
                <ReactMarkdown children={item.name + ", " + item.parent} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Publications;
