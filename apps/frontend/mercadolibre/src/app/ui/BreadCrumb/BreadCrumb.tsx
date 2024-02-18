import { FC } from 'react';
import './BreadCrumb.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { BreadCrumbProps } from './types';

export const BreadCrumb: FC<BreadCrumbProps> = (props) => {
  return (
    <ol className="breadcrumb">
      {props.categories &&
        props.categories.map((breadcrumb, index) => {
          return (
            <li key={`${breadcrumb}-${index}`}>
              <a className="breadcrumb-link">
                <span className="breadcrumb-description">{breadcrumb}</span>
              </a>
              {index + 1 < props.categories.length && (
                <FontAwesomeIcon
                  className="breadcrumb-icon"
                  icon={faChevronRight}
                  size="xs"
                ></FontAwesomeIcon>
              )}
            </li>
          );
        })}
    </ol>
  );
};
