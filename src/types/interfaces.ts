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
    image: ImageInterface;
  };
}

export interface ImageInterface {
  data: {
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
    image: ImageInterface;
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
    description: [
      {
        type: string;
        children: [
          {
            text: string;
            type: string;
          }
        ];
      }
    ];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    price: string;
    oldPrice: string;
    predzakaz: boolean;
    previewImage: ImageInterface;
  };
}

export interface ProductsInterface {
  data: ProductInterface[];
  meta: MetaInterface;
}
