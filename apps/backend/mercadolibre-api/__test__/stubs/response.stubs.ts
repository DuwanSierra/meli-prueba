import {
  MercadoLibreItemDetailResponse,
  MercadoLibreItemDescriptionResponse,
} from '@domain/models/mercadolibre-item.response';

export const mockProductDetailMeliresponse: MercadoLibreItemDetailResponse = {
  id: 'MLA1385553071',
  site_id: 'MLA',
  title: 'Cachorros Ovejero Aleman ( 100 % Puros ) Poa',
  seller_id: 693543979,
  category_id: 'MLA1073',
  official_store_id: null,
  price: 40000,
  base_price: 40000,
  original_price: null,
  currency_id: 'ARS',
  initial_quantity: 6,
  sale_terms: [
    {
      id: 'WARRANTY_TYPE',
      name: 'Tipo de garantía',
      value_id: '6150835',
      value_name: 'Sin garantía',
      value_struct: null,
      values: [
        {
          id: '6150835',
          name: 'Sin garantía',
          struct: null,
        },
      ],
      value_type: 'list',
    },
  ],
  buying_mode: 'buy_it_now',
  listing_type_id: 'gold_special',
  condition: 'new',
  permalink:
    'https://articulo.mercadolibre.com.ar/MLA-1385553071-cachorros-ovejero-aleman-100-puros-poa-_JM',
  thumbnail_id: '637730-MLA71396168567_082023',
  thumbnail: 'http://http2.mlstatic.com/D_637730-MLA71396168567_082023-I.jpg',
  pictures: [
    {
      id: '637730-MLA71396168567_082023',
      url: 'http://http2.mlstatic.com/D_637730-MLA71396168567_082023-O.jpg',
      secure_url:
        'https://http2.mlstatic.com/D_637730-MLA71396168567_082023-O.jpg',
      size: '500x500',
      max_size: '1200x1200',
      quality: '',
    },
    {
      id: '665385-MLA71352530838_082023',
      url: 'http://http2.mlstatic.com/D_665385-MLA71352530838_082023-O.jpg',
      secure_url:
        'https://http2.mlstatic.com/D_665385-MLA71352530838_082023-O.jpg',
      size: '500x466',
      max_size: '1200x1119',
      quality: '',
    },
    {
      id: '823988-MLA71395970947_082023',
      url: 'http://http2.mlstatic.com/D_823988-MLA71395970947_082023-O.jpg',
      secure_url:
        'https://http2.mlstatic.com/D_823988-MLA71395970947_082023-O.jpg',
      size: '500x470',
      max_size: '1200x1129',
      quality: '',
    },
  ],
  video_id: null,
  descriptions: [],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: [],
  shipping: {
    mode: 'not_specified',
    methods: [],
    tags: [],
    dimensions: null,
    local_pick_up: true,
    free_shipping: false,
    logistic_type: 'not_specified',
    store_pick_up: false,
  },
  international_delivery_mode: 'none',
  seller_address: {
    city: {
      id: 'TUxBQ1FVSWI1MzY',
      name: 'Quilmes',
    },
    state: {
      id: 'AR-B',
      name: 'Buenos Aires',
    },
    country: {
      id: 'AR',
      name: 'Argentina',
    },
    search_location: {
      city: {
        id: 'TUxBQ1FVSWI1MzY',
        name: 'Quilmes',
      },
      state: {
        id: 'TUxBUEdSQXJlMDNm',
        name: 'Bs.As. G.B.A. Sur',
      },
    },
    id: 1150004285,
  },
  seller_contact: null,
  location: {},
  coverage_areas: [],
  attributes: [
    {
      id: 'AGE',
      name: 'Edad',
      value_id: null,
      value_name: '45 días',
      values: [
        {
          id: null,
          name: '45 días',
          struct: {
            number: 45,
            unit: 'días',
          },
        },
      ],
      value_type: 'number_unit',
    },
    {
      id: 'ANIMAL_GENDER',
      name: 'Género del animal',
      value_id: '3896959',
      value_name: 'Hembra',
      values: [
        {
          id: '3896959',
          name: 'Hembra',
          struct: null,
        },
      ],
      value_type: 'list',
    },
    {
      id: 'ANIMAL_LIFE_SPAN',
      name: 'Esperanza de vida',
      value_id: null,
      value_name: '15 años',
      values: [
        {
          id: null,
          name: '15 años',
          struct: {
            number: 15,
            unit: 'años',
          },
        },
      ],
      value_type: 'number_unit',
    },
    {
      id: 'BREED',
      name: 'Raza',
      value_id: '2227119',
      value_name: 'Ovejero Alemán',
      values: [
        {
          id: '2227119',
          name: 'Ovejero Alemán',
          struct: null,
        },
      ],
      value_type: 'string',
    },
    {
      id: 'COAT_LENGTH',
      name: 'Largo del pelaje',
      value_id: '2307588',
      value_name: 'Corto',
      values: [
        {
          id: '2307588',
          name: 'Corto',
          struct: null,
        },
      ],
      value_type: 'string',
    },
    {
      id: 'ITEM_CONDITION',
      name: 'Condición del ítem',
      value_id: '2230284',
      value_name: 'Nuevo',
      values: [
        {
          id: '2230284',
          name: 'Nuevo',
          struct: null,
        },
      ],
      value_type: 'list',
    },
  ],
  listing_source: '',
  variations: [
    {
      id: 179654740913,
      price: 40000,
      attribute_combinations: [
        {
          id: 'COAT_COLOR',
          name: 'Color del pelaje',
          value_id: '52049',
          value_name: 'Negro',
          values: [
            {
              id: '52049',
              name: 'Negro',
              struct: null,
            },
          ],
          value_type: 'string',
        },
      ],
      sale_terms: [],
      picture_ids: [
        '637730-MLA71396168567_082023',
        '665385-MLA71352530838_082023',
        '823988-MLA71395970947_082023',
      ],
      catalog_product_id: null,
    },
  ],
  status: 'active',
  sub_status: [],
  tags: ['good_quality_thumbnail', 'immediate_payment'],
  warranty: 'Sin garantía',
  catalog_product_id: null,
  domain_id: 'MLA-PUREBRED_DOGS',
  parent_item_id: null,
  deal_ids: [],
  automatic_relist: false,
  date_created: new Date('2023-08-29T20:18:39.000Z'),
  last_updated: new Date('2024-02-16T13:42:24.000Z'),
  health: 0.85,
  catalog_listing: false,
};

export const mockProductDescriptionMeliResponse: MercadoLibreItemDescriptionResponse =
  {
    text: '',
    plain_text:
      'Cachorros ovejero alemán . Vacunados y desparasitados , padres a la vista con papeles , libres de displacia , excelente línea de sangre , thor el padre de los cachorros lo traje de Alemania hijo de perro campeón en Alemania , todo comproble tengo todos los papeles para mostrar y videos en exposiciones en Alemania , no es un criadero son mis mascotas y tuvieron cría y no puedo quedarme con los cachorros , laika la madre de los cachorros hija de perros campeones ,tmb todo comprobable no dude en consultar , el precio publicado corresponde a la seña del cachorro . $250.000 Machitos , hembras $280.000 sin dudas los mejores',
    last_updated: new Date('2024-02-11T03:40:14.330Z'),
    date_created: new Date('2023-08-29T20:18:39.615Z'),
    snapshot: {
      url: 'http://descriptions.mlstatic.com/D-MLA1385553071.jpg?hash=8520c3b8559cb08aa7e782b8f5334ffe_0x0',
      width: 0,
      height: 0,
      status: '',
    },
  };
