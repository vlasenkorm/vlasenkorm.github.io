import styled from "styled-components";

const CV: React.FC = () => {

  return (
    <Wrapper>
      Roman Vlasenko<br/>
      Front-end Engineer
      <h3>Summary </h3>
      <p>
        Front-end developer with 6 years of experience in software programming.
        Strong knowledge of JavaScript and related Frameworks. Experience with remote geographically
        distributed team. Has good soft skills, goal-oriented, perfect team-player.
      </p>

      <h3>Technical skills</h3>
      <StyledTable>
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
  );
};

export default CV;


const Wrapper = styled.div`
  border: solid black 2px;
  padding: 20px;
  width: 800px;
  background-color: white;
`;

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
 
  tr > td {
    border: 2px solid;
  }
`;