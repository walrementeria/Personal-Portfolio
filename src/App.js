import "./App.css";
import { VStack } from "@chakra-ui/react";
import { PageHead } from "./components/PageHead/PageHead";
import { PresentationContainer } from "./components/PresentationContainer/PresentationContainer";
import { JobsContainer } from "./components/JobsContainer/JobsContainer";
import { Contact } from "./components/Contact.jsx/Contact";

function App() {
  return (
    <VStack>
      <PageHead />
      <PresentationContainer />
      <JobsContainer />
      <Contact />
    </VStack>
  );
}

export default App;
