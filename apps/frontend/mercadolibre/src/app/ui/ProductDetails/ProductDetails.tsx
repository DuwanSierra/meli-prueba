import { FC } from 'react';
import { calculatePrice, conditionDictionary } from '../../utils/product.utils';
import { ProductDetailsProps } from './types';
import Image from 'next/image';
import './ProductDetails.scss';

export const ProductDetails: FC<ProductDetailsProps> = ({
  amount,
  currencyCode,
  condition,
  title,
  imageSrc,
  description,
  sold,
}) => {
  return (
    <section className="product-details">
      <div className="product-description">
        <div className="image-container">
          <Image
            alt={title}
            src={imageSrc}
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h2>Descripción del Producto</h2>
        <p>{description}</p>
      </div>
      <div className="product-price-details">
        <h4>
          {conditionDictionary[condition]} - {sold}
        </h4>
        <h2>{title}</h2>
        <h1>$ {calculatePrice(amount, currencyCode)}</h1>
        <button className="primary">Comprar</button>
      </div>
    </section>
  );
};
