export interface TokenSpotify{
    access_token: string;
    token_type: string;
    expires_in: number;
};

export interface Spotify{
    albums: SearchSpotify<SearchItemSpotify>;
    artists: SearchSpotify<SearchItemSpotify>;
};

export interface SearchSpotify<T>{
    href: string;
    limit:number;
    next:string;
    offset:string;
    previous:string;
    total:number;
    items:T[];
};

export interface SearchItemSpotify{
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
    is_playable: boolean,
};

export interface AlbumSpotify{
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: ExternalUrlSpotify;
    href: string;
    id: string;
    images: ImagesSpotify[];
    name: string;
    release_date: string;
    release_date_precision: string;
    type: string;
    uri: string;
    artists:ArtistSpotify[];
    tracks: SearchSpotify<AlbumTrackSpotify>,
    external_ids: ExternalIdsSpotify;
    genres: string[];
    label: string;
    popularity: number
}

export interface AlbumTrackSpotify{    
    artists: ArtistSpotify[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrlSpotify;
    href: string;
    id: string;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}

export interface ArtistSpotify{
    external_urls: ExternalUrlSpotify;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
    genres:string[];
    images:ImagesSpotify[];
    popularity:number;
    followers:ArtistFollowersSpotify
};

export interface ArtistFollowersSpotify{
    href:string;
    total:number
};
export interface ExternalUrlSpotify{
    spotify:string;
};

export interface ExternalIdsSpotify{
    isrc:string;
    ean: string;
    upc: string;
};

export interface AvailableMarketsSpotify{
    spotify:string;
};

export interface ImagesSpotify{
    height: number;
    url: string;
    width: number;
};

export interface TracksSpotify{
    tracks: TrackSpotify[];
};

export interface TrackSpotify{
    album: SearchItemSpotify;
    artists:ArtistSpotify[];
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_urls:ExternalUrlSpotify;
    external_ids:ExternalIdsSpotify;
    href:string;
    id: string,
    is_local: boolean,
    is_playable: boolean,
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string
};