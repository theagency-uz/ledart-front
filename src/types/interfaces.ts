export interface CategoryInterface {
    "id": number,
    "attributes": {
        "name": string,
        "slug": string,
        "description": string,
        "tag": string,
        "createdAt": string,
        "updatedAt": string,
        "publishedAt": string,
        "locale": string,
        "image": ImageInterface
    }
}

export interface ImageInterface {
    "data": {
        "id": number,
        "attributes": {
            "name": string,
            "alternativeText": string | null,
            "caption": string | null,
            "width": number,
            "height": number,
            "formats": {
                "thumbnail": {
                    "ext": string,
                    "url": string,
                    "hash": string,
                    "mime": string,
                    "name": string,
                    "path": string | null,
                    "size": number,
                    "width": number,
                    "height": number,
                    "sizeInBytes": number
                }
            },
            "hash": string,
            "ext": string,
            "mime": string,
            "size": number,
            "url": string,
            "previewUrl": string | null,
            "provider": string,
            "provider_metadata": string | null,
            "createdAt": string,
            "updatedAt": string
        }
    }
}

export interface BrandInterface {
    "id": number,
    "attributes": {
        "name": string,
        "createdAt": string,
        "updatedAt": string,
        "publishedAt": string,
        "locale": string
    }
}

export interface FilterInterface {
    brands: number[];
    type: number | null;
    category: number | null;
    aksiya: boolean;
    predzakaz: boolean;
}