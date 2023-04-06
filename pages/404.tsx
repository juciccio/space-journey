import CustomError from "@/components/custom-error";
import Lights from "@/components/lights";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Custom404() {
  const updateMeta = {
    title: "Space Journey",
    description: "404 page",
    canonical: "https://spacejourney.vercel.app",
    openGraph: {
      url: "https://spacejourney.vercel.app",
      title: "Space Journey",
      description: "404 page",
    },
  };

  return (
    <>
      <NextSeo {...updateMeta} noindex />

      <Canvas
        className="main-canvas"
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [2.5, 4, 6],
        }}
      >
        <Lights />

        <CustomError />
      </Canvas>

      <Center
        pos="fixed"
        left={0}
        top={0}
        h="full"
        w="full"
        zIndex="sticky"
        p={7}
      >
        {/* @ts-ignore */}
        <VStack spacing={10}>
          <Heading textAlign="center">Lost in the space?</Heading>
          <Link href="/" passHref legacyBehavior>
            {/* @ts-ignore */}
            <Button as="a" w={{ base: "full", lg: "auto" }}>
              Back to your ship
            </Button>
          </Link>
        </VStack>
      </Center>
    </>
  );
}
