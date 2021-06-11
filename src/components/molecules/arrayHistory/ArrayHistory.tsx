import React, { useContext, lazy } from "react";
import StorageContext from "../../../context/storage/storageContext";
import {
  StyledUl,
  StyledLi,
  StyledParagraph,
  StyledContainerParagraph,
} from "../../../styles/styleComponents/StyledArrayHistory";
const SvgArrow = lazy(() => import("../../atoms/svgArrow/SvgArrow"));

const ArrayHistory: React.FC = () => {
  const storageContext = useContext(StorageContext);
  const { dataStorage } = storageContext || {};

  return (
    <StyledUl>
      {dataStorage?.map(
        (
          element: {
            date: string;
            amount: number;
            exchangeRate: number;
            fromCurrency: string;
            toCurrency: string;
          },
          index: number
        ) => (
          <div key={index}>
            <hr style={{ width: "98%", margin: "0" }} />
            <StyledLi>
              <StyledParagraph>{element.date}</StyledParagraph>
              <StyledContainerParagraph>
                <StyledParagraph>
                  {element.amount} {element.fromCurrency}
                </StyledParagraph>
                <StyledParagraph>
                  <SvgArrow />
                </StyledParagraph>
                <StyledParagraph>
                  {element.exchangeRate} {element.toCurrency}
                </StyledParagraph>
              </StyledContainerParagraph>
            </StyledLi>
          </div>
        )
      )}
    </StyledUl>
  );
};

export default ArrayHistory;
