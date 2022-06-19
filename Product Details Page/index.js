
// ************************************************************COMMON DATA FOR ALL********************************

document.querySelector("#logoboat").addEventListener("click", function () {
    window.location.href = "index.html";
})

// Data and function for products page*******************************

let data =
    [//smartwatch
        {
            id: "001",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781",
            name: "boAt Watch Wave Lite",
            price: "1799",
            main_price: "6990",
            category: "smartwatch",
            review: "328",
            rating: "4.8",
            discount: "74",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/01_4f474894-40aa-4aca-ba57-8486dd47acc8_700x.jpg?v=1655271238",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/03_c1403863-ce69-4cc9-a4e4-20d06fece403_700x.jpg?v=1655271237",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/05_e71500a0-e06f-453f-926f-5ee18b4d2d39_700x.jpg?v=1655271238",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/03_c1403863-ce69-4cc9-a4e4-20d06fece403_700x.jpg?v=1655271237",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/05_e71500a0-e06f-453f-926f-5ee18b4d2d39_700x.jpg?v=1655271238",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_600x.png?v=1648108781",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_maroon_9b2c008c-1cf9-49e3-988d-3cb43a456d80_600x.png?v=1648108782",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_600x.png?v=1648108782",

        },
        {
            id: "002",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_400x.png?v=1647765304",
            name: "boAt Watch Wave Pro",
            price: "3299",
            main_price: "6990",
            category: "smartwatch",
            review: "46",
            rating: "5.0",
            discount: "53",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WavePro-FI-Black02_b0996e23-53ad-4bae-9f81-b7f16eba9260_700x.png?v=1655186023",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WavePro-FI-Black03_bcc39a1f-aa6b-43e2-bfd4-d26d41069612_700x.png?v=1655186023",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WavePro-FI-Black06_42dfd1bf-f27a-4281-9bd0-eccbf801e956_700x.png?v=1655186023",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WavePro-FI-Black03_bcc39a1f-aa6b-43e2-bfd4-d26d41069612_700x.png?v=1655186023",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/WavePro-FI-Black06_42dfd1bf-f27a-4281-9bd0-eccbf801e956_700x.png?v=1655186023",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4d128bbd-a1e7-4045-a5c5-25c744f3133f_600x.png?v=1647765303",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_600x.png?v=1647767874",
        },
        {
            id: "003",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216",
            name: "boAt Storm",
            price: "2499",
            main_price: "5990",
            category: "smartwatch",
            review: "35",
            rating: "4.8",
            discount: "58",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_03_7374765d-37f5-4b69-afaf-69fa3a4b779f.jpg?v=1639989127",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_04_53359eb9-4b7f-440c-be8d-3cc34fc70ef7.jpg?v=1639989127",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_05_e2ad7811-f0e2-40f9-acf2-d71e1d8d94bb.jpg?v=1639989127",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_04_53359eb9-4b7f-440c-be8d-3cc34fc70ef7.jpg?v=1639989127",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_05_e2ad7811-f0e2-40f9-acf2-d71e1d8d94bb.jpg?v=1639989127",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1585_420x.png?v=1640110653",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1579_420x.png?v=1640110355",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1591_420x.png?v=1640110480",
        },
        {
            id: "004",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_400x.png?v=1625157753",
            name: "boAt Watch Flash",
            price: "2499",
            main_price: "6990",
            category: "smartwatch",
            review: "188",
            rating: "4.8",
            discount: "64",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
        },
        {
            id: "005",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_400x.png?v=1640237576",
            name: "boAt Watch Iris",
            price: "4399",
            main_price: "11999",
            category: "smartwatch",
            review: "154",
            rating: "4.8",
            discount: "63",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_600x.png?v=1640237575",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_600x.png?v=1640237575",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
        },
        {
            id: "006",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_400x.png?v=1646393710",
            name: "TRebel Watch Xtend‌",
            price: "3499",
            main_price: "7990",
            category: "smartwatch",
            review: "125",
            rating: "5.0",
            discount: "56",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_600x.png?v=1646393709",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_751a0a5b-cf0d-48af-9205-e87de3b75f71_600x.png?v=1646393710",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_751a0a5b-cf0d-48af-9205-e87de3b75f71_600x.png?v=1646393710",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_600x.png?v=1646393709",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_751a0a5b-cf0d-48af-9205-e87de3b75f71_600x.png?v=1646393710",
        },
        {
            id: "007",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_400x.png?v=1636609395",
            name: "boAt Watch Zenit",
            price: "1999",
            main_price: "6990",
            category: "smartwatch",
            review: "232",
            rating: "4.7",
            discount: "71",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_2404e78e-d92d-45f5-a58c-478b80100207_600x.png?v=1636609395",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-black_600x.png?v=1636609395",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_600x.png?v=1636609395",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-black_600x.png?v=1636609395",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_600x.png?v=1636609395",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_2404e78e-d92d-45f5-a58c-478b80100207_600x.png?v=1636609395",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-black_600x.png?v=1636609395",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-grey_600x.png?v=1636609395",
        },
        {
            id: "008",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_400x.png?v=1626505847",
            name: "boAt Watch‌ Delta",
            price: "2999",
            main_price: "6990",
            category: "smartwatch",
            review: "451",
            rating: "4.5",
            discount: "57",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_600x.png?v=1626505847",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-1_f8ac08de-ed84-48f7-9326-137754d4cb54_600x.png?v=1626505847",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-3_600x.png?v=1626505847",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-1_f8ac08de-ed84-48f7-9326-137754d4cb54_600x.png?v=1626505847",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-3_600x.png?v=1626505847",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_600x.png?v=1626505847",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-1_f8ac08de-ed84-48f7-9326-137754d4cb54_600x.png?v=1626505847",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-3_600x.png?v=1626505847",
        },


        // earbuds
        {
            id: "009",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_400x.png?v=1642405569",
            name: "boAt Airdopes 131",
            price: "999",
            main_price: "2990",
            category: "airdopes",
            review: "352",
            rating: "4.8",
            discount: "67",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131TypeC_46c15722-70e3-41fb-94ed-c01677d78546_700x.jpg?v=1655129703",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131IWP_341b3d39-0544-41da-a95c-ce45c6db85c4_700x.jpg?v=1655129703",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131VA_0fab95c2-bd1c-4acd-9dd5-ae0af3b7b6dc_700x.jpg?v=1655129703",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131IWP_341b3d39-0544-41da-a95c-ce45c6db85c4_700x.jpg?v=1655129703",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131VA_0fab95c2-bd1c-4acd-9dd5-ae0af3b7b6dc_700x.jpg?v=1655129703",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/viper-green_600x.png?v=1642405569",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1642405569",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
        },
        {
            id: "010",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
            name: "boAt Airdopes 121 v2",
            price: "1299",
            main_price: "2999",
            category: "airdopes",
            review: "114",
            rating: "4.8",
            discount: "57",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-3_6b4f840b-570d-4588-aa69-1548f897cabc_700x.jpg?v=1655128550",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-5.2_dd5e723b-7448-4353-a693-058b15fa4812_700x.jpg?v=1655128551",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-3_6b4f840b-570d-4588-aa69-1548f897cabc_700x.jpg?v=1655128550",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-5.2_dd5e723b-7448-4353-a693-058b15fa4812_700x.jpg?v=1655128551",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_600x.png?v=1612765376",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_600x.png?v=1612765376",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-pink_600x.png?v=1612765377",
        },
        {
            id: "011",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_400x.png?v=1625046016",
            name: "boAt Airdopes 441",
            price: "2499",
            main_price: "5999",
            category: "airdopes",
            review: "41",
            rating: "4.8",
            discount: "58",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IPX7_600x.jpg?v=1654923287",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IWP_600x.jpg?v=1654923290",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/last-red_600x.jpg?v=1654923291",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IWP_600x.jpg?v=1654923290",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/last-red_600x.jpg?v=1654923291",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2e056443-6505-46ef-aa88-e20e2778b0a9_600x.png?v=1625046016",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a1b32b3b-7ed4-4b58-ade4-088ee08914c4_600x.png?v=1625046016",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/177292c0-d3d8-4ee3-adfe-7c539f030252_600x.png?v=1625046016",
        },
        
        {
            id: "013",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_400x.png?v=1646390495",
            name: "TRebel Airdopes 601",
            price: "3999",
            main_price: "9990",
            category: "airdopes",
            review: "452",
            rating: "4.4",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/601_2_4b68d94d-96f9-4b0a-a38c-33d460988ad4_600x.png?v=1646390495",
        },
        {

            id: "014",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD131-FI-CaptainsBlue06_400x.png?v=1655112365",
            name: "boAt Airdopes 156",
            price: "1599",
            main_price: "2990",
            category: "airdopes",
            review: "245",
            rating: "4.9",
            discount: "47",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_420x.png?v=1639988622",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bp131-main_420x.png?v=1639988297",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bp131-main_420x.png?v=1639988297",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_420x.png?v=1639988622",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bp131-main_420x.png?v=1639988297",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_420x.png?v=1639988622",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bp131-main_420x.png?v=1639988297",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bp131-main_420x.png?v=1639988297",
        },
        {
            id: "015",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_400x.png?v=1614424769",
            name: "TRebel Airdopes 431",
            price: "1999",
            main_price: "5999",
            category: "airdopes",
            review: "452",
            rating: "4.7",
            discount: "67",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_72x.png?v=1614424769",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_72x.png?v=1614424769",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_72x.png?v=1614424769",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
        },
        {
            id: "016",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner5-product_1_400x.png?v=1618480496",
            name: "boAt Airdopes 701",
            price: "3990",
            main_price: "9990",
            category: "airdopes",
            review: "45",
            rating: "4.7",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_de6601cc-68b0-4853-a3bc-f635daca486e_600x.png?v=1618480489",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner5-product_1_600x.png?v=1618480496",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_de6601cc-68b0-4853-a3bc-f635daca486e_600x.png?v=1618480489",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner5-product_1_600x.png?v=1618480496",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_de6601cc-68b0-4853-a3bc-f635daca486e_600x.png?v=1618480489",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_de6601cc-68b0-4853-a3bc-f635daca486e_600x.png?v=1618480489",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner5-product_1_600x.png?v=1618480496",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_de6601cc-68b0-4853-a3bc-f635daca486e_600x.png?v=1618480489",
        },

        //wireless headphones
        {
            id: "017",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
            name: "boAt Rockerz 333 Pro",
            price: "1699",
            main_price: "2990",
            category: "wireless",
            review: "52",
            rating: "4.9",
            discount: "43",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red06_07e3549e-1192-445c-b6d7-a421ff1f2a17_700x.png?v=1655132327",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red07_1dc6a985-2ec8-4dd8-b8d3-66cd2a6b9a8a_700x.png?v=1655132328",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red04_cc5938c2-57e6-424f-b267-cc8a465bb791_700x.png?v=1655132327",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red02_f22a15b1-b5a3-460f-b0ef-5de7fab3b9f3_700x.png?v=1655132322",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red03_ad0b8c86-1f03-4f51-89cb-3cb3d916cefa_700x.png?v=1655132320",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/GREEN_0bbd189a-8ab1-4806-80f2-95f679d0712d_600x.png?v=1652792832",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m3_08324ce2-cdd9-44d6-8f5b-849fda265ba8_600x.png?v=1639153082",
        },
        {
            id: "018",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",
            name: "boAt Rockerz 550",
            price: "1299",
            main_price: "2999",
            category: "wireless",
            review: "114",
            rating: "4.8",
            discount: "57",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R55050mmdrivers_700x.jpg?v=1655202470",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550clubbed_c2b31f0f-7a9c-4d4d-b507-41527ec05133_700x.jpg?v=1655202767",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550physicalnoisereduction_92fd89c6-9b4c-464b-8632-93d56c7bbc8b_700x.jpg?v=1655202766",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550playbacktime20hrs_7a0973ed-75b9-4a58-ab23-f233e151f821_700x.jpg?v=1655202767",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550ergonomicdesign_df538497-c30c-4617-86b3-27337b0e65a8_700x.jpg?v=1655202766",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_600x.png?v=1625046144",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_600x.png?v=1625046144",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
        },
        {
            id: "019",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
            name: "boAt Rockerz 450",
            price: "1499",
            main_price: "3990",
            category: "wireless",
            review: "41",
            rating: "4.8",
            discount: "62",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/last-beige_700x.jpg?v=1654921668",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/premium-matte-finish_521de285-f320-4311-ba28-757ab27542ef_700x.jpg?v=1655194807",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/lightweight-beige_700x.jpg?v=1654921665",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/drivers-blue_700x.jpg?v=1654921668",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1625045491",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
        },
        {
            id: "020",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
            name: "boAt Rockerz 518",
            price: "1599",
            main_price: "3990",
            category: "wireless",
            review: "54",
            rating: "4.9",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-green_600x.png?v=1613457278",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-orange_600x.png?v=1613457279",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-green_600x.png?v=1613457278",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
        },
        {
            id: "021",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_2_600x.png?v=1646735738",
            name: "TRebel Rockerz 660",
            price: "2799",
            main_price: "3990",
            category: "wireless",
            review: "42",
            rating: "4.4",
            discount: "30",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_2_600x.png?v=1646735738",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_1_600x.png?v=1646735737",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_2_600x.png?v=1646735738",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_1_600x.png?v=1646735737",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_2_600x.png?v=1646735738",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_1_600x.png?v=1646735737",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_2_600x.png?v=1646735738",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r660_1_600x.png?v=1646735737",
        },
        {
            id: "022",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-red_600x.png?v=1613733499",
            name: "boAt Rockerz 255F",
            price: "949",
            main_price: "2990",
            category: "wireless",
            review: "38",
            rating: "4.9",
            discount: "47",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-red_600x.png?v=1613733499",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-neon_600x.png?v=1613457307",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-blue_600x.png?v=1613457307",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-black_600x.png?v=1613457308",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-red_600x.png?v=1613733499",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-red_600x.png?v=1613733499",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-neon_600x.png?v=1613457307",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255f-blue_600x.png?v=1613457307",
        },
        {
            id: "023",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-green_fb9aa506-5e26-4d97-b745-ca48aa7c0234_600x.png?v=1614587254",
            name: "TRebel Rockerz 255",
            price: "1999",
            main_price: "5999",
            category: "wireless",
            review: "452",
            rating: "4.7",
            discount: "67",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-red_bd675504-5750-4b42-97b9-79caf2cc9034_600x.png?v=1614587254",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-blue_a6cd1eab-62ae-4875-9482-97b5cc0c18b9_600x.png?v=1614539188",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-yellow_9fec7d41-fb16-426f-a6a9-32f5034fe0c0_600x.png?v=1614539188",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-blue_a6cd1eab-62ae-4875-9482-97b5cc0c18b9_600x.png?v=1614539188",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-yellow_9fec7d41-fb16-426f-a6a9-32f5034fe0c0_600x.png?v=1614539188",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-red_bd675504-5750-4b42-97b9-79caf2cc9034_600x.png?v=1614587254",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-blue_a6cd1eab-62ae-4875-9482-97b5cc0c18b9_600x.png?v=1614539188",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-yellow_9fec7d41-fb16-426f-a6a9-32f5034fe0c0_600x.png?v=1614539188",
        },
        {
            id: "024",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_1_600x.png?v=1630478228",
            name: "boAt Rockerz 375",
            price: "1499",
            main_price: "3999",
            category: "wireless",
            review: "45",
            rating: "4.8",
            discount: "62",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_1_600x.png?v=1630478228",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_2_7972d7a8-1a49-44cc-bd07-bd58990e0f8b_600x.png?v=1633357205",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_3_96022ddd-6c49-48c1-aee3-82577805f091_72x.png?v=1633357206",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_4_6fe2ceaf-af2d-416d-8ea2-cacd7665ca51_600x.png?v=1633357205",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_1_600x.png?v=1630478228",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_1_600x.png?v=1630478228",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_2_7972d7a8-1a49-44cc-bd07-bd58990e0f8b_600x.png?v=1633357205",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/r375_main_3_96022ddd-6c49-48c1-aee3-82577805f091_72x.png?v=1633357206",
        },
        //bassheads
        {
            id: "025",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
            name: "boAt BassHeads 103",
            price: "369",
            main_price: "1290",
            category: "wired",
            review: "470",
            rating: "4.8",
            discount: "71",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintorange_600x.png?v=1632906888",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        },
        {
            id: "026",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_400x.png?v=1574927262",
            name: "boAt BassHeads 103",
            price: "369",
            main_price: "1290",
            category: "wired",
            review: "470",
            rating: "4.8",
            discount: "71",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintorange_600x.png?v=1632906888",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
        },

        {
            id: "027",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
            name: "boAt BassHeads 242",
            price: "449",
            main_price: "1490",
            category: "wired",
            review: "330",
            rating: "4.8",
            discount: "70",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d45fa60-7d5b-4dfe-b6ef-65df28058130_600x.png?v=1625046386",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4eed59f3-6f28-4511-9240-c043e2523482_600x.png?v=1625046386",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/51a9e051-8c98-4dcd-9d03-9cae0b35bb0f_600x.png?v=1625046386",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c1cb9fb6-b924-4474-a8f6-dc06ebc6c610_600x.png?v=1625046386",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d45fa60-7d5b-4dfe-b6ef-65df28058130_600x.png?v=1625046386",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4eed59f3-6f28-4511-9240-c043e2523482_600x.png?v=1625046386",
        },

        {
            id: "028",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
            name: "boAt BassHeads 182",
            price: "499",
            main_price: "1290",
            category: "wired",
            review: "470",
            rating: "4.8",
            discount: "106",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-black_600x.png?v=1598044333",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-black_600x.png?v=1598044333",
        },

        {
            id: "029",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1grn_1d50c0b3-5b2f-4ba1-a6eb-c138495485a2_700x.png?v=1592544752",
            name: "boAt BassHeads 220",
            price: "699",
            main_price: "999",
            category: "wired",
            review: "70",
            rating: "4.8",
            discount: "30",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1orange_ee72a502-2184-42c7-ab95-50f3beaaab8b_700x.png?v=1592544752",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1orange_ee72a502-2184-42c7-ab95-50f3beaaab8b_700x.png?v=1592544752",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1red_09dd8ad5-5cc8-47b3-8e1b-5c4bfa05be7e_700x.png?v=1592544752",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1blk_1e9b4fdc-7607-4024-ad0a-2da2ecbe9755_700x.png?v=1592544753",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1blue_ce33c48c-6982-4cf0-b137-4e0e797d5037_700x.png?v=1592544753",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1orange_ee72a502-2184-42c7-ab95-50f3beaaab8b_700x.png?v=1592544752",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1orange_ee72a502-2184-42c7-ab95-50f3beaaab8b_700x.png?v=1592544752",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1red_09dd8ad5-5cc8-47b3-8e1b-5c4bfa05be7e_700x.png?v=1592544752",
        },
        //speakers 
        {
            id: "030",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize-2_600x.png?v=1655187482",
            name: "boAt Stone 135",
            price: "799",
            main_price: "1990",
            category: "speakers",
            review: "70",
            rating: "4.8",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize-2_72x.png?v=1655187482",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_1b999434-bebd-4991-97e0-8ab8974b99c2_600x.png?v=1655187482",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize_600x.png?v=1655187482",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4_600x.png?v=1655187482",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize-2_600x.png?v=1655187482",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize-2_72x.png?v=1655187482",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3_1b999434-bebd-4991-97e0-8ab8974b99c2_600x.png?v=1655187482",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/resize_600x.png?v=1655187482",
        },
        {
            id: "031",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_reed_600x.png?v=1635842501",
            name: "boAt Stone Grenade",
            price: "1199",
            main_price: "3990",
            category: "speakers",
            review: "70",
            rating: "4.8",
            discount: "70",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_reed_600x.png?v=1635842501",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_e09ae3e8-7534-4ad2-a9a2-1b545a423fd1_600x.png?v=1635842500",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_eb235c82-e1ad-40dc-83d3-2521d040b479_600x.png?v=1635842501",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_600x.png?v=1635842500",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0932e2dd-44fb-43f1-988b-82c086b7ff94_600x.png?v=1625046596",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_reed_600x.png?v=1635842501",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_e09ae3e8-7534-4ad2-a9a2-1b545a423fd1_600x.png?v=1635842500",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_eb235c82-e1ad-40dc-83d3-2521d040b479_600x.png?v=1635842501",
        },
        {
            id: "032",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main3_600x.png?v=1632893559",
            name: "boAt Stone 1200F",
            price: "3399",
            main_price: "6990",
            category: "speakers",
            review: "70",
            rating: "5.0",
            discount: "51",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200F14wattpower_ffb6b027-5e75-4681-aafb-70e828023ede_700x.jpg?v=1655190349",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200FPlayback_59755d22-650b-4da7-a991-13ec305dbf7d_700x.jpg?v=1655190349",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200FTWSgreen_2c58b200-62bc-4d85-8d40-1d42902aa423_700x.jpg?v=1655190349",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200Flastgreen_69bb4d68-39fe-4c12-96a0-0c05f6969b5e_700x.jpg?v=1655190349",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200FRGBLights_442b05c8-eb99-4813-8512-2e1ac93c34ea_700x.jpg?v=1655190349",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main3_600x.png?v=1632893559",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main1_600x.png?v=1632893558",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main2_600x.png?v=1632893558",
        },
        {
            id: "033",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c1144ee5-d03e-483a-8e5f-7552b138a4b1_600x.png?v=1649857754",
            name: "boAt Stone 352",
            price: "1699",
            main_price: "3490",
            category: "speakers",
            review: "70",
            rating: "4.8",
            discount: "51",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/02_988d6040-688f-40c7-a9ae-3e344c78cfe8_700x.jpg?v=1655270746",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/03_ff887e62-6f27-4751-abd4-16213f2d6529_700x.jpg?v=1655270745",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/04_72f2c3db-94c4-4d70-adf9-cb118c4350c9_700x.jpg?v=1655270745",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/05_4b58fec4-e0ca-4e3d-a082-b5275815a56e_700x.jpg?v=1655270744",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/06_2a9031e9-dce1-4406-beea-52330171723e_700x.jpg?v=1655270744",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c1144ee5-d03e-483a-8e5f-7552b138a4b1_600x.png?v=1649857754",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_5021e9c3-194d-4f8b-90d1-78f018cf9af5_600x.png?v=1649857754",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_8dd504fa-86a7-49f0-bfb4-df839fcea283_600x.png?v=1649857754",
        },
        {
            id: "034",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8bee57ec-983a-4509-8aa1-9f6fd8a16941_600x.png?v=1625044980",
            name: "boAt Stone 260",
            price: "1499",
            main_price: "2490",
            category: "speakers",
            review: "70",
            rating: "4.8",
            discount: "40",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ce5655c3-e83f-47ad-8f9f-6db17f896a1b_600x.png?v=1625045737",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a7ecefd2-7874-43de-bfa6-b9affd8515ef_600x.png?v=1625044982",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/64b85f00-747a-49bb-a31b-16577f4f1eb6_600x.png?v=1625046106",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/75fa51ee-907d-4c3e-8203-820ec5c39e1b_600x.png?v=1625046353",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e4faf0d0-1ce3-4a3c-8825-fbf5487b6611_600x.png?v=1625045119",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ce5655c3-e83f-47ad-8f9f-6db17f896a1b_600x.png?v=1625045737",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a7ecefd2-7874-43de-bfa6-b9affd8515ef_600x.png?v=1625044982",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/64b85f00-747a-49bb-a31b-16577f4f1eb6_600x.png?v=1625046106",
        },
        {
            id: "035",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/12d2b457-84fc-4ad2-89cb-5c5c5c0476e2_600x.png?v=1625045905",
            name: "boAt Stone 1200",
            price: "3999",
            main_price: "6990",
            category: "speakers",
            review: "70",
            rating: "4.9",
            discount: "43",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/last-red_0c947060-7117-4c10-a3e2-e11121b5471b_700x.jpg?v=1655189546",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/playback-red.2_72a34db3-0c44-4791-bd54-308a3a516857_700x.jpg?v=1655189550",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/playback-red_6d8210cb-48e5-4b02-8c43-dd586450703f_700x.jpg?v=1655189545",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/TWS-red_274abf0d-8630-411a-ac0f-ae6b22a07f84_700x.jpg?v=1655189546",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/RGB-red_4ffaecf6-4386-4139-aaeb-e75e8857e6a6_700x.jpg?v=1655189549",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/12d2b457-84fc-4ad2-89cb-5c5c5c0476e2_600x.png?v=1625045905",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e57bbbe7-5e99-4c43-8cf8-0ddd42caf3d3_600x.png?v=1633518105",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e35681e-bcb1-449c-a58a-2d43e8b00bf4_600x.png?v=1633518105",
        },
        //< !--category - gaming-- >

        {
            id: "041",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
            name: "boAt Immortal 700",
            price: "2499",
            main_price: "6990",
            category: "gaming",
            review: "0",
            rating: "5",
            discount: "64",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993"
        },
        {
            id: "042",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
            name: "boAt Immortal 1000D",
            price: "2299",
            main_price: "5990",
            category: "gaming",
            review: "12",
            rating: "4.9",
            discount: "62",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
        },
        {
            id: "043",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
            name: "boAt Immortal 1300",
            price: "2899",
            main_price: "9990",
            category: "gaming",
            review: "8",
            rating: "4.8",
            discount: "71",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_1_600x.png?v=1632715016",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_3_600x.png?v=1632715016",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_3_600x.png?v=1632715016",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015"
        },
        {
            id: "44",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
            name: "boAt Immortal 400",
            price: "1999",
            main_price: "6990",
            category: "gaming",
            review: "2",
            rating: "4.5",
            discount: "71",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        },
        {
            id: "45",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
            name: "boAt Immortal 200",
            price: "1499",
            main_price: "4990",
            category: "gaming",
            review: "11",
            rating: "4.7",
            discount: "70",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-bl_600x.png?v=1625748090",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MAIN-O_600x.png?v=1625748111",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MAIN-O_600x.png?v=1625748111",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-bl_600x.png?v=1625748090",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
        },



        // < !--Category - grooming-- >
        {
            id: "046",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d67adff0-f513-4b4b-abdc-226ee39287a6_600x.png?v=1625045409",
            name: "Misfit T50 Trimmer",
            price: "989",
            main_price: "2499",
            category: "grooming",
            review: "16",
            rating: "4.9",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/907e7c9d-4373-4809-a3e8-efe5bb1e7c7f_600x.png?v=1625045409",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d67adff0-f513-4b4b-abdc-226ee39287a6_600x.png?v=1625045409",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_600x.png?v=1630060654",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_600x.png?v=1630060654",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_600x.png?v=1630060654",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d67adff0-f513-4b4b-abdc-226ee39287a6_600x.png?v=1625045409",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/907e7c9d-4373-4809-a3e8-efe5bb1e7c7f_600x.png?v=1625045409",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_600x.png?v=1630060654",
        },
        {
            id: "047",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_efb2d946-02c5-412b-bb86-ce83807d2318_600x.png?v=1630646783",
            name: "Misfit T50 Lite",
            price: "879",
            main_price: "1999",
            category: "grooming",
            review: "4",
            rating: "4.5",
            discount: "56",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_efb2d946-02c5-412b-bb86-ce83807d2318_600x.png?v=1630646783",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_efb2d946-02c5-412b-bb86-ce83807d2318_600x.png?v=1630646783",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d1a8963d-822e-481e-a61e-ce27d5734c68_600x.png?v=1630646787",
        },
        {
            id: "048",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
            name: "Misfit T150 Trimmer",
            price: "1429",
            main_price: "3499",
            category: "grooming",
            review: "1",
            rating: "4.0",
            discount: "59",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a588d89e-2287-469a-bcba-e7fe880becbc_600x.png?v=1630143380",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a588d89e-2287-469a-bcba-e7fe880becbc_600x.png?v=1630143380",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
        },
        {
            id: "049",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_600x.png?v=1630646486",
            name: "Misfit T30 Trimmer",
            price: "769",
            main_price: "1499",
            category: "grooming",
            review: "5",
            rating: "4.8",
            discount: "49",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_600x.png?v=1630646486",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_grey_600x.png?v=1630646490",
        },
        {
            id: "50",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/963d0725-90b9-42a4-9fcc-a842968cfee4_600x.png?v=1625045778",
            name: "Misfit T200",
            price: "1469",
            main_price: "3999",
            category: "grooming",
            review: "31",
            rating: "4.9",
            discount: "59",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/963d0725-90b9-42a4-9fcc-a842968cfee4_600x.png?v=1625045778",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/95535146-e50a-49fe-803e-18add07a0759_600x.png?v=1625045778"
        },

        //< !--category - limited-- >
        {
            id: "051",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0e5ba7e2-027a-4c0b-a28e-8f4560685bec_600x.png?v=1642422419",
            name: "boAt Stone SpinX 2.0",
            price: "2799",
            main_price: "6990",
            category: "limited",
            review: "7",
            rating: "4.9",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0e5ba7e2-027a-4c0b-a28e-8f4560685bec_600x.png?v=1642422419",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_601f9043-ca1d-4aaa-baff-e918817cb2b1_600x.png?v=1642422419"
        },
        {
            id: "052",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            name: "boAt Stone 190 Stark",
            price: "1299",
            main_price: "2999",
            category: "limited",
            review: "1",
            rating: "5.0",
            discount: "57",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142"
        },
        {
            id: "053",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            name: "boAt Stone 190 Marvel",
            price: "1299",
            main_price: "2999",
            category: "limited",
            review: "1",
            rating: "5.0",
            discount: "57",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190ca_600x.png?v=1639989015"
        },
        {
            id: "054",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            name: "boAt Rockerz 600 KKR",
            price: "2499",
            main_price: "4990",
            category: "limited",
            review: "3",
            rating: "5.0",
            discount: "50",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/fe8dd999-0983-4e66-8a01-413dd837adaf_600x.png?v=1625046262",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ba417d2-bcb7-49a7-884b-14de7db0fb58_600x.png?v=1625046262"
        },
        {
            id: "55",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a4811849-6afc-47c8-95a6-022d1e37eb7d_600x.png?v=1625045653",
            name: "boAt Rockerz 400 PK",
            price: "1990",
            main_price: "3990",
            category: "limited",
            review: "0",
            rating: "5",
            discount: "50",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a4811849-6afc-47c8-95a6-022d1e37eb7d_600x.png?v=1625045653",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d4756525-4efe-450a-bb50-e2d26eb6ac42_600x.png?v=1625045653",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d4756525-4efe-450a-bb50-e2d26eb6ac42_600x.png?v=1625045653",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d4756525-4efe-450a-bb50-e2d26eb6ac42_600x.png?v=1625045653",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/d4756525-4efe-450a-bb50-e2d26eb6ac42_600x.png?v=1625045653",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a4811849-6afc-47c8-95a6-022d1e37eb7d_600x.png?v=1625045653",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a4811849-6afc-47c8-95a6-022d1e37eb7d_600x.png?v=1625045653",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a4811849-6afc-47c8-95a6-022d1e37eb7d_600x.png?v=1625045653"
        },
        //category - trebel
        {
            id: "056",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_46f69d85-75a0-483c-a215-2a29ee068b3c_600x.png?v=1646394746",
            name: "TRebel Watch Blaze",
            price: "3999",
            main_price: "6990",
            category: "trebel",
            review: "5",
            rating: "5.0",
            discount: "43",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_46f69d85-75a0-483c-a215-2a29ee068b3c_600x.png?v=1646394746",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e305aecd-69d4-4d6d-a6ec-b3133676fc57_600x.png?v=1646394745",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.3_9198fbdb-47fc-4ba1-878f-10d3acdb3d9c_600x.png?v=1646394746",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.3_9198fbdb-47fc-4ba1-878f-10d3acdb3d9c_600x.png?v=1646394746",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.3_9198fbdb-47fc-4ba1-878f-10d3acdb3d9c_600x.png?v=1646394746",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.1_46f69d85-75a0-483c-a215-2a29ee068b3c_600x.png?v=1646394746",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e305aecd-69d4-4d6d-a6ec-b3133676fc57_600x.png?v=1646394745",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3.3_9198fbdb-47fc-4ba1-878f-10d3acdb3d9c_600x.png?v=1646394746"
        },
        {
            id: "057",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-palegreen_ffb2a090-b5ad-40af-ac64-73970dd182c4_600x.png?v=1614505072",
            name: "Trebel Airdopes 441",
            price: "2499",
            main_price: "5999",
            category: "trebel",
            review: "0",
            rating: "5",
            discount: "58",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-palegreen_ffb2a090-b5ad-40af-ac64-73970dd182c4_600x.png?v=1614505072",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-cornflowerblue_0c7ef29e-c038-4b24-b1fd-3fd289f7714e_600x.png?v=1614505072",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-palegreen_ffb2a090-b5ad-40af-ac64-73970dd182c4_600x.png?v=1614505072",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-cornflowerblue_0c7ef29e-c038-4b24-b1fd-3fd289f7714e_600x.png?v=1614505072",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-palegreen_ffb2a090-b5ad-40af-ac64-73970dd182c4_600x.png?v=1614505072",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-palegreen_ffb2a090-b5ad-40af-ac64-73970dd182c4_600x.png?v=1614505072",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-cornflowerblue_0c7ef29e-c038-4b24-b1fd-3fd289f7714e_600x.png?v=1614505072",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-441-palegreen_ffb2a090-b5ad-40af-ac64-73970dd182c4_600x.png?v=1614505072"
        },
        {
            id: "058",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_1aa0a835-9bbd-432c-ad92-76d0c2b7a36d_600x.png?v=1646390147",
            name: "Trebel Rockerz 550",
            price: "1999",
            main_price: "4999",
            category: "trebel",
            review: "6",
            rating: "5.0",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_1aa0a835-9bbd-432c-ad92-76d0c2b7a36d_600x.png?v=1646390147",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_d851f1e5-1237-440a-8703-ebf06d2810c5_600x.png?v=1646390147",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_1aa0a835-9bbd-432c-ad92-76d0c2b7a36d_600x.png?v=1646390147",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_d851f1e5-1237-440a-8703-ebf06d2810c5_600x.png?v=1646390147",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_1aa0a835-9bbd-432c-ad92-76d0c2b7a36d_600x.png?v=1646390147",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_1aa0a835-9bbd-432c-ad92-76d0c2b7a36d_600x.png?v=1646390147",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_d851f1e5-1237-440a-8703-ebf06d2810c5_600x.png?v=1646390147",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_1aa0a835-9bbd-432c-ad92-76d0c2b7a36d_600x.png?v=1646390147"
        },
        {
            id: "059",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            name: "TRebel Accessory Pouch",
            price: "499",
            main_price: "899",
            category: "trebel",
            review: "0",
            rating: "5.0",
            discount: "44",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ppouch_main_600x.png?v=1646892645"
        },
        // {
        //     id: "060",
        //     image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4ac69200-e9a6-4ab4-bdd7-cbf484f2b248_600x.png?v=1646891015",
        //     name: "",
        //     price: "",
        //     main_price: "",
        //     category: "",
        //     review: "",
        //     rating: "",
        //     discount: "",
        //     detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_443d7864-2a01-49d7-a750-0794002fd8d9_600x.png?v=1646891016",
        //     detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_6455eba9-a64b-4841-a090-124f5cb7d92d_600x.png?v=1646891016",
        //     detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4ac69200-e9a6-4ab4-bdd7-cbf484f2b248_600x.png?v=1646891015",
        //     detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_6455eba9-a64b-4841-a090-124f5cb7d92d_600x.png?v=1646891016",
        //     detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_65876019-35bf-4edc-952c-cf33e12f08b8_600x.png?v=1646891017",
        //     colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_6455eba9-a64b-4841-a090-124f5cb7d92d_600x.png?v=1646891016",
        //     colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_65876019-35bf-4edc-952c-cf33e12f08b8_600x.png?v=1646891017",
        //     colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_443d7864-2a01-49d7-a750-0794002fd8d9_600x.png?v=1646891016"
        // },
        // //homeaudio
        {
            id: "036",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",
            name: "boAt Aavante Bar 1190",
            price: "5499",
            main_price: "14990",
            category: "homeaudio",
            review: "8",
            rating: "4.9",
            discount: "63",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1190-2_600x.png?v=1623813138",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1190-2_600x.png?v=1623813138",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1190-2_600x.png?v=1623813138",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",
        },
        {
            id: "037",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/488e9857-20a2-4c4c-9ddd-c721cac17692_600x.png?v=1625046502",
            name: "boAt Aavante Bar 3100D",
            price: "14990",
            main_price: "24999",
            category: "homeaudio",
            review: "8",
            rating: "4.9",
            discount: "63",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/488e9857-20a2-4c4c-9ddd-c721cac17692_600x.png?v=1625046502",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c5c811b4-c4cc-4137-ada8-ee771cee1aae_600x.png?v=1625046502",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/488e9857-20a2-4c4c-9ddd-c721cac17692_600x.png?v=1625046502",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c5c811b4-c4cc-4137-ada8-ee771cee1aae_600x.png?v=1625046502",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/488e9857-20a2-4c4c-9ddd-c721cac17692_600x.png?v=1625046502",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/488e9857-20a2-4c4c-9ddd-c721cac17692_600x.png?v=1625046502",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c5c811b4-c4cc-4137-ada8-ee771cee1aae_600x.png?v=1625046502",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/488e9857-20a2-4c4c-9ddd-c721cac17692_600x.png?v=1625046502",
        },
        {
            id: "038",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8b388489-b4a3-4196-8fb9-7d50318fa4c1_600x.png?v=1624881782",
            name: "boAt Aavante Bar 2000",
            price: "10499",
            main_price: "24990",
            category: "homeaudio",
            review: "8",
            rating: "4.9",
            discount: "63",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8b388489-b4a3-4196-8fb9-7d50318fa4c1_600x.png?v=1624881782",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/83768c76-396a-4cca-9c11-d133764abbe6_600x.png?v=1624881782",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8b388489-b4a3-4196-8fb9-7d50318fa4c1_600x.png?v=1624881782",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/83768c76-396a-4cca-9c11-d133764abbe6_600x.png?v=1624881782",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8b388489-b4a3-4196-8fb9-7d50318fa4c1_600x.png?v=1624881782",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8b388489-b4a3-4196-8fb9-7d50318fa4c1_600x.png?v=1624881782",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/83768c76-396a-4cca-9c11-d133764abbe6_600x.png?v=1624881782",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8b388489-b4a3-4196-8fb9-7d50318fa4c1_600x.png?v=1624881782",
        },
        {
            id: "039",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb348a35-6d9c-4d8d-abbf-aac49bab378b_600x.png?v=1638360122",
            name: "boAt Aavante 1200",
            price: "6499",
            main_price: "13990",
            category: "homeaudio",
            review: "8",
            rating: "4.9",
            discount: "50",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb348a35-6d9c-4d8d-abbf-aac49bab378b_600x.png?v=1638360122",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e4b1584-4194-47c8-8efb-49780ea7f1c4_600x.png?v=1638360122",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb348a35-6d9c-4d8d-abbf-aac49bab378b_600x.png?v=1638360122",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e4b1584-4194-47c8-8efb-49780ea7f1c4_600x.png?v=1638360122",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb348a35-6d9c-4d8d-abbf-aac49bab378b_600x.png?v=1638360122",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb348a35-6d9c-4d8d-abbf-aac49bab378b_600x.png?v=1638360122",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e4b1584-4194-47c8-8efb-49780ea7f1c4_600x.png?v=1638360122",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/bb348a35-6d9c-4d8d-abbf-aac49bab378b_600x.png?v=1638360122",
        },
        //Accessories
        {
            id: "040",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_600x.png?v=1622705253",
            name: "boAt Micro USB 150",
            price: "499",
            main_price: "999",
            category: "accessories",
            review: "8",
            rating: "4.9",
            discount: "50",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_600x.png?v=1622705253",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner1-Product_3c1785ae-85f8-4e5c-9d13-93e92aad5821_600x.png?v=1622705204",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_600x.png?v=1622705253",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner1-Product_3c1785ae-85f8-4e5c-9d13-93e92aad5821_600x.png?v=1622705204",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_600x.png?v=1622705253",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_600x.png?v=1622705253",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner1-Product_3c1785ae-85f8-4e5c-9d13-93e92aad5821_600x.png?v=1622705204",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner2-product_600x.png?v=1622705253",

        },
        {
            id: "041",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rgged-v3_600x.png?v=1613736788",
            name: "boAt Rugged V3 Micro",
            price: "299",
            main_price: "799",
            category: "accessories",
            review: "8",
            rating: "4.9",
            discount: "63",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rgged-v3_600x.png?v=1613736788",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rugged-v3-blue_600x.png?v=1613457268",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rugged-v3-green_600x.png?v=1613457268",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rugged-v3-orange_600x.png?v=1613457269",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rugged-v3-purple_600x.png?v=1613457269",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rgged-v3_600x.png?v=1613736788",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rugged-v3-blue_600x.png?v=1613457268",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rugged-v3-green_600x.png?v=1613457268",

        },
        {
            id: "042",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            name: "boAt WCD 36W QC",
            price: "1199",
            main_price: "2990",
            category: "accessories",
            review: "8",
            rating: "4.9",
            discount: "60",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_2fc93e34-005b-4d74-8be1-4453247b2d0a_600x.png?v=1643022100",

        },
        {
            id: "043",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_600x.png?v=1618923027",
            name: "boAt Micro USB 550",
            price: "149",
            main_price: "999",
            category: "accessories",
            review: "8",
            rating: "4.9",
            discount: "85",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_600x.png?v=1618923027",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_1d49f007-2024-470c-8c4e-1d4758920e70_600x.png?v=1618923027",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_600x.png?v=1618923027",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_1d49f007-2024-470c-8c4e-1d4758920e70_600x.png?v=1618923027",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_600x.png?v=1618923027",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_600x.png?v=1618923027",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_1d49f007-2024-470c-8c4e-1d4758920e70_600x.png?v=1618923027",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_a438d4b3-8973-4e66-b05f-d36742e83b7e_600x.png?v=1618923027",

        },
        {
            id: "044",
            image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_ba541b63-8d5b-456f-b25e-eb616cd4bf74_600x.png?v=1636357982",
            name: "boAt EnergyShroom PB100",
            price: "799",
            main_price: "1490",
            category: "accessories",
            review: "8",
            rating: "4.7",
            discount: "46",
            detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_ba541b63-8d5b-456f-b25e-eb616cd4bf74_600x.png?v=1636357982",
            detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_a1b33d9a-7414-45c5-b461-24da01296bf2_600x.png?v=1636357982",
            detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_89f5d4f8-cc4c-4f8e-ad84-1ff4c86726e0_600x.png?v=1636357982",
            detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_ba541b63-8d5b-456f-b25e-eb616cd4bf74_600x.png?v=1636357982",
            detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_89f5d4f8-cc4c-4f8e-ad84-1ff4c86726e0_600x.png?v=1636357982",

            colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_ba541b63-8d5b-456f-b25e-eb616cd4bf74_600x.png?v=1636357982",
            colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_a1b33d9a-7414-45c5-b461-24da01296bf2_600x.png?v=1636357982",
            colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_89f5d4f8-cc4c-4f8e-ad84-1ff4c86726e0_600x.png?v=1636357982",

        },

    ]


localStorage.setItem("MainData", JSON.stringify(data));
let getData = JSON.parse(localStorage.getItem("filtered_data"));
let getImageTitle = JSON.parse(localStorage.getItem("img_and_title"));



// Search function************************

let searchfun = document.getElementById('searchbar');
searchfun.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        let input = document.getElementById('searchbar').value
        input = input.toLowerCase();

        let temp = JSON.parse(localStorage.getItem("MainData"));

        let filtered_list = temp.filter(function (elem) {
            return (elem.name).toLowerCase().includes(input);
        });

        imgTitleData = ["", ""];
        localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
        localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
        window.location.href = "products.html";

    }
})



//airdopes
document.querySelector("#nav_airdopes").addEventListener("click", airdopes);
function airdopes() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "airdopes";
    });
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734", "Wireless Earbuds"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData))
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}

//smartwatch
document.querySelector("#nav_smartwatch").addEventListener("click", smartwatch);
function smartwatch() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "smartwatch";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smart-Watch_Catgry-web.jpg?v=1634717240", "Smart Watches"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}
//wireless
document.querySelector("#nav_wireless").addEventListener("click", wireless);
function wireless() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "wireless";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683", "Wireless Headphones"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}
//wired
document.querySelector("#nav_wired").addEventListener("click", wired);
function wired() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "wired";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bassheads-_Catgry_web.jpg?v=1634717143", "Wired Earphones"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//speakers
document.querySelector("#nav_speakers").addEventListener("click", speakers);
function speakers() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "speakers";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone-Speakers_Catgry-web_5ddac427-ef95-4cc3-bcd7-5f08ab93359d.jpg?v=1634903645", "Wireless Speakers"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//homeaudio
document.querySelector("#nav_homeaudio").addEventListener("click", homeaudio);
function homeaudio() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "homeaudio";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Aavante_category_web_1.jpg?v=1634903645", "Home Theatre Systems & Soundbars"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//accessories
document.querySelector("#nav_accessories").addEventListener("click", accessories);
function accessories() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "accessories";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mobile_Accessories_web.jpg?v=1634903645", "Mobile Accessories"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//trebel
document.querySelector("#nav_trebel").addEventListener("click", trebel);
function trebel() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "trebel";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_Category_Web.jpg?v=1634903645", "TRebel"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//limited
document.querySelector("#nav_limited").addEventListener("click", limited);
function limited() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "limited";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Limited_edition_cat_web.jpg?v=1634903645", "Limited Edition"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}
//grooming
document.querySelector("#nav_grooming").addEventListener("click", grooming);
function grooming() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "grooming";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/MISFIT-T200_Catgry_Web.jpg?v=1634806683", "Misfit - Best Trimmer for Men"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";

}
//gaming
document.querySelector("#nav_gaming").addEventListener("click", gaming);
function gaming() {
    let temp = JSON.parse(localStorage.getItem("MainData"));
    let filtered_list = temp.filter(function (elem) {
        return elem.category == "gaming";
    })
    imgTitleData = ["https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-Catgry_web.jpg?v=1634903645", "Immortal Gaming"];
    localStorage.setItem("img_and_title", JSON.stringify(imgTitleData));
    localStorage.setItem("filtered_data", JSON.stringify(filtered_list));
    window.location.href = "products.html";
}


// Profile popup section///////////////////
// let activeuserlogindata = ["boAthead", "false"];
// localStorage.setItem("loggedin", JSON.stringify(activeuserlogindata));


profilepopdata();
document.querySelector("#proicon").addEventListener("click", function () {
    let box = document.querySelector("#profilepop");

    box.style.visibility = "visible";

})

function profilepopdata() {
    let namediv = document.createElement("div");
    namediv.style.color = "white";
    let proname = document.createElement("p");
    let savedname = JSON.parse(localStorage.getItem("loggedin")) || [];
    if (savedname[0] == undefined) {
        proname.innerText = "Hi boAthead";
    } else {
        proname.innerText = `Hi ${savedname[0]}`;
    }

    let crossbtn = document.createElement("span");
    crossbtn.innerText = "X "
    crossbtn.style.cursor = "pointer";
    crossbtn.addEventListener("click", function () {
        document.querySelector("#profilepop").style.visibility = "hidden";
    })
    namediv.append(proname, crossbtn);
    let logbtn = document.createElement("button");
    if (savedname[1] == true) {
        logbtn.innerText = "Logout";
        logbtn.addEventListener("click", function () {
            savedname[1] = false;
            savedname[0] = undefined;
            localStorage.setItem("loggedin", JSON.stringify(savedname));
            logbtn.innerText = "Login";
            logbtn.addEventListener("click", function () {
                window.location.href = "blogin1.html";
            })
            proname.innerText = "Hi boAthead";

        })
    } else {
        logbtn.innerText = "Login";
        logbtn.addEventListener("click", function () {
            window.location.href = "blogin1.html";
        })
    }
    // logbtn.innerText = "Login";
    document.querySelector("#profilepop").append(namediv, logbtn);
}




// ********************************************COMMON DATA FOR ALL^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// slider part

let img = document.querySelector(".slider img");
let url = document.querySelector(".slider>a")
let buttons = document.querySelectorAll(".slide_button");
let imgNum = 0;
let imgArr = [
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_1400x.png?v=1655534702",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2000x650_5496c9d9-c8d1-49c1-a7c2-83055a261f8a_1000x.jpg?v=1654509146",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web34_0dc3ef24-e76e-4587-b21d-948137c138e3_1400x.jpg?v=1654670966",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/135-WEB_1400x.jpg?v=1655189587",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/WEB_c1e0eae6-69d2-4898-a82c-9bffc641a1ec_1400x.jpg?v=1654366545"
]

let linkArr = [
    "dcpage.html",
    "products.html",
    "products.html",
    "products.html",
    "products.html"
]

buttons[0].addEventListener("click", function () {
    if (imgNum === 0) {
        imgNum = imgArr.length - 1;
    } else {
        imgNum--;
    }
    img.src = imgArr[imgNum];
    url.setAttribute("href", linkArr[imgNum]);
})

buttons[1].addEventListener("click", function () {
    if (imgNum === imgArr.length - 1) {
        imgNum = 0;
    } else {
        imgNum++;
    }
    img.src = imgArr[imgNum];
    url.setAttribute("href", linkArr[imgNum]);
})

setInterval(function () {
    if (imgNum === imgArr.length - 1) {
        imgNum = 0;
    } else {
        imgNum++;
    }
    img.src = imgArr[imgNum];
    url.setAttribute("href", linkArr[imgNum]);
}, 4000);


// 1ST SLIDER JS OVER ^^^^^


// 2nd SLIDER PART


let img2 = document.querySelector(".slider_2 img");
let url2 = document.querySelector(".slider_2>a")
let buttons2 = document.querySelectorAll(".slide2_button");
let imgNum2 = 0;
let imgArr2 = [
    "https://i.ibb.co/m6L47Kg/final-img.png",
    "https://i.ibb.co/7bCVQJD/final-img2.png",
    "https://i.ibb.co/tsrrQz7/final-img3.png",
]

let linkArr2 = [
    "products.html",
    "products.html",
    "products.html",
]

buttons2[0].addEventListener("click", function () {
    if (imgNum2 === 0) {
        imgNum2 = imgArr2.length - 1;
    } else {
        imgNum2--;
    }
    img2.src = imgArr2[imgNum2];
    url2.setAttribute("href", linkArr2[imgNum]);
})

buttons2[1].addEventListener("click", function () {
    if (imgNum2 === imgArr2.length - 1) {
        imgNum2 = 0;
    } else {
        imgNum2++;
    }
    img2.src = imgArr2[imgNum2];
    url2.setAttribute("href", linkArr2[imgNum]);
})

setInterval(function () {
    if (imgNum2 === imgArr2.length - 1) {
        imgNum2 = 0;
    } else {
        imgNum2++;
    }
    img2.src = imgArr2[imgNum2];
    url2.setAttribute("href", linkArr2[imgNum]);
}, 4000);

// 2ND SLIDER OVER ^^^^^


// PRODUCT DATA

let productData = [
    {
        id: "001",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_400x.png?v=1648108781",
        name: "boAt Watch Wave",
        price: "1799",
        main_price: "6990",
        category: "smartwatch",
        review: "328",
        rating: "4.8",
        discount: "74",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/01_4f474894-40aa-4aca-ba57-8486dd47acc8_700x.jpg?v=1655271238",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/03_c1403863-ce69-4cc9-a4e4-20d06fece403_700x.jpg?v=1655271237",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/05_e71500a0-e06f-453f-926f-5ee18b4d2d39_700x.jpg?v=1655271238",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/03_c1403863-ce69-4cc9-a4e4-20d06fece403_700x.jpg?v=1655271237",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/05_e71500a0-e06f-453f-926f-5ee18b4d2d39_700x.jpg?v=1655271238",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_600x.png?v=1648108781",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_maroon_9b2c008c-1cf9-49e3-988d-3cb43a456d80_600x.png?v=1648108782",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_blue_759e7ad4-18af-4407-9e8a-91c0058b1a74_600x.png?v=1648108782",

    },
    {
        id: "028",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
        name: "boAt BassHeads 182",
        price: "499",
        main_price: "1290",
        category: "wired",
        review: "470",
        rating: "4.8",
        discount: "106",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-black_600x.png?v=1598044333",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",

        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-black_600x.png?v=1598044333",
    },
    {
        id: "017",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
        name: "boAt Rockerz 333 Pro",
        price: "1699",
        main_price: "2990",
        category: "wireless",
        review: "52",
        rating: "4.9",
        discount: "43",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red06_07e3549e-1192-445c-b6d7-a421ff1f2a17_700x.png?v=1655132327",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red07_1dc6a985-2ec8-4dd8-b8d3-66cd2a6b9a8a_700x.png?v=1655132328",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red04_cc5938c2-57e6-424f-b267-cc8a465bb791_700x.png?v=1655132327",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red02_f22a15b1-b5a3-460f-b0ef-5de7fab3b9f3_700x.png?v=1655132322",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red03_ad0b8c86-1f03-4f51-89cb-3cb3d916cefa_700x.png?v=1655132320",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/GREEN_0bbd189a-8ab1-4806-80f2-95f679d0712d_600x.png?v=1652792832",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m3_08324ce2-cdd9-44d6-8f5b-849fda265ba8_600x.png?v=1639153082",
    },
    {
        id: "026",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_400x.png?v=1574927262",
        name: "boAt BassHeads 103",
        price: "369",
        main_price: "1290",
        category: "wired",
        review: "470",
        rating: "4.8",
        discount: "71",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintorange_600x.png?v=1632906888",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
    }
]

display(productData, "#bestsell");

function showProduct(elem) {
    let productDetail = [];
    productDetail.push(elem);
    localStorage.setItem("details", JSON.stringify(productDetail));
    // console.log(elem);
    window.location.href = "productDetail.html"
}

function addedCart(elem) {
    let cart = JSON.parse(localStorage.getItem("addToCart")) || [];
    cart.push(elem);
    localStorage.setItem("addToCart", JSON.stringify(cart));
    // console.log(elem);
    openPop();
}


function display(productData, id) {
    document.querySelector(id).innerHTML = "";
    productData.forEach(function (elem) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.image;

        img.addEventListener("click", function () {
            showProduct(elem);
        })


        let inner_div = document.createElement("div");
        let name = document.createElement("h3");
        name.innerText = elem.name;

        let rating_div = document.createElement("div");

        let rating = document.createElement("p");
        rating.innerHTML = '<span style="color:red;font-size:120%;">&starf;</span>' + ` ${elem.rating} `;
        rating.style.fontSize = "15px";

        let review = document.createElement("p");
        review.innerText = ` | ${elem.review} reviews`;
        review.style.fontSize = "15px";

        rating_div.append(rating, review);

        let hr = document.createElement("hr");
        let price_div = document.createElement("div");

        let price = document.createElement("p");
        price.innerText = `₹ ${elem.price}  `;
        price.style.color = "red";
        price.style.fontWeight = "bold"

        let striked_through_price = document.createElement("p");
        striked_through_price.innerText = `   ₹ ${elem.main_price}`;
        striked_through_price.style.textDecoration = "line-through";
        striked_through_price.style.color = "gray";
        price_div.append(price, striked_through_price);
        let remaining = Number(elem.main_price) - Number(elem.price);
        let discount = document.createElement("p");
        discount.innerText = `You Save: ₹ ${remaining} (${elem.discount}%)`;
        discount.style.fontSize = "13px";
        let addToCart = document.createElement("button");
        addToCart.innerText = "Add To Cart"
        addToCart.addEventListener("click", function () {
            addedCart(elem);
        })

        inner_div.append(name, rating_div, hr, price_div, discount, addToCart);
        card.append(img, inner_div);
        document.querySelector(id).append(card);
    })
}

let watch_data = [
    {
        id: "003",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_400x.png?v=1625046216",
        name: "boAt Storm",
        price: "2499",
        main_price: "5990",
        category: "smartwatch",
        review: "35",
        rating: "4.8",
        discount: "58",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_03_7374765d-37f5-4b69-afaf-69fa3a4b779f.jpg?v=1639989127",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_04_53359eb9-4b7f-440c-be8d-3cc34fc70ef7.jpg?v=1639989127",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_05_e2ad7811-f0e2-40f9-acf2-d71e1d8d94bb.jpg?v=1639989127",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_04_53359eb9-4b7f-440c-be8d-3cc34fc70ef7.jpg?v=1639989127",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-2_05_e2ad7811-f0e2-40f9-acf2-d71e1d8d94bb.jpg?v=1639989127",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1585_420x.png?v=1640110653",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1579_420x.png?v=1640110355",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1591_420x.png?v=1640110480",
    },
    {
        id: "004",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_400x.png?v=1625157753",
        name: "boAt Watch Flash",
        price: "2499",
        main_price: "6990",
        category: "smartwatch",
        review: "188",
        rating: "4.8",
        discount: "64",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5752f5e4-89e0-4f84-b7fe-4d9f85771046_600x.png?v=1625157753",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
    },
    {
        id: "005",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_400x.png?v=1640237576",
        name: "boAt Watch Iris",
        price: "4399",
        main_price: "11999",
        category: "smartwatch",
        review: "154",
        rating: "4.8",
        discount: "63",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_600x.png?v=1640237575",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_600x.png?v=1640237575",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
    },
    {
        id: "006",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_400x.png?v=1646393710",
        name: "TRebel Watch Xtend‌",
        price: "3499",
        main_price: "7990",
        category: "smartwatch",
        review: "125",
        rating: "5.0",
        discount: "56",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_600x.png?v=1646393709",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_751a0a5b-cf0d-48af-9205-e87de3b75f71_600x.png?v=1646393710",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_751a0a5b-cf0d-48af-9205-e87de3b75f71_600x.png?v=1646393710",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_600x.png?v=1646393709",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_8e1cdd84-4a34-4e92-97c5-0e1d4ba6da46_600x.png?v=1646393710",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_751a0a5b-cf0d-48af-9205-e87de3b75f71_600x.png?v=1646393710",
    }
]

display(watch_data, "#watches");


let wireless_data = [
    {
        id: "010",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
        name: "boAt Airdopes 121 v2",
        price: "1299",
        main_price: "2999",
        category: "airdopes",
        review: "114",
        rating: "4.8",
        discount: "57",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_400x.png?v=1612765376",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-3_6b4f840b-570d-4588-aa69-1548f897cabc_700x.jpg?v=1655128550",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-5.2_dd5e723b-7448-4353-a693-058b15fa4812_700x.jpg?v=1655128551",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-3_6b4f840b-570d-4588-aa69-1548f897cabc_700x.jpg?v=1655128550",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AD-121v2-FI-5.2_dd5e723b-7448-4353-a693-058b15fa4812_700x.jpg?v=1655128551",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_600x.png?v=1612765376",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-blue_600x.png?v=1612765376",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-pink_600x.png?v=1612765377",
    },
    {
        id: "020",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
        name: "boAt Rockerz 518",
        price: "1599",
        main_price: "3990",
        category: "wireless",
        review: "54",
        rating: "4.9",
        discount: "60",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-green_600x.png?v=1613457278",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-orange_600x.png?v=1613457279",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-green_600x.png?v=1613457278",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
    },
    {
        id: "018",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",
        name: "boAt Rockerz 550",
        price: "1299",
        main_price: "2999",
        category: "wireless",
        review: "114",
        rating: "4.8",
        discount: "57",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R55050mmdrivers_700x.jpg?v=1655202470",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550clubbed_c2b31f0f-7a9c-4d4d-b507-41527ec05133_700x.jpg?v=1655202767",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550physicalnoisereduction_92fd89c6-9b4c-464b-8632-93d56c7bbc8b_700x.jpg?v=1655202766",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550playbacktime20hrs_7a0973ed-75b9-4a58-ab23-f233e151f821_700x.jpg?v=1655202767",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550ergonomicdesign_df538497-c30c-4617-86b3-27337b0e65a8_700x.jpg?v=1655202766",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_600x.png?v=1625046144",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_600x.png?v=1625046144",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
    },
    {
        id: "015",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_400x.png?v=1614424769",
        name: "TRebel Airdopes 431",
        price: "1999",
        main_price: "5999",
        category: "airdopes",
        review: "452",
        rating: "4.7",
        discount: "67",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_72x.png?v=1614424769",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_72x.png?v=1614424769",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-blue_50e2fdb3-7886-49af-a570-a083001946f6_72x.png?v=1614424769",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-431-red_c84f66f4-64b4-496d-897b-d1a5613a6585_600x.png?v=1614424769",
    }
]

display(wireless_data, "#trending_wireless");


let wired_data = [
    {
        id: "025",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        name: "boAt BassHeads 103",
        price: "369",
        main_price: "1290",
        category: "wired",
        review: "470",
        rating: "4.8",
        discount: "71",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintorange_600x.png?v=1632906888",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
    },
    {
        id: "026",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_400x.png?v=1574927262",
        name: "boAt BassHeads 103",
        price: "369",
        main_price: "1290",
        category: "wired",
        review: "470",
        rating: "4.8",
        discount: "71",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintorange_600x.png?v=1632906888",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",

        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
    },

    {
        id: "027",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
        name: "boAt BassHeads 242",
        price: "449",
        main_price: "1490",
        category: "wired",
        review: "330",
        rating: "4.8",
        discount: "70",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d45fa60-7d5b-4dfe-b6ef-65df28058130_600x.png?v=1625046386",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4eed59f3-6f28-4511-9240-c043e2523482_600x.png?v=1625046386",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/51a9e051-8c98-4dcd-9d03-9cae0b35bb0f_600x.png?v=1625046386",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c1cb9fb6-b924-4474-a8f6-dc06ebc6c610_600x.png?v=1625046386",

        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7d635fe4-8c4c-4c4b-8c00-6065455dc608_600x.png?v=1625046386",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d45fa60-7d5b-4dfe-b6ef-65df28058130_600x.png?v=1625046386",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4eed59f3-6f28-4511-9240-c043e2523482_600x.png?v=1625046386",
    },

    {
        id: "028",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
        name: "boAt BassHeads 182",
        price: "499",
        main_price: "1290",
        category: "wired",
        review: "470",
        rating: "4.8",
        discount: "106",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-black_600x.png?v=1598044333",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",

        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f0f5487-b3fe-4122-b8df-0c7f4798c29d_600x.png?v=1623787656",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-red_600x.png?v=1598044334",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-182-black_600x.png?v=1598044333",
    }
]

display(wired_data, "#trending_wired");

let headphones_data = [
    {
        id: "017",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
        name: "boAt Rockerz 333 Pro",
        price: "1699",
        main_price: "2990",
        category: "wireless",
        review: "52",
        rating: "4.9",
        discount: "43",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red06_07e3549e-1192-445c-b6d7-a421ff1f2a17_700x.png?v=1655132327",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red07_1dc6a985-2ec8-4dd8-b8d3-66cd2a6b9a8a_700x.png?v=1655132328",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red04_cc5938c2-57e6-424f-b267-cc8a465bb791_700x.png?v=1655132327",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red02_f22a15b1-b5a3-460f-b0ef-5de7fab3b9f3_700x.png?v=1655132322",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R333Pro-FI_Red03_ad0b8c86-1f03-4f51-89cb-3cb3d916cefa_700x.png?v=1655132320",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/GREEN_0bbd189a-8ab1-4806-80f2-95f679d0712d_600x.png?v=1652792832",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m3_08324ce2-cdd9-44d6-8f5b-849fda265ba8_600x.png?v=1639153082",
    },
    {
        id: "018",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_400x.png?v=1625046144",
        name: "boAt Rockerz 550",
        price: "1299",
        main_price: "2999",
        category: "wireless",
        review: "114",
        rating: "4.8",
        discount: "57",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R55050mmdrivers_700x.jpg?v=1655202470",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550clubbed_c2b31f0f-7a9c-4d4d-b507-41527ec05133_700x.jpg?v=1655202767",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550physicalnoisereduction_92fd89c6-9b4c-464b-8632-93d56c7bbc8b_700x.jpg?v=1655202766",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550playbacktime20hrs_7a0973ed-75b9-4a58-ab23-f233e151f821_700x.jpg?v=1655202767",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R550ergonomicdesign_df538497-c30c-4617-86b3-27337b0e65a8_700x.jpg?v=1655202766",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_600x.png?v=1625046144",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_600x.png?v=1625046144",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
    },
    {
        id: "019",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
        name: "boAt Rockerz 450",
        price: "1499",
        main_price: "3990",
        category: "wireless",
        review: "41",
        rating: "4.8",
        discount: "62",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/last-beige_700x.jpg?v=1654921668",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/premium-matte-finish_521de285-f320-4311-ba28-757ab27542ef_700x.jpg?v=1655194807",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/lightweight-beige_700x.jpg?v=1654921665",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/drivers-blue_700x.jpg?v=1654921668",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1625045491",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
    },
    {
        id: "020",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
        name: "boAt Rockerz 518",
        price: "1599",
        main_price: "3990",
        category: "wireless",
        review: "54",
        rating: "4.9",
        discount: "60",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-green_600x.png?v=1613457278",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-orange_600x.png?v=1613457279",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-green_600x.png?v=1613457278",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-blue_600x.png?v=1613731627",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-518-red_600x.png?v=1613457279",
    }
]

display(headphones_data, "#headphones")


let gaming_data = [
    {
        id: "041",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
        name: "boAt Immortal 700",
        price: "2499",
        main_price: "6990",
        category: "gaming",
        review: "0",
        rating: "5",
        discount: "64",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993"
    },
    {
        id: "042",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
        name: "boAt Immortal 1000D",
        price: "2299",
        main_price: "5990",
        category: "gaming",
        review: "12",
        rating: "4.9",
        discount: "62",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
    },
    {
        id: "043",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
        name: "boAt Immortal 1300",
        price: "2899",
        main_price: "9990",
        category: "gaming",
        review: "8",
        rating: "4.8",
        discount: "71",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_1_600x.png?v=1632715016",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_3_600x.png?v=1632715016",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_3_600x.png?v=1632715016",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015"
    },
    {
        id: "44",
        image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
        name: "boAt Immortal 400",
        price: "1999",
        main_price: "6990",
        category: "gaming",
        review: "2",
        rating: "4.5",
        discount: "71",
        detailimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
        detailimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        detailimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        detailimage4: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        detailimage5: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        colourimage1: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        colourimage2: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
        colourimage3: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2-700_600x.png?v=1643632679",
    }
]

display(gaming_data, "#gaming")




// pop up
let clickNav = document.getElementById("navcartpop");
clickNav.addEventListener("click", openPop);

let cartPop = document.getElementById("cartPop");

function openPop(event) {
    cartPop.style.display = "block";
    let cart = JSON.parse(localStorage.getItem("addToCart"));
    displayCart(cart);
}

let close = document.getElementById("closeBtn");
close.addEventListener("click", closePop)
function closePop(event) {
    cartPop.style.display = "none";
}

window.addEventListener("click", outsideClick);

function outsideClick(event) {
    // console.log(event.target);
    if (event.target == cartPop) {
        cartPop.style.display = "none";
    }
}

function displayCart(arr) {
    let sum = 0;
    let cartQuantity = document.querySelector("#cartHeader>div>h3");
    cartQuantity.innerText = "Your Cart(" + arr.length + " items)"
    let carte = document.getElementById("cart");
    carte.innerHTML = "";
    let productDetailDiv = document.createElement("div");
    arr.forEach(function (el, i) {

        let div = document.createElement("div");
        div.id = "addedProduct";
        let imageProduct = document.createElement("img");
        imageProduct.src = el.image;
        imageProduct.id = "imageProduct";

        let subDiv = document.createElement("div");
        subDiv.id = "titleProduct";


        let title = document.createElement("h4")
        title.innerText = el.name;

        let price = document.createElement("div");
        let disPrice = document.createElement("p");
        disPrice.innerText = "Rs. " + el.price;
        sum = sum + Number(el.price);
        let realPrice = document.createElement("p");
        realPrice.innerText = "Rs. " + el.main_price;
        price.append(disPrice, realPrice);

        let quantity = document.createElement("div");
        quantity.id = "quantityProduct";
        let plusMinus = document.createElement("div");
        plusMinus.id = "plusMinus";
        let minbut = document.createElement("button");
        minbut.innerText = "-";
        let quant = document.createElement("p");
        quant.innerText = 1;
        let maxbut = document.createElement("button");
        maxbut.innerText = "+";
        let catSpan = document.createElement("span");
        catSpan.innerText = el.category;
        plusMinus.append(minbut, quant, maxbut, catSpan);

        let delIcon = document.createElement("div");
        delIcon.addEventListener("click", function () {
            deleteProduct(i);
            console.log(i);
        })
        let delIconImg = document.createElement("img");
        delIconImg.src = "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_1_93145e45-8530-46aa-9fb8-6768cc3d80d2.png?v=1633783107";
        delIconImg.id = "delete";
        delIcon.append(delIconImg);
        quantity.append(plusMinus, delIcon);

        subDiv.append(title, price, quantity);

        div.append(imageProduct, subDiv);
        productDetailDiv.append(div);
    });
    carte.append(productDetailDiv);
    let secDiv = document.createElement("div");
    secDiv.id = "shipDiv";

    let shipDetail = document.createElement("div");
    shipDetail.id = "shipDetail"
    let shiptable = document.createElement("table");
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = "Shipping:"
    let td2 = document.createElement("td");
    td2.innerText = "FREE";
    tr1.append(td1, td2);
    let tr2 = document.createElement("tr");
    let td3 = document.createElement("td");
    td3.innerText = "Total:"
    let td4 = document.createElement("td");
    td4.innerText = "Rs. " + sum;
    tr2.append(td3, td4);
    shiptable.append(tr1, tr2);
    shipDetail.append(shiptable);

    let zestProduct = document.createElement("div");
    zestProduct.id = "zestProduct"
    let interest = document.createElement("p");
    interest.innerText = "Or 3 interest-free payments of ₹ 2533 with";
    let zestImage = document.createElement("img");
    zestImage.src = "https://assets.zestmoney.in/assets/widget/zest-logo-name-info.svg";
    zestProduct.append(interest, zestImage);

    let continueShop = document.createElement("div");
    continueShop.addEventListener("click", function () {
        closePop();
    });
    continueShop.id = "continueShop";
    continueShop.innerText = "Continue Shopping >";

    let upi = document.createElement("div");
    upi.id = "upi";
    upi.addEventListener("click", function () {
        let payPopUp = document.getElementById("popUp");
        payPopUp.style.display = "block";
    });
    let cashDelivey = document.createElement("h4");
    cashDelivey.innerText = "CASH ON DELIVERY/UPI";
    let saveRs = document.createElement("p");
    saveRs.innerText = "Save Rs 15 on this purchase";
    upi.append(cashDelivey, saveRs);

    let payDelivery = document.createElement("div");
    payDelivery.id = "payDelivery";
    payDelivery.innerText = "PAY VIA CARD/OTHERS";

    secDiv.append(shipDetail, zestProduct, continueShop, upi, payDelivery);
    carte.append(secDiv);

};

function deleteProduct(i) {
    let cart = JSON.parse(localStorage.getItem("addToCart"));
    console.log(cart);
    cart.splice(i, 1);
    localStorage.setItem("addToCart", JSON.stringify(cart));
    displayCart(cart);

}

