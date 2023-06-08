import { logo } from "../assets/footer";



export type CitiesDataType = {
    city: string;
    population: string;
    image: string;
    latitude: number;
    longitude: number;
}

export const CITIES:CitiesDataType[] = [
  {
    city: "New York",
    population: "8,175,133",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
    latitude: 40.6643,
    longitude: -73.9385,
  },
  {
    "city": "Sydney",
    "population": "5,367,206",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/250px-Sydney_Australia._%2821339175489%29.jpg",
    "latitude": -33.8658,
    "longitude": 151.2093
  },
  {
    city: "Chicago",
    population: "2,695,598",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",
    latitude: 41.8376,
    longitude: -87.6818,
  },
  {
    city: "Houston",
    population: "2,100,263",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg",
    latitude: 29.7805,
    longitude: -95.3863,
  },
  {
    city: "Denver",
    population: "600,158",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/240px-DenverCP.JPG",
    latitude: 39.7618,
    longitude: -104.8806,
  },
  {
    city: "London",
    population: "8,908,081",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Puente_de_la_Torre%2C_Londres%2C_Inglaterra%2C_2014-08-11%2C_DD_092.JPG/405px-Puente_de_la_Torre%2C_Londres%2C_Inglaterra%2C_2014-08-11%2C_DD_092.JPG",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    city: "Bangkok",
    population: "8,280,925",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bangkok_skytrain_sunset.jpg/360px-Bangkok_skytrain_sunset.jpg",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    city: "Paris",
    population: "2,140,526",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Paris_from_the_Arc_de_Triomphe%2C_17_October_2019.jpg/220px-Paris_from_the_Arc_de_Triomphe%2C_17_October_2019.jpg",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    city: "Dubai",
    population: "3,331,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Burj_Khalifa_2021.jpg/278px-Burj_Khalifa_2021.jpg",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  {
    city: "Lagos",
    population: "14,368,332",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/National_Theater_in_Lagos_State-Nigeria.jpg/151px-National_Theater_in_Lagos_State-Nigeria.jpg",
    latitude: 6.5244,
    longitude: 3.3792,
  },
  {
    city: "Istanbul",
    population: "15,029,231",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/165px-Hagia_Sophia_%28228968325%29.jpeg",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    city: "Ottawa",
    population: "1,013,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/CanadianMuseumofNature2010-05-19.JPG/220px-CanadianMuseumofNature2010-05-19.JPG",
    latitude: 45.4215,
    longitude: -75.6972,
  },
  {
    city: "Tokyo",
    population: "13,515,271",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg/143px-Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    city: "Seoul",
    population: "9,736,792",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Yeouido%2C_Seoul.jpg/220px-Yeouido%2C_Seoul.jpg",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    "city": "Brasilia",
    "population": "2,570,160",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Est%C3%A1tua_do_Cristo_Redentor_nas_cores_da_Bandeira_do_Brasil.jpg/220px-Est%C3%A1tua_do_Cristo_Redentor_nas_cores_da_Bandeira_do_Brasil.jpg",
    "latitude": -15.7942,
    "longitude": -47.8822
  },  
  {
    city: "Barcelona",
    population: "1,636,762",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/World_Trade_Center_Barcelona_2013_2.jpg/180px-World_Trade_Center_Barcelona_2013_2.jpg",
    latitude: 41.3851,
    longitude: 2.1734,
  },
  {
    city: "Amsterdam",
    population: "872,680",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/268px-KeizersgrachtReguliersgrachtAmsterdam.jpg",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    city: "Rome",
    population: "2,735,363",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rome_%28IT%29%2C_Kolosseum_--_2013_--_3400.jpg/220px-Rome_%28IT%29%2C_Kolosseum_--_2013_--_3400.jpg",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    city: "Vienna",
    population: "1,897,491",
    image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Opera-Vienna-Austria-2005.jpg/220px-Opera-Vienna-Austria-2005.jpg",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    city: "Moscow",
    population: "12,537,954",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/288px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    city: "Athens",
    population: "664,046",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Griechische_Nationalbibliothek.jpg/220px-Griechische_Nationalbibliothek.jpg",
    latitude: 37.983810,
    longitude: 23.727539
  },
  {
    city: "Auckland",
    population: "1,570,500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Two_sailboats_on_the_main_Takapuna_boat_ramp.jpg/240px-Two_sailboats_on_the_main_Takapuna_boat_ramp.jpg",
    latitude: -36.848461,
    longitude: 174.763336
  },
  {
    city: "Abu Dhabi",
    population: "1,480,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Shades_of_Abu_Dhabi_afternoon.jpg/220px-Shades_of_Abu_Dhabi_afternoon.jpg",
    latitude: 24.466667,
    longitude: 54.366669
  },
  {
    city: "Ankara",
    population: "5,503,985",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ankara_asv2021-10_img19_Railway_station.jpg/220px-Ankara_asv2021-10_img19_Railway_station.jpg",
    latitude: 39.9334,
    longitude: 32.8597
  },
  {
    city: "Berlin",
    population: "3,769,495",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/102px-Brandenburger_Tor_abends.jpg",
    latitude: 52.5200,
    longitude: 13.4050
  },
  {
    city: "Beijing",
    population: "21,542,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/%C2%B7%CB%99%C2%B7ChinaUli2010%C2%B7.%C2%B7_Beijing_-_Forbidden_Town_-_panoramio_%2881%29.jpg/220px-%C2%B7%CB%99%C2%B7ChinaUli2010%C2%B7.%C2%B7_Beijing_-_Forbidden_Town_-_panoramio_%2881%29.jpg",
    latitude: 39.9042,
    longitude: 116.4074
  },
  {
    city: "Cairo",
    population: "9,500,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Cairo_University_after_sunset.JPG/220px-Cairo_University_after_sunset.JPG",
    latitude: 30.0444,
    longitude: 31.2357
  },
  {
    city: "Cape Town",
    population: "3,776,455",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/UCT_Upper_Campus_landscape_view.jpg/220px-UCT_Upper_Campus_landscape_view.jpg",
    latitude: -33.9249,
    longitude: 18.4241
  },
  {
    city: "Copenhagen",
    population: "632,340",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Copenhagen_Opera_House_2014_04.jpg/220px-Copenhagen_Opera_House_2014_04.jpg",
    latitude: 55.6761,
    longitude: 12.5683
  },
  {
    city: "Calgary",
    population: "1,239,220",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2020_Calgary_Saddledome.jpg/220px-2020_Calgary_Saddledome.jpg",
    latitude: 51.0447,
    longitude: -114.0719
  },
  {
    city: "Delhi",
    population: "31,400,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Delhi_Red_fort.jpg/220px-Delhi_Red_fort.jpg",
    latitude: 28.6139,
    longitude: 77.2090
  },
  {
    city: "Dublin",
    population: "1,173,179",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/National_Museum_of_Ireland.jpg/220px-National_Museum_of_Ireland.jpg",
    latitude: 53.3498,
    longitude: -6.2603
  },
  {
    city: "Durban",
    population: "3,827,900",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mm_stadium.jpg/220px-Mm_stadium.jpg",
    latitude: -29.8587,
    longitude: 31.0218
  },
  {
    city: "Edinburgh",
    population: "536,775",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/BT_Edinburgh_Park.jpg/220px-BT_Edinburgh_Park.jpg",
    latitude: 55.9533,
    longitude: -3.1883
  },
  {
    city: "Los Angeles",
    population: "3,898,747",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Skyline_view_of_Los_Angeles%2C_California_LCCN2013631685_%28cropped%29.tif/lossy-page1-220px-Skyline_view_of_Los_Angeles%2C_California_LCCN2013631685_%28cropped%29.tif.jpg",
    latitude: 34.0522,
    longitude: -118.2437
  },
  {
    city: "Lisbon",
    population: "547,631",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/A_ver_S._Vicente.jpg/220px-A_ver_S._Vicente.jpg",
    latitude: 38.7223,
    longitude: -9.1393
  },
  {
    city: "Lima",
    population: "9,751,717",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Airport_lima_peru.jpg/220px-Airport_lima_peru.jpg",
    latitude: -12.0464,
    longitude: -77.0428
  },
  {
    city: "Giza",
    population: "4,778,120",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/All_Gizah_Pyramids.jpg/139px-All_Gizah_Pyramids.jpg",
    latitude: 30.0131,
    longitude: 31.2089
  },
  {
    city: "Geneva",
    population: "201,818",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mus%C3%A9e_d%27Art_et_d%27Histoire_%2846745210785%29.jpg/120px-Mus%C3%A9e_d%27Art_et_d%27Histoire_%2846745210785%29.jpg",
    latitude: 46.2044,
    longitude: 6.1432
  },
  {
    city: "Hong Kong",
    population: "7,547,652",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sik_Sik_Yuen_Wong_Tai_Sin_Temple_%281944336752%29.jpg/220px-Sik_Sik_Yuen_Wong_Tai_Sin_Temple_%281944336752%29.jpg",
    latitude: 22.3193,
    longitude: 114.1694
  },
  {
    city: "Hanoi",
    population: "7,587,800",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/VN_Chua_Huong1_tango7174.JPG/220px-VN_Chua_Huong1_tango7174.JPG",
    latitude: 21.0285,
    longitude: 105.8542
  },
  {
    city: "Hyderabad",
    population: "6,809,970",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Osmania_College_of_Arts_and_Social.jpg/220px-Osmania_College_of_Arts_and_Social.jpg",
    latitude: 17.3850,
    longitude: 78.4867
  },
  {
    city: "Hamburg",
    population: "1,841,179",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Freedom-of-the-Seas--in-Hamburg.jpg/270px-Freedom-of-the-Seas--in-Hamburg.jpg",
    latitude: 53.5511,
    longitude: 9.9937
  },
  {
    city: "Jakarta",
    population: "10,562,088",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Klenteng_Jin_De_Yuan%2C_Glodok%2C_Jakarta.jpg/299px-Klenteng_Jin_De_Yuan%2C_Glodok%2C_Jakarta.jpg",
    latitude: -6.2146,
    longitude: 106.8451
  },
  {
    city: "Jerusalem",
    population: "890,428",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg/220px-Jerusalem-2013%282%29-Temple_Mount-Dome_of_the_Rock_%28SE_exposure%29.jpg",
    latitude: 31.7683,
    longitude: 35.2137
  },
  {
    city: "Jeddah",
    population: "3,976,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Entry-Gate-of-Mecca-on-Jaddah-Makkah-Highway_2.jpg/220px-Entry-Gate-of-Mecca-on-Jaddah-Makkah-Highway_2.jpg",
    latitude: 21.4858,
    longitude: 39.1925
  },
  {
    city: "Kiev",
    population: "2,950,819",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Universidad_Roja_de_Kiev.jpg/220px-Universidad_Roja_de_Kiev.jpg",
    latitude: 50.4501,
    longitude: 30.5234
  },
  {
    city: "Kuala Lumpur",
    population: "1,808,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kuala_Lumpur._The_Sultan_Abdul_Samad_Building._Central_part._2019-12-01_23-33-18.jpg/220px-Kuala_Lumpur._The_Sultan_Abdul_Samad_Building._Central_part._2019-12-01_23-33-18.jpg",
    latitude: 3.1390,
    longitude: 101.6869
  },
  {
    city: "Mumbai",
    population: "12,478,447",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Hajiali.jpg/220px-Hajiali.jpg",
    latitude: 19.0760,
    longitude: 72.8777
  },
  {
    city: "Madrid",
    population: "3,273,049",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Madrid-1758045.jpg/220px-Madrid-1758045.jpg",
    latitude: 40.4168,
    longitude: -3.7038
  },
  {
    city: "Manila",
    population: "1,780,148",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Intramuros-Binondo_Bridge.jpg/220px-Intramuros-Binondo_Bridge.jpg",
    latitude: 14.5995,
    longitude: 120.9842
  },
  {
    city: "Melbourne",
    population: "5,078,193",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Skyline_of_Melbourne_%28Feb_2021%29.jpg/220px-Skyline_of_Melbourne_%28Feb_2021%29.jpg",
    latitude: -37.8136,
    longitude: 144.9631
  },
  {
    city: "Osaka",
    population: "2,691,876",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Osaka_Dotonbori_Ebisu_Bridge.jpg/293px-Osaka_Dotonbori_Ebisu_Bridge.jpg",
    latitude: 34.6937,
    longitude: 135.5023
  },
  {
    city: "Oslo",
    population: "673,469",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Stortinget%2C_Oslo%2C_Norway.jpg/200px-Stortinget%2C_Oslo%2C_Norway.jpg",
    latitude: 59.9139,
    longitude: 10.7522
  },
  {
    city: "Prague",
    population: "1,325,199",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Charles_Bridge_%28Karl%C5%AFv_most%29%2C_Vltava_River%2C_Prague%2C_2015.jpg/220px-Charles_Bridge_%28Karl%C5%AFv_most%29%2C_Vltava_River%2C_Prague%2C_2015.jpg",
    latitude: 50.0755,
    longitude: 14.4378
  },
  {
    city: "Perth",
    population: "2,041,900",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/WAGovernmentHouse1crop_gobeirne.JPG/220px-WAGovernmentHouse1crop_gobeirne.JPG",
    latitude: -31.9505,
    longitude: 115.8605
  },
  {
    city: "Porto",
    population: "1,780,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Palaciodecristalporto.jpg/220px-Palaciodecristalporto.jpg",
    latitude: 41.1496,
    longitude: -8.6109
  },
  {
    city: "São Paulo",
    population: "12,325,232",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/S%C3%A3o_Paulo_Marginal_Pinheiros.png/220px-S%C3%A3o_Paulo_Marginal_Pinheiros.png",
    latitude: -23.5505,
    longitude: -46.6333
  },
  {
    city: "Toronto",
    population: "2,930,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Queen_Elizabeth_at_the_Queen%27s_Plate.jpg/220px-Queen_Elizabeth_at_the_Queen%27s_Plate.jpg",
    latitude: 43.651070,
    longitude: -79.347015
  },
  {
    city: "Tehran",
    population: "8,693,706",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Tehran_from_Qeytariyeh.jpg/220px-Tehran_from_Qeytariyeh.jpg",
    latitude: 35.6892,
    longitude: 51.3890
  },
  {
    city: "Warsaw",
    population: "1,790,658",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Belweder_%282%29.JPG/294px-Belweder_%282%29.JPG",
    latitude: 52.2297,
    longitude: 21.0122
  },
  {
    city: "Wellington",
    population: "418,500",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wellington%2C_May_2015_%2820c%29.JPG/220px-Wellington%2C_May_2015_%2820c%29.JPG",
    latitude: -41.2865,
    longitude: 174.7762
  },
  {
    city: "Winnipeg",
    population: "711,925",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lesislaturemb.jpg/220px-Lesislaturemb.jpg",
    latitude: 49.8951,
    longitude: -97.1384
  }
  
];



//footer
export const footer = {
  logo,
  tagline: "Casting meteorological data on the map.",
  rights: "Copyright MetCast. 2023 All rights reserved.",
  menuList: [
    {
      menu: "Product",
      submenu: ["Weather Forecast", "Locations", "Markers", "Maps"],
    },
    {
      menu: "Company",
      submenu: ["About us", "FAQs", "Talk to an expert"],
    },
    {
      menu: "Legal",
      submenu: ["Terms & Conditions", "Privacy"],
    },
  ],
};




export type WeatherDataType = {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    humidity: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    pop: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    uvi: number;
    weather: {
      description: string;
      icon: string;
      id: number;
      main: string;
    }[];
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;
  }
  