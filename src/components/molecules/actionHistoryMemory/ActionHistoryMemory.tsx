import React, { lazy, useEffect } from "react";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import { ActionHistoryMemoryProps } from "./typesTS";
import {
  StyledNavLink,
  StyledWrapperActionHistory,
  StyledContainerDiv,
  StyledClose,
} from "../../../styles/styleComponents/StyledActionHistoryMemoty";
const HistoryMemory = lazy(
  () => import("../../pages/historyMemory/HistoryMemory")
);

const ActionHistoryMemory: React.FC<ActionHistoryMemoryProps> = ({
  transla,
  settransla,
}: ActionHistoryMemoryProps) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { url, path, isExact } = match;

  useEffect((): void => {
    history.push(`${url}`);
  }, []);

  const handleClickOpenHistory = (): void => {
    settransla(true);
  };
  const handleClickCloseHistory = () => {
    settransla(false);
    history.push(`${url}`);
  };
  return (
    <StyledWrapperActionHistory transla={transla}>
      <StyledContainerDiv>
        <Switch>
          <StyledClose show={isExact} onClick={handleClickCloseHistory}>
            X
          </StyledClose>
          <Route path={`${path}/history-memory`} component={HistoryMemory} />
        </Switch>
        <StyledNavLink
          to={`${url}/history-memory`}
          onClick={handleClickOpenHistory}
        >
          Historia
        </StyledNavLink>
      </StyledContainerDiv>
    </StyledWrapperActionHistory>
  );
};

export default ActionHistoryMemory;
