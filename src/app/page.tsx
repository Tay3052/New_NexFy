"use client";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Input,
  Flex,
} from "@yamada-ui/react";
import { useRedirect } from "@/hooks/useLogin";
import { useRouter } from "next/navigation";

export default function Home() {
  const { redirected, setRedirected } = useRedirect();

  const router = useRouter();

  const handleRedirect = () => {
    if (!redirected) {
      document.cookie = "redirected=true; path=/"; // Cookieに保存
      router.push("/api/spotify/login");
      setRedirected(true);
    }
  };
  // console.log(redirected);

  return (
    <>
      <Box>
        <Center>
          <Heading as="h1" size="4xl" marginBottom={"40px"} isTruncated>
            Welcome to NexFy!!
          </Heading>
        </Center>

        {!redirected ? (
          <>
            <Center>
              <Text>Please click below to Start</Text>
            </Center>
            <Center>
              <Box mt={4}>
                <Button onClick={handleRedirect}>
                  Start to Spotify System
                </Button>
              </Box>
            </Center>
          </>
        ) : (
          <>
            <Center>
              <Box mt={4} width={"60%"}>
                <form id="searchForm">
                  <Flex justifyContent={"center"}>
                    <Input
                      type="text"
                      placeholder="曲名・アーティスト名"
                    ></Input>
                    <Button type="submit">検索</Button>
                  </Flex>
                </form>
              </Box>
              <Box mt={4}>
                <ul>
                  <li></li>
                </ul>
              </Box>
            </Center>
          </>
        )}
      </Box>
    </>
  );
}
