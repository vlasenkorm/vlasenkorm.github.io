import { useGStore } from "@src/store";
import { memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Page: React.FC = () => {
  const { t } = useTranslation();
  const list = ["investing", "pragma", "acropolium"];
  const componentRef = useRef(null);
  const changePrintContext = useGStore((state) => state.changePrintContext);

  useEffect(() => {
    changePrintContext(componentRef);
  }, [componentRef]);

  return (
    <Wrapper ref={componentRef}>
      <p>
        {t("name")}
        <br />
        {t("title")}
      </p>

      <h3>{t("summary.title")}</h3>
      <StyledP>{t("summary.text")}</StyledP>

      <h3>{t("skills.title")}</h3>
      <StyledTable>
        <tbody>
          <tr>
            <td>{t("skills.languages.title")}s</td>
            <td>{t("skills.languages.list")}</td>
          </tr>
          <tr>
            <td>{t("skills.frameworks.title")}</td>
            <td>
              {t("skills.frameworks.list.react.main")}
              <br />
              {t("skills.frameworks.list.react.visual")}
              <br />
              {t("skills.frameworks.list.react.store")}
            </td>
          </tr>
          <tr>
            <td>{t("skills.technologies.title")}</td>
            <td>{t("skills.technologies.list")}</td>
          </tr>
          <tr>
            <td>{t("skills.databases.title")}</td>
            <td>{t("skills.databases.list")}</td>
          </tr>
        </tbody>
      </StyledTable>

      <h3>{t("experience.title")}</h3>

      {/* ["investing", "pragma", "acropolium" ] */}
      {list.map((element, i) => (
        <StyledP key={i}>
          <strong>{t("experience.headers.role")}</strong>
          {t(`experience.${element}.role`)}
          <br />
          <strong>{t("experience.headers.company")}</strong>
          {t(`experience.${element}.company`)}
          <br />
          <strong>{t("experience.headers.description")}</strong>
          {t(`experience.${element}.description`)}
          <br />
          <strong>{t("experience.headers.technologies")}</strong>
          {t(`experience.${element}.technologies`)}
          <br />
          <strong>{t("experience.headers.year")}</strong>
          {t(`experience.${element}.year`)}
          <br />
        </StyledP>
      ))}

      <h3>{t("education.title")}</h3>
      <p>
        {t("education.university")}
        <br />
        {t("education.degree")}
      </p>

      <h3>{t("languages.title")}</h3>
      <p>
        {t("languages.en")}
        <br />
        {t("languages.ua")}
        <br />
        {t("languages.ru")}
      </p>
    </Wrapper>
  );
};

export default memo(Page);

const Wrapper = styled.article`
  padding: 20px;
`;

const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  tr > td {
    border: 2px solid;
    padding: 5px;
  }
`;
const StyledP = styled.p`
  line-height: 20px;
`;
