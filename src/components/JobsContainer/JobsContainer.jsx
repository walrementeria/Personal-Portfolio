import { Flex, Heading, Stack, useMediaQuery } from "@chakra-ui/react";
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
        <Stack
          direction={isNotSmallerScreen ? "row" : "column"}
          align={!isNotSmallerScreen && "center"}
          mt="4em"
          gap={2}
        >
          <JobCards />
        </Stack>
      </Flex>
    </Flex>
  );
};
