import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { NavLinks } from "../../constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="dribble clone" />
        </Link>
        <ul className="hidden xl:flex gap-7 text-sm">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
              {session ? <Fragment>
                  userPhoto
                  <Link href="/create-project">Share work</Link>
        </Fragment> : <AuthProviders />}
      </div>
    </nav>
  );
};

export default Navbar;
