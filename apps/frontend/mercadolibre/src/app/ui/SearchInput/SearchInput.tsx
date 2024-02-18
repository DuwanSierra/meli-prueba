'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import './SearchInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchInputTypesProps } from './SearchInputTypes';
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchInput: FC<SearchInputTypesProps> = () => {
  const queryParams = useSearchParams();
  const [currentQuery, setCurrentQuery] = useState(
    queryParams.get('search') || ''
  );
  const { push } = useRouter();

  const changeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentQuery(event.target.value);
  };

  const clickSearch = () => {
    push(`/items?search=${currentQuery}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      clickSearch();
    }
  };

  return (
    <div className="search-input">
      <input
        className="input"
        value={currentQuery}
        onChange={(e) => changeInputHandler(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      ></input>
      <button className="search-action" onClick={() => clickSearch()}>
        <FontAwesomeIcon icon={faSearch} size="1x"></FontAwesomeIcon>
      </button>
    </div>
  );
};
