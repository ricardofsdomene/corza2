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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import * as EmailValidator from "email-validator";

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

  const toast = useToast();

  const [getInTouch, setGetInTouch] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [employees, setEmployees] = useState<string>("1-2");
  const [invoicing, setInvoicing] = useState<string>("1.000-5.000");

  const [sending, setSending] = useState(false);

  const [messageSent, setMessageSent] = useState<boolean>(false);

  async function postLead() {
    const res = await axios.post(
      `https://corza-dot-membros-375000.rj.r.appspot.com/lead`,
      {
        name,
        email,
        phone,
        message,
        invoicing,
        employees,
      }
    );
    console.log(res.data);
    if (res.status === 200) {
      setSending(true);
      setTimeout(() => {
        window.location.href = "/obrigado";
      }, 2000);
    } else {
      toast({
        status: "error",
        description: "Falha ao enviar, entre em contato conosco.",
      });
    }
  }

  const html = `
  <head>
  <meta charset="UTF-8">
  <meta name="facebook-domain-verification" content="n4g5nov03b6c1q3d2avhvjvwi00kew" />
  <title>Corza Digital</title>

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JE90HJ2K78">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JE90HJ2K78');
</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-JE90HJ2K78">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JE90HJ2K78');
</script>
  <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '228774192860933');
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" src="https://www.facebook.com/tr?id=SEU_ID_DE_PIXEL_AQUI&ev=PageView&noscript=1"/>
  </noscript>
</head>
  `;

  return (
    <Flex flexDir="column" cursor="default">
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Flex w="100%" flexDir="column">
        <Flex h={mobile ? "auto" : "100vh"} bg="#000102" flexDir="column">
          <Flex
            position="fixed"
            bg="#000"
            style={{
              backdropFilter: "blur(10px)",
              opacity: 0.85,
            }}
            zIndex={9}
            w="100%"
            p="6"
            px="8"
            align="center"
            justify="space-between"
          >
            <Text fontFamily="Poppins" color="#FFF" fontSize="1.4rem">
              Corza
            </Text>
            <Flex
              onClick={() => setGetInTouch(true)}
              cursor="pointer"
              w="-webkit-fit-content"
              borderRadius="full"
              justify="center"
              align="center"
              bg="#FFF"
              px="6"
              py="2"
            >
              <Text fontFamily="Poppins" color="#000" fontSize="0.9rem">
                Entre em contato
              </Text>
            </Flex>
          </Flex>
          <Flex h="100%" w="100%" justify="center" align="center">
            <Flex
              zIndex={2}
              maxW="100vw"
              flexDir="column"
              color="#FFF"
              p="8"
              w={mobile ? "100%" : 700}
            >
              {mobile && (
                <Image
                  ml="4"
                  src="https://cdn.dribbble.com/userupload/5006016/file/original-3de84c1f0e1cfd219e7382e2d4242f41.gif"
                  style={{
                    borderRadius: 25,
                    boxShadow: "rgba(122, 178, 238, 0.3) 0 0 400px",
                    width: "60%",
                    height: "auto",
                    marginTop: 80,
                    marginBottom: 40,
                    marginLeft: -5,
                    marginRight: 20,
                  }}
                />
              )}
              <Text
                fontFamily="Poppins"
                fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3rem"}
              >
                Nós te ajudamos a criar e otimizar produtos digitais
              </Text>
              <Text
                fontFamily="Poppins"
                mt="2"
                fontSize={mobile ? "1rem" : "1.3rem"}
              >
                Somos a agência líder em negócios digitais, oferecendo serviços
                em marketing digital, copywriting, gestão de tráfego, vendas e
                construção de páginas. Conte conosco para elevar o seu negócio
                digital para o próximo nível.
              </Text>
            </Flex>
            {!mobile && (
              <Image
                ml="4"
                src="https://cdn.dribbble.com/userupload/5006016/file/original-3de84c1f0e1cfd219e7382e2d4242f41.gif"
                style={{
                  borderRadius: 25,
                  boxShadow: "rgba(122, 178, 238, 0.2) 0 0 400px",
                  width: "25%",
                  height: "auto",
                  marginRight: 20,
                }}
              />
            )}
          </Flex>
          {/* <Flex w="100%" align="center">
            <Flex
              bg="#333"
              style={{
                height: 2,
                width: "5vw",
              }}
            />
            <Flex
              cursor="default"
              border="3px solid #333"
              borderRadius="full"
              px="4"
              py="2"
              justify="center"
              align="center"
            >
              <Text
                fontFamily="Poppins"
                whiteSpace="nowrap"
                fontSize={mobile ? "0.5rem" : "1rem"}
              >
                Landing Page
              </Text>
            </Flex>
            <Flex
              bg="#333"
              style={{
                height: 2,
                width: "8vw",
              }}
            />
            <Flex
              cursor="default"
              border="3px solid #333"
              borderRadius="full"
              px="4"
              py="2"
              justify="center"
              align="center"
            >
              <Text
                fontFamily="Poppins"
                whiteSpace="nowrap"
                fontSize={mobile ? "0.5rem" : "1rem"}
              >
                Trafego pago
              </Text>
            </Flex>
            <Flex
              bg="#333"
              style={{
                height: 2,
                width: "8vw",
              }}
            />
            <Flex
              cursor="default"
              border="3px solid #333"
              borderRadius="full"
              px="4"
              py="2"
              justify="center"
              align="center"
            >
              <Text
                fontFamily="Poppins"
                whiteSpace="nowrap"
                fontSize={mobile ? "0.5rem" : "1rem"}
              >
                Funil de venda
              </Text>
            </Flex>
            <Flex
              align="center"
              style={{
                transform: "rotate(-45deg)",
                transformOrigin: "top left",
              }}
            >
              <Flex
                mt={-5}
                cursor="default"
                borderRadius="full"
                px="6"
                py="2"
                justify="center"
                align="center"
              >
                <Text
                  style={{
                    transform: "rotate(45deg)",
                  }}
                  fontFamily="Poppins"
                  ml={mobile ?  "40" : 600}
                  position="absolute"
                  fontSize={mobile ? "4rem" : "8rem"}
                >
                  🚀
                </Text>
              </Flex>
            </Flex>
          </Flex> */}
        </Flex>
        {/* <Flex
          mt="10"
          flexDir="column"
          bg="#000"
          w="100%"
          py="8"
          pl="8"
          color="#FFF"
          fontFamily="Poppins"
        >
          <Flex fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}>
            <Flex overflowX="hidden">
              <Text
                fontFamily="Climate Crisis"
                color="#FFF"
                whiteSpace="nowrap"
              >
                Resultados ✦
              </Text>
            </Flex>
          </Flex>
        </Flex> */}
        <Flex
          pt="10"
          borderTop="1px solid #333"
          bg="#000"
          w="100%"
          py={20}
          color="#FFF"
          flexDir={mobile ? "column" : "row"}
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Flex p="8" flexDir="column" w={mobile ? "100%" : "55%"}>
            <Text
              fontFamily="Poppins"
              textAlign="center"
              fontSize={mobile ? "1.9rem" : "2.6rem"}
              fontWeight="bold"
              mt={mobile ? -10 : 0}
            >
              Especialistas no dígital
            </Text>
            <Text
              mt="6"
              fontFamily="Poppins"
              textAlign="center"
              fontSize={mobile ? "1rem" : "1.55rem"}
            >
              Somos uma agência especializada em construção de{" "}
              <span style={{ fontWeight: "bold" }}>landing pages</span>, gestão
              de <span style={{ fontWeight: "bold" }}>tráfego pago</span>,
              estratégias de{" "}
              <span style={{ fontWeight: "bold" }}>lançamento</span> e{" "}
              <span style={{ fontWeight: "bold" }}>copywriting</span>, ajudamos
              nossos clientes a{" "}
              <span style={{ fontWeight: "bold" }}>
                aumentar o engajamento, conversões e vendas.
              </span>
            </Text>
          </Flex>
        </Flex>
        {/* <Flex
          pt="10"
          borderTop="1px solid #333"
          bg="#000"
          w="100%"
          py={20}
          color="#FFF"
          flexDir={mobile ? "column" : "row"}
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Flex p="8" flexDir="column" w={mobile ? "100%" : "55%"}>
            <Text
              fontFamily="Poppins"
              textAlign="left"
              fontSize={mobile ? "1.9rem" : "2.6rem"}
              fontWeight="bold"
              mt={mobile ? -10 : 0}
            >
              Especialistas no dígital
            </Text>
            <Text
              mt="6"
              fontFamily="Poppins"
              textAlign="left"
              fontSize={mobile ? "1rem" : "1.55rem"}
            >
              Especializados em construção de{" "}
              <span style={{ fontWeight: "bold" }}>landing pages</span>, gestão
              de <span style={{ fontWeight: "bold" }}>tráfego pago</span>,
              estratégias de{" "}
              <span style={{ fontWeight: "bold" }}>lançamento</span> e{" "}
              <span style={{ fontWeight: "bold" }}>copywriting</span>, ajudamos
              nossos clientes a{" "}
              <span style={{ fontWeight: "bold" }}>
                aumentar o engajamento, conversões e vendas.
              </span>
            </Text>
          </Flex>
          <Flex
            ml={desktop ? "0" : "8"}
            mt={mobile ? 10 : "0"}
            flexDir="column"
            pr="8"
          >
            <Image
              src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                width: mobile ? "100%" : 550,
                height: "auto",
                borderRadius: 50,
                boxShadow: "rgba(255, 255, 255, 0.2) 0 0 50px",
              }}
            />
            <Text
              fontFamily="Poppins"
              w="100%"
              textAlign="center"
              mt="4"
              fontSize="1rem"
            >
              Venha conhecer nosso time em Alphaville.
            </Text>
          </Flex>
        </Flex> */}
        <Flex
          bg="#000"
          borderTop="1px solid #333"
          w="100%"
          p="8"
          py={20}
          color="#FFF"
          flexDir="column"
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Text
            fontSize={mobile ? "1rem" : tablet ? "1.5rem" : "2rem"}
            fontFamily="Poppins"
            textAlign="center"
            my="10"
          >
            O que fazemos de melhor
          </Text>

          <Text
            fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "4rem"}
            fontFamily="Poppins"
            textAlign="center"
            fontWeight="bold"
          >
            Desenvolvimento Web e Mobile
          </Text>

          <Image
            mt="24"
            style={{
              height: mobile ? "auto" : 400,
              width: mobile ? "100%" : "auto",
              borderRadius: 25,
            }}
            src="/vfit.png"
          />
          <Flex fontSize={mobile ? "1.2rem" : "5rem"} align="center" my="24">
            <Icon as={FaReact} color="#222" />
            <Icon ml="16" as={SiTypescript} color="#222" />
            <Icon ml="16" as={SiExpo} color="#222" />
            <Icon ml="16" as={SiExpress} color="#222" />
            <Icon ml="16" as={SiGooglecloud} color="#222" />
          </Flex>
        </Flex>
        <Flex
          bg="#111"
          borderTop="1px solid #333"
          w="100%"
          p="8"
          py={20}
          color="#FFF"
          flexDir="column"
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Text
            fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "4rem"}
            fontFamily="Poppins"
            textAlign="center"
            fontWeight="bold"
            my="4"
          >
            Publicidade Online
          </Text>

          <Text
            mt="24"
            fontSize={mobile ? "1.2rem" : tablet ? "1.5rem" : "1.5rem"}
            fontFamily="Poppins"
            textAlign="center"
            w={mobile ? "100%" : 800}
          >
            Nossa equipe de especialistas em publicidade online é dedicada a
            maximizar o retorno sobre o investimento em publicidade. Utilizamos
            análises contínuas e otimizações estratégicas para garantir que sua
            empresa obtenha os melhores resultados possíveis em termos de
            tráfego, conversões e lucro.
          </Text>
          <Flex fontSize={mobile ? "1.2rem" : "5rem"} align="center" my="24">
            <Icon as={SiFacebook} color="#222" />
            <Icon ml="16" as={SiInstagram} color="#222" />
            <Icon ml="16" as={SiTiktok} color="#222" />
            <Icon ml="16" as={SiGoogleads} color="#222" />
            <Icon ml="16" as={SiGoogleadmob} color="#222" />
          </Flex>
        </Flex>
        <Flex
          bg="#000"
          borderTop="1px solid #333"
          w="100%"
          p="8"
          py={20}
          color="#FFF"
          flexDir="column"
          fontFamily="Poppins"
          align={"center"}
          justify="space-around"
        >
          <Text
            fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "4rem"}
            fontFamily="Poppins"
            textAlign="center"
            fontWeight="bold"
            my="4"
          >
            Copywriting
          </Text>

          <Text
            mt="24"
            fontSize={mobile ? "1.2rem" : tablet ? "1.5rem" : "1.5rem"}
            fontFamily="Poppins"
            textAlign="center"
            w={mobile ? "100%" : 800}
          >
            Com o nosso serviço de copywriting, você pode ter certeza de que sua
            mensagem será poderosa, persuasiva e eficaz.
            <br />
            Oferecemos um serviço personalizado e adaptado às necessidades e
            objetivos do seu negócio. Trabalharemos com você para entender o seu
            público-alvo, a sua mensagem e os seus objetivos de marketing e, em
            seguida, criaremos uma copy que reflita esses valores e objetivos.
          </Text>
          <Flex fontSize={mobile ? "2.5rem" : "5rem"} align="center" my="24">
            <Icon as={FaPencilAlt} color="#222" />
          </Flex>
        </Flex>

        {/* <Flex
          flexDir="column"
          bg="#000"
          w="100%"
          py={10}
          px="8"
          color="#FFF"
          fontFamily="Poppins"
        >
          <Text
            fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}
            fontFamily="Poppins"
            textAlign="left"
          >
            Leitura
          </Text>
          <SimpleGrid mt="10" columns={[1, 1, 2, 2, 3, 4]} spacing="20px">
            <Flex
              cursor="pointer"
              border="1px solid #333"
              flexDir="column"
              borderRadius="11"
              justify="space-between"
              color="#FFF"
            >
              <Image
                borderTopRadius="10"
                src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  height: 300,
                  width: "auto",
                }}
              />
              <Flex py="6" px="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Como criar uma landing page altamente conversível
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, explicamos como criar uma página de destino
                  altamente conversível, com dicas para design, conteúdo,
                  call-to-actions e teste de elementos.
                </Text>
              </Flex>
              <Flex
                borderBottomRadius="10"
                bg="#d5fe41"
                w="100%"
                justify="center"
                align="center"
                py="4"
              >
                <Text
                  color="#000"
                  fontWeight="bold"
                  fontSize={mobile ? "0.8rem" : "1rem"}
                  fontFamily="Poppins"
                >
                  Saiba mais
                </Text>
              </Flex>
            </Flex>
            <Flex
              cursor="pointer"
              border="1px solid #333"
              flexDir="column"
              borderRadius="11"
              justify="space-between"
              color="#FFF"
            >
              <Image
                borderTopRadius="10"
                src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  height: 300,
                  width: "auto",
                }}
              />
              <Flex py="6" px="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Como lançar seu produto ou serviço com sucesso
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Como lançar seu produto ou serviço com sucesso Neste artigo,
                  fornecemos dicas para um lançamento bem-sucedido, desde a fase
                  de pré-lançamento até o dia do lançamento.
                </Text>
              </Flex>
              <Flex
                borderBottomRadius="10"
                bg="#d5fe41"
                w="100%"
                justify="center"
                align="center"
                py="4"
              >
                <Text
                  color="#000"
                  fontWeight="bold"
                  fontSize={mobile ? "0.8rem" : "1rem"}
                  fontFamily="Poppins"
                >
                  Saiba mais
                </Text>
              </Flex>
            </Flex>
            <Flex
              cursor="pointer"
              border="1px solid #333"
              flexDir="column"
              borderRadius="11"
              justify="space-between"
              color="#FFF"
            >
              <Image
                borderTopRadius="10"
                src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  height: 300,
                  width: "auto",
                }}
              />
              <Flex py="6" px="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Os benefícios de investir em tráfego pago
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, discutimos os benefícios de investir em tráfego
                  pago, incluindo segmentação precisa de público-alvo, ROI
                  mensurável e resultados rápidos
                </Text>
              </Flex>
              <Flex
                borderBottomRadius="10"
                bg="#d5fe41"
                w="100%"
                justify="center"
                align="center"
                py="4"
              >
                <Text
                  color="#000"
                  fontWeight="bold"
                  fontSize={mobile ? "0.8rem" : "1rem"}
                  fontFamily="Poppins"
                >
                  Saiba mais
                </Text>
              </Flex>
            </Flex>
            <Flex
              cursor="pointer"
              border="1px solid #333"
              flexDir="column"
              borderRadius="11"
              justify="space-between"
              color="#FFF"
            >
              <Image
                borderTopRadius="10"
                src="https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  height: 300,
                  width: "auto",
                }}
              />
              <Flex py="6" px="8" flexDir="column">
                <Text
                  fontSize={mobile ? "1rem" : "1.5rem"}
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  A importância do copywriting em marketing digital
                </Text>
                <Text
                  mt="1"
                  fontSize={mobile ? "0.6rem" : "0.8rem"}
                  fontFamily="Poppins"
                >
                  Neste artigo, discutimos a importância do copywriting em
                  marketing digital, incluindo dicas para criação de conteúdo
                  persuasivo e otimização para SEO.
                </Text>
              </Flex>
              <Flex
                borderBottomRadius="10"
                bg="#d5fe41"
                w="100%"
                justify="center"
                align="center"
                py="4"
              >
                <Text
                  color="#000"
                  fontWeight="bold"
                  fontSize={mobile ? "0.8rem" : "1rem"}
                  fontFamily="Poppins"
                >
                  Saiba mais
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Flex> */}
        {/* <Flex
          flexDir="column"
          bg="#000"
          w="100%"
          py={10}
          px="8"
          color="#FFF"
          fontFamily="Poppins"
        >
          <Flex
            fontSize={mobile ? "2.5rem" : tablet ? "2.5rem" : "3.5rem"}
            align={mobile ? "Flex-end" : "center"}
            overflowX="hidden"
            flexDir={mobile ? "column" : "row"}
          >
            {mobile && (
              <Image
                src="/contact.png"
                style={{
                  width: 300,
                  height: "auto",
                }}
              />
            )}
            <Flex
              minW={300}
              justify="center"
              p={mobile ? "6" : 70}
              bg="#d5fe41"
              w="100%"
              h="-webkit-fit-content"
              borderRadius="25"
              flexDir="row"
              align="center"
            >
              <Flex flexDir="column">
                <Text
                  fontFamily="Poppins"
                  color="#000"
                  fontSize={mobile ? "1.2rem" : "3.5rem"}
                  fontWeight="bold"
                >
                  O que você está buscando?
                </Text>
                <Text
                  fontFamily="Poppins"
                  color="#000"
                  fontSize={mobile ? "1rem" : "2rem"}
                >
                  Fale com a gente, estamos de portas abertas.
                </Text>
                <Flex align="center" mt="10">
                  <Icon ml="1" as={FaPhone} color="#000" fontSize="2rem" />
                  <Text
                    ml={mobile ? "2" : "6"}
                    fontFamily="Poppins"
                    color="#000"
                    fontWeight="bold"
                    fontSize={mobile ? "1.6rem" : "2.5rem"}
                  >
                    +11 91579-9139
                  </Text>
                </Flex>
                <Flex align="center" mt="6">
                  <Icon mt={2} as={IoIosMail} color="#000" fontSize="2.3rem" />
                  <Text
                    ml={mobile ? "2" : "6"}
                    fontFamily="Poppins"
                    color="#000"
                    fontWeight="bold"
                    fontSize={mobile ? "1rem" : "2.5rem"}
                  >
                    contato@corzadigital.com
                  </Text>
                </Flex>
                <Flex
                  mt="10"
                  w={mobile ? "100%" : "-webkit-fit-content"}
                  bg="#000"
                  justify="center"
                  align="center"
                  borderRadius="full"
                  py="3"
                  px="6"
                  cursor="pointer"
                >
                  <Text
                    fontFamily="Poppins"
                    color="#FFF"
                    fontSize={mobile ? "0.9rem" : "1.2rem"}
                    fontWeight="bold"
                  >
                    Entrar em contato por aqui
                  </Text>
                </Flex>
              </Flex>
              {!mobile && (
                <Image
                  src="/contact.png"
                  style={{
                    width: 300,
                    height: "auto",
                  }}
                />
              )}
            </Flex>
          </Flex>
        </Flex> */}
        <Flex
          flexDir="column"
          p="8"
          bg="#111"
          borderTop="1px solid #333"
          justify="center"
          align="center"
          py={100}
        >
          <Flex
            onClick={() => setGetInTouch(true)}
            cursor="pointer"
            w="-webkit-fit-content"
            borderRadius="full"
            justify="center"
            align="center"
            bg="#FFF"
            px="6"
            py="2"
          >
            <Text fontFamily="Poppins" color="#000" fontSize="1.3rem">
              Entre em contato
            </Text>
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
              {sending ? (
                <Flex
                  py={mobile ? 0 : "8"}
                  px={mobile ? "8" : "8"}
                  justify="space-between"
                  h={mobile ? "auto" : 500}
                  flexDir="column"
                >
                  <Flex py={50}>
                    <Image
                      src="/loading.gif"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Flex>
                </Flex>
              ) : (
                <Flex
                  py={mobile ? 0 : "8"}
                  px={mobile ? "8" : "8"}
                  justify="space-between"
                  h={mobile ? "auto" : 500}
                  flexDir="column"
                  w="100%"
                >
                  <Flex flexDir="column" w="100%">
                    <Flex
                      flexDir={mobile ? "column" : "row"}
                      w="100%"
                      align="center"
                    >
                      <Flex flexDir="column" w="100%">
                        <Text
                          color="#FFF"
                          fontFamily="Poppins"
                          fontSize="0.9rem"
                        >
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
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </Flex>
                      <Flex
                        ml={mobile ? "0" : "4"}
                        mt={mobile ? "4" : "0"}
                        w="100%"
                        flexDir="column"
                      >
                        <Text
                          color="#FFF"
                          fontFamily="Poppins"
                          fontSize="0.9rem"
                        >
                          Qual seu Whatsapp?
                        </Text>
                        <Input
                          as={IMaskInput}
                          px="2.5"
                          mask="(00) 00000-0000"
                          mt="2"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setPhone(e.target.value);
                          }}
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <Flex mt="4" flexDir="column">
                      <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                        Sua mensagem
                      </Text>
                      <Textarea
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
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
                    onClick={() => {
                      if (!name.split(" ")[0]) {
                        toast({
                          status: "error",
                          description: "Insira seu nome",
                        });
                      } else if (!EmailValidator.validate(email)) {
                        toast({
                          status: "error",
                          description: "Insira um E-mail válido",
                        });
                      } else if (!phone) {
                        toast({
                          status: "error",
                          description: "Insira um Whatsapp válido",
                        });
                      } else {
                        postLead();
                      }
                    }}
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
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
