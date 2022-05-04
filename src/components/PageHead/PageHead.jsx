import React from "react";
import { Flex, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export const PageHead = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex w="100%" align="center" px={3} py={3}>
      <Spacer></Spacer>
      <IconButton
        size="sm"
        isRound
        icon={isDark ? <FaSun /> : <FaMoon />}
        ml={8}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
