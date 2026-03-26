import React from "react";
import { Badge, Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { profile } from "../data/portfolio";

function Highlight({ children }) {
  return (
    <Box as="span" color="#ff3b30" fontStyle="italic" fontWeight="900">
      {children}
    </Box>
  );
}

function AboutCopy() {
  return (
    <Stack spacing={4}>
      <Text
        fontFamily="var(--font-arimo)"
        fontSize={{ base: "0.98rem", lg: "1.02rem" }}
        lineHeight="1.8"
        color="rgba(255,255,255,0.9)"
      >
        I blend <Highlight>graphic design</Highlight> and frontend development to create interfaces
        that feel polished, memorable, and easy to use. My workflow moves from visual concept to
        responsive implementation using <Highlight>React</Highlight>, <Highlight>JavaScript</Highlight>,
        <Highlight> Chakra UI</Highlight>, <Highlight>HTML</Highlight>, and <Highlight>CSS</Highlight>.
      </Text>

      <Text
        fontFamily="var(--font-arimo)"
        fontSize={{ base: "0.96rem", lg: "1rem" }}
        lineHeight="1.8"
        color="rgba(255,255,255,0.76)"
      >
        I also keep growing through <Highlight>Python</Highlight>, <Highlight>SQL</Highlight>, data
        projects, and design tools like <Highlight>Canva</Highlight> and <Highlight>Figma</Highlight>,
        so I can bring both creative vision and technical execution into the same project.
      </Text>
    </Stack>
  );
}

function AboutSection() {
  return (
    <Box
      as="section"
      id="about"
      scrollMarginTop="7rem"
      bg="#171312"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(circle at 18% 30%, rgba(255,59,48,0.18), transparent 22%), radial-gradient(circle at 76% 22%, rgba(255,255,255,0.08), transparent 20%), linear-gradient(135deg, rgba(255,255,255,0.02), transparent 42%)"
        pointerEvents="none"
      />

      <Container
        maxW="1440px"
        position="relative"
        zIndex={1}
        py={{ base: 16, md: 20, lg: 24 }}
        px={{ base: 6, sm: 10, lg: 16 }}
      >
        <Stack gap={{ base: 14, lg: 0 }} direction={{ base: "column", lg: "row" }} align="center">
          <Box
            flex={{ lg: "0 0 48%" }}
            w="full"
            position="relative"
            minH={{ base: "520px", md: "620px", lg: "760px" }}
          >
            <Text
              position="absolute"
              top={{ base: "8px", md: "16px", lg: "28px" }}
              left={{ base: "0", lg: "8px" }}
              className="outline-heading"
              fontFamily="var(--font-norwester)"
              fontSize={{ base: "92px", md: "130px", lg: "190px", xl: "220px" }}
              lineHeight={0.78}
              letterSpacing="-0.08em"
              opacity={0.17}
              userSelect="none"
            >
              ABOUT
            </Text>

            <Box
              position="absolute"
              top={{ base: "118px", md: "150px", lg: "158px" }}
              left={{ base: "24px", lg: "78px" }}
              w={{ base: "250px", md: "320px", lg: "360px", xl: "410px" }}
              h={{ base: "300px", md: "380px", lg: "470px", xl: "520px" }}
              borderRadius={{ base: "34px", lg: "44px" }}
              bg="linear-gradient(160deg, rgba(255,65,52,0.82), rgba(106,18,16,0.16) 58%, rgba(255,255,255,0.04) 100%)"
              transform="rotate(-8deg)"
              className="soft-shadow about-float"
            />

            <Box
              position="absolute"
              top={{ base: "94px", md: "108px", lg: "94px" }}
              left={{ base: "58%", lg: "60%" }}
              transform="translateX(-50%)"
              w={{ base: "90px", md: "110px", lg: "138px" }}
              h={{ base: "90px", md: "110px", lg: "138px" }}
              borderRadius="full"
              bg="radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(255,255,255,0.2) 30%, rgba(255,59,48,0.12) 58%, transparent 72%)"
              filter="blur(1px)"
              className="about-orb"
            />

            <Text
              position="absolute"
              left={{ base: "6px", lg: "6px" }}
              bottom={{ base: "34px", md: "42px", lg: "42px" }}
              zIndex={3}
              fontFamily="var(--font-norwester)"
              fontSize={{ base: "84px", md: "120px", lg: "166px", xl: "188px" }}
              lineHeight={0.8}
              letterSpacing="-0.08em"
              color="#ff3b30"
              textShadow="0 14px 20px rgba(0,0,0,0.58)"
              userSelect="none"
            >
              ME
            </Text>

            <Box
              position="absolute"
              left={{ base: "4%", md: "9%", lg: "10%" }}
              bottom="0"
              zIndex={2}
              w={{ base: "92%", md: "82%", lg: "86%" }}
              maxW={{ base: "420px", md: "470px", lg: "620px" }}
              className="about-float-slow"
            >
              <Image
                src={profile.aboutImage}
                alt={`${profile.name} portrait`}
                w="full"
                h="auto"
                objectFit="contain"
                filter="grayscale(100%) contrast(1.05)"
                pointerEvents="none"
                userSelect="none"
                draggable={false}
              />
            </Box>
          </Box>

          <Stack
            flex={{ lg: "0 0 52%" }}
            w="full"
            spacing={{ base: 6, lg: 8 }}
            pl={{ lg: 6, xl: 10 }}
            align="stretch"
          >
            <Badge
              alignSelf="flex-start"
              px={4}
              py={2}
              borderRadius="full"
              bg="rgba(255,59,48,0.14)"
              color="#ff3b30"
              border="1px solid rgba(255,59,48,0.28)"
              fontFamily="var(--font-hk-modular)"
              letterSpacing="0.16em"
              textTransform="uppercase"
            >
              Who I Am
            </Badge>

            <Text
              fontFamily="var(--font-hk-modular)"
              fontSize={{ base: "2.3rem", md: "3rem", lg: "3.8rem", xl: "4.4rem" }}
              lineHeight={{ base: 1.02, lg: 0.98 }}
              letterSpacing="-0.05em"
              color="white"
              maxW="11ch"
            >
              Design-forward.
              <br />
              Code-driven.
            </Text>

            <Box
              className="glass-panel soft-shadow"
              p={{ base: 5, lg: 6 }}
              borderRadius={{ base: "26px", lg: "30px" }}
              border="1px solid rgba(255,255,255,0.08)"
              bg="linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))"
            >
              <AboutCopy />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default AboutSection;
