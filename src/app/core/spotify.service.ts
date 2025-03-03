
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { AlbumSpotify, ArtistSpotify, Spotify, TokenSpotify, TracksSpotify } from '../shared/interface/spotify.interface';
import { Observable } from 'rxjs';
@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getToken(){
    const url = `${environment.apiTecappsys}/token`
    return this.http.get(url) as any;
  }

  public getNewReleases(token:TokenSpotify) {
    const uri = '/browse/new-releases?limit=20';
    return this.getRequest(uri,token) as Observable<Spotify>;
  }

  public getArtist( id:string,token:TokenSpotify ) {
    const uri = `/artists/${ id }`;
    return this.getRequest(uri,token) as Observable<ArtistSpotify>;
  }

  public getTopTracks( id:string,token:TokenSpotify ) {
    const uri = `/artists/${id}/top-tracks?country=us`;
    return this.getRequest(uri,token) as Observable<TracksSpotify>;
  }

  public getAlbum( id: string,token:TokenSpotify ) {
    const uri = `/albums/${ id }`;
    return this.getRequest(uri,token) as Observable<AlbumSpotify>;
  }

  public getSearch( word: string,token:TokenSpotify ) {
    const uri = `/search?q=${ word }&type=artist&limit=15`;
    return this.getRequest(uri,token) as Observable<Spotify>;
  }

  public brokers(codigo:string,latitude:string,longitude:string){
    const url = `https://ontariobrokers.ca/wp-json/simplelocator/v2/search?address=${codigo}j&latitude=${latitude}&longitude=${longitude}&distance=5`;
    return this.http.get(url) as Observable<any[]>
  }

  public dataCodigos(){
    return [
      {
          "latitude": 43.6624115907006,
          "longitude": -79.3767019962831,
          "codigo": "M5B"
      },
      {
          "latitude": 43.5835273221256,
          "longitude": -79.5830346439152,
          "codigo": "L5A"
      },
      {
          "latitude": 43.8282878044962,
          "longitude": -79.2871887120996,
          "codigo": "L3R"
      },
      {
          "latitude": 43.870605908671,
          "longitude": -79.2333765127544,
          "codigo": "L3P"
      },
      {
          "latitude": 43.8565049922623,
          "longitude": -79.281284597739,
          "codigo": "L3R"
      },
      {
          "latitude": 43.6656407445193,
          "longitude": -79.3047755781566,
          "codigo": "M4M"
      },
      {
          "latitude": 43.6414479950711,
          "longitude": -79.5352148853673,
          "codigo": "M9B"
      },
      {
          "latitude": 43.6146234130922,
          "longitude": -79.5452134953295,
          "codigo": "M9C"
      },
      {
          "latitude": 43.5582220055504,
          "longitude": -79.608668751932,
          "codigo": "L5C"
      },
      {
          "latitude": 43.6220031176086,
          "longitude": -79.7334042233387,
          "codigo": "L5N"
      },
      {
          "latitude": 43.5950425891341,
          "longitude": -79.7148504966634,
          "codigo": "L5N"
      },
      {
          "latitude": 43.6125311935899,
          "longitude": -79.7287960078167,
          "codigo": "L5N"
      },
      {
          "latitude": 43.5906838625061,
          "longitude": -79.5189633101068,
          "codigo": "M8V"
      },
      {
          "latitude": 43.5653602174394,
          "longitude": -79.6833248659675,
          "codigo": "L5M"
      },
      {
          "latitude": 43.5723719906363,
          "longitude": -79.6755598002924,
          "codigo": "L5M"
      },
      {
          "latitude": 43.7945223555271,
          "longitude": -79.1155210540538,
          "codigo": "M1C"
      },
      {
          "latitude": 43.634079298882,
          "longitude": -79.3529938278659,
          "codigo": "M5J"
      },
      {
          "latitude": 43.6418025241045,
          "longitude": -79.3745303358097,
          "codigo": "M5J"
      },
      {
          "latitude": 43.7156755552179,
          "longitude": -79.3194403639246,
          "codigo": "M3C"
      },
      {
          "latitude": 43.7615350805695,
          "longitude": -79.4399692394063,
          "codigo": "M3H"
      },
      {
          "latitude": 43.7447703060201,
          "longitude": -79.4864416081988,
          "codigo": "M3J"
      },
      {
          "latitude": 43.6478791042216,
          "longitude": -79.8522757094936,
          "codigo": "L0P"
      },
      {
          "latitude": 43.6418025241045,
          "longitude": -79.3745303358097,
          "codigo": "M5E"
      },
      {
          "latitude": 43.6459690668389,
          "longitude": -79.849881774065,
          "codigo": "L0P"
      },
      {
          "latitude": 43.7302648940179,
          "longitude": -79.7597833856729,
          "codigo": "L6Z"
      },
      {
          "latitude": 43.6478791042216,
          "longitude": -79.8522757094936,
          "codigo": "L7A"
      },
      {
          "latitude": 43.8293400897885,
          "longitude": -79.7163797167869,
          "codigo": "L7C"
      },
      {
          "latitude": 43.7104167148045,
          "longitude": -79.9366815915755,
          "codigo": "L7G"
      },
      {
          "latitude": 43.6748905946495,
          "longitude": -79.8888708961254,
          "codigo": "L7G"
      },
      {
          "latitude": 43.7423705120406,
          "longitude": -79.9796376952174,
          "codigo": "L7K"
      },
      {
          "latitude": 43.650846895257,
          "longitude": -79.38661129158,
          "codigo": "M5T"
      },
      {
          "latitude": 43.8930870832529,
          "longitude": -78.8659376904452,
          "codigo": "L1J"
      },
      {
          "latitude": 43.8525679079558,
          "longitude": -78.8821771906138,
          "codigo": "L1N"
      },
      {
          "latitude": 43.6696606060606,
          "longitude": -79.3894935837606,
          "codigo": "M5S"
      },
      {
          "latitude": 43.8777615100721,
          "longitude": -78.80112953169,
          "codigo": "L1H"
      },
      {
          "latitude": 43.6967443058242,
          "longitude": -79.3717257007493,
          "codigo": "M4S"
      },
      {
          "latitude": 43.6384821600439,
          "longitude": -79.4482179115938,
          "codigo": "M6R"
      },
      {
          "latitude": 43.8581006932368,
          "longitude": -79.5905603900749,
          "codigo": "L0J"
      },
      {
          "latitude": 43.6078947087786,
          "longitude": -79.6186528879261,
          "codigo": "L4Z"
      },
      {
          "latitude": 43.6050564929186,
          "longitude": -79.5597581476273,
          "codigo": "L4X"
      },
      {
          "latitude": 43.5835273221256,
          "longitude": -79.5830346439152,
          "codigo": "L4Y"
      },
      {
          "latitude": 43.7535194977822,
          "longitude": -79.2553552954588,
          "codigo": "M1P"
      },
      {
          "latitude": 43.6696159147118,
          "longitude": -79.6902270974943,
          "codigo": "L6W"
      },
      {
          "latitude": 43.7300478122916,
          "longitude": -79.2778666064822,
          "codigo": "M1R"
      },
      {
          "latitude": 43.6807867931707,
          "longitude": -79.4326924073675,
          "codigo": "M6C"
      },
      {
          "latitude": 43.6807867931707,
          "longitude": -79.4326924073675,
          "codigo": "M6C"
      },
      {
          "latitude": 43.6807867931707,
          "longitude": -79.4326924073675,
          "codigo": "M6E"
      },
      {
          "latitude": 43.6810450973561,
          "longitude": -79.4174631072582,
          "codigo": "M6G"
      },
      {
          "latitude": 43.6452862153224,
          "longitude": -79.4919292833543,
          "codigo": "M8X"
      },
      {
          "latitude": 43.8425034984137,
          "longitude": -79.225857096334,
          "codigo": "L3S"
      },
      {
          "latitude": 43.8140460058339,
          "longitude": -79.3485766022057,
          "codigo": "L3T"
      },
      {
          "latitude": 43.8340770603301,
          "longitude": -79.6103530524961,
          "codigo": "L4H"
      },
      {
          "latitude": 43.8396806972224,
          "longitude": -79.5863046023008,
          "codigo": "L4H"
      },
      {
          "latitude": 43.8347397993678,
          "longitude": -79.4286176951363,
          "codigo": "L4J"
      },
      {
          "latitude": 43.7839994754522,
          "longitude": -79.4844124510858,
          "codigo": "L4K"
      },
      {
          "latitude": 43.8282099766588,
          "longitude": -79.5464638366733,
          "codigo": "L4L"
      },
      {
          "latitude": 43.8581006932368,
          "longitude": -79.5905603900749,
          "codigo": "L4L"
      },
      {
          "latitude": 43.6719914976468,
          "longitude": -79.3367690664791,
          "codigo": "M4K"
      },
      {
          "latitude": 43.6656407445193,
          "longitude": -79.3047755781566,
          "codigo": "M4L"
      },
      {
          "latitude": 43.5868822781441,
          "longitude": -79.66163744042,
          "codigo": "L5V"
      },
      {
          "latitude": 43.6514285048837,
          "longitude": -79.4401772152272,
          "codigo": "M6P"
      },
      {
          "latitude": 43.6997183591051,
          "longitude": -79.4671013963897,
          "codigo": "M6M"
      },
      {
          "latitude": 43.6858959008734,
          "longitude": -79.7599783959221,
          "codigo": "L6V"
      },
      {
          "latitude": 43.683229022677,
          "longitude": -79.461284324532,
          "codigo": "M6N"
      },
      {
          "latitude": 43.6014250086296,
          "longitude": -79.5263949381958,
          "codigo": "M8W"
      },
      {
          "latitude": 43.6452862153224,
          "longitude": -79.4919292833543,
          "codigo": "M8Y"
      },
      {
          "latitude": 43.7291888995014,
          "longitude": -79.304498892755,
          "codigo": "M4A"
      },
      {
          "latitude": 43.6976468572185,
          "longitude": -79.2909442807513,
          "codigo": "M4B"
      },
      {
          "latitude": 43.6976468572185,
          "longitude": -79.2909442807513,
          "codigo": "M4C"
      },
      {
          "latitude": 43.6360695092684,
          "longitude": -79.6688430101785,
          "codigo": "L5W"
      },
      {
          "latitude": 43.6123209720293,
          "longitude": -79.7293329053842,
          "codigo": "L5W"
      },
      {
          "latitude": 43.7366558766746,
          "longitude": -79.6307075682563,
          "codigo": "L6S"
      },
      {
          "latitude": 43.6696159147118,
          "longitude": -79.6902270974943,
          "codigo": "L6T"
      },
      {
          "latitude": 43.8757607110367,
          "longitude": -79.7115127554557,
          "codigo": "L7E"
      },
      {
          "latitude": 43.5582220055504,
          "longitude": -79.608668751932,
          "codigo": "L5B"
      },
      {
          "latitude": 43.5810698663549,
          "longitude": -79.5434997123996,
          "codigo": "L5E"
      },
      {
          "latitude": 43.5519833558199,
          "longitude": -79.5821499035835,
          "codigo": "L5G"
      },
      {
          "latitude": 43.785596568361,
          "longitude": -79.2352810737254,
          "codigo": "M1S"
      },
      {
          "latitude": 43.7750186847546,
          "longitude": -79.2845246781232,
          "codigo": "M1T"
      },
      {
          "latitude": 43.7853368929875,
          "longitude": -79.1933299845758,
          "codigo": "M1E"
      },
      {
          "latitude": 43.8213857906533,
          "longitude": -79.3169128136929,
          "codigo": "M1V"
      },
      {
          "latitude": 43.7930995030167,
          "longitude": -79.331400413476,
          "codigo": "M2J"
      },
      {
          "latitude": 43.7969589348016,
          "longitude": -79.3820625162337,
          "codigo": "M2M"
      },
      {
          "latitude": 43.6811228952844,
          "longitude": -79.3912048483937,
          "codigo": "M4T"
      },
      {
          "latitude": 43.7667002333691,
          "longitude": -79.1447493822231,
          "codigo": "M1E"
      },
      {
          "latitude": 43.8471172981851,
          "longitude": -79.3706654023072,
          "codigo": "L4B"
      },
      {
          "latitude": 43.5420187185343,
          "longitude": -79.8628083161178,
          "codigo": "L9T"
      },
      {
          "latitude": 43.804707111027,
          "longitude": -79.1342353029188,
          "codigo": "M1B"
      },
      {
          "latitude": 43.7539756535741,
          "longitude": -79.2034511375363,
          "codigo": "M1G"
      },
      {
          "latitude": 43.7539756535741,
          "longitude": -79.2034511375363,
          "codigo": "M1J"
      },
      {
          "latitude": 43.735554636038,
          "longitude": -79.2049433040331,
          "codigo": "M1M"
      },
      {
          "latitude": 43.7969589348016,
          "longitude": -79.3820625162337,
          "codigo": "M2K"
      },
      {
          "latitude": 43.7564981841777,
          "longitude": -79.3438538721062,
          "codigo": "M2L"
      },
      {
          "latitude": 43.7364011968739,
          "longitude": -79.3818968141694,
          "codigo": "M4N"
      },
      {
          "latitude": 43.7243776050146,
          "longitude": -79.4055957003342,
          "codigo": "M4R"
      },
      {
          "latitude": 43.8935885091885,
          "longitude": -79.4197847132655,
          "codigo": "L4C"
      },
      {
          "latitude": 43.7067278928686,
          "longitude": -79.3983561075117,
          "codigo": "M4P"
      },
      {
          "latitude": 43.8282560863316,
          "longitude": -79.5461766692109,
          "codigo": "L6A"
      },
      {
          "latitude": 43.6547051042008,
          "longitude": -79.4600330889752,
          "codigo": "M6S"
      },
      {
          "latitude": 43.6476090125402,
          "longitude": -79.5102334002896,
          "codigo": "M8Z"
      },
      {
          "latitude": 43.6017384713668,
          "longitude": -79.6457773371115,
          "codigo": "L5R"
      },
      {
          "latitude": 43.662777465916,
          "longitude": -79.5055572407361,
          "codigo": "M9A"
      },
      {
          "latitude": 43.7545666046403,
          "longitude": -79.5305673243183,
          "codigo": "M9L"
      },
      {
          "latitude": 43.6711284882713,
          "longitude": -79.2798449074931,
          "codigo": "M4E"
      },
      {
          "latitude": 43.7930995030167,
          "longitude": -79.331400413476,
          "codigo": "M2H"
      },
      {
          "latitude": 43.7632816933524,
          "longitude": -79.7221787005951,
          "codigo": "L6P"
      },
      {
          "latitude": 43.7031773924228,
          "longitude": -79.3353713916712,
          "codigo": "M4H"
      },
      {
          "latitude": 43.7536039071854,
          "longitude": -79.4083761321384,
          "codigo": "M2N"
      },
      {
          "latitude": 43.6967443058242,
          "longitude": -79.3717257007493,
          "codigo": "M4G"
      },
      {
          "latitude": 43.6967443058242,
          "longitude": -79.3717257007493,
          "codigo": "M4G"
      },
      {
          "latitude": 43.8425034984137,
          "longitude": -79.225857096334,
          "codigo": "L6B"
      },
      {
          "latitude": 43.6829986067157,
          "longitude": -79.7601621982747,
          "codigo": "L6X"
      },
      {
          "latitude": 43.6431271243969,
          "longitude": -79.8207580531451,
          "codigo": "L6X"
      },
      {
          "latitude": 43.6434349018659,
          "longitude": -79.821187336961,
          "codigo": "L6X"
      },
      {
          "latitude": 43.6829986067157,
          "longitude": -79.7601621982747,
          "codigo": "L6Y"
      },
      {
          "latitude": 43.6286984314419,
          "longitude": -79.7458848584179,
          "codigo": "L6Y"
      },
      {
          "latitude": 43.650846895257,
          "longitude": -79.38661129158,
          "codigo": "M5G"
      },
      {
          "latitude": 43.8005069975586,
          "longitude": -79.2996357069662,
          "codigo": "M1W"
      },
      {
          "latitude": 43.7302648940179,
          "longitude": -79.7597833856729,
          "codigo": "L6R"
      },
      {
          "latitude": 43.8130468010329,
          "longitude": -79.2429554932862,
          "codigo": "M1X"
      },
      {
          "latitude": 43.7419298039385,
          "longitude": -79.3943005935617,
          "codigo": "M2P"
      },
      {
          "latitude": 43.7028719034325,
          "longitude": -79.5038280857701,
          "codigo": "M9N"
      },
      {
          "latitude": 43.6447646917222,
          "longitude": -79.3850135053324,
          "codigo": "M5H"
      },
      {
          "latitude": 43.6938117207746,
          "longitude": -79.5125424280223,
          "codigo": "M9P"
      },
      {
          "latitude": 43.7397851050534,
          "longitude": -79.3305338630878,
          "codigo": "M3B"
      },
      {
          "latitude": 43.7192524888373,
          "longitude": -79.4298045001108,
          "codigo": "M6A"
      },
      {
          "latitude": 43.6455612930599,
          "longitude": -79.3591835303938,
          "codigo": "M5A"
      },
      {
          "latitude": 43.6468745856638,
          "longitude": -79.376959387138,
          "codigo": "M5C"
      },
      {
          "latitude": 43.7012807904958,
          "longitude": -79.3270415985027,
          "codigo": "M4J"
      },
      {
          "latitude": 43.6414475996894,
          "longitude": -79.4117336875213,
          "codigo": "M6K"
      },
      {
          "latitude": 43.7362974009928,
          "longitude": -79.5262405129155,
          "codigo": "M9M"
      },
      {
          "latitude": 43.7441741211022,
          "longitude": -79.4978896476801,
          "codigo": "M3L"
      },
      {
          "latitude": 43.7305239760406,
          "longitude": -79.2454494328183,
          "codigo": "M1K"
      },
      {
          "latitude": 43.7009982029669,
          "longitude": -79.2656245622082,
          "codigo": "M1L"
      },
      {
          "latitude": 43.7011034713337,
          "longitude": -79.2441080378127,
          "codigo": "M1N"
      },
      {
          "latitude": 43.7243776050146,
          "longitude": -79.4055957003342,
          "codigo": "M5M"
      },
      {
          "latitude": 43.7021298991319,
          "longitude": -79.4369257700433,
          "codigo": "M6B"
      },
      {
          "latitude": 43.7014283151991,
          "longitude": -79.6096964349219,
          "codigo": "L4T"
      },
      {
          "latitude": 43.7014283151991,
          "longitude": -79.6096964349219,
          "codigo": "L4V"
      },
      {
          "latitude": 43.6378042242442,
          "longitude": -79.5858081427512,
          "codigo": "L4W"
      },
      {
          "latitude": 43.6786048941058,
          "longitude": -79.4318187877152,
          "codigo": "M6H"
      },
      {
          "latitude": 43.6375371829997,
          "longitude": -79.3918261007615,
          "codigo": "M5V"
      },
      {
          "latitude": 43.7764867940466,
          "longitude": -79.4302444158235,
          "codigo": "M2R"
      },
      {
          "latitude": 43.7414918977495,
          "longitude": -79.3142283964461,
          "codigo": "M3A"
      },
      {
          "latitude": 43.6471833014765,
          "longitude": -79.4039940834474,
          "codigo": "M6J"
      },
      {
          "latitude": 43.7028719034325,
          "longitude": -79.5038280857701,
          "codigo": "M6L"
      },
      {
          "latitude": 43.7556712139274,
          "longitude": -79.2240405116294,
          "codigo": "M1H"
      },
      {
          "latitude": 43.7280616086302,
          "longitude": -79.4578783098188,
          "codigo": "M3K"
      },
      {
          "latitude": 43.6732987092963,
          "longitude": -79.5735663035117,
          "codigo": "M9R"
      },
      {
          "latitude": 43.7462408093838,
          "longitude": -79.5686108965316,
          "codigo": "M9V"
      },
      {
          "latitude": 43.712985326638,
          "longitude": -79.537830799616,
          "codigo": "M9W"
      },
      {
          "latitude": 43.7447703060201,
          "longitude": -79.4864416081988,
          "codigo": "M3M"
      },
      {
          "latitude": 43.7491566278155,
          "longitude": -79.504656304247,
          "codigo": "M3N"
      },
      {
          "latitude": 43.7009863044852,
          "longitude": -79.4255499898849,
          "codigo": "M5N"
      },
      {
          "latitude": 43.8612781897923,
          "longitude": -79.0258497931009,
          "codigo": "L1Z"
      },
      {
          "latitude": 43.8254925550924,
          "longitude": -78.9994926711134,
          "codigo": "L1Z"
      },
      {
          "latitude": 43.6631790039623,
          "longitude": -79.3730473070561,
          "codigo": "M4X"
      },
      {
          "latitude": 43.695654141553,
          "longitude": -79.3960960048914,
          "codigo": "M4V"
      },
      {
          "latitude": 43.6631790039623,
          "longitude": -79.3730473070561,
          "codigo": "M4Y"
      },
      {
          "latitude": 43.6994204161732,
          "longitude": -79.3505624597889,
          "codigo": "M4W"
      },
      {
          "latitude": 43.8652906987943,
          "longitude": -79.3752104922383,
          "codigo": "L6C"
      },
      {
          "latitude": 43.8504375387013,
          "longitude": -79.307682461463,
          "codigo": "L6G"
      },
      {
          "latitude": 43.695654141553,
          "longitude": -79.3960960048914,
          "codigo": "M5P"
      },
      {
          "latitude": 43.6811228952844,
          "longitude": -79.3912048483937,
          "codigo": "M5R"
      },
      {
          "latitude": 43.8612781897923,
          "longitude": -79.0258497931009,
          "codigo": "L1T"
      },
      {
          "latitude": 43.8625897214791,
          "longitude": -78.9830843041916,
          "codigo": "L1P"
      },
      {
          "latitude": 43.8254925550924,
          "longitude": -78.9994926711134,
          "codigo": "L1S"
      },
      {
          "latitude": 43.8521499929371,
          "longitude": -79.0654111875049,
          "codigo": "L1X"
      },
      {
          "latitude": 43.8796368620008,
          "longitude": -79.1092711814841,
          "codigo": "L1V"
      },
      {
          "latitude": 43.8160500894604,
          "longitude": -79.0386882134803,
          "codigo": "L1W"
      }
  ]
  }
  private getRequest( query: string, token:TokenSpotify) {
    const url = `${environment.apiSpotify}${ query }`;
    const headers = new HttpHeaders({
      'Authorization': `${token.token_type} ${token.access_token}`
    });
    return this.http.get(url, { headers });
  }
}