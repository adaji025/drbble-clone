import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "../../constants";

type ColumnProps = {
  title: string;
  links: string[];
};

const FooterCoulum = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column">
      <h2 className="font-semibold">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <Link href="/" key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col flex-start">
          <Image
            src="/logo-purple.svg"
            height={38}
            width={115}
            alt="dribble clone"
          />
          <p className="text-start text-sm mt-5 font-normal max-w-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            perferendis ipsum odio. Aliquid autem dolores adipisci nostrum,
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterCoulum
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex flex-wrap gap-12">
            <FooterCoulum
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterCoulum
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterCoulum
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex flex-wrap gap-12">
            <FooterCoulum
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterCoulum
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterCoulum
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@2024 Flexible. All rights reserved</p>
        <p className="text-gray text-sm">
          <span className="text-black font-semibold">10,216</span> Projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
