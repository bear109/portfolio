import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';
import tw from 'twin.macro';

function Navbar() {
  return (
    <header className="text-gray-600">
      <div css={style.navbarWrapper}>
        <a css={style.logoText} href="./">
          bear109&apos;s portfolio
        </a>
        <nav css={style.navTextWrapper}>
          <a css={style.navText} href="#AboutMe">
            About Me
          </a>
          <a css={style.navText} href="#Skills">
            Skills
          </a>
          <a css={style.navText} href="#Project">
            Project
          </a>
          <a css={style.navText} href="#ContactMe">
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}

const style = {
  navbarWrapper: tw`
    w-full
    mx-auto
    flex
    flex-wrap
    p-5
    flex-col
    md:flex-row
    items-center
    fixed
    z-10
    bg-white
  `,
  logoText: tw`
    flex
    items-center
    text-gray-900
    mb-4
    md:mb-0
    ml-3 
    text-2xl
    font-extrabold
  `,
  navTextWrapper: tw`
    ml-40
    flex
    flex-wrap
    items-center
    justify-between
    w-3/5
    text-lg
    font-semibold
  `,
  navText: tw`
    mr-5
    hover:text-gray-900
  `,
};

export default Navbar;
