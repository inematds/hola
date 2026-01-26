import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="mb-8"
      >
        <img
          src="/images/logo-hola.png"
          alt="Hola"
          className="w-64 h-auto"
        />
      </motion.div>

      {/* Welcome Message */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-hola-blue text-center mb-4"
      >
        Aprenda Espanhol Brincando!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-xl text-gray-600 text-center mb-12 max-w-md"
      >
        Venha conhecer os animais em espanhol com nosso amigo!
      </motion.p>

      {/* Start Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/trail')}
        className="btn-primary text-2xl px-12 py-6"
      >
        Começar!
      </motion.button>

      {/* Parent Access */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => navigate('/parent')}
        className="mt-8 text-gray-500 underline text-sm"
      >
        Área dos Pais
      </motion.button>
    </div>
  );
}
