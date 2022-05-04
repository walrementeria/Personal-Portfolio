import { VStack } from "@chakra-ui/react";
import { JobsContainer } from "./components/JobsContainer/JobsContainer";
import { PageHead } from "./components/PageHead/PageHead";
import "./App.css";
import { PresentationContainer } from "./components/PresentationContainer/PresentationContainer";
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
