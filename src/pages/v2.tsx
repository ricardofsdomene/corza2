import {
  Flex,
  Text,
  Icon,
  Image,
  SimpleGrid,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

import {
  FaArrowRight,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaMailchimp,
  FaMapPin,
  FaNetworkWired,
  FaPencilAlt,
  FaPhone,
  FaPython,
  FaReact,
  FaTiktok,
} from "react-icons/fa";

import { IoIosArrowForward, IoIosMail } from "react-icons/io";
import {
  SiExpo,
  SiExpress,
  SiFacebook,
  SiGoogleadmob,
  SiGoogleads,
  SiGooglecloud,
  SiInstagram,
  SiTiktok,
  SiTypescript,
} from "react-icons/si";

import useMediaQuery from "../utils/useMediaQuery";

export default function Page() {
  const { mobile, tablet, desktop } = useMediaQuery();

  const [getInTouch, setGetInTouch] = useState(false);

  return (
    <Flex flexDir="column" cursor="default">
      <Flex w="100%" flexDir="column">
        <Flex bg="#000102" flexDir="column">
          <Flex
            position="fixed"
            style={{
              backdropFilter: "blur(10px)",
              opacity: 0.99,
            }}
            zIndex={9}
            w="100%"
            p="6"
            px="8"
            align="center"
            justify="space-between"
          >
            <Image
              mx="auto"
              src="/h2.png"
              style={{
                height: 40,
                width: "auto",
              }}
            />
          </Flex>
          <Flex
            w="100%"
            justify="center"
            align="center"
            style={{
              background: "linear-gradient(to bottom, #06915C -100%, #000 80%)",
            }}
          >
            <Flex
              mt="20"
              zIndex={2}
              maxW="100vw"
              flexDir="column"
              justify="center"
              align="center"
              color="#FFF"
              p="8"
              w={mobile ? "100%" : 900}
            >
              <Text
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1.8rem" : tablet ? "2.5rem" : "3rem"}
              >
                Descubra por que você{" "}
                <span style={{ color: "red" }}>
                  não <br /> fatura como seus concorrentes{" "}
                </span>{" "}
                <br />
                no mercado digital.
              </Text>
              <Text
                mt="4"
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1rem" : tablet ? "1.5rem" : "1.4rem"}
              >
                O método TDA em 7 passos ajuda a entender por que seu negócio
                não está alcançando os resultados desejados e fornece um passo a
                passo para superar as metas de faturamento.
              </Text>
              <Flex
                onClick={() => setGetInTouch(true)}
                w="-webkit-fit-content"
                borderRadius="full"
                justify="center"
                align="center"
                cursor="pointer"
                bg="#1ABA14"
                px="6"
                mt="6"
                py="3"
              >
                <Text
                  fontFamily="Poppins"
                  fontWeight={600}
                  color="#FFF"
                  fontSize="1rem"
                >
                  Quero o melhor pro meu negócio
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          pt="10"
          bg="#000"
          w="100%"
          color="#FFF"
          flexDir={mobile ? "column" : "row"}
          fontFamily="Poppins"
          align="center"
          justify="center"
          px="8"
        >
          <Flex align="center">
            <Flex align="center" transform="rotate(-90deg)"></Flex>
            <Flex
              flexDir="column"
              bg="#000"
              maxW={700}
              borderRadius="20"
              style={{
                backdropFilter: "blur(50px)",
              }}
              color="1ABA14"
            >
              <Text
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1.4rem" : "1.6rem"}
                fontWeight="bold"
              >
                Preencha o formulario para ter um diagnóstico feito por
                analistas que fazem estratégias de grandes empresas
              </Text>
              <Flex
                justify="space-between"
                boxShadow="rgba(255, 255, 255, 0.2) 0 0 1000px"
                mt="6"
                borderRadius="25"
                p="8"
                flexDir="column"
              >
                <Flex flexDir="column">
                  <Flex align="center">
                    <Flex flexDir="column">
                      <Text color="#FFF" fontFamily="Poppins" fontSize="1rem">
                        Qual seu nome?
                      </Text>
                      <Input
                        mt="2"
                        _active={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _focus={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _hover={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        style={{
                          outline: "none !important",
                          border: "1px solid #333",
                        }}
                      />
                    </Flex>
                  </Flex>
                  <Flex mt="4" flexDir="column">
                    <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                      Qual seu E-mail?
                    </Text>
                    <Input
                      mt="2"
                      _active={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _focus={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _hover={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      style={{
                        outline: "none !important",
                        border: "1px solid #333",
                      }}
                      _placeholder={{
                        color: "#fff",
                      }}
                      w="-webkit-fit-content"
                    />
                  </Flex>
                  <Text
                    mt="4"
                    color="#FFF"
                    fontFamily="Poppins"
                    fontSize="0.9rem"
                  >
                    Qual seu Whatsapp?
                  </Text>
                  <Input
                    mt="2"
                    _active={{
                      outline: "none !important",
                      border: "0px solid transparent",
                    }}
                    _focus={{
                      outline: "none !important",
                      border: "0px solid transparent",
                    }}
                    _hover={{
                      outline: "none !important",
                      border: "0px solid transparent",
                    }}
                    style={{
                      outline: "none !important",
                      border: "1px solid #333",
                    }}
                    _placeholder={{
                      color: "#fff",
                    }}
                    w="-webkit-fit-content"
                  />
                  <Flex align="center" mt="4">
                    <Flex flexDir="column">
                      <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                        Quantos funcionários você tem hoje?
                      </Text>
                      <Select
                        mt="2"
                        _active={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _focus={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _hover={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        style={{
                          outline: "none !important",
                          border: "1px solid #333",
                        }}
                        w="-webkit-fit-content"
                      >
                        <option value="1-2">1-2</option>
                        <option value="3-9">3-9</option>
                        <option value="10-19">10-19</option>
                        <option value="20-49">20-49</option>
                        <option value="50-100">50-100</option>
                        <option value="100+">100+</option>
                      </Select>
                    </Flex>
                  </Flex>
                  <Flex mt="4" flexDir="column">
                    <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                      Qual seu faturamento médio?
                    </Text>
                    <Select
                      mt="2"
                      _active={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _focus={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _hover={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      style={{
                        outline: "none !important",
                        border: "1px solid #333",
                      }}
                      w="-webkit-fit-content"
                    >
                      <option value="1-2">{`de R$1.000 até R$5.000`}</option>
                      <option value="1-2">{`de R$5.000 até R$10.000`}</option>
                      <option value="1-2">{`de R$10.000 até R$50.000`}</option>
                      <option value="1-2">{`de R$50.000 até R$100.000`}</option>
                      <option value="1-2">{`de R$100.000 até R$500.000`}</option>
                      <option value="1-2">{`de R$500.000 até R$1.000.000`}</option>
                      <option value="1-2">{`de R$1.000.000 até R$2.000.000`}</option>
                      <option value="1-2">{`de R$2.000.000 até R$10.000.000`}</option>
                      <option value="1-2">{`de R$10.000.000 até R$100.000.000`}</option>
                    </Select>
                  </Flex>
                  <Flex mt="4" flexDir="column">
                    <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                      Descreva seu modelo de negócio, e por que devemos te
                      ajudar.
                    </Text>
                    <Textarea
                      mt="2"
                      h={100}
                      maxH={100}
                      _active={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _focus={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _hover={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      style={{
                        outline: "none !important",
                        border: "1px solid #333",
                      }}
                    />
                  </Flex>
                </Flex>
                <Flex
                  onClick={() => setGetInTouch(true)}
                  w="100%"
                  borderRadius="full"
                  justify="center"
                  align="center"
                  cursor="pointer"
                  bg="#1ABA14"
                  px="6"
                  mt="8"
                  py="3"
                >
                  <Text
                    fontFamily="Poppins"
                    fontWeight={600}
                    color="#FFF"
                    fontSize="1rem"
                  >
                    Solicitar diagnóstico
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          pt="10"
          bg="#000"
          w="100%"
          py={20}
          color="#FFF"
          flexDir={mobile ? "column" : "row"}
          fontFamily="Poppins"
          align="center"
          justify="center"
          px="8"
        >
          <Flex align="center">
            <Flex align="center" transform="rotate(-90deg)"></Flex>
            <Flex flexDir="column" bg="#000" maxW={900} borderRadius="20">
              <Text
                mt={50}
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1rem" : "1.95rem"}
                style={{
                  textShadow: "rgba(255, 255, 255, 1) 0 0 20px",
                }}
              >
                Muitos anos atras Bill gates disse: <br />
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  “O negocio que nao estiver na internet está morto”
                  <br />
                </span>
                imagine a importância dessa frase nos dias de hoje.
              </Text>
              <Text
                style={
                  {
                    // textShadow: "rgba(255, 0, 0, 1) 0 0 70px",
                  }
                }
                mt={100}
                fontFamily="Poppins"
                textAlign="left"
                fontSize={mobile ? "1rem" : "1.45rem"}
              >
                Dados apontam um crescimento de 69% com empresas que
                implementaram o método TDA.
              </Text>
              <Flex
                flexDir={mobile ? "column" : "row"}
                align={mobile ? "flex-start" : "center"}
                mt="10"
              >
                <Flex align="center">
                  <Flex
                    style={{
                      height: 10,
                      width: 35,
                      backgroundColor: "red",
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    ml="2"
                    style={
                      {
                        // textShadow: "rgba(255, 0, 0, 1) 0 0 70px",
                      }
                    }
                    fontFamily="Poppins"
                    textAlign="left"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                  >
                    Faturamento em empresa aplicando o método TDA
                  </Text>
                </Flex>
                <Flex align="center" mt={mobile ? "4" : "0"}>
                  <Flex
                    ml={mobile ? "0" : "4"}
                    style={{
                      height: 10,
                      width: 35,
                      backgroundColor: "#aaa",
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    ml="2"
                    style={
                      {
                        // textShadow: "rgba(255, 0, 0, 1) 0 0 70px",
                      }
                    }
                    fontFamily="Poppins"
                    textAlign="left"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                  >
                    Faturamento em empresa concorrente
                  </Text>
                </Flex>
              </Flex>
              <Image
                mt={10}
                src="/graph.webp"
                style={{
                  width: 700,
                  height: "auto",
                }}
              />
              <Text
                mt={100}
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1rem" : "1rem"}
              >
                Você esta agindo para o seu negocio prosperar ou para falir?
              </Text>
              <Flex
                onClick={() => setGetInTouch(true)}
                w="-webkit-fit-content"
                borderRadius="full"
                justify="center"
                align="center"
                mx="auto"
                cursor="pointer"
                bg="#1ABA14"
                px="6"
                mt="4"
                py="3"
              >
                <Text
                  fontFamily="Poppins"
                  fontWeight={600}
                  color="#FFF"
                  fontSize="1rem"
                >
                  Entrar em contato
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bg="#000"
          color="#FFF"
          justify="space-between"
          w="100%"
          py={20}
          px={10}
          fontFamily="Poppins"
          align={mobile ? "flex-start" : "center"}
          flexDir={mobile ? "column" : "row"}
        >
          <Flex flexDir="column">
            <Text
              fontFamily="Poppins"
              mb="4"
              fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}
            >
              Corza®
            </Text>
          </Flex>
          <Flex flexDir="column"></Flex>
          <Flex flexDir="column">
            <Text fontFamily="Poppins" fontSize={mobile ? "0.7rem" : "1rem"}>
              Corza Digital Consultoria LTDA.
            </Text>
            <Text
              mt="4"
              fontFamily="Poppins"
              fontSize={mobile ? "0.7rem" : "1rem"}
            >
              Calçada Antares, 1444 - Alphaville | CEP: 06443-065
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Modal
        scrollBehavior="inside"
        isCentered
        size={mobile ? "lg" : "3xl"}
        isOpen={getInTouch}
        onClose={() => setGetInTouch(!getInTouch)}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent bg="#202123" color="#FFF" borderRadius="25">
          <ModalBody p={0} borderRadius="25">
            <Flex flexDir={mobile ? "column" : "row"} align="center">
              <Flex
                justify="space-between"
                bg={mobile ? "#202123" : "#111"}
                p="8"
                w={mobile ? "100%" : "50%"}
                h={mobile ? "auto" : 520}
                flexDir="column"
              >
                <Flex flexDir="column">
                  <Text
                    color="#FFF"
                    fontWeight="bold"
                    fontFamily="Poppins"
                    fontSize="1.4rem"
                  >
                    Informação de contato
                  </Text>
                  <Text
                    color="#FFF"
                    mt="2"
                    fontFamily="Poppins"
                    fontSize="0.9rem"
                  >
                    Nossa equipe está pronta pra te atender e levar seu negócio
                    para um outro nível
                  </Text>
                </Flex>
                <Flex flexDir="column">
                  <Flex
                    cursor="default"
                    mt={mobile ? 10 : 0}
                    align="center"
                    fontSize="1.2rem"
                  >
                    <Icon as={FaPhone} mr="2" />
                    <Text color="#FFF" fontFamily="Poppins" fontWeight="bold">
                      (11) 91579-9139
                    </Text>
                  </Flex>
                  <Flex
                    cursor="default"
                    mt="4"
                    align="center"
                    fontSize="1.2rem"
                  >
                    <Icon as={IoIosMail} mr="2" />
                    <Text color="#FFF" fontFamily="Poppins" fontWeight="bold">
                      suporte@corza.com.br
                    </Text>
                  </Flex>
                </Flex>
                <Flex align="center">
                  <Icon as={FaMapPin} mr="2" />
                  <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                    Alphaville, São Paulo
                  </Text>
                </Flex>
              </Flex>
              <Flex
                p={mobile ? 0 : "8"}
                justify="space-between"
                h={mobile ? "auto" : 500}
                flexDir="column"
              >
                <Flex flexDir="column">
                  <Flex align="center">
                    <Flex flexDir="column">
                      <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                        Qual seu nome?
                      </Text>
                      <Input
                        mt="2"
                        _active={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _focus={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _hover={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        style={{
                          outline: "none !important",
                          border: "1px solid #333",
                        }}
                      />
                    </Flex>
                    <Flex ml="4" flexDir="column">
                      <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                        Qual seu Whatsapp?
                      </Text>
                      <Input
                        mt="2"
                        _active={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _focus={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _hover={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        style={{
                          outline: "none !important",
                          border: "1px solid #333",
                        }}
                        _placeholder={{
                          color: "#fff",
                        }}
                      />
                    </Flex>
                  </Flex>
                  <Text
                    mt="4"
                    color="#FFF"
                    fontFamily="Poppins"
                    fontSize="0.9rem"
                  >
                    Qual seu Email?
                  </Text>
                  <Input
                    mt="2"
                    _active={{
                      outline: "none !important",
                      border: "0px solid transparent",
                    }}
                    _focus={{
                      outline: "none !important",
                      border: "0px solid transparent",
                    }}
                    _hover={{
                      outline: "none !important",
                      border: "0px solid transparent",
                    }}
                    style={{
                      outline: "none !important",
                      border: "1px solid #333",
                    }}
                    _placeholder={{
                      color: "#fff",
                    }}
                  />
                  <Flex mt="4" flexDir="column">
                    <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                      Sua mensagem
                    </Text>
                    <Textarea
                      mt="2"
                      h={150}
                      maxH={150}
                      _active={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _focus={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _hover={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      style={{
                        outline: "none !important",
                        border: "1px solid #333",
                      }}
                    />
                  </Flex>
                </Flex>
                <Flex
                  my="8"
                  cursor="pointer"
                  bg="#1ABA14"
                  justify="center"
                  align="center"
                  borderRadius="full"
                  py="2.5"
                >
                  <Text
                    fontFamily="Poppins"
                    fontWeight={600}
                    color="#FFF"
                    fontSize="1rem"
                  >
                    Entrar em contato
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
