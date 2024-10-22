import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../cartcontext';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

// Styled Typography for the title
const TitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  '&:hover': {
    transform: 'scale(1.03)',
    transition: 'transform 0.3s ease-in-out'
  }
}));

// Encrypt Button Component
const EncryptButton = ({ children, onClick }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(children);
  const CHARS = "!@#$%^&*():{};|,.<>/?";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const scrambled = children.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");
      setText(scrambled);
      pos++;
      if (pos >= children.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(children);
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

// Draw Outline Button Component
const DrawOutlineButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();
  const [username, setUsername] = useState(null);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    fetch('/auth/user')
      .then(response => response.json())
      .then(data => {
        if (data.username) {
          setUsername(data.username);
        }
      })
      .catch(() => setUsername(null));
  }, []);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <TitleTypography variant="h4" component="h1">
            Cholo Crate
          </TitleTypography>
          <div className="flex items-center gap-4">
            {username ? (
              <span>Bienvenido, {username}</span>
            ) : (
              <>
                <Link to="/login">
                  <EncryptButton>Iniciar sesión</EncryptButton>
                </Link>
                <Link to="/register">
                  <EncryptButton>Registrarse</EncryptButton>
                </Link>
              </>
            )}
            <Link to="/cart">
              <DrawOutlineButton>
                Carrito ({itemCount})
              </DrawOutlineButton>
            </Link>
          </div>
        </div>
        <nav className="flex space-x-4">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-md ${isActive('/') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
          >
            Inicio
          </Link>
          <Link 
            to="/products" 
            className={`px-3 py-2 rounded-md ${isActive('/products') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
          >
            Productos
          </Link>
          <Link 
            to="/about" 
            className={`px-3 py-2 rounded-md ${isActive('/about') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;