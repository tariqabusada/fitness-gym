import Logo from "@/assets/Logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <motion.div 
          className="mt-16 basis-1/2 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
        </motion.div>
        <motion.div
          className="mt-16 basis-1/4 md:mt-0" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
      }}
        >
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </motion.div>
        <motion.div
          className="mt-16 basis-1/4 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
          }}
        >
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>+000 999 9999</p>
        </motion.div>
      </div>
      <div className="mt-16 mx-auto w-5/6 gap-16">
          <p>© TariqCo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;