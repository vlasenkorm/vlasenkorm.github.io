import { useState } from "react";
import styled from "styled-components";

const CV: React.FC = () => {

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const move = (e: any) => {
    setX((e.clientX - 900))
    setY((e.clientY - 400))
  }
  const clear = (e: any) => {
    setX(0)
    setY(0)
  }

  return (
    <Conteiner onMouseMove={move} onMouseLeave={clear}>
      <Wrapper $rotate_x={Y * 0.001} $rotate_y={X * -0.001}>
        Roman Vlasenko<br />
        Front-end Engineer
        <h3>Summary </h3>
        <p>
          Front-end developer with 6 years of experience in software programming.
          Strong knowledge of JavaScript and related Frameworks. Experience with remote geographically
          distributed team. Has good soft skills, goal-oriented, perfect team-player.
        </p>

        <h3>Technical skills</h3>
        <StyledTable>
          <tbody>
            <tr>
              <td>Programming languages</td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>Tools and frameworks</td>
              <td>
                React, TypeScript, MobX, Redux, React Hooks, Functional Components,  Styled Components, NextJS.
                Vue3, Vuex, Vue Material.
                Angular 13, RxJS.
                Node.JS, Express.JS, RESTful API, Sequelize, Docker.
              </td>
            </tr>
            <tr>
              <td>Additional technologies</td>
              <td>HTML, CSS, SCSS/SASS, Figma, Adaptive Web, Jest, Web3, GraphQL, SQL, Webpack, Babel, Storybook, Git.</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>MongoDB, PostgreSQL, MySQL</td>
            </tr>
            <tr>
              <td>Operating systems </td>
              <td>MacOS, Linux, Windows</td>
            </tr>
          </tbody>
        </StyledTable>

        <h3>Work experience</h3>
        <p>
          Fintech Automation Evolution<br />
          Description: Building customer-facing consumer web and mobile applications.<br />
          Build architecture of project. Troubleshooting, finding optimal solutions.<br />
          Role: Front-end Developer<br />
          Technologies: JavaScript, React, TypeScript, Redux, React Hooks, Functional Components,  Styled Components.<br />
          Year: 2022 - present<br />
        </p>
        <p>
          Pragma<br />
          Description: Work on Cryptocurrency projects. Communication with the client. Building an application architecture, introducing new ideas. Work on team, communicate,  finde resolve problems. Suggestions for improving current solutions.<br />
          Role: Front-end Developer<br />
          Technologies: JavaScript, React, TypeScript, Styled Components, GraphQL, Web3<br />
          Year: 2021 - 2022<br />
        </p><p>
          Acropolium<br />
          Description: Create and change Front-end projects. Building an application architecture, introducing new ideas. Improvement of both yourself and new employees. Communication with the client.<br />
          Role: Full-Stack Engineer<br />
          Technologies: JavaScript, React, Vue, Angular, Node.JS.<br />
          Year: 2019 – 2022<br />
        </p>

        <h3>Education</h3>
        <p>
          Chernihiv National University of Technology<br />
          Master of Computer Engineering
        </p>
        <h3>Languages</h3>
        <p>
          English - Upper-Intermediate<br />
          Ukrainian - Native<br />
          Russian - Native
        </p>
      </Wrapper>
    </Conteiner>
  );
};

export default CV;

const Wrapper = styled.div.attrs<{ $rotate_x?: number, $rotate_y?: number }>(props => ({
  style: {
    transform: `rotateX(${props.$rotate_x + 'deg'}) rotateY(${props.$rotate_y + 'deg'})`,
  },
}))`
  border: solid black 2px;
  padding: 20px;
  width: 800px;
  background-color: white;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.4) inset;
  `

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  tr > td {
    border: 2px solid;
  }
`

const Conteiner = styled.div`
  perspective: 80px;
`