const rocketData =
    [
        {
            "id": 1,
            "name": "Falcon Heavy",
            "group_letter": "A",
            "number": 1,
            "group": "Launchers",
            "year_built": 2018,
            "weight": 1420788,
            "max_earth_distance": 35786,
            "max_speed": 35400,
            "development_cost": 500,
            "mission_duration": 1,
            "payload": 63800,
            "involved_nations": 1,
            "mission_goal": "Heavy-lift launch vehicle",
            "lead_organization": "SpaceX",
            "": "Falcon Heavy"
        },
        {
            "id": 2,
            "name": "Saturn V",
            "group_letter": "A",
            "number": 2,
            "group": "Launchers",
            "year_built": 1967,
            "weight": 2970000,
            "max_earth_distance": 384400,
            "max_speed": 38400,
            "development_cost": 6500,
            "mission_duration": 1,
            "payload": 118000,
            "involved_nations": 1,
            "mission_goal": "Manned moon landing",
            "lead_organization": "NASA",
            "": "Saturn V"
        },
        {
            "id": 3,
            "name": "Ariane 5",
            "group_letter": "A",
            "number": 3,
            "group": "Launchers",
            "year_built": 1996,
            "weight": 780000,
            "max_earth_distance": 35786,
            "max_speed": 11300,
            "development_cost": 7000,
            "mission_duration": 1,
            "payload": 21000,
            "involved_nations": 12,
            "mission_goal": "Heavy-lift launch vehicle",
            "lead_organization": "ESA",
            "": "Ariane 5"
        },
        {
            "id": 4,
            "name": "Long March 5",
            "group_letter": "A",
            "number": 4,
            "group": "Launchers",
            "year_built": 2016,
            "weight": 869000,
            "max_earth_distance": 35786,
            "max_speed": 10800,
            "development_cost": 8500,
            "mission_duration": 1,
            "payload": 25000,
            "involved_nations": 1,
            "mission_goal": "Heavy-lift launch vehicle",
            "lead_organization": "CNSA",
            "": "Long March 5"
        },
        {
            "id": 5,
            "name": "Electron",
            "group_letter": "B",
            "number": 1,
            "group": "Light rockets",
            "year_built": 2017,
            "weight": 12080,
            "max_earth_distance": 2000,
            "max_speed": 27500,
            "development_cost": 90,
            "mission_duration": 1,
            "payload": 300,
            "involved_nations": 1,
            "mission_goal": "Small satellite launch",
            "lead_organization": "Rocket Lab",
            "": "Electron"
        },
        {
            "id": 6,
            "name": "Vega",
            "group_letter": "B",
            "number": 2,
            "group": "Light rockets",
            "year_built": 2012,
            "weight": 137000,
            "max_earth_distance": 700,
            "max_speed": 28750,
            "development_cost": 1200,
            "mission_duration": 1,
            "payload": 1500,
            "involved_nations": 10,
            "mission_goal": "Small satellite launch",
            "lead_organization": "ESA",
            "": "Vega"
        },
        {
            "id": 7,
            "name": "Falcon 1",
            "group_letter": "B",
            "number": 3,
            "group": "Light rockets",
            "year_built": 2006,
            "weight": 38556,
            "max_earth_distance": 2000,
            "max_speed": 27500,
            "development_cost": 90,
            "mission_duration": 1,
            "payload": 670,
            "involved_nations": 1,
            "mission_goal": "Technology demonstration",
            "lead_organization": "SpaceX",
            "": "Falcon 1"
        },
        {
            "id": 8,
            "name": "Pegasus",
            "group_letter": "B",
            "number": 4,
            "group": "Light rockets",
            "year_built": 1990,
            "weight": 18500,
            "max_earth_distance": 2000,
            "max_speed": 28000,
            "development_cost": 1400,
            "mission_duration": 1,
            "payload": 443,
            "involved_nations": 1,
            "mission_goal": "Small satellite launch",
            "lead_organization": "Northrop Grumman",
            "": "Pegasus"
        },
        {
            "id": 9,
            "name": "Voyager 1",
            "group_letter": "C",
            "number": 1,
            "group": "Probes",
            "year_built": 1977,
            "weight": 773,
            "max_earth_distance": 22286000,
            "max_speed": 62000,
            "development_cost": 250,
            "mission_duration": 19000,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Solar system exploration",
            "lead_organization": "NASA",
            "": "Voyager 1"
        },
        {
            "id": 10,
            "name": "DART",
            "group_letter": "C",
            "number": 2,
            "group": "Probes",
            "year_built": 2021,
            "weight": 610,
            "max_earth_distance": 11000000,
            "max_speed": 24140,
            "development_cost": 330,
            "mission_duration": 301,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Planetary defense demonstration",
            "lead_organization": "NASA",
            "": "DART"
        },
        {
            "id": 11,
            "name": "New Horizons",
            "group_letter": "C",
            "number": 3,
            "group": "Probes",
            "year_built": 2006,
            "weight": 478,
            "max_earth_distance": 7500000,
            "max_speed": 84000,
            "development_cost": 700,
            "mission_duration": 6000,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Pluto system and Kuiper belt exploration",
            "lead_organization": "NASA",
            "": "New Horizons"
        },
        {
            "id": 12,
            "name": "Juno",
            "group_letter": "C",
            "number": 4,
            "group": "Probes",
            "year_built": 2011,
            "weight": 3625,
            "max_earth_distance": 928000,
            "max_speed": 265000,
            "development_cost": 1200,
            "mission_duration": 3000,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Jupiter exploration",
            "lead_organization": "NASA",
            "": "Juno"
        },
        {
            "id": 13,
            "name": "Hubble Space Telescope",
            "group_letter": "D",
            "number": 1,
            "group": "Satellites",
            "year_built": 1990,
            "weight": 11110,
            "max_earth_distance": 559,
            "max_speed": 28000,
            "development_cost": 4600,
            "mission_duration": 10000,
            "payload": 0,
            "involved_nations": 2,
            "mission_goal": "Space observatory",
            "lead_organization": "NASA/ESA",
            "": "Hubble Space Telescope"
        },
        {
            "id": 14,
            "name": "JWST",
            "group_letter": "D",
            "number": 2,
            "group": "Satellites",
            "year_built": 2021,
            "weight": 6200,
            "max_earth_distance": 1500000,
            "max_speed": 1500000,
            "development_cost": 10000,
            "mission_duration": 5475,
            "payload": 0,
            "involved_nations": 15,
            "mission_goal": "Space observatory",
            "lead_organization": "NASA/ESA/CSA",
            "": "JWST"
        },
        {
            "id": 15,
            "name": "Kepler",
            "group_letter": "D",
            "number": 3,
            "group": "Satellites",
            "year_built": 2009,
            "weight": 1032,
            "max_earth_distance": 149600000,
            "max_speed": 107000,
            "development_cost": 550,
            "mission_duration": 1470,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Exoplanet discovery",
            "lead_organization": "NASA",
            "": "Kepler"
        },
        {
            "id": 16,
            "name": "GPS Block IIIA",
            "group_letter": "D",
            "number": 4,
            "group": "Satellites",
            "year_built": 2018,
            "weight": 3680,
            "max_earth_distance": 20200,
            "max_speed": 14000,
            "development_cost": 577,
            "mission_duration": 5475,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Navigation",
            "lead_organization": "US Air Force",
            "": "GPS Block IIIA"
        },
        {
            "id": 17,
            "name": "Curiosity",
            "group_letter": "E",
            "number": 1,
            "group": "Rovers",
            "year_built": 2011,
            "weight": 899,
            "max_earth_distance": 225000000,
            "max_speed": 0.14,
            "development_cost": 2500,
            "mission_duration": 3000,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Mars exploration",
            "lead_organization": "NASA",
            "": "Curiosity"
        },
        {
            "id": 18,
            "name": "Perseverance",
            "group_letter": "E",
            "number": 2,
            "group": "Rovers",
            "year_built": 2020,
            "weight": 1025,
            "max_earth_distance": 225000000,
            "max_speed": 0.16,
            "development_cost": 2700,
            "mission_duration": 700,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Mars exploration",
            "lead_organization": "NASA",
            "": "Perseverance"
        },
        {
            "id": 19,
            "name": "Zhurong",
            "group_letter": "E",
            "number": 3,
            "group": "Rovers",
            "year_built": 2021,
            "weight": 240,
            "max_earth_distance": 225000000,
            "max_speed": 0.2,
            "development_cost": 300,
            "mission_duration": 100,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Mars exploration",
            "lead_organization": "CNSA",
            "": "Zhurong"
        },
        {
            "id": 20,
            "name": "Opportunity",
            "group_letter": "E",
            "number": 4,
            "group": "Rovers",
            "year_built": 2003,
            "weight": 185,
            "max_earth_distance": 225000000,
            "max_speed": 0.18,
            "development_cost": 400,
            "mission_duration": 5111,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Mars exploration",
            "lead_organization": "NASA",
            "": "Opportunity"
        },
        {
            "id": 21,
            "name": "InSight",
            "group_letter": "F",
            "number": 1,
            "group": "Landers",
            "year_built": 2018,
            "weight": 694,
            "max_earth_distance": 225000000,
            "max_speed": 0,
            "development_cost": 830,
            "mission_duration": 709,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Mars exploration",
            "lead_organization": "NASA",
            "": "InSight"
        },
        {
            "id": 22,
            "name": "Chang'e 4",
            "group_letter": "F",
            "number": 2,
            "group": "Landers",
            "year_built": 2019,
            "weight": 3780,
            "max_earth_distance": 384400,
            "max_speed": 0,
            "development_cost": 180,
            "mission_duration": 1000,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Moon exploration",
            "lead_organization": "CNSA",
            "": "Chang'e 4"
        },
        {
            "id": 23,
            "name": "Venera 10",
            "group_letter": "F",
            "number": 3,
            "group": "Landers",
            "year_built": 1975,
            "weight": 5030,
            "max_earth_distance": 40000000,
            "max_speed": 0,
            "development_cost": 60,
            "mission_duration": 1,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Venus exploration",
            "lead_organization": "Soviet Union",
            "": "Venera 10"
        },
        {
            "id": 24,
            "name": "Hayabusa2",
            "group_letter": "F",
            "number": 4,
            "group": "Landers",
            "year_built": 2014,
            "weight": 609,
            "max_earth_distance": 340000000,
            "max_speed": 0,
            "development_cost": 150,
            "mission_duration": 2190,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Asteroid sample return",
            "lead_organization": "JAXA",
            "": "Hayabusa2"
        },
        {
            "id": 25,
            "name": "ISS",
            "group_letter": "G",
            "number": 1,
            "group": "Space Stations",
            "year_built": 1998,
            "weight": 419725,
            "max_earth_distance": 408,
            "max_speed": 28000,
            "development_cost": 150000,
            "mission_duration": 9000,
            "payload": 0,
            "involved_nations": 15,
            "mission_goal": "Space research laboratory",
            "lead_organization": "International partnership",
            "": "ISS"
        },
        {
            "id": 26,
            "name": "Tiangong",
            "group_letter": "G",
            "number": 2,
            "group": "Space Stations",
            "year_built": 2021,
            "weight": 66000,
            "max_earth_distance": 400,
            "max_speed": 28000,
            "development_cost": 2000,
            "mission_duration": 5475,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Space research laboratory",
            "lead_organization": "CNSA",
            "": "Tiangong"
        },
        {
            "id": 27,
            "name": "Mir",
            "group_letter": "G",
            "number": 3,
            "group": "Space Stations",
            "year_built": 1986,
            "weight": 129700,
            "max_earth_distance": 354,
            "max_speed": 28000,
            "development_cost": 4200,
            "mission_duration": 5510,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Space research laboratory",
            "lead_organization": "Soviet Union",
            "": "Mir"
        },
        {
            "id": 28,
            "name": "Skylab",
            "group_letter": "G",
            "number": 4,
            "group": "Space Stations",
            "year_built": 1973,
            "weight": 77000,
            "max_earth_distance": 435,
            "max_speed": 28000,
            "development_cost": 2200,
            "mission_duration": 171,
            "payload": 0,
            "involved_nations": 1,
            "mission_goal": "Space research laboratory",
            "lead_organization": "NASA",
            "": "Skylab"
        },
        {
            "id": 29,
            "name": "Crew Dragon",
            "group_letter": "H",
            "number": 1,
            "group": "Manned Spacecraft",
            "year_built": 2020,
            "weight": 12200,
            "max_earth_distance": 408,
            "max_speed": 28000,
            "development_cost": 2700,
            "mission_duration": 180,
            "payload": 6000,
            "involved_nations": 1,
            "mission_goal": "Crew transport to ISS",
            "lead_organization": "SpaceX",
            "": "Crew Dragon"
        },
        {
            "id": 30,
            "name": "Apollo Command Module",
            "group_letter": "H",
            "number": 2,
            "group": "Manned Spacecraft",
            "year_built": 1966,
            "weight": 5560,
            "max_earth_distance": 400171,
            "max_speed": 39060,
            "development_cost": 25000,
            "mission_duration": 10,
            "payload": 1180,
            "involved_nations": 1,
            "mission_goal": "Manned moon landing",
            "lead_organization": "NASA",
            "": "Apollo Command Module"
        },
        {
            "id": 31,
            "name": "Space Shuttle",
            "group_letter": "H",
            "number": 3,
            "group": "Manned Spacecraft",
            "year_built": 1981,
            "weight": 78000,
            "max_earth_distance": 960,
            "max_speed": 28000,
            "development_cost": 45000,
            "mission_duration": 17,
            "payload": 24448,
            "involved_nations": 1,
            "mission_goal": "Various, including space research and satellite deployment",
            "lead_organization": "NASA",
            "": "Space Shuttle"
        },
        {
            "id": 32,
            "name": "Soyuz",
            "group_letter": "H",
            "number": 4,
            "group": "Manned Spacecraft",
            "year_built": 1966,
            "weight": 6800,
            "max_earth_distance": 408,
            "max_speed": 28000,
            "development_cost": 450,
            "mission_duration": 210,
            "payload": 680,
            "involved_nations": 1,
            "mission_goal": "Crew transport to ISS",
            "lead_organization": "Roscosmos",
            "": "Soyuz"
        }
    ]