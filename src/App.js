import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import StoryPage from "./pages/StoryPage";
import ScrollToTop from "./components/ScrollToTop";
import RarityPage from "./pages/RarityPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/summit" component={Home} exact></Route>
        <Route path="/summit/" component={Home} exact></Route>
        <Route path="/summit/story" component={StoryPage} exact></Route>
        <Route path="/summit/rarity" component={RarityPage} exact></Route>
        <Route path="*" component={Home} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
