import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./App.css"
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
]

export default function App() {
  return (
    <div className="card">
      <Avatar imgsrc="https://i.postimg.cc/vBHJMqbz/helloboi.jpg" />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  )
}
const Avatar = (props) => {
  return (
    <div>
      <img className="avatar" src={props.imgsrc} alt="hello" />
    </div>
  )
}

const Intro = () => {
  return (
    <div>
      <h3 style={{ fontSize: "30px" }} className="name">
        Cool boi 123
      </h3>
      <p className="info">
        Hello i am cool boi😎,a aspiring web developer from Mars.Currently i am
        learning React JS library.this is profile card project
      </p>
    </div>
  )
}
const SkillList = () => {
  return (
    <div>
      <ul className="skill-list">
        {/* <Skill skill="Javascript" bg="steelblue" pk="gg" />
        {/* passing props as css properties value */}
        {/* <Skill skill="React" bg="#FAEBD7" />
        <Skill skill="Tailwind CSS" bg="steelblue" />
        <Skill skill="HTML" bg="#FAEBD7" />
        <Skill skill="CSS" bg="steelblue" />  */}
        {skills.map((sk) => {
          return <Skill ski={sk} />
        })}
      </ul>
    </div>
  )
}
function Skill({ ski }) {
  return (
    <li className="skill" style={{ backgroundColor: ski.color }}>
      {/* using props as css values */}
      {ski.skill}
      <span>
        {ski.level === "advanced"
          ? "⭐️"
          : ski.level === "intermediate"
          ? "🔥"
          : "🧑‍💻"}{" "}
      </span>
    </li>
  )
}
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
