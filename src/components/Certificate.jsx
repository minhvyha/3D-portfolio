import React, { useEffect, useRef } from "react";
import Tilt from "react-tilt";
import { motion, useAnimation, useInView } from "framer-motion";

import { styles } from "../styles";
import { certificateImg } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificate } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={certificateImg}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificate = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate={mainControls}
      >
        <p className={`${styles.sectionSubText} `}>My qualification</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          ref={ref}
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          animate={mainControls}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center	">
        {certificate.slice(0, 6).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <div
          className=" flex-row flex-wrap gap-7 justify-center transition-all"
          style={{
            display: !show ? "none" : "flex  ",
            opacity: !show ? "0" : "1",
          }}
        >
          {certificate.slice(6, certificate.length).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>

      <motion.div className="flex justify-center mt-6" variants={fadeIn("up", "spring", 6*0.3, 0.75)}>
        <button
          onClick={() => setShow(!show)}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          {show ? "Show Less" : "Show More"}
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");
