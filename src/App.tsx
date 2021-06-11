import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/share";
import Spinner from "./components/atoms/spinner/Spinner";
import TaskState from "./context/tasks/TaskState";
import HistoryState from "./context/history/HistoryState";
import StorageState from "./context/storage/StorageState";
import { StyledWrapper, StyledDiv } from "./styles/styleComponents/StyledApp";
const Main = lazy(() => import("./components/pages/main/Main"));

const App: React.FC = () => {
  return (
    <TaskState>
      <HistoryState>
        <StorageState>
          <ThemeProvider theme={theme}>
            <StyledWrapper>
              <StyledDiv />
              <Router>
                <Suspense fallback={<Spinner />}>
                  <Switch>
                    <Route path="/currency-converter" component={Main} />
                  </Switch>
                </Suspense>
              </Router>
            </StyledWrapper>
          </ThemeProvider>
        </StorageState>
      </HistoryState>
    </TaskState>
  );
};

export default App;
