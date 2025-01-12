import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion"; // Importa motion desde Framer Motion
import icon from "../assets/icon.jpg";
import Spline from "@splinetool/react-spline";

const Home = () => {
  const [hoverLink, setHoverLink] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkHover = (link) => {
    setHoverLink(link);
  };

  const handleLinkLeave = () => {
    setHoverLink(null);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById("skills").offsetTop + 400;

      if (scrollPosition > elementPosition) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 100,
          transition: { duration: 1 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Spline
        scene="https://prod.spline.design/69V4cSYLrpbASPrE/scene.splinecode"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      <header className="sticky top-0 z-10 bg-gray-800 bg-opacity-45 flex h-16 items-center px-4 md:px-6">
        <nav className="flex-1 pl-6 text-fuchsia-500">
          <a
            className={`font-bold text-xl ${
              hoverLink === "AERA" ? "animate-text" : ""
            }`}
            href="#"
            onMouseEnter={() => handleLinkHover("AERA")}
            onMouseLeave={handleLinkLeave}
          >
            AERA 🐭
          </a>
        </nav>
        <nav className="hidden md:flex flex-1 justify-end font-bold pr-6 text-fuchsia-500">
          <a
            className={`mx-4 text-base ${
              hoverLink === "Inicio" ? "animate-text" : ""
            }`}
            href="#"
            onMouseEnter={() => handleLinkHover("Inicio")}
            onMouseLeave={handleLinkLeave}
          >
            Main{"() => {🏠}"}
          </a>
          <a
            className={`mx-4 text-base ${
              hoverLink === "Skills" ? "animate-text" : ""
            }`}
            href="#skills"
            onMouseEnter={() => handleLinkHover("Skills")}
            onMouseLeave={handleLinkLeave}
          >
            Skills {"{💻}"}
          </a>
          <a
            className={`mx-4 text-base ${
              hoverLink === "Portfolio" ? "animate-text" : ""
            }`}
            href="#proyectos"
            onMouseEnter={() => handleLinkHover("Portfolio")}
            onMouseLeave={handleLinkLeave}
          >
            Proyectos ++🗂️
          </a>
          <a
            className={`mx-4 text-base ${
              hoverLink === "Contact" ? "animate-text" : ""
            }`}
            href="#contact"
            onMouseEnter={() => handleLinkHover("Contact")}
            onMouseLeave={handleLinkLeave}
          >
            Contact --{">"} 📱
          </a>
          <a
            className={`mx-4 text-base ${
              hoverLink === "CV" ? "animate-text" : ""
            }`}
            href="#cv"
            onMouseEnter={() => handleLinkHover("CV")}
            onMouseLeave={handleLinkLeave}
          >
            CV &📂
          </a>
        </nav>
        <div className="md:hidden flex justify-end">
          <button className="text-2xl" onClick={toggleMenu}>
            {showMenu ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {showMenu && (
          <div className="md:hidden bg-gray-100 w-full absolute top-0 left-0 z-10 p-4 animate-slide-down">
            <div className="flex justify-between items-center mb-4">
              <a
                className={`font-bold text-xl ${
                  hoverLink === "AERA" ? "animate-text" : ""
                }`}
                href="#"
                onMouseEnter={() => handleLinkHover("AERA")}
                onMouseLeave={handleLinkLeave}
              >
                AERA 🐭
              </a>
              <button className="text-2xl" onClick={toggleMenu}>
                <HiX />
              </button>
            </div>
            <a
              className={`block py-2 ${
                hoverLink === "Inicio" ? "animate-text" : ""
              }`}
              href="#inicio"
              onMouseEnter={() => handleLinkHover("Inicio")}
              onMouseLeave={handleLinkLeave}
            >
              Main{"() => {🏠}"}
            </a>
            <a
              className={`block py-2 ${
                hoverLink === "Skills" ? "animate-text" : ""
              }`}
              href="#skills"
              onMouseEnter={() => handleLinkHover("Skills")}
              onMouseLeave={handleLinkLeave}
            >
              Skills {"{💻}"}
            </a>
            <a
              className={`block py-2 ${
                hoverLink === "Portfolio" ? "animate-text" : ""
              }`}
              href="#portfolio"
              onMouseEnter={() => handleLinkHover("Portfolio")}
              onMouseLeave={handleLinkLeave}
            >
              Proyectos ++🗂️
            </a>
            <a
              className={`block py-2 ${
                hoverLink === "Contact" ? "animate-text" : ""
              }`}
              href="#contact"
              onMouseEnter={() => handleLinkHover("Contact")}
              onMouseLeave={handleLinkLeave}
            >
              Contact --{">"} 📱
            </a>
            <a
              className={`block py-2 ${
                hoverLink === "CV" ? "animate-text" : ""
              }`}
              href="#cv"
              onMouseEnter={() => handleLinkHover("CV")}
              onMouseLeave={handleLinkLeave}
            >
              CV &📂
            </a>
          </div>
        )}
      </header>

      {/* Bienvenida */}

      <main className="flex-1 flex flex-col xl:items-start sm:items-center justify-center py-6 mt-56">
        <motion.div
          className="text-center lg:text-left text-white xl:pl-32 mb-44"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">¡Bienvenidos 👨‍💻!</h1>
          <h1 className="text-3xl md:text-5xl font-bold">
            Soy <span className="animate-text">Andres Rodriguez.</span>
          </h1>
        </motion.div>
      </main>

      {/*  Skills y Experiencia */}

      <section
        id="skills"
        className="w-full py-12 md:py-24 lg:py-32 mb-8 mt-44"
      >
        <motion.div
          className="px-4 grid items-center justify-center gap-4 text-center md:px-6"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Mis habilidades en programación
            </h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-300">
              Soy competente en varios lenguajes de programación y frameworks
              junto a otras tecnologias. Aquí hay algunos con los que disfruto
              trabajar.
            </p>
          </div>
          <div className="mx-auto grid w-full grid-cols-1 items-start justify-center gap-12 md:grid-cols-2 lg:gap-16 lg:gap-x-96 text-gray-300 mt-8 mb-6">
            <div className="mr-24">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Teconologias
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {/* JavaScript */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 1052 1052"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
                    <path
                      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                      fill="#323330"
                    />
                  </svg>
                  <p className="font-semibold">JavaScript</p>
                </div>

                {/* Python */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    viewBox="0 0 64 64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      fill="url(#a)"
                      d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
                    />
                    <path
                      fill="url(#b)"
                      d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="19.075"
                        x2="34.898"
                        y1="18.782"
                        y2="34.658"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#387EB8" />
                        <stop offset="1" stopColor="#366994" />
                      </linearGradient>
                      <linearGradient
                        id="b"
                        x1="28.809"
                        x2="45.803"
                        y1="28.882"
                        y2="45.163"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFE052" />
                        <stop offset="1" stopColor="#FFC331" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="font-semibold">Python</p>
                </div>

                {/* HTML */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 452 520"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#ecedee"
                      d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
                    />
                    <path
                      fill="#fff"
                      d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
                    />
                  </svg>
                  <p className="font-semibold">HTML</p>
                </div>

                {/* CSS */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 452 520"
                    width="64"
                    height="64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
                    <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
                    <path
                      fill="#ecedee"
                      d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
                    />
                    <path
                      fill="#fff"
                      d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
                    />
                  </svg>
                  <p className="font-semibold">CSS</p>
                </div>

                {/* React */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 228"
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z"
                      fill="#00D8FF"
                    />
                  </svg>
                  <p className="font-semibold">React</p>
                </div>

                {/* Git */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 256"
                    className="mx-auto"
                    width="64"
                    height="64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33"
                      fill="#DE4C36"
                    />
                  </svg>
                  <p className="font-semibold">Git</p>
                </div>

                {/* Github */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 250"
                    width="64"
                    height="64"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                  </svg>
                  <p className="font-semibold">Github</p>
                </div>

                {/* Firebase */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 351"
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <defs>
                      <filter
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                        filterUnits="objectBoundingBox"
                        id="b"
                      >
                        <feGaussianBlur
                          stdDeviation="17.5"
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                        />
                        <feOffset
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          in="shadowInnerInner1"
                        />
                      </filter>
                      <filter
                        x="-50%"
                        y="-50%"
                        width="200%"
                        height="200%"
                        filterUnits="objectBoundingBox"
                        id="d"
                      >
                        <feGaussianBlur
                          stdDeviation="3.5"
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                        />
                        <feOffset
                          dx="1"
                          dy="-9"
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                          in="shadowInnerInner1"
                        />
                      </filter>
                      <path
                        d="m1.253 280.732 1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188L1.253 280.732Z"
                        id="a"
                      />
                      <path
                        d="m134.417 148.974 32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109-.53 1.744 31.678 58.556Z"
                        id="c"
                      />
                    </defs>
                    <path
                      d="m0 282.998 2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951L0 282.998Z"
                      fill="#FFC24A"
                    />
                    <use fill="#FFA712" fillRule="evenodd" xlinkHref="#a" />
                    <use filter="url(#b)" xlinkHref="#a" />
                    <path
                      d="m135.005 150.38 32.955-33.75-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86l32.584 60.233Z"
                      fill="#F4BD62"
                    />
                    <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#c" />
                    <use filter="url(#d)" xlinkHref="#c" />
                    <path
                      fill="#F6820C"
                      d="m0 282.998.962-.968 3.496-1.42 128.477-128 1.628-4.431-32.05-61.074z"
                    />
                    <path
                      d="m139.121 347.551 116.275-64.847-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                      fill="#FDE068"
                    />
                    <path
                      d="M254.354 282.16 221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006l115.392-64.355Z"
                      fill="#FCCA3F"
                    />
                    <path
                      d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983 115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847-.285-1.752-115.99 64.689Z"
                      fill="#EEAB37"
                    />
                  </svg>
                  <p className="font-semibold">Firebase</p>
                </div>
              </div>
            </div>
            {/* Contenedor para frameworks */}
            <div className="ml-24">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Frameworks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* PHP */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -1 100 50"
                    className="mx-auto"
                    height="64"
                    width="64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      fill="#fff"
                      d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"
                    />
                  </svg>
                  <p className="font-semibold">PHP</p>
                </div>

                {/* C++ */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 306 344.35"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    width="64"
                    height="64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      fill="#00599C"
                      d="M302.107 258.262c2.401-4.159 3.893-8.845 3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153 172.175l149.107 86.087z"
                    />
                    <path
                      fill="#004482"
                      d="m166.25 341.193 126.5-73.034c3.644-2.104 6.956-5.737 9.357-9.897L153 172.175 3.893 258.263c2.401 4.159 5.714 7.793 9.357 9.896l126.5 73.034c7.287 4.208 19.213 4.208 26.5 0z"
                    />
                    <path
                      fill="#659AD2"
                      d="M302.108 86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25 3.156c-7.287-4.208-19.213-4.208-26.5 0L13.25 76.19C5.962 80.397 0 90.725 0 99.14v146.069c0 4.208 1.491 8.894 3.893 13.053L153 172.175l149.108-86.088z"
                    />
                    <path
                      fill="#FFF"
                      d="M153 274.175c-56.243 0-102-45.757-102-102s45.757-102 102-102c36.292 0 70.139 19.53 88.331 50.968l-44.143 25.544c-9.105-15.736-26.038-25.512-44.188-25.512-28.122 0-51 22.878-51 51 0 28.121 22.878 51 51 51 18.152 0 35.085-9.776 44.191-25.515l44.143 25.543c-18.192 31.441-52.04 50.972-88.334 50.972z"
                    />
                    <path
                      fill="#FFF"
                      d="M255 166.508h-11.334v-11.333h-11.332v11.333H221v11.333h11.334v11.334h11.332v-11.334H255zM297.5 166.508h-11.334v-11.333h-11.332v11.333H263.5v11.333h11.334v11.334h11.332v-11.334H297.5z"
                    />
                  </svg>
                  <p className="font-semibold">C++</p>
                </div>

                {/* Bootstrap */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 204"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      fill="#7E13F8"
                      d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"
                    />
                  </svg>
                  <p className="font-semibold">Bootstrap</p>
                </div>

                {/* Tailwind CSS */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 154"
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <defs>
                      <linearGradient
                        x1="-2.778%"
                        y1="32%"
                        x2="100%"
                        y2="67.556%"
                        id="gradient"
                      >
                        <stop stopColor="#2298BD" offset="0%"></stop>
                        <stop stopColor="#0ED7B5" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
                      fill="url(#gradient)"
                    ></path>
                  </svg>

                  <p className="font-semibold">Tailwind</p>
                </div>

                {/* ViteJS */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 257"
                    width="64"
                    height="64"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <defs>
                      <linearGradient
                        x1="-.828%"
                        y1="7.652%"
                        x2="57.636%"
                        y2="78.411%"
                        id="a"
                      >
                        <stop stopColor="#41D1FF" offset="0%" />
                        <stop stopColor="#BD34FE" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="43.376%"
                        y1="2.242%"
                        x2="50.316%"
                        y2="89.03%"
                        id="b"
                      >
                        <stop stopColor="#FFEA83" offset="0%" />
                        <stop stopColor="#FFDD35" offset="8.333%" />
                        <stop stopColor="#FFA800" offset="100%" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
                      fill="url(#a)"
                    />
                    <path
                      d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
                      fill="url(#b)"
                    />
                  </svg>
                  <p className="font-semibold">ViteJS</p>
                </div>

                {/* MongoDB */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    viewBox="0 0 256 549"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    preserveAspectRatio="xMidYMid"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      fill="#01EC64"
                      d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"
                    />
                  </svg>
                  <p className="font-semibold">MongoDB</p>
                </div>

                {/* MySQL */}

                <div className="flex flex-col gap-2 items-center">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 252"
                    width="64"
                    height="64"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                  >
                    <path
                      d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"
                      fill="#00546B"
                    />
                    <path
                      d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"
                      fill="#00546B"
                    />
                  </svg>

                  <p className="font-semibold">MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Proyectos */}

      <section id="proyectos" className="w-full py-12 md:py-24 lg:py-32 mb-36">
        <div className="px-4 grid items-center justify-center gap-4 text-start md:px-6 lg:gap-10">
          <div className="space-y-3 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Mis proyectos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Proyectos hechos por mi mismo.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-24 md:grid-cols-2 lg:gap-24 md:flex md:flex-col mr-96">
            <div className="md:self-start mr-96">
              <div
                className="flex flex-col gap-2 mr-64 bg-white bg-opacity-5 p-6 pr-10 rounded-lg"
                style={{ width: "550px" }}
              >
                <img
                  alt="Imagen del proyecto"
                  className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                  src={icon}
                  style={{ aspectRatio: "600/300" }}
                  height={200}
                  width={500}
                />
                <div className="flex flex-col gap-3 text-white flex-grow">
                  <h3 className="text-xl font-bold">Proyecto Uno</h3>
                  <p className="text-base">
                    Una descripción del primer proyecto. Es un proyecto muy
                    interesante que hace muchas cosas.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-wrap gap-2 justify-start mt-5 p-4 pl-6 bg-white bg-opacity-5 rounded-lg"
                style={{ width: "550px" }}
              >
                <span className="inline-flex h-6 items-center rounded-full bg-amber-100 px-3 py-3.5 text-sm text-black font-bold">
                  TypeScript
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-sky-700 px-3 py-3.5 text-sm text-black font-bold">
                  Next.js
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-yellow-600 px-3 py-3.5 text-sm text-black font-bold">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="md:self-end">
              <div
                className="flex flex-col gap-2 bg-white bg-opacity-5 p-6 pr-10 rounded-lg"
                style={{ width: "550px" }}
              >
                <img
                  alt="Imagen del proyecto"
                  className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                  src={icon}
                  style={{ aspectRatio: "600/300" }}
                  height={200}
                  width={500}
                />
                <div className="flex flex-col gap-3 text-white flex-grow">
                  <h3 className="text-xl font-bold">Proyecto Dos</h3>
                  <p className="text-base">
                    Una descripción del primer proyecto. Es un proyecto muy
                    interesante que hace muchas cosas.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-wrap gap-2 justify-start mt-5 p-4 pl-6 bg-white bg-opacity-5 rounded-lg"
                style={{ width: "550px" }}
              >
                <span className="inline-flex h-6 items-center rounded-full bg-amber-100 px-3 py-3.5 text-sm text-black font-bold">
                  TypeScript
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-sky-700 px-3 py-3.5 text-sm text-black font-bold">
                  Next.js
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-yellow-600 px-3 py-3.5 text-sm text-black font-bold">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="md:self-start mr-96">
              <div
                className="flex flex-col gap-2 mr-64 bg-white bg-opacity-5 p-6 pr-10 rounded-lg"
                style={{ width: "550px" }}
              >
                <img
                  alt="Imagen del proyecto"
                  className="mx-auto overflow-hidden rounded-lg object-cover object-center"
                  src={icon}
                  style={{ aspectRatio: "600/300" }}
                  height={200}
                  width={500}
                />
                <div className="flex flex-col gap-3 text-white flex-grow">
                  <h3 className="text-xl font-bold">Proyecto Tres</h3>
                  <p className="text-base">
                    Una descripción del primer proyecto. Es un proyecto muy
                    interesante que hace muchas cosas.
                  </p>
                </div>
              </div>
              <div
                className="flex flex-wrap gap-2 justify-start mt-5 p-4 pl-6 bg-white bg-opacity-5 rounded-lg"
                style={{ width: "550px" }}
              >
                <span className="inline-flex h-6 items-center rounded-full bg-amber-100 px-3 py-3.5 text-sm text-black font-bold">
                  TypeScript
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-sky-700 px-3 py-3.5 text-sm text-black font-bold">
                  Next.js
                </span>
                <span className="inline-flex h-6 items-center rounded-full bg-yellow-600 px-3 py-3.5 text-sm text-black font-bold">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="flex w-full p-4 items-center justify-center text-center text-sm text-fuchsia-500 font-semibold">
        <p>© 2024 Andres Esteban Rodriguez Avila. All rights reserved.</p>
      </footer>

      <style>
        {`
          @keyframes changeColor {
            0% { color: rgb(255,215,0); }
            25% { color: rgb(184,134,11); }
             50% { color: rgb(218,165,32); }
            75% { color: rgb(139,69,19); }
            100% { color: rgb(160,82,45); }
          }

          .animate-text {
            animation: changeColor 5s infinite;
          }

          /* Estilos adicionales */
          @media (max-width: 640px) {
            .sticky-header {
              position: fixed;
              top: 0;
              width: 100%;
            }

            .main-content {
              margin-top: 16rem; /* Ajusta el margen superior para compensar la altura del encabezado */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
