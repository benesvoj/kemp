import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const InstagramFeed = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"3xl"} h={"100vh"}>
        <Flex
          h={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Instagram feed #svinovkemp
            </Heading>
            <Text color={"gray.500"}>
              Týdenní kemp plný zážitků, nových přátel, sportovních aktivit a
              výletů! Poznej něco nového s naší partou.
            </Text>
            <Box>
              <figure data-behold-id="QGh7N1qqDw8lLMmVMbyg"></figure>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
