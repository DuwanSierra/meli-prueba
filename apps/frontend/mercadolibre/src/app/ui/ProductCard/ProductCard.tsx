import { FC } from 'react';
import './ProductCard.scss';
import Image from 'next/image';
import { ProductCardProps } from './ProductCardTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { calculatePrice, conditionDictionary } from '../../utils/product.utils';

export const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  alt,
  description,
  amount,
  currencyCode,
  isFastShipping,
  status,
  id,
}) => {
  return (
    <Link className="product-card" href={`/items/${id}`}>
      <div className="product-image">
        <Image src={imageSrc} alt={alt} width={150} height={150}></Image>
      </div>
      <div className="product-description">
        <div>
          <div className="title">
            <h2>$ {calculatePrice(amount, currencyCode)}</h2>
            {isFastShipping && (
              <i className="icon">
                <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
              </i>
            )}
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="product-city">{conditionDictionary[status]}</div>
    </Link>
  );
};
