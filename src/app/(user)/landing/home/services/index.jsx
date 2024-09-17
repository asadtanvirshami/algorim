/* eslint-disable react/no-unescaped-entities */
import ServiceCard from "@/components/ui/service-card";
import React from "react";

import { CgWebsite } from "react-icons/cg";
import { CgHomeScreen } from "react-icons/cg";
import { CgListTree } from "react-icons/cg";
import { GiCyberEye } from "react-icons/gi";
import { MdOutlineDisplaySettings, MdOutlineTerminal } from "react-icons/md";
import {
  HiMiniMegaphone,
  HiOutlineServer,
  HiOutlineDevicePhoneMobile,
  HiOutlineShieldCheck,
  HiOutlineCpuChip,
  HiOutlineCloud,
  HiOutlineCursorArrowRays,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import { IoLogoBitcoin } from "react-icons/io";

const Services = () => {
  return (
    <div>
      <h1 className=" text-black text-7xl mb-5 font-brand">SERVICES</h1>
      <div className="grid grid-cols-4 rounded-md p-4">
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<CgWebsite fontSize={25} color="black" />}
          title={"Software Development"}
          content={
            "Providing comprehensive software solutions, ensuring seamless integration and robust functionality."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<CgHomeScreen fontSize={25} color="black" />}
          title={"Mobile App Development"}
          content={
            "Crafting user-centric mobile solutions for iOS and Android with cutting-edge technology and seamless integration."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<CgListTree fontSize={25} color="black" />}
          title={"Artificial Intelligence"}
          content={
            "In the realm of Artificial Intelligence, we harness innovative technologies to craft intelligent solutions."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<GiCyberEye fontSize={25} color="black" />}
          title={"Cyber Security"}
          content={
            "In the ever-evolving landscape of cybersecurity, we specialize in safeguarding digital assets."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<MdOutlineDisplaySettings fontSize={25} color="black" />}
          title={"Quality Assurance"}
          content={
            "We excel in upholding the highest standards throughout the software development lifecycle."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiMiniMegaphone fontSize={25} color="black" />}
          title={"Digital Marketing"}
          content={
            "Comprehensive digital marketing services, including PPC, SEO, content, social media, and Meta Business Suite."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<IoLogoBitcoin fontSize={25} color="black" />}
          title={"Blockchain"}
          content={
            "Innovative blockchain solutions including decentralized applications, smart contracts, and secure ledger systems."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<MdOutlineTerminal fontSize={25} color="black" />}
          title={"DevOps"}
          content={
            "Streamlining software development and deployment processes with automation, CI/CD pipelines, and infrastructure as code."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineServer fontSize={25} color="black" />}
          title={"Backend Support"}
          content={
            "Providing robust and scalable backend solutions, including database management, server maintenance, and API development."
          }
        />
        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineDevicePhoneMobile fontSize={25} color="black" />}
          title={"Frontend Support"}
          content={
            "Crafting visually appealing and responsive user interfaces with modern frameworks and technologies."
          }
        />

        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineShieldCheck fontSize={25} color="black" />}
          title={"Application Pentesting"}
          content={
            "Ensuring application security by identifying vulnerabilities through rigorous penetration testing."
          }
        />

        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineCpuChip fontSize={25} color="black" />}
          title={"IoT Development"}
          content={
            "Developing innovative IoT solutions, including device integration, data processing, and real-time monitoring."
          }
        />

        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineCloud fontSize={25} color="black" />}
          title={"High-End Applications"}
          content={
            "Building sophisticated, high-performance applications tailored to meet specific business needs."
          }
        />

        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineCursorArrowRays fontSize={25} color="black" />}
          title={"Drag & Drop Website"}
          content={
            "Creating user-friendly drag-and-drop websites that empower users to design and manage their content with ease."
          }
        />

        <ServiceCard
          data-aos={"fade-down"}
          Icon={<HiOutlineComputerDesktop fontSize={25} color="black" />}
          title={"Desktop App Development"}
          content={
            "Delivering powerful and efficient desktop applications across various platforms, focusing on performance and user experience."
          }
        />
      </div>
    </div>
  );
};

export default Services;
