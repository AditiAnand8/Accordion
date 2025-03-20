import "./styles.css";
import { useState } from "react";

export default function App() {
  const sectionData = [
    {
      title: "HTML",
      content:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      title: "CSS",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      title: "JavaScript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Accordion sectionData={sectionData} />
    </div>
  );
}

function Accordion({ sectionData }) {
  const [openBoxs, setOpenBox] = useState([]);
  const handleClick = (section, index) => {
    if (openBoxs.includes(index)) {
      setOpenBox(openBoxs.filter((x) => x !== index));
    } else {
      setOpenBox((prev) => [...prev, index]);
    }
  };
  return (
    <div>
      {sectionData.map((section, index) => (
        <div
          onClick={(e) => {
            handleClick(section, index);
          }}
          key={index}
        >
          <div>
            {section.title}{" "}
            <span aria-hidden={true} className="accordion-icon" />
          </div>
          {openBoxs.includes(index) && <div>{section.content}</div>}
        </div>
      ))}
    </div>
  );
}
