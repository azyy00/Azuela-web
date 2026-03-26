import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function TypingEffect() {
  const texts = ["Graphic designer", "Web Developer", "Web design"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1500;

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (currentCharIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    } else {
      // Deleting
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, deletingSpeed);
      } else {
        // Move to next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentTextIndex]);

  return (
    <Box
      fontFamily="var(--font-hk-modular)"
      fontSize={{ base: "0.72rem", md: "0.82rem" }}
      letterSpacing="0.2em"
      textTransform="uppercase"
      color="rgba(255,255,255,0.84)"
      minH="1.5em"
      display="flex"
      alignItems="center"
    >
      <Text as="span">{displayText}</Text>
      <Box
        as="span"
        display="inline-block"
        w="2px"
        h="1em"
        bg="#ff3b30"
        ml={1}
        animation="blink 1s infinite"
        sx={{
          "@keyframes blink": {
            "0%, 49%": { opacity: 1 },
            "50%, 100%": { opacity: 0 },
          },
        }}
      />
    </Box>
  );
}

export default TypingEffect;
