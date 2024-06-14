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

  const list = ["investing", "pragma", "acropolium" ]

  return (
    <Conteiner onMouseMove={move} onMouseLeave={clear}>
      <Wrapper $rotate_x={Y * 0.001} $rotate_y={X * -0.001}>
        <p>
          {t('name')}<br />
          {t('title')}
        </p>

        <h3>{t('summary.title')}</h3>
        <StyledP>{t('summary.text')}</StyledP>

        <h3>{t('skills.title')}</h3>
        <StyledTable>
          <tbody>
            <tr>
              <td>{t('skills.languages.title')}s</td>
              <td>{t('skills.languages.list')}</td>
            </tr>
            <tr>
              <td>{t('skills.frameworks.title')}</td>
              <td>
                {t('skills.frameworks.list.react.main')}<br />
                {t('skills.frameworks.list.react.visual')}<br />
                {t('skills.frameworks.list.react.store')}
              </td>
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

        {/* ["investing", "pragma", "acropolium" ] */}
        {list.map((element, i) =>  <StyledP key={i}>
          <strong>{t('experience.headers.role')}</strong>{t(`experience.${element}.role`)}<br />
          <strong>{t('experience.headers.company')}</strong>{t(`experience.${element}.company`)}<br />
          <strong>{t('experience.headers.description')}</strong>{t(`experience.${element}.description`)}<br />
          <strong>{t('experience.headers.technologies')}</strong>{t(`experience.${element}.technologies`)}<br />
          <strong>{t('experience.headers.year')}</strong>{t(`experience.${element}.year`)}<br />
        </StyledP> )}

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
    padding: 5px;
  }
`
const StyledP = styled.p`
  line-height: 20px;
`

const Conteiner = styled.div`
  perspective: 80px;
`
