import React from "react";
import compragamer from "../../resources/SVG/projectCompraGamer.PNG";
import portoflio from "../../resources/SVG/portfolio.PNG";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import { SiChakraui } from "react-icons/si";

export const JobCards = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Flex //card de trabajo
        w="290px"
        direction="column"
        rounded="md"
        overflow="hidden"
        boxShadow={isDark ? "1px 1px 1em #233c41" : "1px 1px 1em #8fc2cb"}
        transform="auto"
        transition=".3s all ease"
        _hover={{ scale: 1.009 }}
      >
        <Image src={compragamer} />
        <Box display="flex" flexDir="column" p={4} alignContent="space-between">
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Icon as={IoLogoReact} />
              <Icon ml={2} as={IoLogoFirebase} />
              <Icon ml={2} as={SiChakraui} />
              <Spacer />
            </Box>
            <Divider my={1} />
            <Text fontFamily="inherit" fontSize="sm">
              Estilado de página compragamer utilizando Chakra UI. Manejando
              Firebase y recreando funcionalidades con JS.
            </Text>
          </Box>
          <Box mt={3} display="flex" justifyContent="space-between" gap={2}>
            <Box
              display="flex"
              flex="1"
              as="a"
              href="https://github.com/Rementeria03/compragamer.git"
            >
              <Button
                mt={2}
                size="sm"
                w="full"
                colorScheme="#fff"
                color="blue.600"
                boxShadow="lg"
                _hover={{ bgColor: "blue.50" }}
              >
                Ver código
              </Button>
            </Box>
            <Box
              display="flex"
              flex="1"
              as="a"
              href="https://6260a2f0d8391c52a6270ad7--walterrementeria.netlify.app/"
            >
              <Button
                mt={2}
                size="sm"
                w="full"
                colorScheme="#fff"
                color="blue.600"
                boxShadow="lg"
                _hover={{ bgColor: "blue.50" }}
              >
                Ver página
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex //card de trabajo
        w="290px"
        direction="column"
        rounded="md"
        overflow="hidden"
        boxShadow={isDark ? "1px 1px 1em #233c41" : "1px 1px 1em #8fc2cb"}
        transform="auto"
        transition=".3s all ease"
        _hover={{ scale: 1.009 }}
      >
        <Image src={portoflio} />
        <Box
          display="flex"
          flexDir="column"
          h="full"
          p={4}
          justifyContent="space-between"
        >
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Icon as={IoLogoReact} />
              <Icon ml={2} as={SiChakraui} />
              <Spacer />
            </Box>
            <Divider my={1} />
            <Text fontFamily="inherit" fontSize="sm">
              Este portafolio fue creado con React.Js y estilado con Chakra UI
            </Text>
          </Box>
          <Box mt={3}>
            <Box as="a" href="https://github.com/Rementeria03/Personal-Portfolio.git">
              <Button
                mt={2}
                size="sm"
                w="full"
                colorScheme="#fff"
                color="blue.600"
                boxShadow="lg"
                _hover={{ bgColor: "blue.50" }}
              >
                Ver código
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
