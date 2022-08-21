import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Heading,
  useMediaQuery,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoFirebase,
} from "react-icons/io5";
import { SiTypescript } from 'react-icons/si'
import { SiChakraui, SiBootstrap } from "react-icons/si";

export const SkillsContainer = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 845px)");
  const {colorMode} = useColorMode()

  const isDark = colorMode === "dark";

  return (
    <Flex
      direction="column"
      justify="center"
      textAlign="center"
      p={isNotSmallerScreen ? "32" : "3"}
    >
        <Heading
          py={8}
          fontFamily="Urbanist"
          fontWeight="Bold"
          color="cyan.400"
          fontSize="4xl"
        >
          Habilidades
        </Heading>
      <Box
        mt="4em"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={14}
        color={isDark ? "gray.400" : "gray.500"}
      >
        <Flex direction="column" alignItems="center">
          <Text>HTML</Text>
          <Icon color="#e34c26" as={IoLogoHtml5} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>CSS</Text>
          <Icon color="#2965f1" as={IoLogoCss3} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>JavaScript</Text>
          <Icon color="#f0db4f" as={IoLogoJavascript} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>Typescript</Text>
          <Icon color="#3178C6" p={1} as={SiTypescript} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>React.JS</Text>
          <Icon color="#61dbfb" as={IoLogoReact} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>Firebase</Text>
          <Icon color="#FFCB2B" as={IoLogoFirebase} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>Chakra UI</Text>
          <Icon color="teal.500" as={SiChakraui} w={16} h={16} />
        </Flex>
        <Flex direction="column" alignItems="center">
          <Text>Bootstrap</Text>
          <Icon color="purple.600" as={SiBootstrap} w={16} h={16} />
        </Flex>
      </Box>
    </Flex>
  );
};
