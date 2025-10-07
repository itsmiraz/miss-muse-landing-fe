import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  width?: string;
  padding?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  borderRadius?: string;
  isRelative?: boolean;
  zIndex?: number;
  preventCloseOnClickOutside?: boolean;
};

const Modal = ({
  preventCloseOnClickOutside,

  children,
  isOpen,
  width,
  padding,
  borderRadius,
  setOpen,
  isRelative = false,
  zIndex = 999,
}: ModalProps) => {
  const defaultWidth = width || "400px";
  const defaultPadding = padding || "20px";
  const defaultBorderRadius = borderRadius || "12px";

  return createPortal(
    <div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 transition-all ease-in-out duration-300 flex items-center justify-center z-[999] w-full bg-black/50 px-6"
          initial={{ opacity: 0 }}
          style={{ zIndex }}
          animate={{ opacity: 1 }}
          layout
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div
            style={{
              width: defaultWidth,
              padding: defaultPadding,
              borderRadius: defaultBorderRadius,
            }}
            className={`w-full drop-shadow-xl z-50 relative overflow-y-auto max-h-[90%] md:h-fit bg-white transition-all ease-in-out duration-300 rounded-[12px] ${
              isRelative ? "relative" : ""
            }`}
          >
            {children}
          </div>
          <div
            onClick={() => !preventCloseOnClickOutside && setOpen(false)}
            className="w-full h-full absolute top-0 left-0 z-30"
          ></div>
        </motion.div>
      )}
    </div>,
    document.body
  );
};

export default Modal;
