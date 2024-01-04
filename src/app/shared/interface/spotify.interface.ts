export interface TokenSpotify{
    access_token: string;
    token_type: string;
    expires_in: number;
};

export interface ReleaseSpotify{
    albums: AlbumSpotify;
};

export interface AlbumSpotify{
    href: string;
    limit:number;
    next:string;
    offset:string;
    previous:string;
    total:number;
    items:AlbumItemSpotify[];
};

export interface AlbumItemSpotify{
    id:string;
    name:string;
    album_type: string;
    href:string;
    release_date:string;
    release_date_precision:string;
    total_tracks:number;
    type:string;
    uri:string;
    artists:ArtistSpotify[];
    available_markets:string[];
    external_urls:ExternalUrlSpotify;
    images:ImagesSpotify[];
};

export interface ArtistSpotify{
    external_urls: ExternalUrlSpotify;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
    genres?:string[];
    images?:ImagesSpotify[];
    popularity?:number;
    followers?:ArtistFollowersSpotify
};

export interface ArtistFollowersSpotify{
    href:string;
    total:number
};
export interface ExternalUrlSpotify{
    spotify:string;
};

export interface AvailableMarketsSpotify{
    spotify:string;
};

export interface ImagesSpotify{
    height: number;
    url: string;
    width: number;
};
