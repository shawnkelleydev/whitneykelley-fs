import Checked from "./Checked";

const Online = (props) => {
  const needs = [
    "A quiet, well-lit space with good internet access during your lesson time",
    "A webcam with a good built-in microphone, built in or external (please contact me for recommendations) that can be set up so that I can see your full upper body",
    "A large screen (no phones!) so that you can see me clearly.",
    "A music stand",
    "A metronome and tuner (there are many phone apps that can work for this; please ask for recommendations if you do not already have them)",
  ];
  const wants = ["Extrenal microphone", "External speakers"];

  return (
    <div className="Online">
      <p>
        I offer a limited number of weekly live Skype lessons for intermediate
        and advanced students who are unable to attend lessons at any of my
        studio locations.
      </p>
      <p>
        <strong>Requirements for Skype lessons:</strong>
      </p>
      <ul>
        {needs.map((item, i) => {
          return <Checked key={i} item={item} />;
        })}
      </ul>
      <p>
        Recommended Equipment&nbsp;(these are not required but will help your
        lesson experience):
      </p>
      <ul>
        {wants.map((item, i) => {
          return <Checked key={i} item={item} />;
        })}
      </ul>
      <p>
        Please contact me about available times, and rates.&nbsp;Students are
        also encouraged to sign up for one in-person lesson at any of my studio
        locations each month to receive more hands-on instruction (which will
        balance out this limitation in online lessons).
      </p>
    </div>
  );
};

export default Online;
