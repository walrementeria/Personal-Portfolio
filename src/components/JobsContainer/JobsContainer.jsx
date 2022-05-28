import { Flex, Grid, Heading, useMediaQuery } from "@chakra-ui/react";
import { React } from "react";
import { JobCards } from "../JobCards/JobCards";

export const JobsContainer = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 845px)");
  return (
    <Flex
      direction="column"
      px={isNotSmallerScreen ? "32" : "3"}
      py={4}
      w="full"
      color="gray.500"
    >
      <Flex direction="column" alignItems="center">
        <Heading
          py={8}
          fontFamily="Urbanist"
          fontWeight="Bold"
          color="cyan.400"
          fontSize="4xl"
        >
          Proyectos
        </Heading>
        <Grid
          templateColumns="repeat(auto-fit, minmax(290px, 1fr))"
          gap={4}
        >
          <JobCards />
        </Grid>
      </Flex>
    </Flex>
  );
};
