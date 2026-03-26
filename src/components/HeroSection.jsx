import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { heroPills, heroStats, profile } from "../data/portfolio";
import TypingEffect from "./TypingEffect";

function HeroSection() {
  return (
    <Box
      as="section"
      id="home"
      minH={{ base: "auto", lg: "calc(100vh - 99px)" }}
      pt={{ base: 14, md: 20, lg: 6, xl: 8 }}
      pb={{ base: 20, md: 24 }}
      bg="#171312"
      position="relative"
      overflowX="hidden"
      scrollMarginTop="7rem"
    >
      <Box
        position="absolute"
        inset={0}
        background="radial-gradient(circle at 16% 22%, rgba(255,59,48,0.18), transparent 22%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.08), transparent 18%), linear-gradient(125deg, rgba(255,255,255,0.02), transparent 42%)"
        pointerEvents="none"
      />

      <Container
        maxW="1600px"
        minH={{ lg: "calc(100vh - 99px)" }}
        display="flex"
        alignItems="center"
        position="relative"
        px={{ base: 6, md: 10, xl: 16 }}
        py={{ base: 0, lg: 8 }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1.04fr 0.96fr" }}
          gap={{ base: 14, lg: 10, xl: 16 }}
          alignItems="center"
          w="full"
        >
          <Stack
            spacing={{ base: 6, md: 7, xl: 8 }}
            textAlign={{ base: "center", lg: "left" }}
            align={{ base: "center", lg: "flex-start" }}
            maxW={{ base: "full", lg: "760px" }}
            position="relative"
            zIndex={1}
          >
            {/* Typing Effect Badge */}
            <Box
              px={5}
              py={2.5}
              rounded="full"
              border="1px solid rgba(255,255,255,0.12)"
              bg="rgba(255,255,255,0.05)"
              boxShadow="0 14px 34px rgba(0,0,0,0.22)"
              backdropFilter="blur(14px)"
              minH="48px"
              display="flex"
              alignItems="center"
              justifyContent={{ base: "center", lg: "flex-start" }}
            >
              <TypingEffect />
            </Box>

            <Box
              fontFamily="var(--font-hk-modular)"
              fontWeight="700"
              textTransform="uppercase"
              lineHeight={0.82}
              letterSpacing="-0.055em"
            >
              <Text fontSize={{ base: "3.5rem", md: "4.8rem", xl: "5.5rem" }}>
                <Box as="span" color="brand.500">
                  A
                </Box>
                NTHONY
              </Text>
              <Text fontSize={{ base: "3.5rem", md: "4.8rem", xl: "5.5rem" }}>
                AZUEL
                <Box as="span" color="brand.500">
                  A
                </Box>
              </Text>
            </Box>

            <Stack spacing={0}>
              {profile.titleLines.map((line) => (
                <Text
                  key={line}
                  className="outline-heading"
                  fontFamily="var(--font-anton)"
                  fontWeight="400"
                  fontSize={{ base: "3.4rem", md: "5.4rem", xl: "6.3rem" }}
                  lineHeight={0.93}
                  letterSpacing="-0.03em"
                >
                  {line}
                </Text>
              ))}
            </Stack>

            <Text
              maxW="640px"
              color="rgba(255,255,255,0.88)"
              fontSize={{ base: "md", md: "1.08rem", xl: "1.14rem" }}
              fontFamily="var(--font-arimo)"
              lineHeight="1.58"
            >
              {profile.heroDescription}{" "}
              <Box as="span" color="brand.500" fontWeight="700">
                {profile.heroHighlights[0]}
              </Box>{" "}
              and{" "}
              <Box as="span" color="brand.500" fontWeight="700">
                {profile.heroHighlights[1]}
              </Box>
              .
            </Text>

            <HStack
              spacing={2.5}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
            >
              {heroPills.map((pill) => (
                <Box
                  key={pill}
                  px={3.5}
                  py={2}
                  rounded="full"
                  border="1px solid rgba(255,255,255,0.09)"
                  bg="rgba(255,255,255,0.04)"
                  color="rgba(255,255,255,0.82)"
                  fontFamily="var(--font-arimo)"
                  fontSize={{ base: "0.8rem", lg: "0.86rem" }}
                  boxShadow="0 10px 24px rgba(0,0,0,0.14)"
                >
                  {pill}
                </Box>
              ))}
            </HStack>

            <HStack
              spacing={4}
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
            >
              <Button
                as="a"
                href="#projects"
                variant="accent"
                size="lg"
                minW={{ base: "142px", lg: "158px" }}
                h={{ base: "50px", lg: "54px" }}
                rounded="16px"
                px={7}
                fontSize={{ base: "md", lg: "lg" }}
              >
                See Project
              </Button>
              <Button
                as="a"
                href="#contact"
                size="lg"
                minW={{ base: "142px", lg: "158px" }}
                h={{ base: "50px", lg: "54px" }}
                rounded="16px"
                px={7}
                bg="white"
                color="#171313"
                fontSize={{ base: "md", lg: "lg" }}
                boxShadow="0 18px 36px rgba(0, 0, 0, 0.18)"
                _hover={{ bg: "rgba(255,255,255,0.9)" }}
              >
                Contact me
              </Button>
            </HStack>

            <Box
              w="full"
              maxW="600px"
              pt={{ base: 0.5, md: 1 }}
              px={{ base: 3, md: 4, lg: 5 }}
              py={{ base: 3, md: 4 }}
              rounded={{ base: "20px", md: "24px" }}
              border="1px solid rgba(255,255,255,0.08)"
              bg="linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))"
              boxShadow="0 22px 48px rgba(0,0,0,0.18)"
              mt={{ base: 1, md: 2, lg: 3 }}
            >
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3, minmax(0, 1fr))" }}
                gap={{ base: 3, md: 0 }}
              >
                {heroStats.map((item, index) => (
                  <Box
                    key={item.label}
                    pl={{ base: 0, md: index === 0 ? 0 : 6 }}
                    borderLeft={{ base: "none", md: index === 0 ? "none" : "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <Text
                      fontFamily="var(--font-hk-modular)"
                      fontSize={{ base: "1.2rem", lg: "1.6rem" }}
                      color="white"
                      lineHeight={1}
                      mb={1}
                    >
                      {item.value}
                    </Text>
                    <Text
                      fontFamily="var(--font-hk-modular)"
                      fontSize={{ base: "0.68rem", lg: "0.76rem" }}
                      letterSpacing="0.16em"
                      textTransform="uppercase"
                      color="rgba(135, 157, 208, 0.9)"
                      lineHeight="1.3"
                    >
                      {item.label}
                    </Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Stack>

          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            minH={{ base: "460px", md: "580px", xl: "650px" }}
          >
            <Text
              position="absolute"
              top={{ base: "24px", lg: "8px" }}
              left={{ base: "50%", lg: "55%" }}
              transform={{ base: "translateX(-50%)", lg: "translateX(-50%)" }}
              fontFamily="var(--font-hk-modular)"
              fontSize={{ base: "5rem", md: "7rem", xl: "8.4rem" }}
              letterSpacing="-0.08em"
              color="rgba(255,255,255,0.05)"
              lineHeight={0.8}
              userSelect="none"
              zIndex={0}
            >
              AZZY
            </Text>

            <Box
              position="absolute"
              top={{ base: "16px", lg: "28px" }}
              right={{ base: "10%", lg: "18%" }}
              w={{ base: "120px", lg: "170px" }}
              h={{ base: "120px", lg: "170px" }}
              rounded="full"
              bg="radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8), rgba(255,255,255,0.08) 30%, rgba(255,59,48,0.18) 55%, transparent 72%)"
              className="hero-float-slow"
              opacity={0.9}
            />

            <Box
              position="absolute"
              top={{ base: "54px", lg: "76px" }}
              left={{ base: "6%", lg: "9%" }}
              w={{ base: "260px", sm: "300px", md: "360px", xl: "410px" }}
              h={{ base: "260px", sm: "300px", md: "360px", xl: "410px" }}
              rounded="full"
              bg="rgba(255,59,48,0.16)"
              filter="blur(14px)"
              zIndex={0}
            />

            <Box
              position="relative"
              mt={{ base: 12, lg: 10 }}
              w={{ base: "310px", sm: "360px", md: "460px", xl: "540px" }}
              h={{ base: "310px", sm: "360px", md: "460px", xl: "540px" }}
              className="hero-float"
              zIndex={1}
            >
              <Box
                position="absolute"
                inset={{ base: "10px", lg: "12px" }}
                rounded="full"
                bg="linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))"
                border="1px solid rgba(255,255,255,0.14)"
                boxShadow="0 30px 80px rgba(0,0,0,0.28)"
              />
              <Box
                position="absolute"
                inset={{ base: "0", lg: "-8px" }}
                rounded="full"
                border="2px solid rgba(255,255,255,0.34)"
              />
              <Box
                position="absolute"
                inset={{ base: "0", lg: "-8px" }}
                rounded="full"
                borderBottom="4px solid"
                borderBottomColor="brand.500"
                borderLeft="3px solid"
                borderLeftColor="rgba(255,59,48,0.48)"
              />
              <Image
                src={profile.heroImage}
                alt={profile.name}
                position="absolute"
                inset={{ base: "18px", lg: "20px" }}
                w="calc(100% - 36px)"
                h="calc(100% - 36px)"
                objectFit="cover"
                objectPosition="center 16%"
                rounded="full"
                boxShadow="0 38px 90px rgba(0,0,0,0.3)"
              />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
