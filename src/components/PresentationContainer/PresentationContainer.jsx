import React from "react";
import me from "../../resources/SVG/Io.svg";
import {
  Box,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

export const PresentationContainer = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 845px)");
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
      <Circle
        position="absolute"
        opacity=".1"
        bg="blue.400"
        w="250px"
        h="250px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        justify="center"
        px={isNotSmallerScreen ? "24" : "3"}
        pt={isNotSmallerScreen ? "24" : "3"}
        pb={isNotSmallerScreen ? "16" : "3"}
        w="full"
      >
        <Box mt={isNotSmallerScreen ? "0" : 4} alignItems="flex-start">
          <Text fontSize="4xl" fontWeight="semibold">
            ¡Hola! soy
          </Text>
          <Text
            fontSize="6xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Walter Rementeria
          </Text>
          <Text fontSize="larger">Desarrollador Front-End con React.JS </Text>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "4"}
          backgroundColor="transparent"
          boxSize="250px"
          alt="Image of my"
          zIndex="1"
          src={me}
          borderRadius="full"
        />
      </Flex>
      <Flex px={isNotSmallerScreen ? "24" : "3"}>
        <Text
          align="center"
          maxW="845px"
          color={isDark ? "gray.400" : "gray.500"}
        >
          ¡HELLO WORLD! Mí nombre es Walter Rementeria y hace un año soy
          desarrollador Front End. Empecé por pasión y me quedé por profesión,
          encontré mi lugar en el desarrollo y desde entonces me capacito
          constantemente para ofrecer lo mejor de mi conocimiento.
        </Text>
      </Flex>
    </Stack>
  );
};
