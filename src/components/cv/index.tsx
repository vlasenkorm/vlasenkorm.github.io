import { useState } from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const CV: React.FC = () => {

  const { t } = useTranslation();
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
        <p>
          {t('name')}<br />
          {t('title')}
        </p>

        <h3>{t('summary.title')}</h3>
        <p>{t('summary.text')}</p>

        <h3>{t('skills.title')}</h3>
        <StyledTable>
          <tbody>
            <tr>
              <td>{t('skills.languages.title')}s</td>
              <td>{t('skills.languages.list')}</td>
            </tr>
            <tr>
              <td>{t('skills.frameworks.title')}</td>
              <td>{t('skills.frameworks.list')}</td>
            </tr>
            <tr>
              <td>{t('skills.technologies.title')}</td>
              <td>{t('skills.technologies.list')}</td>
            </tr>
            <tr>
              <td>{t('skills.databases.title')}</td>
              <td>{t('skills.databases.list')}</td>
            </tr>
          </tbody>
        </StyledTable>

        <h3>{t('experience.title')}</h3>
        <p>
          {t('experience.investing.role')}<br />
          {t('experience.investing.title')}<br />
          {t('experience.investing.description')}<br />
          {t('experience.investing.technologies')}<br />
          {t('experience.investing.year')}<br />
        </p>
        <p>
          {t('experience.pragma.role')}<br />
          {t('experience.pragma.title')}<br />
          {t('experience.pragma.description')}<br />
          {t('experience.pragma.technologies')}<br />
          {t('experience.pragma.year')}<br />
        </p>
        <p>
          {t('experience.acropolium.role')}<br />
          {t('experience.acropolium.title')}<br />
          {t('experience.acropolium.description')}<br />
          {t('experience.acropolium.technologies')}<br />
          {t('experience.acropolium.year')}<br />
        </p>

        <h3>{t('education.title')}</h3>
        <p>
          {t('education.university')}<br />
          {t('education.degree')}
        </p>
        
        <h3>{t('languages.title')}</h3>
        <p>
          {t('languages.en')}<br />
          {t('languages.ua')}<br />
          {t('languages.ru')}
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
