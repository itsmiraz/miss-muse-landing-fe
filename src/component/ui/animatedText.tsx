import { motion, Variants } from "framer-motion";
import { ReactElement, ReactNode, isValidElement } from "react";
import { useInView } from "react-intersection-observer";


type ElementWithChildrenAndClass = ReactElement<{
  className?: string;
  children?: React.ReactNode;
}>;
const AnimatedText = ({
  children,
  className = "text-[32px] md:text-[72px] leading-[120%] text-primary font-bold inline-flex flex-wrap justify-center",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const pullupVariant: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
    }),
  };

  let index = 0;

  // Recursive function to walk through the ReactNode tree
  const renderAnimated = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((word) => {
        if (!word.trim()) {
          return word; // Preserve spaces
        }

        const current = index++;
        return (
          <span
            key={current}
            className="inline-block overflow-hidden align-bottom"
          >
            <motion.span
              className="inline-block "
              variants={pullupVariant}
              initial="initial"
              animate={inView ? "animate" : "initial"}
              custom={current}
            >
              {word}
            </motion.span>
          </span>
        );
      });
    }

    if (isValidElement(node)) {
      const element = node as ElementWithChildrenAndClass;

      if (element.type === "br") {
        return <br key={index++} />;
      }

      return (
        <span key={index++} className={element.props.className}>
          {renderAnimated(element.props.children)}
        </span>
      );
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => (
        <span key={i}>{renderAnimated(child)}</span>
      ));
    }

    return null;
  };

  return (
    <div ref={ref} className={className}>
      {renderAnimated(children)}
    </div>
  );
};

export default AnimatedText;
