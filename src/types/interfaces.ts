export interface CategoryInterface {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    image: { data: ImageInterface };
  };
}

export interface ImageInterface {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BrandInterface {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    image: { data: ImageInterface };
  };
}

export interface FilterInterface {
  brands: number[];
  type: number | null;
  category: string | null;
  aksiya: boolean;
  predzakaz: boolean;
}

export interface MetaInterface {
  pagination: {
    page: 1;
    pageSize: 100;
    pageCount: 1;
    total: 7;
  };
}

export interface ProductInterface {
  id: number;
  attributes: {
    name: string;
    slug: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    price: string;
    oldPrice: string;
    predzakaz: boolean;
    previewImage: { data: ImageInterface };
    resolutions: {
      data: ResolutionsInterface[];
    };
    tech_characteristics: [
      {
        id: number;
        name: string;
        value: string;
      }
    ];
  };
}

export interface ProductsInterface {
  data: ProductInterface[];
  meta: MetaInterface;
}

export interface TypeInterface {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface FaqInterface {
  id: number;
  attributes: {
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface SettingsInterface {
  id: number;
  attributes: {
    phone: string;
    address: string;
    email: string;
    telegram?: string | null;
    instagram?: string | null;
    facebook?: string | null;
    youtube?: string | null;
    address_link: string;
    working_time?: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    logo: { data: ImageInterface };
    placeholder: { data: ImageInterface };
    logo_footer: { data: ImageInterface };
  };
}

export interface ResolutionsInterface {
  id: number;
  attributes: {
    value: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  };
}

export interface PortfolioProjectInterface {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    characteristics: [
      {
        id: number;
        name: string;
        value: string;
      }
    ];
    image: {
      data: ImageInterface;
    };
  };
}
