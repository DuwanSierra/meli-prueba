import { FC } from 'react';
import Image from 'next/image';
import './Header.scss';
import { SearchInput } from '../SearchInput/SearchInput';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <nav className="navbar">
      <Link href={'/'}>
        <Image
          src="/images/logo_large_plus.webp"
          alt="logo_mercadolibre"
          width={134}
          height={34}
          className="logo"
        ></Image>
      </Link>

      <SearchInput></SearchInput>
    </nav>
  );
};
