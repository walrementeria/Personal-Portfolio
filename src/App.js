import "./App.css";
import { VStack } from "@chakra-ui/react";
import { PageHead } from "./components/PageHead/PageHead";
import { PresentationContainer } from "./components/PresentationContainer/PresentationContainer";
import { JobsContainer } from "./components/JobsContainer/JobsContainer";
import { Contact } from "./components/Contact.jsx/Contact";
import { SkillsContainer } from "./components/SkillsContainer/SkillsContainer";

function App() {
  return (
    <VStack>
      <PageHead />
      <PresentationContainer />
      <SkillsContainer />
      <JobsContainer />
      <Contact />
    </VStack>
  );
}

export default App;
