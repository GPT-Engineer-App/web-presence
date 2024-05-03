import { Box, Flex, Text, Image, Heading, VStack, Link, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Image borderRadius="full" boxSize="150px" src="/images/placeholder.jpg" alt="Professional Photo" mb={4} />
        <Heading mb={2}>Welcome!</Heading>
        <Text fontSize="xl" mb={6}>Discover my world of innovation and creativity.</Text>
      </Flex>
      <Box p={10} bg="gray.100">
        <Heading size="lg" textAlign="center" mb={4}>About Me</Heading>
        <Text fontSize="md">I am a passionate and dedicated professional with a proven track record of successful projects and innovations. With a background in technology and design, I bring a unique blend of skills that drive impactful results.</Text>
      </Box>
      <Box p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Portfolio</Heading>
        <VStack spacing={5}>
          <Text fontSize="md">Project 1: Innovative Solution</Text>
          <Text fontSize="md">Project 2: Creative Design</Text>
          <Text fontSize="md">Project 3: Community Initiative</Text>
        </VStack>
      </Box>
      <Box p={10} bg="gray.100">
        <Heading size="lg" textAlign="center" mb={4}>Contact</Heading>
        <Flex direction="column" align="center" justify="center">
          <FormControl mb={4}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Your Email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button colorScheme="blue" mb={4}>Send Message</Button>
          <Flex>
            <Link href="https://github.com" isExternal><FaGithub size="24px" /></Link>
            <Link href="https://linkedin.com" isExternal ml={4}><FaLinkedin size="24px" /></Link>
            <Link href="mailto:example@example.com" ml={4}><FaEnvelope size="24px" /></Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;