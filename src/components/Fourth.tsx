import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Sale = {
  id: number;
  date: string;
  web_sales: number;
  offline_sales: number;
};

const Fourth = () => {
  const [allSales] = useState<Sale[]>([
    {
        "id": 1,
        "date": "2022-12-13T22:05:00+00:00",
        "web_sales": 15,
        "offline_sales": 14
    },
    {
        "id": 2,
        "date": "2022-12-13T22:06:00+00:00",
        "web_sales": 23,
        "offline_sales": 21
    },
    {
        "id": 3,
        "date": "2022-12-13T22:07:00+00:00",
        "web_sales": 39,
        "offline_sales": 35
    },
    {
        "id": 4,
        "date": "2022-12-13T22:08:00+00:00",
        "web_sales": 56,
        "offline_sales": 49
    },
    {
        "id": 5,
        "date": "2022-12-13T22:09:00+00:00",
        "web_sales": 67,
        "offline_sales": 60
    },
    {
        "id": 6,
        "date": "2022-12-13T22:10:00+00:00",
        "web_sales": 86,
        "offline_sales": 78
    },
    {
        "id": 7,
        "date": "2022-12-13T22:11:00+00:00",
        "web_sales": 100,
        "offline_sales": 90
    },
    {
        "id": 8,
        "date": "2022-12-13T22:12:00+00:00",
        "web_sales": 125,
        "offline_sales": 100
    },
    {
        "id": 9,
        "date": "2022-12-13T22:13:00+00:00",
        "web_sales": 139,
        "offline_sales": 109
    },
    {
        "id": 10,
        "date": "2022-12-13T22:14:00+00:00",
        "web_sales": 148,
        "offline_sales": 117
    },
    {
        "id": 11,
        "date": "2022-12-13T22:15:00+00:00",
        "web_sales": 160,
        "offline_sales": 127
    },
    {
        "id": 12,
        "date": "2022-12-13T22:16:00+00:00",
        "web_sales": 172,
        "offline_sales": 138
    },
    {
        "id": 13,
        "date": "2022-12-13T22:17:00+00:00",
        "web_sales": 189,
        "offline_sales": 149
    },
    {
        "id": 14,
        "date": "2022-12-13T22:18:00+00:00",
        "web_sales": 212,
        "offline_sales": 162
    },
    {
        "id": 15,
        "date": "2022-12-13T22:19:00+00:00",
        "web_sales": 231,
        "offline_sales": 170
    },
    {
        "id": 16,
        "date": "2022-12-13T22:20:00+00:00",
        "web_sales": 248,
        "offline_sales": 176
    },
    {
        "id": 17,
        "date": "2022-12-13T22:21:00+00:00",
        "web_sales": 265,
        "offline_sales": 186
    },
    {
        "id": 18,
        "date": "2022-12-13T22:22:00+00:00",
        "web_sales": 278,
        "offline_sales": 195
    },
    {
        "id": 19,
        "date": "2022-12-13T22:23:00+00:00",
        "web_sales": 294,
        "offline_sales": 207
    },
    {
        "id": 20,
        "date": "2022-12-13T22:24:00+00:00",
        "web_sales": 309,
        "offline_sales": 219
    },
    {
        "id": 21,
        "date": "2022-12-13T22:25:00+00:00",
        "web_sales": 323,
        "offline_sales": 228
    },
    {
        "id": 22,
        "date": "2022-12-13T22:26:00+00:00",
        "web_sales": 340,
        "offline_sales": 240
    },
    {
        "id": 23,
        "date": "2022-12-13T22:27:00+00:00",
        "web_sales": 354,
        "offline_sales": 252
    },
    {
        "id": 24,
        "date": "2022-12-13T22:28:00+00:00",
        "web_sales": 366,
        "offline_sales": 261
    },
    {
        "id": 25,
        "date": "2022-12-13T22:29:00+00:00",
        "web_sales": 378,
        "offline_sales": 272
    },
    {
        "id": 26,
        "date": "2022-12-13T22:30:00+00:00",
        "web_sales": 388,
        "offline_sales": 279
    },
    {
        "id": 27,
        "date": "2022-12-13T22:31:00+00:00",
        "web_sales": 399,
        "offline_sales": 287
    },
    {
        "id": 28,
        "date": "2022-12-13T22:32:00+00:00",
        "web_sales": 410,
        "offline_sales": 296
    },
    {
        "id": 29,
        "date": "2022-12-13T22:33:00+00:00",
        "web_sales": 427,
        "offline_sales": 311
    },
    {
        "id": 30,
        "date": "2022-12-13T22:34:00+00:00",
        "web_sales": 440,
        "offline_sales": 321
    },
    {
        "id": 31,
        "date": "2022-12-13T22:35:00+00:00",
        "web_sales": 455,
        "offline_sales": 333
    },
    {
        "id": 32,
        "date": "2022-12-13T22:36:00+00:00",
        "web_sales": 468,
        "offline_sales": 341
    },
    {
        "id": 33,
        "date": "2022-12-13T22:37:00+00:00",
        "web_sales": 474,
        "offline_sales": 346
    },
    {
        "id": 34,
        "date": "2022-12-13T22:38:00+00:00",
        "web_sales": 489,
        "offline_sales": 359
    },
    {
        "id": 35,
        "date": "2022-12-13T22:39:00+00:00",
        "web_sales": 497,
        "offline_sales": 366
    },
    {
        "id": 36,
        "date": "2022-12-13T22:40:00+00:00",
        "web_sales": 515,
        "offline_sales": 383
    },
    {
        "id": 37,
        "date": "2022-12-13T22:41:00+00:00",
        "web_sales": 525,
        "offline_sales": 390
    },
    {
        "id": 38,
        "date": "2022-12-13T22:42:00+00:00",
        "web_sales": 534,
        "offline_sales": 398
    },
    {
        "id": 39,
        "date": "2022-12-13T22:43:00+00:00",
        "web_sales": 547,
        "offline_sales": 410
    },
    {
        "id": 40,
        "date": "2022-12-13T22:44:00+00:00",
        "web_sales": 565,
        "offline_sales": 423
    },
    {
        "id": 41,
        "date": "2022-12-13T22:45:00+00:00",
        "web_sales": 582,
        "offline_sales": 436
    },
    {
        "id": 42,
        "date": "2022-12-13T22:46:00+00:00",
        "web_sales": 593,
        "offline_sales": 444
    },
    {
        "id": 43,
        "date": "2022-12-13T22:47:00+00:00",
        "web_sales": 605,
        "offline_sales": 451
    },
    {
        "id": 44,
        "date": "2022-12-13T22:48:00+00:00",
        "web_sales": 624,
        "offline_sales": 464
    },
    {
        "id": 45,
        "date": "2022-12-13T22:49:00+00:00",
        "web_sales": 642,
        "offline_sales": 477
    },
    {
        "id": 46,
        "date": "2022-12-13T22:50:00+00:00",
        "web_sales": 660,
        "offline_sales": 486
    },
    {
        "id": 47,
        "date": "2022-12-13T22:51:00+00:00",
        "web_sales": 668,
        "offline_sales": 492
    },
    {
        "id": 48,
        "date": "2022-12-13T22:52:00+00:00",
        "web_sales": 683,
        "offline_sales": 500
    },
    {
        "id": 49,
        "date": "2022-12-13T22:53:00+00:00",
        "web_sales": 701,
        "offline_sales": 516
    },
    {
        "id": 50,
        "date": "2022-12-13T22:54:00+00:00",
        "web_sales": 720,
        "offline_sales": 531
    },
    {
        "id": 51,
        "date": "2022-12-13T22:55:00+00:00",
        "web_sales": 736,
        "offline_sales": 543
    },
    {
        "id": 52,
        "date": "2022-12-13T22:56:00+00:00",
        "web_sales": 757,
        "offline_sales": 557
    },
    {
        "id": 53,
        "date": "2022-12-13T22:57:00+00:00",
        "web_sales": 775,
        "offline_sales": 571
    },
    {
        "id": 54,
        "date": "2022-12-13T22:58:00+00:00",
        "web_sales": 799,
        "offline_sales": 590
    },
    {
        "id": 55,
        "date": "2022-12-13T22:59:00+00:00",
        "web_sales": 816,
        "offline_sales": 599
    },
    {
        "id": 56,
        "date": "2022-12-13T23:00:00+00:00",
        "web_sales": 828,
        "offline_sales": 606
    },
    {
        "id": 57,
        "date": "2022-12-13T23:01:00+00:00",
        "web_sales": 844,
        "offline_sales": 618
    },
    {
        "id": 58,
        "date": "2022-12-13T23:02:00+00:00",
        "web_sales": 860,
        "offline_sales": 627
    },
    {
        "id": 59,
        "date": "2022-12-13T23:03:00+00:00",
        "web_sales": 876,
        "offline_sales": 635
    },
    {
        "id": 60,
        "date": "2022-12-13T23:04:00+00:00",
        "web_sales": 890,
        "offline_sales": 645
    },
    {
        "id": 61,
        "date": "2022-12-13T23:05:00+00:00",
        "web_sales": 905,
        "offline_sales": 655
    },
    {
        "id": 62,
        "date": "2022-12-13T23:06:00+00:00",
        "web_sales": 918,
        "offline_sales": 666
    },
    {
        "id": 63,
        "date": "2022-12-13T23:07:00+00:00",
        "web_sales": 937,
        "offline_sales": 678
    },
    {
        "id": 64,
        "date": "2022-12-13T23:08:00+00:00",
        "web_sales": 952,
        "offline_sales": 686
    },
    {
        "id": 65,
        "date": "2022-12-13T23:09:00+00:00",
        "web_sales": 967,
        "offline_sales": 699
    },
    {
        "id": 66,
        "date": "2022-12-13T23:10:00+00:00",
        "web_sales": 993,
        "offline_sales": 717
    },
    {
        "id": 67,
        "date": "2022-12-13T23:11:00+00:00",
        "web_sales": 1007,
        "offline_sales": 728
    },
    {
        "id": 68,
        "date": "2022-12-13T23:12:00+00:00",
        "web_sales": 1021,
        "offline_sales": 740
    },
    {
        "id": 69,
        "date": "2022-12-13T23:13:00+00:00",
        "web_sales": 1030,
        "offline_sales": 747
    },
    {
        "id": 70,
        "date": "2022-12-13T23:14:00+00:00",
        "web_sales": 1045,
        "offline_sales": 759
    },
    {
        "id": 71,
        "date": "2022-12-13T23:15:00+00:00",
        "web_sales": 1058,
        "offline_sales": 767
    },
    {
        "id": 72,
        "date": "2022-12-13T23:16:00+00:00",
        "web_sales": 1069,
        "offline_sales": 773
    },
    {
        "id": 73,
        "date": "2022-12-13T23:17:00+00:00",
        "web_sales": 1082,
        "offline_sales": 785
    },
    {
        "id": 74,
        "date": "2022-12-13T23:18:00+00:00",
        "web_sales": 1094,
        "offline_sales": 796
    },
    {
        "id": 75,
        "date": "2022-12-13T23:19:00+00:00",
        "web_sales": 1108,
        "offline_sales": 804
    },
    {
        "id": 76,
        "date": "2022-12-13T23:20:00+00:00",
        "web_sales": 1125,
        "offline_sales": 816
    },
    {
        "id": 77,
        "date": "2022-12-13T23:21:00+00:00",
        "web_sales": 1146,
        "offline_sales": 836
    },
    {
        "id": 78,
        "date": "2022-12-13T23:22:00+00:00",
        "web_sales": 1172,
        "offline_sales": 859
    },
    {
        "id": 79,
        "date": "2022-12-13T23:23:00+00:00",
        "web_sales": 1188,
        "offline_sales": 867
    },
    {
        "id": 80,
        "date": "2022-12-13T23:24:00+00:00",
        "web_sales": 1202,
        "offline_sales": 876
    },
    {
        "id": 81,
        "date": "2022-12-13T23:25:00+00:00",
        "web_sales": 1217,
        "offline_sales": 885
    },
    {
        "id": 82,
        "date": "2022-12-13T23:26:00+00:00",
        "web_sales": 1228,
        "offline_sales": 893
    },
    {
        "id": 83,
        "date": "2022-12-13T23:27:00+00:00",
        "web_sales": 1242,
        "offline_sales": 902
    },
    {
        "id": 84,
        "date": "2022-12-13T23:28:00+00:00",
        "web_sales": 1260,
        "offline_sales": 915
    },
    {
        "id": 85,
        "date": "2022-12-13T23:29:00+00:00",
        "web_sales": 1270,
        "offline_sales": 923
    },
    {
        "id": 86,
        "date": "2022-12-13T23:30:00+00:00",
        "web_sales": 1284,
        "offline_sales": 931
    },
    {
        "id": 87,
        "date": "2022-12-13T23:31:00+00:00",
        "web_sales": 1307,
        "offline_sales": 945
    },
    {
        "id": 88,
        "date": "2022-12-13T23:32:00+00:00",
        "web_sales": 1323,
        "offline_sales": 953
    },
    {
        "id": 89,
        "date": "2022-12-13T23:33:00+00:00",
        "web_sales": 1334,
        "offline_sales": 963
    },
    {
        "id": 90,
        "date": "2022-12-13T23:34:00+00:00",
        "web_sales": 1347,
        "offline_sales": 970
    },
    {
        "id": 91,
        "date": "2022-12-13T23:35:00+00:00",
        "web_sales": 1359,
        "offline_sales": 977
    },
    {
        "id": 92,
        "date": "2022-12-13T23:36:00+00:00",
        "web_sales": 1371,
        "offline_sales": 985
    },
    {
        "id": 93,
        "date": "2022-12-13T23:37:00+00:00",
        "web_sales": 1386,
        "offline_sales": 994
    },
    {
        "id": 94,
        "date": "2022-12-13T23:38:00+00:00",
        "web_sales": 1397,
        "offline_sales": 1000
    },
    {
        "id": 95,
        "date": "2022-12-13T23:39:00+00:00",
        "web_sales": 1409,
        "offline_sales": 1010
    },
    {
        "id": 96,
        "date": "2022-12-13T23:40:00+00:00",
        "web_sales": 1428,
        "offline_sales": 1023
    },
    {
        "id": 97,
        "date": "2022-12-13T23:41:00+00:00",
        "web_sales": 1436,
        "offline_sales": 1030
    },
    {
        "id": 98,
        "date": "2022-12-13T23:42:00+00:00",
        "web_sales": 1446,
        "offline_sales": 1038
    },
    {
        "id": 99,
        "date": "2022-12-13T23:43:00+00:00",
        "web_sales": 1457,
        "offline_sales": 1043
    },
    {
        "id": 100,
        "date": "2022-12-13T23:44:00+00:00",
        "web_sales": 1469,
        "offline_sales": 1051
    },
    {
        "id": 101,
        "date": "2022-12-13T23:45:00+00:00",
        "web_sales": 1478,
        "offline_sales": 1059
    },
    {
        "id": 102,
        "date": "2022-12-13T23:46:00+00:00",
        "web_sales": 1490,
        "offline_sales": 1071
    },
    {
        "id": 103,
        "date": "2022-12-13T23:47:00+00:00",
        "web_sales": 1498,
        "offline_sales": 1078
    },
    {
        "id": 104,
        "date": "2022-12-13T23:48:00+00:00",
        "web_sales": 1504,
        "offline_sales": 1082
    },
    {
        "id": 105,
        "date": "2022-12-13T23:49:00+00:00",
        "web_sales": 1520,
        "offline_sales": 1096
    },
    {
        "id": 106,
        "date": "2022-12-13T23:50:00+00:00",
        "web_sales": 1536,
        "offline_sales": 1110
    },
    {
        "id": 107,
        "date": "2022-12-13T23:51:00+00:00",
        "web_sales": 1547,
        "offline_sales": 1119
    },
    {
        "id": 108,
        "date": "2022-12-13T23:52:00+00:00",
        "web_sales": 1558,
        "offline_sales": 1127
    },
    {
        "id": 109,
        "date": "2022-12-13T23:53:00+00:00",
        "web_sales": 1572,
        "offline_sales": 1135
    },
    {
        "id": 110,
        "date": "2022-12-13T23:54:00+00:00",
        "web_sales": 1585,
        "offline_sales": 1144
    },
    {
        "id": 111,
        "date": "2022-12-13T23:55:00+00:00",
        "web_sales": 1603,
        "offline_sales": 1155
    },
    {
        "id": 112,
        "date": "2022-12-13T23:56:00+00:00",
        "web_sales": 1609,
        "offline_sales": 1159
    },
    {
        "id": 113,
        "date": "2022-12-13T23:57:00+00:00",
        "web_sales": 1626,
        "offline_sales": 1172
    },
    {
        "id": 114,
        "date": "2022-12-13T23:58:00+00:00",
        "web_sales": 1645,
        "offline_sales": 1183
    },
    {
        "id": 115,
        "date": "2022-12-13T23:59:00+00:00",
        "web_sales": 1657,
        "offline_sales": 1191
    },
    {
        "id": 116,
        "date": "2022-12-14T00:00:00+00:00",
        "web_sales": 1674,
        "offline_sales": 1205
    },
    {
        "id": 117,
        "date": "2022-12-14T00:01:00+00:00",
        "web_sales": 1687,
        "offline_sales": 1214
    },
    {
        "id": 118,
        "date": "2022-12-14T00:02:00+00:00",
        "web_sales": 1707,
        "offline_sales": 1228
    },
    {
        "id": 119,
        "date": "2022-12-14T00:03:00+00:00",
        "web_sales": 1724,
        "offline_sales": 1240
    },
    {
        "id": 120,
        "date": "2022-12-14T00:04:00+00:00",
        "web_sales": 1742,
        "offline_sales": 1254
    },
    {
        "id": 121,
        "date": "2022-12-14T00:05:00+00:00",
        "web_sales": 1756,
        "offline_sales": 1261
    },
    {
        "id": 122,
        "date": "2022-12-14T00:06:00+00:00",
        "web_sales": 1767,
        "offline_sales": 1269
    },
    {
        "id": 123,
        "date": "2022-12-14T00:07:00+00:00",
        "web_sales": 1773,
        "offline_sales": 1272
    },
    {
        "id": 124,
        "date": "2022-12-14T00:08:00+00:00",
        "web_sales": 1783,
        "offline_sales": 1282
    },
    {
        "id": 125,
        "date": "2022-12-14T00:09:00+00:00",
        "web_sales": 1792,
        "offline_sales": 1287
    },
    {
        "id": 126,
        "date": "2022-12-14T00:10:00+00:00",
        "web_sales": 1810,
        "offline_sales": 1300
    },
    {
        "id": 127,
        "date": "2022-12-14T00:11:00+00:00",
        "web_sales": 1821,
        "offline_sales": 1307
    },
    {
        "id": 128,
        "date": "2022-12-14T00:12:00+00:00",
        "web_sales": 1833,
        "offline_sales": 1315
    },
    {
        "id": 129,
        "date": "2022-12-14T00:13:00+00:00",
        "web_sales": 1842,
        "offline_sales": 1321
    },
    {
        "id": 130,
        "date": "2022-12-14T00:14:00+00:00",
        "web_sales": 1850,
        "offline_sales": 1328
    },
    {
        "id": 131,
        "date": "2022-12-14T00:15:00+00:00",
        "web_sales": 1864,
        "offline_sales": 1338
    },
    {
        "id": 132,
        "date": "2022-12-14T00:16:00+00:00",
        "web_sales": 1888,
        "offline_sales": 1354
    },
    {
        "id": 133,
        "date": "2022-12-14T00:17:00+00:00",
        "web_sales": 1910,
        "offline_sales": 1365
    },
    {
        "id": 134,
        "date": "2022-12-14T00:18:00+00:00",
        "web_sales": 1927,
        "offline_sales": 1378
    },
    {
        "id": 135,
        "date": "2022-12-14T00:19:00+00:00",
        "web_sales": 1943,
        "offline_sales": 1388
    },
    {
        "id": 136,
        "date": "2022-12-14T00:20:00+00:00",
        "web_sales": 1959,
        "offline_sales": 1401
    },
    {
        "id": 137,
        "date": "2022-12-14T00:21:00+00:00",
        "web_sales": 1972,
        "offline_sales": 1409
    },
    {
        "id": 138,
        "date": "2022-12-14T00:22:00+00:00",
        "web_sales": 1981,
        "offline_sales": 1416
    },
    {
        "id": 139,
        "date": "2022-12-14T00:23:00+00:00",
        "web_sales": 1995,
        "offline_sales": 1423
    },
    {
        "id": 140,
        "date": "2022-12-14T00:24:00+00:00",
        "web_sales": 2011,
        "offline_sales": 1439
    },
    {
        "id": 141,
        "date": "2022-12-14T00:25:00+00:00",
        "web_sales": 2028,
        "offline_sales": 1451
    },
    {
        "id": 142,
        "date": "2022-12-14T00:26:00+00:00",
        "web_sales": 2041,
        "offline_sales": 1456
    },
    {
        "id": 143,
        "date": "2022-12-14T00:27:00+00:00",
        "web_sales": 2063,
        "offline_sales": 1467
    },
    {
        "id": 144,
        "date": "2022-12-14T00:28:00+00:00",
        "web_sales": 2076,
        "offline_sales": 1476
    },
    {
        "id": 145,
        "date": "2022-12-14T00:29:00+00:00",
        "web_sales": 2090,
        "offline_sales": 1487
    },
    {
        "id": 146,
        "date": "2022-12-14T00:30:00+00:00",
        "web_sales": 2104,
        "offline_sales": 1496
    },
    {
        "id": 147,
        "date": "2022-12-14T00:31:00+00:00",
        "web_sales": 2116,
        "offline_sales": 1501
    },
    {
        "id": 148,
        "date": "2022-12-14T00:32:00+00:00",
        "web_sales": 2125,
        "offline_sales": 1506
    },
    {
        "id": 149,
        "date": "2022-12-14T00:33:00+00:00",
        "web_sales": 2140,
        "offline_sales": 1515
    },
    {
        "id": 150,
        "date": "2022-12-14T00:34:00+00:00",
        "web_sales": 2151,
        "offline_sales": 1524
    },
    {
        "id": 151,
        "date": "2022-12-14T00:35:00+00:00",
        "web_sales": 2176,
        "offline_sales": 1540
    },
    {
        "id": 152,
        "date": "2022-12-14T00:36:00+00:00",
        "web_sales": 2183,
        "offline_sales": 1543
    },
    {
        "id": 153,
        "date": "2022-12-14T00:37:00+00:00",
        "web_sales": 2206,
        "offline_sales": 1555
    },
    {
        "id": 154,
        "date": "2022-12-14T00:38:00+00:00",
        "web_sales": 2220,
        "offline_sales": 1564
    },
    {
        "id": 155,
        "date": "2022-12-14T00:39:00+00:00",
        "web_sales": 2229,
        "offline_sales": 1570
    },
    {
        "id": 156,
        "date": "2022-12-14T00:40:00+00:00",
        "web_sales": 2246,
        "offline_sales": 1581
    },
    {
        "id": 157,
        "date": "2022-12-14T00:41:00+00:00",
        "web_sales": 2259,
        "offline_sales": 1592
    },
    {
        "id": 158,
        "date": "2022-12-14T00:42:00+00:00",
        "web_sales": 2276,
        "offline_sales": 1605
    },
    {
        "id": 159,
        "date": "2022-12-14T00:43:00+00:00",
        "web_sales": 2296,
        "offline_sales": 1619
    },
    {
        "id": 160,
        "date": "2022-12-14T00:44:00+00:00",
        "web_sales": 2318,
        "offline_sales": 1631
    },
    {
        "id": 161,
        "date": "2022-12-14T00:45:00+00:00",
        "web_sales": 2329,
        "offline_sales": 1639
    },
    {
        "id": 162,
        "date": "2022-12-14T00:46:00+00:00",
        "web_sales": 2334,
        "offline_sales": 1643
    },
    {
        "id": 163,
        "date": "2022-12-14T00:47:00+00:00",
        "web_sales": 2349,
        "offline_sales": 1654
    },
    {
        "id": 164,
        "date": "2022-12-14T00:48:00+00:00",
        "web_sales": 2366,
        "offline_sales": 1666
    },
    {
        "id": 165,
        "date": "2022-12-14T00:49:00+00:00",
        "web_sales": 2382,
        "offline_sales": 1677
    },
    {
        "id": 166,
        "date": "2022-12-14T00:50:00+00:00",
        "web_sales": 2403,
        "offline_sales": 1688
    },
    {
        "id": 167,
        "date": "2022-12-14T00:51:00+00:00",
        "web_sales": 2421,
        "offline_sales": 1699
    },
    {
        "id": 168,
        "date": "2022-12-14T00:52:00+00:00",
        "web_sales": 2435,
        "offline_sales": 1706
    },
    {
        "id": 169,
        "date": "2022-12-14T00:53:00+00:00",
        "web_sales": 2452,
        "offline_sales": 1719
    },
    {
        "id": 170,
        "date": "2022-12-14T00:54:00+00:00",
        "web_sales": 2471,
        "offline_sales": 1731
    },
    {
        "id": 171,
        "date": "2022-12-14T00:55:00+00:00",
        "web_sales": 2497,
        "offline_sales": 1744
    },
    {
        "id": 172,
        "date": "2022-12-14T00:56:00+00:00",
        "web_sales": 2522,
        "offline_sales": 1757
    },
    {
        "id": 173,
        "date": "2022-12-14T00:57:00+00:00",
        "web_sales": 2548,
        "offline_sales": 1772
    },
    {
        "id": 174,
        "date": "2022-12-14T00:58:00+00:00",
        "web_sales": 2569,
        "offline_sales": 1783
    },
    {
        "id": 175,
        "date": "2022-12-14T00:59:00+00:00",
        "web_sales": 2590,
        "offline_sales": 1797
    },
    {
        "id": 176,
        "date": "2022-12-14T01:00:00+00:00",
        "web_sales": 2608,
        "offline_sales": 1808
    },
    {
        "id": 177,
        "date": "2022-12-14T01:01:00+00:00",
        "web_sales": 2626,
        "offline_sales": 1818
    },
    {
        "id": 178,
        "date": "2022-12-14T01:02:00+00:00",
        "web_sales": 2648,
        "offline_sales": 1832
    },
    {
        "id": 179,
        "date": "2022-12-14T01:03:00+00:00",
        "web_sales": 2664,
        "offline_sales": 1841
    },
    {
        "id": 180,
        "date": "2022-12-14T01:04:00+00:00",
        "web_sales": 2676,
        "offline_sales": 1846
    },
    {
        "id": 181,
        "date": "2022-12-14T01:05:00+00:00",
        "web_sales": 2692,
        "offline_sales": 1855
    },
    {
        "id": 182,
        "date": "2022-12-14T01:06:00+00:00",
        "web_sales": 2709,
        "offline_sales": 1867
    },
    {
        "id": 183,
        "date": "2022-12-14T01:07:00+00:00",
        "web_sales": 2726,
        "offline_sales": 1880
    },
    {
        "id": 184,
        "date": "2022-12-14T01:08:00+00:00",
        "web_sales": 2746,
        "offline_sales": 1891
    },
    {
        "id": 185,
        "date": "2022-12-14T01:09:00+00:00",
        "web_sales": 2769,
        "offline_sales": 1903
    },
    {
        "id": 186,
        "date": "2022-12-14T01:10:00+00:00",
        "web_sales": 2795,
        "offline_sales": 1923
    },
    {
        "id": 187,
        "date": "2022-12-14T01:11:00+00:00",
        "web_sales": 2815,
        "offline_sales": 1936
    },
    {
        "id": 188,
        "date": "2022-12-14T01:12:00+00:00",
        "web_sales": 2833,
        "offline_sales": 1947
    },
    {
        "id": 189,
        "date": "2022-12-14T01:13:00+00:00",
        "web_sales": 2842,
        "offline_sales": 1955
    },
    {
        "id": 190,
        "date": "2022-12-14T01:14:00+00:00",
        "web_sales": 2862,
        "offline_sales": 1971
    },
    {
        "id": 191,
        "date": "2022-12-14T01:15:00+00:00",
        "web_sales": 2885,
        "offline_sales": 1990
    },
    {
        "id": 192,
        "date": "2022-12-14T01:16:00+00:00",
        "web_sales": 2903,
        "offline_sales": 1999
    },
    {
        "id": 193,
        "date": "2022-12-14T01:17:00+00:00",
        "web_sales": 2921,
        "offline_sales": 2010
    },
    {
        "id": 194,
        "date": "2022-12-14T01:18:00+00:00",
        "web_sales": 2934,
        "offline_sales": 2017
    },
    {
        "id": 195,
        "date": "2022-12-14T01:19:00+00:00",
        "web_sales": 2945,
        "offline_sales": 2024
    },
    {
        "id": 196,
        "date": "2022-12-14T01:20:00+00:00",
        "web_sales": 2963,
        "offline_sales": 2038
    },
    {
        "id": 197,
        "date": "2022-12-14T01:21:00+00:00",
        "web_sales": 2977,
        "offline_sales": 2048
    },
    {
        "id": 198,
        "date": "2022-12-14T01:22:00+00:00",
        "web_sales": 2993,
        "offline_sales": 2060
    },
    {
        "id": 199,
        "date": "2022-12-14T01:23:00+00:00",
        "web_sales": 3006,
        "offline_sales": 2069
    },
    {
        "id": 200,
        "date": "2022-12-14T01:24:00+00:00",
        "web_sales": 3023,
        "offline_sales": 2080
    },
    {
        "id": 201,
        "date": "2022-12-14T01:25:00+00:00",
        "web_sales": 3031,
        "offline_sales": 2083
    },
    {
        "id": 202,
        "date": "2022-12-14T01:26:00+00:00",
        "web_sales": 3041,
        "offline_sales": 2090
    },
    {
        "id": 203,
        "date": "2022-12-14T01:27:00+00:00",
        "web_sales": 3062,
        "offline_sales": 2102
    },
    {
        "id": 204,
        "date": "2022-12-14T01:28:00+00:00",
        "web_sales": 3081,
        "offline_sales": 2111
    },
    {
        "id": 205,
        "date": "2022-12-14T01:29:00+00:00",
        "web_sales": 3100,
        "offline_sales": 2120
    },
    {
        "id": 206,
        "date": "2022-12-14T01:30:00+00:00",
        "web_sales": 3119,
        "offline_sales": 2134
    },
    {
        "id": 207,
        "date": "2022-12-14T01:31:00+00:00",
        "web_sales": 3144,
        "offline_sales": 2147
    },
    {
        "id": 208,
        "date": "2022-12-14T01:32:00+00:00",
        "web_sales": 3167,
        "offline_sales": 2160
    },
    {
        "id": 209,
        "date": "2022-12-14T01:33:00+00:00",
        "web_sales": 3181,
        "offline_sales": 2169
    },
    {
        "id": 210,
        "date": "2022-12-14T01:34:00+00:00",
        "web_sales": 3196,
        "offline_sales": 2179
    },
    {
        "id": 211,
        "date": "2022-12-14T01:35:00+00:00",
        "web_sales": 3214,
        "offline_sales": 2190
    },
    {
        "id": 212,
        "date": "2022-12-14T01:36:00+00:00",
        "web_sales": 3226,
        "offline_sales": 2196
    },
    {
        "id": 213,
        "date": "2022-12-14T01:37:00+00:00",
        "web_sales": 3245,
        "offline_sales": 2205
    },
    {
        "id": 214,
        "date": "2022-12-14T01:38:00+00:00",
        "web_sales": 3267,
        "offline_sales": 2221
    },
    {
        "id": 215,
        "date": "2022-12-14T01:39:00+00:00",
        "web_sales": 3288,
        "offline_sales": 2236
    },
    {
        "id": 216,
        "date": "2022-12-14T01:40:00+00:00",
        "web_sales": 3303,
        "offline_sales": 2244
    },
    {
        "id": 217,
        "date": "2022-12-14T01:41:00+00:00",
        "web_sales": 3322,
        "offline_sales": 2254
    },
    {
        "id": 218,
        "date": "2022-12-14T01:42:00+00:00",
        "web_sales": 3336,
        "offline_sales": 2262
    },
    {
        "id": 219,
        "date": "2022-12-14T01:43:00+00:00",
        "web_sales": 3355,
        "offline_sales": 2273
    },
    {
        "id": 220,
        "date": "2022-12-14T01:44:00+00:00",
        "web_sales": 3373,
        "offline_sales": 2282
    },
    {
        "id": 221,
        "date": "2022-12-14T01:45:00+00:00",
        "web_sales": 3393,
        "offline_sales": 2295
    },
    {
        "id": 222,
        "date": "2022-12-14T01:46:00+00:00",
        "web_sales": 3404,
        "offline_sales": 2300
    },
    {
        "id": 223,
        "date": "2022-12-14T01:47:00+00:00",
        "web_sales": 3421,
        "offline_sales": 2313
    },
    {
        "id": 224,
        "date": "2022-12-14T01:48:00+00:00",
        "web_sales": 3436,
        "offline_sales": 2322
    },
    {
        "id": 225,
        "date": "2022-12-14T01:49:00+00:00",
        "web_sales": 3451,
        "offline_sales": 2330
    },
    {
        "id": 226,
        "date": "2022-12-14T01:50:00+00:00",
        "web_sales": 3468,
        "offline_sales": 2344
    },
    {
        "id": 227,
        "date": "2022-12-14T01:51:00+00:00",
        "web_sales": 3481,
        "offline_sales": 2352
    },
    {
        "id": 228,
        "date": "2022-12-14T01:52:00+00:00",
        "web_sales": 3495,
        "offline_sales": 2362
    },
    {
        "id": 229,
        "date": "2022-12-14T01:53:00+00:00",
        "web_sales": 3510,
        "offline_sales": 2374
    },
    {
        "id": 230,
        "date": "2022-12-14T01:54:00+00:00",
        "web_sales": 3523,
        "offline_sales": 2382
    },
    {
        "id": 231,
        "date": "2022-12-14T01:55:00+00:00",
        "web_sales": 3542,
        "offline_sales": 2387
    },
    {
        "id": 232,
        "date": "2022-12-14T01:56:00+00:00",
        "web_sales": 3560,
        "offline_sales": 2396
    },
    {
        "id": 233,
        "date": "2022-12-14T01:57:00+00:00",
        "web_sales": 3585,
        "offline_sales": 2412
    },
    {
        "id": 234,
        "date": "2022-12-14T01:58:00+00:00",
        "web_sales": 3613,
        "offline_sales": 2429
    },
    {
        "id": 235,
        "date": "2022-12-14T01:59:00+00:00",
        "web_sales": 3631,
        "offline_sales": 2434
    },
    {
        "id": 236,
        "date": "2022-12-14T02:00:00+00:00",
        "web_sales": 3653,
        "offline_sales": 2446
    },
    {
        "id": 237,
        "date": "2022-12-14T02:01:00+00:00",
        "web_sales": 3669,
        "offline_sales": 2456
    },
    {
        "id": 238,
        "date": "2022-12-14T02:02:00+00:00",
        "web_sales": 3687,
        "offline_sales": 2462
    },
    {
        "id": 239,
        "date": "2022-12-14T02:03:00+00:00",
        "web_sales": 3703,
        "offline_sales": 2471
    },
    {
        "id": 240,
        "date": "2022-12-14T02:04:00+00:00",
        "web_sales": 3723,
        "offline_sales": 2483
    },
    {
        "id": 241,
        "date": "2022-12-14T02:05:00+00:00",
        "web_sales": 3741,
        "offline_sales": 2493
    },
    {
        "id": 242,
        "date": "2022-12-14T02:06:00+00:00",
        "web_sales": 3759,
        "offline_sales": 2505
    },
    {
        "id": 243,
        "date": "2022-12-14T02:07:00+00:00",
        "web_sales": 3780,
        "offline_sales": 2521
    },
    {
        "id": 244,
        "date": "2022-12-14T02:08:00+00:00",
        "web_sales": 3799,
        "offline_sales": 2533
    },
    {
        "id": 245,
        "date": "2022-12-14T02:09:00+00:00",
        "web_sales": 3816,
        "offline_sales": 2542
    },
    {
        "id": 246,
        "date": "2022-12-14T02:10:00+00:00",
        "web_sales": 3839,
        "offline_sales": 2561
    },
    {
        "id": 247,
        "date": "2022-12-14T02:11:00+00:00",
        "web_sales": 3856,
        "offline_sales": 2572
    },
    {
        "id": 248,
        "date": "2022-12-14T02:12:00+00:00",
        "web_sales": 3875,
        "offline_sales": 2584
    },
    {
        "id": 249,
        "date": "2022-12-14T02:13:00+00:00",
        "web_sales": 3894,
        "offline_sales": 2594
    },
    {
        "id": 250,
        "date": "2022-12-14T02:14:00+00:00",
        "web_sales": 3908,
        "offline_sales": 2602
    },
    {
        "id": 251,
        "date": "2022-12-14T02:15:00+00:00",
        "web_sales": 3922,
        "offline_sales": 2610
    },
    {
        "id": 252,
        "date": "2022-12-14T02:16:00+00:00",
        "web_sales": 3940,
        "offline_sales": 2621
    },
    {
        "id": 253,
        "date": "2022-12-14T02:17:00+00:00",
        "web_sales": 3954,
        "offline_sales": 2631
    },
    {
        "id": 254,
        "date": "2022-12-14T02:18:00+00:00",
        "web_sales": 3973,
        "offline_sales": 2645
    },
    {
        "id": 255,
        "date": "2022-12-14T02:19:00+00:00",
        "web_sales": 3991,
        "offline_sales": 2658
    },
    {
        "id": 256,
        "date": "2022-12-14T02:20:00+00:00",
        "web_sales": 4018,
        "offline_sales": 2667
    },
    {
        "id": 257,
        "date": "2022-12-14T02:21:00+00:00",
        "web_sales": 4040,
        "offline_sales": 2681
    },
    {
        "id": 258,
        "date": "2022-12-14T02:22:00+00:00",
        "web_sales": 4050,
        "offline_sales": 2688
    },
    {
        "id": 259,
        "date": "2022-12-14T02:23:00+00:00",
        "web_sales": 4062,
        "offline_sales": 2696
    },
    {
        "id": 260,
        "date": "2022-12-14T02:24:00+00:00",
        "web_sales": 4076,
        "offline_sales": 2705
    },
    {
        "id": 261,
        "date": "2022-12-14T02:25:00+00:00",
        "web_sales": 4093,
        "offline_sales": 2716
    },
    {
        "id": 262,
        "date": "2022-12-14T02:26:00+00:00",
        "web_sales": 4108,
        "offline_sales": 2723
    },
    {
        "id": 263,
        "date": "2022-12-14T02:27:00+00:00",
        "web_sales": 4131,
        "offline_sales": 2737
    },
    {
        "id": 264,
        "date": "2022-12-14T02:28:00+00:00",
        "web_sales": 4144,
        "offline_sales": 2746
    },
    {
        "id": 265,
        "date": "2022-12-14T02:29:00+00:00",
        "web_sales": 4165,
        "offline_sales": 2759
    },
    {
        "id": 266,
        "date": "2022-12-14T02:30:00+00:00",
        "web_sales": 4183,
        "offline_sales": 2773
    },
    {
        "id": 267,
        "date": "2022-12-14T02:31:00+00:00",
        "web_sales": 4207,
        "offline_sales": 2786
    },
    {
        "id": 268,
        "date": "2022-12-14T02:32:00+00:00",
        "web_sales": 4224,
        "offline_sales": 2794
    },
    {
        "id": 269,
        "date": "2022-12-14T02:33:00+00:00",
        "web_sales": 4236,
        "offline_sales": 2802
    },
    {
        "id": 270,
        "date": "2022-12-14T02:34:00+00:00",
        "web_sales": 4262,
        "offline_sales": 2817
    },
    {
        "id": 271,
        "date": "2022-12-14T02:35:00+00:00",
        "web_sales": 4283,
        "offline_sales": 2828
    },
    {
        "id": 272,
        "date": "2022-12-14T02:36:00+00:00",
        "web_sales": 4304,
        "offline_sales": 2840
    },
    {
        "id": 273,
        "date": "2022-12-14T02:37:00+00:00",
        "web_sales": 4321,
        "offline_sales": 2849
    },
    {
        "id": 274,
        "date": "2022-12-14T02:38:00+00:00",
        "web_sales": 4335,
        "offline_sales": 2855
    },
    {
        "id": 275,
        "date": "2022-12-14T02:39:00+00:00",
        "web_sales": 4352,
        "offline_sales": 2864
    },
    {
        "id": 276,
        "date": "2022-12-14T02:40:00+00:00",
        "web_sales": 4365,
        "offline_sales": 2870
    },
    {
        "id": 277,
        "date": "2022-12-14T02:41:00+00:00",
        "web_sales": 4381,
        "offline_sales": 2882
    },
    {
        "id": 278,
        "date": "2022-12-14T02:42:00+00:00",
        "web_sales": 4395,
        "offline_sales": 2889
    },
    {
        "id": 279,
        "date": "2022-12-14T02:43:00+00:00",
        "web_sales": 4419,
        "offline_sales": 2905
    },
    {
        "id": 280,
        "date": "2022-12-14T02:44:00+00:00",
        "web_sales": 4438,
        "offline_sales": 2918
    },
    {
        "id": 281,
        "date": "2022-12-14T02:45:00+00:00",
        "web_sales": 4452,
        "offline_sales": 2927
    },
    {
        "id": 282,
        "date": "2022-12-14T02:46:00+00:00",
        "web_sales": 4467,
        "offline_sales": 2932
    },
    {
        "id": 283,
        "date": "2022-12-14T02:47:00+00:00",
        "web_sales": 4489,
        "offline_sales": 2946
    },
    {
        "id": 284,
        "date": "2022-12-14T02:48:00+00:00",
        "web_sales": 4498,
        "offline_sales": 2952
    },
    {
        "id": 285,
        "date": "2022-12-14T02:49:00+00:00",
        "web_sales": 4511,
        "offline_sales": 2959
    },
    {
        "id": 286,
        "date": "2022-12-14T02:50:00+00:00",
        "web_sales": 4529,
        "offline_sales": 2970
    },
    {
        "id": 287,
        "date": "2022-12-14T02:51:00+00:00",
        "web_sales": 4544,
        "offline_sales": 2979
    },
    {
        "id": 288,
        "date": "2022-12-14T02:52:00+00:00",
        "web_sales": 4559,
        "offline_sales": 2988
    },
    {
        "id": 289,
        "date": "2022-12-14T02:53:00+00:00",
        "web_sales": 4580,
        "offline_sales": 2999
    },
    {
        "id": 290,
        "date": "2022-12-14T02:54:00+00:00",
        "web_sales": 4592,
        "offline_sales": 3008
    },
    {
        "id": 291,
        "date": "2022-12-14T02:55:00+00:00",
        "web_sales": 4602,
        "offline_sales": 3015
    },
    {
        "id": 292,
        "date": "2022-12-14T02:56:00+00:00",
        "web_sales": 4613,
        "offline_sales": 3020
    },
    {
        "id": 293,
        "date": "2022-12-14T02:57:00+00:00",
        "web_sales": 4633,
        "offline_sales": 3036
    },
    {
        "id": 294,
        "date": "2022-12-14T02:58:00+00:00",
        "web_sales": 4646,
        "offline_sales": 3044
    },
    {
        "id": 295,
        "date": "2022-12-14T02:59:00+00:00",
        "web_sales": 4658,
        "offline_sales": 3050
    },
    {
        "id": 296,
        "date": "2022-12-14T03:00:00+00:00",
        "web_sales": 4674,
        "offline_sales": 3055
    },
    {
        "id": 297,
        "date": "2022-12-14T03:01:00+00:00",
        "web_sales": 4685,
        "offline_sales": 3064
    },
    {
        "id": 298,
        "date": "2022-12-14T03:02:00+00:00",
        "web_sales": 4703,
        "offline_sales": 3074
    },
    {
        "id": 299,
        "date": "2022-12-14T03:03:00+00:00",
        "web_sales": 4717,
        "offline_sales": 3081
    },
    {
        "id": 300,
        "date": "2022-12-14T03:04:00+00:00",
        "web_sales": 4731,
        "offline_sales": 3089
    },
    {
        "id": 301,
        "date": "2022-12-14T03:05:00+00:00",
        "web_sales": 4751,
        "offline_sales": 3096
    },
    {
        "id": 302,
        "date": "2022-12-14T03:06:00+00:00",
        "web_sales": 4762,
        "offline_sales": 3100
    },
    {
        "id": 303,
        "date": "2022-12-14T03:07:00+00:00",
        "web_sales": 4782,
        "offline_sales": 3116
    },
    {
        "id": 304,
        "date": "2022-12-14T03:08:00+00:00",
        "web_sales": 4805,
        "offline_sales": 3132
    },
    {
        "id": 305,
        "date": "2022-12-14T03:09:00+00:00",
        "web_sales": 4822,
        "offline_sales": 3142
    },
    {
        "id": 306,
        "date": "2022-12-14T03:10:00+00:00",
        "web_sales": 4834,
        "offline_sales": 3152
    },
    {
        "id": 307,
        "date": "2022-12-14T03:11:00+00:00",
        "web_sales": 4858,
        "offline_sales": 3164
    },
    {
        "id": 308,
        "date": "2022-12-14T03:12:00+00:00",
        "web_sales": 4872,
        "offline_sales": 3171
    },
    {
        "id": 309,
        "date": "2022-12-14T03:13:00+00:00",
        "web_sales": 4895,
        "offline_sales": 3183
    },
    {
        "id": 310,
        "date": "2022-12-14T03:14:00+00:00",
        "web_sales": 4912,
        "offline_sales": 3193
    },
    {
        "id": 311,
        "date": "2022-12-14T03:15:00+00:00",
        "web_sales": 4933,
        "offline_sales": 3210
    },
    {
        "id": 312,
        "date": "2022-12-14T03:16:00+00:00",
        "web_sales": 4948,
        "offline_sales": 3217
    },
    {
        "id": 313,
        "date": "2022-12-14T03:17:00+00:00",
        "web_sales": 4963,
        "offline_sales": 3225
    },
    {
        "id": 314,
        "date": "2022-12-14T03:18:00+00:00",
        "web_sales": 4987,
        "offline_sales": 3241
    },
    {
        "id": 315,
        "date": "2022-12-14T03:19:00+00:00",
        "web_sales": 5007,
        "offline_sales": 3247
    },
    {
        "id": 316,
        "date": "2022-12-14T03:20:00+00:00",
        "web_sales": 5023,
        "offline_sales": 3255
    },
    {
        "id": 317,
        "date": "2022-12-14T03:21:00+00:00",
        "web_sales": 5038,
        "offline_sales": 3264
    },
    {
        "id": 318,
        "date": "2022-12-14T03:22:00+00:00",
        "web_sales": 5055,
        "offline_sales": 3270
    },
    {
        "id": 319,
        "date": "2022-12-14T03:23:00+00:00",
        "web_sales": 5069,
        "offline_sales": 3276
    },
    {
        "id": 320,
        "date": "2022-12-14T03:24:00+00:00",
        "web_sales": 5085,
        "offline_sales": 3285
    },
    {
        "id": 321,
        "date": "2022-12-14T03:25:00+00:00",
        "web_sales": 5097,
        "offline_sales": 3294
    },
    {
        "id": 322,
        "date": "2022-12-14T03:26:00+00:00",
        "web_sales": 5116,
        "offline_sales": 3303
    },
    {
        "id": 323,
        "date": "2022-12-14T03:27:00+00:00",
        "web_sales": 5130,
        "offline_sales": 3313
    },
    {
        "id": 324,
        "date": "2022-12-14T03:28:00+00:00",
        "web_sales": 5153,
        "offline_sales": 3329
    },
    {
        "id": 325,
        "date": "2022-12-14T03:29:00+00:00",
        "web_sales": 5162,
        "offline_sales": 3335
    },
    {
        "id": 326,
        "date": "2022-12-14T03:30:00+00:00",
        "web_sales": 5183,
        "offline_sales": 3347
    },
    {
        "id": 327,
        "date": "2022-12-14T03:31:00+00:00",
        "web_sales": 5196,
        "offline_sales": 3353
    },
    {
        "id": 328,
        "date": "2022-12-14T03:32:00+00:00",
        "web_sales": 5209,
        "offline_sales": 3359
    },
    {
        "id": 329,
        "date": "2022-12-14T03:33:00+00:00",
        "web_sales": 5218,
        "offline_sales": 3364
    },
    {
        "id": 330,
        "date": "2022-12-14T03:34:00+00:00",
        "web_sales": 5228,
        "offline_sales": 3372
    },
    {
        "id": 331,
        "date": "2022-12-14T03:35:00+00:00",
        "web_sales": 5238,
        "offline_sales": 3374
    },
    {
        "id": 332,
        "date": "2022-12-14T03:36:00+00:00",
        "web_sales": 5257,
        "offline_sales": 3385
    },
    {
        "id": 333,
        "date": "2022-12-14T03:37:00+00:00",
        "web_sales": 5278,
        "offline_sales": 3396
    },
    {
        "id": 334,
        "date": "2022-12-14T03:38:00+00:00",
        "web_sales": 5290,
        "offline_sales": 3403
    },
    {
        "id": 335,
        "date": "2022-12-14T03:39:00+00:00",
        "web_sales": 5304,
        "offline_sales": 3412
    },
    {
        "id": 336,
        "date": "2022-12-14T03:40:00+00:00",
        "web_sales": 5311,
        "offline_sales": 3417
    },
    {
        "id": 337,
        "date": "2022-12-14T03:41:00+00:00",
        "web_sales": 5326,
        "offline_sales": 3427
    },
    {
        "id": 338,
        "date": "2022-12-14T03:42:00+00:00",
        "web_sales": 5341,
        "offline_sales": 3431
    },
    {
        "id": 339,
        "date": "2022-12-14T03:43:00+00:00",
        "web_sales": 5358,
        "offline_sales": 3443
    },
    {
        "id": 340,
        "date": "2022-12-14T03:44:00+00:00",
        "web_sales": 5374,
        "offline_sales": 3453
    },
    {
        "id": 341,
        "date": "2022-12-14T03:45:00+00:00",
        "web_sales": 5391,
        "offline_sales": 3460
    },
    {
        "id": 342,
        "date": "2022-12-14T03:46:00+00:00",
        "web_sales": 5403,
        "offline_sales": 3469
    },
    {
        "id": 343,
        "date": "2022-12-14T03:47:00+00:00",
        "web_sales": 5421,
        "offline_sales": 3479
    },
    {
        "id": 344,
        "date": "2022-12-14T03:48:00+00:00",
        "web_sales": 5436,
        "offline_sales": 3488
    },
    {
        "id": 345,
        "date": "2022-12-14T03:49:00+00:00",
        "web_sales": 5446,
        "offline_sales": 3493
    },
    {
        "id": 346,
        "date": "2022-12-14T03:50:00+00:00",
        "web_sales": 5457,
        "offline_sales": 3501
    },
    {
        "id": 347,
        "date": "2022-12-14T03:51:00+00:00",
        "web_sales": 5471,
        "offline_sales": 3510
    },
    {
        "id": 348,
        "date": "2022-12-14T03:52:00+00:00",
        "web_sales": 5483,
        "offline_sales": 3518
    },
    {
        "id": 349,
        "date": "2022-12-14T03:53:00+00:00",
        "web_sales": 5493,
        "offline_sales": 3527
    },
    {
        "id": 350,
        "date": "2022-12-14T03:54:00+00:00",
        "web_sales": 5516,
        "offline_sales": 3541
    },
    {
        "id": 351,
        "date": "2022-12-14T03:55:00+00:00",
        "web_sales": 5528,
        "offline_sales": 3549
    },
    {
        "id": 352,
        "date": "2022-12-14T03:56:00+00:00",
        "web_sales": 5550,
        "offline_sales": 3559
    },
    {
        "id": 353,
        "date": "2022-12-14T03:57:00+00:00",
        "web_sales": 5564,
        "offline_sales": 3564
    },
    {
        "id": 354,
        "date": "2022-12-14T03:58:00+00:00",
        "web_sales": 5579,
        "offline_sales": 3570
    },
    {
        "id": 355,
        "date": "2022-12-14T03:59:00+00:00",
        "web_sales": 5590,
        "offline_sales": 3576
    },
    {
        "id": 356,
        "date": "2022-12-14T04:00:00+00:00",
        "web_sales": 5601,
        "offline_sales": 3583
    },
    {
        "id": 357,
        "date": "2022-12-14T04:01:00+00:00",
        "web_sales": 5616,
        "offline_sales": 3593
    },
    {
        "id": 358,
        "date": "2022-12-14T04:02:00+00:00",
        "web_sales": 5628,
        "offline_sales": 3599
    },
    {
        "id": 359,
        "date": "2022-12-14T04:03:00+00:00",
        "web_sales": 5647,
        "offline_sales": 3612
    },
    {
        "id": 360,
        "date": "2022-12-14T04:04:00+00:00",
        "web_sales": 5668,
        "offline_sales": 3621
    },
    {
        "id": 361,
        "date": "2022-12-14T04:05:00+00:00",
        "web_sales": 5686,
        "offline_sales": 3627
    },
    {
        "id": 362,
        "date": "2022-12-14T04:06:00+00:00",
        "web_sales": 5702,
        "offline_sales": 3633
    },
    {
        "id": 363,
        "date": "2022-12-14T04:07:00+00:00",
        "web_sales": 5713,
        "offline_sales": 3639
    },
    {
        "id": 364,
        "date": "2022-12-14T04:08:00+00:00",
        "web_sales": 5721,
        "offline_sales": 3642
    },
    {
        "id": 365,
        "date": "2022-12-14T04:09:00+00:00",
        "web_sales": 5740,
        "offline_sales": 3653
    },
    {
        "id": 366,
        "date": "2022-12-14T04:10:00+00:00",
        "web_sales": 5761,
        "offline_sales": 3661
    },
    {
        "id": 367,
        "date": "2022-12-14T04:11:00+00:00",
        "web_sales": 5776,
        "offline_sales": 3667
    },
    {
        "id": 368,
        "date": "2022-12-14T04:12:00+00:00",
        "web_sales": 5794,
        "offline_sales": 3675
    },
    {
        "id": 369,
        "date": "2022-12-14T04:13:00+00:00",
        "web_sales": 5809,
        "offline_sales": 3682
    },
    {
        "id": 370,
        "date": "2022-12-14T04:14:00+00:00",
        "web_sales": 5820,
        "offline_sales": 3689
    },
    {
        "id": 371,
        "date": "2022-12-14T04:15:00+00:00",
        "web_sales": 5834,
        "offline_sales": 3695
    },
    {
        "id": 372,
        "date": "2022-12-14T04:16:00+00:00",
        "web_sales": 5850,
        "offline_sales": 3703
    },
    {
        "id": 373,
        "date": "2022-12-14T04:17:00+00:00",
        "web_sales": 5875,
        "offline_sales": 3711
    },
    {
        "id": 374,
        "date": "2022-12-14T04:18:00+00:00",
        "web_sales": 5891,
        "offline_sales": 3719
    },
    {
        "id": 375,
        "date": "2022-12-14T04:19:00+00:00",
        "web_sales": 5905,
        "offline_sales": 3732
    },
    {
        "id": 376,
        "date": "2022-12-14T04:20:00+00:00",
        "web_sales": 5921,
        "offline_sales": 3741
    },
    {
        "id": 377,
        "date": "2022-12-14T04:21:00+00:00",
        "web_sales": 5938,
        "offline_sales": 3752
    },
    {
        "id": 378,
        "date": "2022-12-14T04:22:00+00:00",
        "web_sales": 5955,
        "offline_sales": 3761
    },
    {
        "id": 379,
        "date": "2022-12-14T04:23:00+00:00",
        "web_sales": 5969,
        "offline_sales": 3769
    },
    {
        "id": 380,
        "date": "2022-12-14T04:24:00+00:00",
        "web_sales": 5977,
        "offline_sales": 3774
    },
    {
        "id": 381,
        "date": "2022-12-14T04:25:00+00:00",
        "web_sales": 5990,
        "offline_sales": 3782
    },
    {
        "id": 382,
        "date": "2022-12-14T04:26:00+00:00",
        "web_sales": 6003,
        "offline_sales": 3786
    },
    {
        "id": 383,
        "date": "2022-12-14T04:27:00+00:00",
        "web_sales": 6015,
        "offline_sales": 3793
    },
    {
        "id": 384,
        "date": "2022-12-14T04:28:00+00:00",
        "web_sales": 6026,
        "offline_sales": 3798
    },
    {
        "id": 385,
        "date": "2022-12-14T04:29:00+00:00",
        "web_sales": 6043,
        "offline_sales": 3807
    },
    {
        "id": 386,
        "date": "2022-12-14T04:30:00+00:00",
        "web_sales": 6055,
        "offline_sales": 3813
    },
    {
        "id": 387,
        "date": "2022-12-14T04:31:00+00:00",
        "web_sales": 6063,
        "offline_sales": 3815
    },
    {
        "id": 388,
        "date": "2022-12-14T04:32:00+00:00",
        "web_sales": 6069,
        "offline_sales": 3819
    },
    {
        "id": 389,
        "date": "2022-12-14T04:33:00+00:00",
        "web_sales": 6081,
        "offline_sales": 3825
    },
    {
        "id": 390,
        "date": "2022-12-14T04:34:00+00:00",
        "web_sales": 6089,
        "offline_sales": 3826
    },
    {
        "id": 391,
        "date": "2022-12-14T04:35:00+00:00",
        "web_sales": 6105,
        "offline_sales": 3837
    },
    {
        "id": 392,
        "date": "2022-12-14T04:36:00+00:00",
        "web_sales": 6120,
        "offline_sales": 3845
    },
    {
        "id": 393,
        "date": "2022-12-14T04:37:00+00:00",
        "web_sales": 6132,
        "offline_sales": 3854
    },
    {
        "id": 394,
        "date": "2022-12-14T04:38:00+00:00",
        "web_sales": 6147,
        "offline_sales": 3859
    },
    {
        "id": 395,
        "date": "2022-12-14T04:39:00+00:00",
        "web_sales": 6164,
        "offline_sales": 3871
    },
    {
        "id": 396,
        "date": "2022-12-14T04:40:00+00:00",
        "web_sales": 6174,
        "offline_sales": 3879
    },
    {
        "id": 397,
        "date": "2022-12-14T04:41:00+00:00",
        "web_sales": 6190,
        "offline_sales": 3890
    },
    {
        "id": 398,
        "date": "2022-12-14T04:42:00+00:00",
        "web_sales": 6200,
        "offline_sales": 3897
    },
    {
        "id": 399,
        "date": "2022-12-14T04:43:00+00:00",
        "web_sales": 6218,
        "offline_sales": 3907
    },
    {
        "id": 400,
        "date": "2022-12-14T04:44:00+00:00",
        "web_sales": 6235,
        "offline_sales": 3916
    },
    {
        "id": 401,
        "date": "2022-12-14T04:45:00+00:00",
        "web_sales": 6241,
        "offline_sales": 3919
    },
    {
        "id": 402,
        "date": "2022-12-14T04:46:00+00:00",
        "web_sales": 6252,
        "offline_sales": 3922
    },
    {
        "id": 403,
        "date": "2022-12-14T04:47:00+00:00",
        "web_sales": 6264,
        "offline_sales": 3928
    },
    {
        "id": 404,
        "date": "2022-12-14T04:48:00+00:00",
        "web_sales": 6282,
        "offline_sales": 3937
    },
    {
        "id": 405,
        "date": "2022-12-14T04:49:00+00:00",
        "web_sales": 6295,
        "offline_sales": 3945
    },
    {
        "id": 406,
        "date": "2022-12-14T04:50:00+00:00",
        "web_sales": 6308,
        "offline_sales": 3948
    },
    {
        "id": 407,
        "date": "2022-12-14T04:51:00+00:00",
        "web_sales": 6321,
        "offline_sales": 3956
    },
    {
        "id": 408,
        "date": "2022-12-14T04:52:00+00:00",
        "web_sales": 6336,
        "offline_sales": 3966
    },
    {
        "id": 409,
        "date": "2022-12-14T04:53:00+00:00",
        "web_sales": 6344,
        "offline_sales": 3971
    },
    {
        "id": 410,
        "date": "2022-12-14T04:54:00+00:00",
        "web_sales": 6363,
        "offline_sales": 3981
    },
    {
        "id": 411,
        "date": "2022-12-14T04:55:00+00:00",
        "web_sales": 6371,
        "offline_sales": 3986
    },
    {
        "id": 412,
        "date": "2022-12-14T04:56:00+00:00",
        "web_sales": 6383,
        "offline_sales": 3992
    },
    {
        "id": 413,
        "date": "2022-12-14T04:57:00+00:00",
        "web_sales": 6397,
        "offline_sales": 3999
    },
    {
        "id": 414,
        "date": "2022-12-14T04:58:00+00:00",
        "web_sales": 6405,
        "offline_sales": 4004
    },
    {
        "id": 415,
        "date": "2022-12-14T04:59:00+00:00",
        "web_sales": 6419,
        "offline_sales": 4011
    },
    {
        "id": 416,
        "date": "2022-12-14T05:00:00+00:00",
        "web_sales": 6428,
        "offline_sales": 4019
    },
    {
        "id": 417,
        "date": "2022-12-14T05:01:00+00:00",
        "web_sales": 6441,
        "offline_sales": 4026
    },
    {
        "id": 418,
        "date": "2022-12-14T05:02:00+00:00",
        "web_sales": 6451,
        "offline_sales": 4032
    },
    {
        "id": 419,
        "date": "2022-12-14T05:03:00+00:00",
        "web_sales": 6465,
        "offline_sales": 4038
    },
    {
        "id": 420,
        "date": "2022-12-14T05:04:00+00:00",
        "web_sales": 6474,
        "offline_sales": 4043
    },
    {
        "id": 421,
        "date": "2022-12-14T05:05:00+00:00",
        "web_sales": 6489,
        "offline_sales": 4050
    },
    {
        "id": 422,
        "date": "2022-12-14T05:06:00+00:00",
        "web_sales": 6503,
        "offline_sales": 4060
    },
    {
        "id": 423,
        "date": "2022-12-14T05:07:00+00:00",
        "web_sales": 6513,
        "offline_sales": 4065
    },
    {
        "id": 424,
        "date": "2022-12-14T05:08:00+00:00",
        "web_sales": 6521,
        "offline_sales": 4067
    },
    {
        "id": 425,
        "date": "2022-12-14T05:09:00+00:00",
        "web_sales": 6530,
        "offline_sales": 4074
    },
    {
        "id": 426,
        "date": "2022-12-14T05:10:00+00:00",
        "web_sales": 6542,
        "offline_sales": 4081
    },
    {
        "id": 427,
        "date": "2022-12-14T05:11:00+00:00",
        "web_sales": 6547,
        "offline_sales": 4085
    },
    {
        "id": 428,
        "date": "2022-12-14T05:12:00+00:00",
        "web_sales": 6556,
        "offline_sales": 4091
    },
    {
        "id": 429,
        "date": "2022-12-14T05:13:00+00:00",
        "web_sales": 6565,
        "offline_sales": 4094
    },
    {
        "id": 430,
        "date": "2022-12-14T05:14:00+00:00",
        "web_sales": 6572,
        "offline_sales": 4099
    },
    {
        "id": 431,
        "date": "2022-12-14T05:15:00+00:00",
        "web_sales": 6587,
        "offline_sales": 4107
    },
    {
        "id": 432,
        "date": "2022-12-14T05:16:00+00:00",
        "web_sales": 6599,
        "offline_sales": 4117
    },
    {
        "id": 433,
        "date": "2022-12-14T05:17:00+00:00",
        "web_sales": 6611,
        "offline_sales": 4126
    },
    {
        "id": 434,
        "date": "2022-12-14T05:18:00+00:00",
        "web_sales": 6614,
        "offline_sales": 4127
    },
    {
        "id": 435,
        "date": "2022-12-14T05:19:00+00:00",
        "web_sales": 6619,
        "offline_sales": 4130
    },
    {
        "id": 436,
        "date": "2022-12-14T05:20:00+00:00",
        "web_sales": 6626,
        "offline_sales": 4135
    },
    {
        "id": 437,
        "date": "2022-12-14T05:21:00+00:00",
        "web_sales": 6638,
        "offline_sales": 4144
    },
    {
        "id": 438,
        "date": "2022-12-14T05:22:00+00:00",
        "web_sales": 6648,
        "offline_sales": 4151
    },
    {
        "id": 439,
        "date": "2022-12-14T05:23:00+00:00",
        "web_sales": 6656,
        "offline_sales": 4156
    },
    {
        "id": 440,
        "date": "2022-12-14T05:24:00+00:00",
        "web_sales": 6667,
        "offline_sales": 4162
    },
    {
        "id": 441,
        "date": "2022-12-14T05:25:00+00:00",
        "web_sales": 6678,
        "offline_sales": 4166
    },
    {
        "id": 442,
        "date": "2022-12-14T05:26:00+00:00",
        "web_sales": 6690,
        "offline_sales": 4174
    },
    {
        "id": 443,
        "date": "2022-12-14T05:27:00+00:00",
        "web_sales": 6707,
        "offline_sales": 4184
    },
    {
        "id": 444,
        "date": "2022-12-14T05:28:00+00:00",
        "web_sales": 6721,
        "offline_sales": 4190
    },
    {
        "id": 445,
        "date": "2022-12-14T05:29:00+00:00",
        "web_sales": 6730,
        "offline_sales": 4195
    },
    {
        "id": 446,
        "date": "2022-12-14T05:30:00+00:00",
        "web_sales": 6745,
        "offline_sales": 4202
    },
    {
        "id": 447,
        "date": "2022-12-14T05:31:00+00:00",
        "web_sales": 6767,
        "offline_sales": 4216
    },
    {
        "id": 448,
        "date": "2022-12-14T05:32:00+00:00",
        "web_sales": 6786,
        "offline_sales": 4228
    },
    {
        "id": 449,
        "date": "2022-12-14T05:33:00+00:00",
        "web_sales": 6801,
        "offline_sales": 4238
    },
    {
        "id": 450,
        "date": "2022-12-14T05:34:00+00:00",
        "web_sales": 6812,
        "offline_sales": 4243
    },
    {
        "id": 451,
        "date": "2022-12-14T05:35:00+00:00",
        "web_sales": 6824,
        "offline_sales": 4249
    },
    {
        "id": 452,
        "date": "2022-12-14T05:36:00+00:00",
        "web_sales": 6840,
        "offline_sales": 4257
    },
    {
        "id": 453,
        "date": "2022-12-14T05:37:00+00:00",
        "web_sales": 6861,
        "offline_sales": 4265
    },
    {
        "id": 454,
        "date": "2022-12-14T05:38:00+00:00",
        "web_sales": 6882,
        "offline_sales": 4275
    },
    {
        "id": 455,
        "date": "2022-12-14T05:39:00+00:00",
        "web_sales": 6901,
        "offline_sales": 4291
    },
    {
        "id": 456,
        "date": "2022-12-14T05:40:00+00:00",
        "web_sales": 6916,
        "offline_sales": 4295
    },
    {
        "id": 457,
        "date": "2022-12-14T05:41:00+00:00",
        "web_sales": 6930,
        "offline_sales": 4300
    },
    {
        "id": 458,
        "date": "2022-12-14T05:42:00+00:00",
        "web_sales": 6943,
        "offline_sales": 4301
    },
    {
        "id": 459,
        "date": "2022-12-14T05:43:00+00:00",
        "web_sales": 6958,
        "offline_sales": 4311
    },
    {
        "id": 460,
        "date": "2022-12-14T05:44:00+00:00",
        "web_sales": 6972,
        "offline_sales": 4318
    },
    {
        "id": 461,
        "date": "2022-12-14T05:45:00+00:00",
        "web_sales": 6982,
        "offline_sales": 4321
    },
    {
        "id": 462,
        "date": "2022-12-14T05:46:00+00:00",
        "web_sales": 6998,
        "offline_sales": 4327
    },
    {
        "id": 463,
        "date": "2022-12-14T05:47:00+00:00",
        "web_sales": 7009,
        "offline_sales": 4333
    },
    {
        "id": 464,
        "date": "2022-12-14T05:48:00+00:00",
        "web_sales": 7016,
        "offline_sales": 4339
    },
    {
        "id": 465,
        "date": "2022-12-14T05:49:00+00:00",
        "web_sales": 7026,
        "offline_sales": 4345
    },
    {
        "id": 466,
        "date": "2022-12-14T05:50:00+00:00",
        "web_sales": 7043,
        "offline_sales": 4353
    },
    {
        "id": 467,
        "date": "2022-12-14T05:51:00+00:00",
        "web_sales": 7053,
        "offline_sales": 4359
    },
    {
        "id": 468,
        "date": "2022-12-14T05:52:00+00:00",
        "web_sales": 7065,
        "offline_sales": 4367
    },
    {
        "id": 469,
        "date": "2022-12-14T05:53:00+00:00",
        "web_sales": 7073,
        "offline_sales": 4370
    },
    {
        "id": 470,
        "date": "2022-12-14T05:54:00+00:00",
        "web_sales": 7083,
        "offline_sales": 4373
    },
    {
        "id": 471,
        "date": "2022-12-14T05:55:00+00:00",
        "web_sales": 7088,
        "offline_sales": 4377
    },
    {
        "id": 472,
        "date": "2022-12-14T05:56:00+00:00",
        "web_sales": 7101,
        "offline_sales": 4387
    },
    {
        "id": 473,
        "date": "2022-12-14T05:57:00+00:00",
        "web_sales": 7105,
        "offline_sales": 4391
    },
    {
        "id": 474,
        "date": "2022-12-14T05:58:00+00:00",
        "web_sales": 7119,
        "offline_sales": 4400
    },
    {
        "id": 475,
        "date": "2022-12-14T05:59:00+00:00",
        "web_sales": 7130,
        "offline_sales": 4408
    },
    {
        "id": 476,
        "date": "2022-12-14T06:00:00+00:00",
        "web_sales": 7139,
        "offline_sales": 4411
    },
    {
        "id": 477,
        "date": "2022-12-14T06:01:00+00:00",
        "web_sales": 7149,
        "offline_sales": 4417
    },
    {
        "id": 478,
        "date": "2022-12-14T06:02:00+00:00",
        "web_sales": 7157,
        "offline_sales": 4421
    },
    {
        "id": 479,
        "date": "2022-12-14T06:03:00+00:00",
        "web_sales": 7166,
        "offline_sales": 4426
    },
    {
        "id": 480,
        "date": "2022-12-14T06:04:00+00:00",
        "web_sales": 7173,
        "offline_sales": 4431
    },
    {
        "id": 481,
        "date": "2022-12-14T06:05:00+00:00",
        "web_sales": 7180,
        "offline_sales": 4433
    },
    {
        "id": 482,
        "date": "2022-12-14T06:06:00+00:00",
        "web_sales": 7188,
        "offline_sales": 4437
    },
    {
        "id": 483,
        "date": "2022-12-14T06:07:00+00:00",
        "web_sales": 7194,
        "offline_sales": 4442
    },
    {
        "id": 484,
        "date": "2022-12-14T06:08:00+00:00",
        "web_sales": 7199,
        "offline_sales": 4445
    },
    {
        "id": 485,
        "date": "2022-12-14T06:09:00+00:00",
        "web_sales": 7207,
        "offline_sales": 4448
    },
    {
        "id": 486,
        "date": "2022-12-14T06:10:00+00:00",
        "web_sales": 7212,
        "offline_sales": 4451
    },
    {
        "id": 487,
        "date": "2022-12-14T06:11:00+00:00",
        "web_sales": 7221,
        "offline_sales": 4457
    },
    {
        "id": 488,
        "date": "2022-12-14T06:12:00+00:00",
        "web_sales": 7230,
        "offline_sales": 4459
    },
    {
        "id": 489,
        "date": "2022-12-14T06:13:00+00:00",
        "web_sales": 7235,
        "offline_sales": 4459
    },
    {
        "id": 490,
        "date": "2022-12-14T06:14:00+00:00",
        "web_sales": 7240,
        "offline_sales": 4462
    },
    {
        "id": 491,
        "date": "2022-12-14T06:15:00+00:00",
        "web_sales": 7249,
        "offline_sales": 4469
    },
    {
        "id": 492,
        "date": "2022-12-14T06:16:00+00:00",
        "web_sales": 7257,
        "offline_sales": 4472
    },
    {
        "id": 493,
        "date": "2022-12-14T06:17:00+00:00",
        "web_sales": 7260,
        "offline_sales": 4474
    },
    {
        "id": 494,
        "date": "2022-12-14T06:18:00+00:00",
        "web_sales": 7267,
        "offline_sales": 4477
    },
    {
        "id": 495,
        "date": "2022-12-14T06:19:00+00:00",
        "web_sales": 7274,
        "offline_sales": 4481
    },
    {
        "id": 496,
        "date": "2022-12-14T06:20:00+00:00",
        "web_sales": 7286,
        "offline_sales": 4490
    },
    {
        "id": 497,
        "date": "2022-12-14T06:21:00+00:00",
        "web_sales": 7290,
        "offline_sales": 4491
    },
    {
        "id": 498,
        "date": "2022-12-14T06:22:00+00:00",
        "web_sales": 7296,
        "offline_sales": 4495
    },
    {
        "id": 499,
        "date": "2022-12-14T06:23:00+00:00",
        "web_sales": 7306,
        "offline_sales": 4500
    },
    {
        "id": 500,
        "date": "2022-12-14T06:24:00+00:00",
        "web_sales": 7313,
        "offline_sales": 4504
    },
    {
        "id": 501,
        "date": "2022-12-14T06:25:00+00:00",
        "web_sales": 7321,
        "offline_sales": 4508
    },
    {
        "id": 502,
        "date": "2022-12-14T06:26:00+00:00",
        "web_sales": 7326,
        "offline_sales": 4510
    },
    {
        "id": 503,
        "date": "2022-12-14T06:27:00+00:00",
        "web_sales": 7328,
        "offline_sales": 4511
    },
    {
        "id": 504,
        "date": "2022-12-14T06:28:00+00:00",
        "web_sales": 7332,
        "offline_sales": 4514
    },
    {
        "id": 505,
        "date": "2022-12-14T06:29:00+00:00",
        "web_sales": 7341,
        "offline_sales": 4518
    },
    {
        "id": 506,
        "date": "2022-12-14T06:30:00+00:00",
        "web_sales": 7346,
        "offline_sales": 4520
    },
    {
        "id": 507,
        "date": "2022-12-14T06:31:00+00:00",
        "web_sales": 7350,
        "offline_sales": 4521
    },
    {
        "id": 508,
        "date": "2022-12-14T06:32:00+00:00",
        "web_sales": 7354,
        "offline_sales": 4524
    },
    {
        "id": 509,
        "date": "2022-12-14T06:33:00+00:00",
        "web_sales": 7356,
        "offline_sales": 4526
    },
    {
        "id": 510,
        "date": "2022-12-14T06:34:00+00:00",
        "web_sales": 7364,
        "offline_sales": 4531
    },
    {
        "id": 511,
        "date": "2022-12-14T06:35:00+00:00",
        "web_sales": 7368,
        "offline_sales": 4532
    },
    {
        "id": 512,
        "date": "2022-12-14T06:36:00+00:00",
        "web_sales": 7373,
        "offline_sales": 4534
    },
    {
        "id": 513,
        "date": "2022-12-14T06:37:00+00:00",
        "web_sales": 7380,
        "offline_sales": 4536
    },
    {
        "id": 514,
        "date": "2022-12-14T06:38:00+00:00",
        "web_sales": 7387,
        "offline_sales": 4539
    },
    {
        "id": 515,
        "date": "2022-12-14T06:39:00+00:00",
        "web_sales": 7392,
        "offline_sales": 4541
    },
    {
        "id": 516,
        "date": "2022-12-14T06:40:00+00:00",
        "web_sales": 7400,
        "offline_sales": 4545
    },
    {
        "id": 517,
        "date": "2022-12-14T06:41:00+00:00",
        "web_sales": 7403,
        "offline_sales": 4548
    },
    {
        "id": 518,
        "date": "2022-12-14T06:42:00+00:00",
        "web_sales": 7406,
        "offline_sales": 4550
    },
    {
        "id": 519,
        "date": "2022-12-14T06:43:00+00:00",
        "web_sales": 7409,
        "offline_sales": 4552
    },
    {
        "id": 520,
        "date": "2022-12-14T06:44:00+00:00",
        "web_sales": 7414,
        "offline_sales": 4553
    },
    {
        "id": 521,
        "date": "2022-12-14T06:45:00+00:00",
        "web_sales": 7416,
        "offline_sales": 4553
    },
    {
        "id": 522,
        "date": "2022-12-14T06:46:00+00:00",
        "web_sales": 7421,
        "offline_sales": 4556
    },
    {
        "id": 523,
        "date": "2022-12-14T06:47:00+00:00",
        "web_sales": 7428,
        "offline_sales": 4560
    },
    {
        "id": 524,
        "date": "2022-12-14T06:48:00+00:00",
        "web_sales": 7437,
        "offline_sales": 4565
    },
    {
        "id": 525,
        "date": "2022-12-14T06:49:00+00:00",
        "web_sales": 7440,
        "offline_sales": 4566
    },
    {
        "id": 526,
        "date": "2022-12-14T06:50:00+00:00",
        "web_sales": 7445,
        "offline_sales": 4570
    },
    {
        "id": 527,
        "date": "2022-12-14T06:51:00+00:00",
        "web_sales": 7455,
        "offline_sales": 4579
    },
    {
        "id": 528,
        "date": "2022-12-14T06:52:00+00:00",
        "web_sales": 7462,
        "offline_sales": 4584
    },
    {
        "id": 529,
        "date": "2022-12-14T06:53:00+00:00",
        "web_sales": 7466,
        "offline_sales": 4586
    },
    {
        "id": 530,
        "date": "2022-12-14T06:54:00+00:00",
        "web_sales": 7478,
        "offline_sales": 4595
    },
    {
        "id": 531,
        "date": "2022-12-14T06:55:00+00:00",
        "web_sales": 7482,
        "offline_sales": 4599
    },
    {
        "id": 532,
        "date": "2022-12-14T06:56:00+00:00",
        "web_sales": 7485,
        "offline_sales": 4601
    },
    {
        "id": 533,
        "date": "2022-12-14T06:57:00+00:00",
        "web_sales": 7491,
        "offline_sales": 4604
    },
    {
        "id": 534,
        "date": "2022-12-14T06:58:00+00:00",
        "web_sales": 7497,
        "offline_sales": 4607
    },
    {
        "id": 535,
        "date": "2022-12-14T06:59:00+00:00",
        "web_sales": 7498,
        "offline_sales": 4608
    },
    {
        "id": 536,
        "date": "2022-12-14T07:00:00+00:00",
        "web_sales": 7502,
        "offline_sales": 4609
    },
    {
        "id": 537,
        "date": "2022-12-14T07:01:00+00:00",
        "web_sales": 7511,
        "offline_sales": 4613
    },
    {
        "id": 538,
        "date": "2022-12-14T07:02:00+00:00",
        "web_sales": 7518,
        "offline_sales": 4616
    },
    {
        "id": 539,
        "date": "2022-12-14T07:03:00+00:00",
        "web_sales": 7523,
        "offline_sales": 4618
    },
    {
        "id": 540,
        "date": "2022-12-14T07:04:00+00:00",
        "web_sales": 7526,
        "offline_sales": 4620
    }
]);

  // const fetchData = async () => {
  //   let { data: sales, error: sales_err } = await supabase.from("sales").select("*");
  //   if (sales_err) {
  //     console.error("Error fetching data:", sales_err);
  //   } else if (sales) {
  //     console.log(sales);
  //     setAllSales(sales);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  }, []);

  return (
    <div className="bg-white my-2 rounded-2xl pb-3 pr-3">
      <h1 className="text-xl ml-6 py-4 font-semibold text-slate-700">Customers by device</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={allSales}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="web_sales" stroke="#8884d8" strokeWidth={0.5} dot={false} />
          <Line type="monotone" dataKey="offline_sales" stroke="#82ca9d" strokeWidth={1} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Fourth;
