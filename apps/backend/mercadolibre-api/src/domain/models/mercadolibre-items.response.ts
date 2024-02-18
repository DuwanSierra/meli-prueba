export const DEFAULT_API_LIMIT = 4;

export interface MercadoLibreItemsResponse {
  site_id: SiteID;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: any[];
  available_filters: AvailableFilter[];
  pdp_tracking: PDPTracking;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface PDPTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: Status;
}

export enum Status {
  Shown = 'shown',
}

export interface Result {
  id: string;
  title: string;
  condition: Condition;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: BuyingMode;
  site_id: SiteID;
  category_id: CategoryID;
  domain_id: DomainID;
  thumbnail: string;
  currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: null;
  sale_price: null;
  available_quantity: number;
  official_store_id: number | null;
  official_store_name?: OfficialStoreName;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: any[];
  inventory_id: null | string;
  variation_filters?: string[];
  variations_data?: { [key: string]: VariationsDatum };
}

export interface Attribute {
  id: ID;
  name: Name;
  value_id: null | string;
  value_name: null | string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Empty = '',
  Others = 'OTHERS',
}

export enum AttributeGroupName {
  Empty = '',
  Otros = 'Otros',
}

export enum ID {
  Brand = 'BRAND',
  ItemCondition = 'ITEM_CONDITION',
  Length = 'LENGTH',
  Line = 'LINE',
  Model = 'MODEL',
  PackageLength = 'PACKAGE_LENGTH',
  PackageWeight = 'PACKAGE_WEIGHT',
  SaleFormat = 'SALE_FORMAT',
  TabouretLength = 'TABOURET_LENGTH',
  TabouretWeight = 'TABOURET_WEIGHT',
  UnitsPerPack = 'UNITS_PER_PACK',
  Weight = 'WEIGHT',
}

export enum Name {
  CondiciónDelÍtem = 'Condición del ítem',
  FormatoDeVenta = 'Formato de venta',
  Largo = 'Largo',
  LargoDelPaquete = 'Largo del paquete',
  Línea = 'Línea',
  Marca = 'Marca',
  Modelo = 'Modelo',
  Peso = 'Peso',
  PesoDelPaquete = 'Peso del paquete',
  UnidadesPorPack = 'Unidades por pack',
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = 'cm',
  G = 'g',
  Kg = 'kg',
}

export enum ValueType {
  List = 'list',
  Number = 'number',
  NumberUnit = 'number_unit',
  String = 'string',
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = 'buy_it_now',
}

export enum CategoryID {
  Mla1627 = 'MLA1627',
  Mla30083 = 'MLA30083',
  Mla352343 = 'MLA352343',
  Mla412445 = 'MLA412445',
  Mla41925 = 'MLA41925',
  Mla48868 = 'MLA48868',
  Mla6656 = 'MLA6656',
}

export enum Condition {
  New = 'new',
}

export enum CurrencyID {
  Ars = 'ARS',
}

export enum DomainID {
  MlaBooks = 'MLA-BOOKS',
  MlaChalkboardsAndWhiteboards = 'MLA-CHALKBOARDS_AND_WHITEBOARDS',
  MlaDiningChairs = 'MLA-DINING_CHAIRS',
  MlaDishesPlates = 'MLA-DISHES_PLATES',
  MlaStoolsAndBenches = 'MLA-STOOLS_AND_BENCHES',
  MlaTvAndMonitorMounts = 'MLA-TV_AND_MONITOR_MOUNTS',
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldSpecial = 'gold_special',
}

export enum OfficialStoreName {
  Alfaomega = 'Alfaomega',
  LaRevisteriaComics = 'La Revisteria Comics',
  Liberate = 'LIBERATE',
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  tags: Tag[];
  benefits: null;
  promise: null;
}

export enum LogisticType {
  CrossDocking = 'cross_docking',
  DropOff = 'drop_off',
  Fulfillment = 'fulfillment',
  XdDropOff = 'xd_drop_off',
}

export enum Mode {
  Me2 = 'me2',
}

export enum Tag {
  Fulfillment = 'fulfillment',
  MLACHGThresholdEne24 = 'MLA-CHG-threshold-ene-24',
  MLACHGThresholdNov23 = 'MLA-CHG-threshold-nov-23',
  MLAChgThresholdAgo22 = 'MLA-chg-threshold-ago-22',
  MandatoryFreeShipping = 'mandatory_free_shipping',
  SelfServiceIn = 'self_service_in',
  SelfServiceOut = 'self_service_out',
}

export enum SiteID {
  Mla = 'MLA',
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
  inventory_id?: string;
  user_product_id: string;
}
