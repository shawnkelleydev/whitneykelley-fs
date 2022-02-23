import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { lessons } from "./Data";

export default function Topic() {
  const [text, setText] = useState(null);

  const params = useParams();

  useEffect(() => {
    let path = params.topic;
    let obj = lessons.filter((ob) => ob.path === path)[0];
    setText(obj.text);
  }, [params]);

  return text ? (
    <div className="Topic">
      {text.map((section, i) =>
        typeof section === "string" ? (
          <p key={i}>{section}</p>
        ) : (
          <ul key={i}>
            {section.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      )}
    </div>
  ) : null;
}
