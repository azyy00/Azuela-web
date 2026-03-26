import { Badge, Heading, Stack, Text } from "@chakra-ui/react";

function SectionHeading({ eyebrow, title, description, align = "left", maxW = "2xl" }) {
  const alignment = align === "center" ? "center" : "flex-start";

  return (
    <Stack spacing={4} align={alignment} textAlign={align} maxW={maxW}>
      <Badge
        px={4}
        py={1.5}
        rounded="full"
        bg="rgba(255, 255, 255, 0.12)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        color="brand.200"
        fontSize="0.72rem"
        textTransform="uppercase"
        letterSpacing="0.22em"
      >
        {eyebrow}
      </Badge>
      <Heading
        fontSize={{ base: "3xl", md: "4xl", xl: "5xl" }}
        lineHeight={0.98}
        letterSpacing="-0.04em"
      >
        {title}
      </Heading>
      {description ? (
        <Text color="rgba(255, 255, 255, 0.78)" fontSize={{ base: "md", lg: "lg" }} lineHeight="tall">
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}

export default SectionHeading;
