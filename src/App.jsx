import { Box, Container, Divider, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { navigationLinks, profile } from "./data/portfolio";
import AboutSection from "./components/AboutSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        spotlightRef.current.style.left = `${x}px`;
        spotlightRef.current.style.top = `${y}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box bg="#171312" minH="100vh">
      {/* Global Particle Background */}
      <ParticleBackground />

      {/* Global Cursor Follow Spotlight */}
      <Box
        ref={spotlightRef}
        position="fixed"
        pointerEvents="none"
        w="300px"
        h="300px"
        transform="translate(-50%, -50%)"
        zIndex={0}
        style={{
          background:
            "radial-gradient(circle, rgba(255,59,48,0.15) 0%, rgba(255,59,48,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
          transition: "all 0.1s ease-out",
        }}
      />

      {/* Navigation */}
      <Navbar links={navigationLinks} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />

      <Box as="footer" py={10}>
        <Container maxW="7xl">
          <Divider borderColor="rgba(255, 255, 255, 0.12)" mb={6} />
          <HStack justify="space-between" flexWrap="wrap" gap={3}>
            <Text color="rgba(255, 255, 255, 0.72)" fontSize="sm">
              {profile.name} Portfolio
            </Text>
            <Text color="rgba(255, 255, 255, 0.52)" fontSize="sm">
              Designed in React and Chakra UI
            </Text>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
