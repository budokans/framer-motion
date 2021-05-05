import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [showThanks, setShowThanks] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowThanks(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  });

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showThanks && (
          <motion.h2
            exit={{ y: "-50vh", scale: 3 }}
            transition={{ duration: 30 }}
          >
            Thank you for your order :)
          </motion.h2>
        )}
      </AnimatePresence>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
