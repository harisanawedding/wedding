'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2678869dcfa4ac6ab525201b599fb975",
"index.html": "7c153d79d0e36aec7bfc67dffae4cdc8",
"/": "7c153d79d0e36aec7bfc67dffae4cdc8",
"main.dart.js": "55de4034fb91172d45b4d6deb3f880bf",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"image/FRS01950%201.png": "e1cf1a4b8942e56189d0314d520afea8",
"image/first_page.jpeg": "c02c8c519b461116a776fc1e0801486b",
"image/slide/8.png": "6979e6f5f9eaa3223a8f06a810520d80",
"image/slide/9.png": "fd8fa92ed37dfc1e5b58a5965d96d221",
"image/slide/4.png": "999153e64c3fa0e34adf56bea859ac28",
"image/slide/5.png": "dfd31b78749407f51523bc7abbcee441",
"image/slide/7.png": "176bc2d9bef456f96b9fb16ae565ccca",
"image/slide/6.png": "5e0474fbdc7bac529d640f0617bee4c2",
"image/slide/2.png": "f266962571277bda0392251c98bbfc12",
"image/slide/3.png": "cc5e093f6c627186323c165332d70b4a",
"image/slide/1.png": "58f7eea26df04554e0c5badf15eeb966",
"image/love_page_groom.jpeg": "c25555608562cf4bddfed08ba5aea924",
"image/gallery/12.png": "3e5d734718e351a2d5e48441fc73f32d",
"image/gallery/13.png": "bf7e27e702e02a1fe094f91d051e602d",
"image/gallery/11.png": "e39c03b44415da0b27318471170aeb64",
"image/gallery/21.png": "8051f5eda35474ff28e6906a3c5b20c6",
"image/gallery/22.png": "d58d04b7fa909f06c83d29c167c3e02d",
"image/gallery/31.png": "443ee247e2496a611a97c543f90690a6",
"image/pray_page.jpg": "7e2a808aacffa5eb8683889791c9c725",
"image/love_page_bride.jpeg": "c03c3a7f1271d48e02b52690f6007361",
"image/story/2.png": "93e13eafeee1535234066ed798d20c6a",
"image/story/3.png": "c4bcae8d2a039a6971b2c0656250d829",
"image/story/1.png": "b767b3d215541e8c86c0228e5ec2f1aa",
"favicon.png": "0b09f9dd5a6e951f2585ffa7ef384dff",
"audio/audio.mp3": "4bd4a22fa8e479afd1036954161768b0",
"json/data.json": "f852e43b9fca447fd070a923f092850e",
"icons/Icon-192.png": "849085d87d49b072b525b4cb7674942b",
"icons/Icon-512.png": "bdadc887921356cd8702cc2492337b53",
"manifest.json": "a57d440751fecd9196c0576792e928bc",
".git/ORIG_HEAD": "a32df8fe9f7f33e5daff98e40a8c48f1",
".git/config": "dffacfafe89c0284ea2ed17c9c247186",
".git/objects/3e/e11c8a1ee28571b0ec750a9fbfffcc1623f73b": "a814d43b243bee3117c3af6a9210f6cf",
".git/objects/3e/81903143b1b827e8377c9c1289d6ea7da91ffe": "94294a6402349e98385d1b28700170a6",
".git/objects/50/4050210f6f147c5aaf854b41140e34367292bc": "fcd9f58e70ab252ac7ef140ffb57ef27",
".git/objects/50/3d0063a66399adaf5fd7ed7335d7aa6e7f794c": "9ee4da296ff259deb9e92bed0d1271bf",
".git/objects/57/7c1723fc37aa060437a73de52b511e79e18711": "5d50f9456ee7683a48770a9a79dd2020",
".git/objects/3b/4b4d532c78277890ebaf1b27baf271f30e7194": "4d7be51161ed5c171ed96015281f44d8",
".git/objects/3b/0c2a706376e09d81a78acafaea93aec01e299e": "bf3b3b269a29d0c4f179cbef7435d531",
".git/objects/9b/b84fcb74b0e577052bb85906649e1b4e346b0b": "def1ade8ef5436c7c59b62a156deb4c9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/d576537fc474f245375af81da583cc3894f4e9": "4e8d98976ce9a421c78318326e7b173a",
".git/objects/3d/a6ab353d09e84bd1b61ccaf737cef3aed15e29": "e3ca062e8e9de7d8bc8db2abede3c838",
".git/objects/67/5d205543785813fc42fe532ef4b41dce17beaa": "0cc71f3c6446f48c988ea2c8d5e54dce",
".git/objects/34/0cf0f1706073b6fd704dc092b30d934d6b71dd": "b885eb1e9923e77ddbe1ab8d0fb0f6e0",
".git/objects/05/365144595d907aef0e8a9b58a342e3c20fc3c0": "93a9e39639a9120b06b927d154342de3",
".git/objects/05/da318eed5da3ff9ca70eac3c30a3b6c320b2de": "a5f5849244d738b276aa864b2db6712f",
".git/objects/a4/d49aa189e4311d14c1e74dc1154d81e271e8da": "733f17519126d31b0d90e654c3325150",
".git/objects/b2/7822baea48062bf11617ce763e8d623c3a9769": "c5b9e0f1b9ad3cf97e43c2702903275f",
".git/objects/d9/894ba4319767eb375868d003c2a857f7ac361b": "d32fe89927e1ca8459dac45bf3c1a42f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/9f1456dc6a68b9290a2a8e326d96e8066f945a": "71011181d88cbb2ae5b84122c115c7d6",
".git/objects/da/34d0c1337002f941adba51946686b433cd95b6": "692b8cb96b343136b3f06120071279a8",
".git/objects/da/66b3a1bec5d155ec3ef4725a08c664a600eeef": "6813fd03c851e76ad3f6312b424ee57d",
".git/objects/b4/5f8006a9de7aaf1d3e3571244c71b48c1ae62e": "4b66cee5b6f5d0cff5e4a9151468ff60",
".git/objects/a5/debb4c319e1b71216b4e683c106bfac9b05bc3": "84ddc4d7ec808a27208921aef1b764a4",
".git/objects/bd/d202bdfac50ada407ee66e426381b25a15bab6": "9551c3ee4f31db21745c52c3cf9dacf2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a0c7266fde9240666849d5acf626a6ce1fec4d": "8ee855751bd4ea15f0b9d918cbc2d2e3",
".git/objects/e2/135a57d5b7149f9efdf20b31fe4823ff55b906": "c59318b8dd616b5b9c6da982daef15f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/bb1b8de28426e935f86ff4f6da4059587343dd": "04eecba89a9e21e8edc591298b899dee",
".git/objects/c7/810a4d5addbabc553387df2a6381f0e38604f4": "39aa64da6f876b328ed74d908e932f59",
".git/objects/c9/93e82216cd9b62f025c441fb65b7b7ccf2f96e": "9605e075088d634aafdfa3a6e73dda6c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b22b9c907df509561ccec7051141819b37559e": "2366056cfed5f6cc1df11099c12d0f80",
".git/objects/cf/4be6586533bc36492380d8a11ce1b49d26521b": "f76bc1048d8397988044d59f14e9a792",
".git/objects/cf/5ab5b621bedfa6ade782cf3c74f6e9a09f3580": "82395c5ae510d63a47063e45ba6f4b5a",
".git/objects/cf/409252f9c3b43bbe63f271a456937a9280bf51": "0bf8214dd306e3a6283d645ff096cbab",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/77243fc7ae5f860243c768fc7bc659839988a5": "3b1c75299f25f48fcfed8983e7d8b1d4",
".git/objects/c8/9d07425d3df4077aae395d40f6338449173eae": "eb8423d35006af1086d60ac55e14bc70",
".git/objects/fb/f4977f8e8f497244fb0f3c6da3889a0b65ce66": "de919c91ea4a3a6bb81edc97803ab959",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/20/89e35ceb4aa9328b22ea7d7b2a5c03c23b1677": "2a2da3be23278325e5cb222285014bcf",
".git/objects/4b/cd2f68766d8220ca7c6fb6594178a4aff2a8c4": "520d47b65edff0d82fbf17db775eeadd",
".git/objects/pack/pack-e8827f4cec67661a53c7ead0cfd18501d742cd80.idx": "978ee93a1cc4a7ab2d3e5ab147c8d655",
".git/objects/pack/pack-e8827f4cec67661a53c7ead0cfd18501d742cd80.pack": "aba80d774de93701641e4cdf31d90252",
".git/objects/7d/ed5642d44732a13b22fc53f59ec28c9de30bb5": "79d673be4b9640b6bc34953a60b9a575",
".git/objects/29/3b127c3b59e428c32ccfc88770dd3980743c0a": "72237c86951dc73cfb5ca43c24a92b72",
".git/objects/7c/cb8c4ec9c768e4d32694487afd5df86f8f4700": "3f3dcf4c11edb0ba3d071f35d5573a38",
".git/objects/7c/66d203d62d9a42ff2db432d459817421a07930": "47f5f08a0470ae14db8a825dd4a524a5",
".git/objects/73/910da56786adc3d599568e5da7b77220706db4": "efb11ddffb2d8399bac123e33ed56829",
".git/objects/87/4b1b0dd7c63f46240530a710ccd503d58d866d": "0da78f91e2108665baeb94f43f846938",
".git/objects/87/324c3448afeeb06113cb68a6b62c7d805b637d": "e90c923a83f4e4060821c07575beb595",
".git/objects/87/a8417d65e359750b3ffa9bf716df682f6349be": "42f2699e73613e4ce5a7617b5d20f587",
".git/objects/80/5b991336bdfc9772171f376b821f0071c92cb6": "b27671b4ff272a636c8fa87a6b1d2043",
".git/objects/80/4a2e6406edaa4708f73635d3ad60f7b871c083": "9fbb07e350efbe40ab91391b2b98eee6",
".git/objects/74/7b931c138c56bfd4a1bd53d4eea785556f1d6d": "be07fc35ee07ac73669c1dde76258a50",
".git/objects/28/b36ac54fc4023fee4423db126e0503cc9998ca": "01ff04972e50b7aa6884d58f2b86ed43",
".git/objects/28/824189359ac8522a03de121a02459f11e83185": "6f86fcac9a449d231c4585dcfe9ab8bb",
".git/objects/8f/3de892af63d9df0b1c4e52e7ee74f1e9cc84b0": "554b8a8153334a16e8976917aea03e91",
".git/objects/8f/2189988867b2ab0f78a74e0f2129c7240849de": "0cdbb1bc7e6212cf1f639d7879e40df2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/8d07716348aeb37065e882a17981beed75a3c5": "c6d61123f40881ffca7847899cd8a0e6",
".git/objects/19/bccf646ae4b4f8f927d8e2cbe6c81ecb84bcc0": "7c1246683d2078f9a7cad2ec4707f59b",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/75/8f8b4e8dff80cdbeb43f589d2be3c77be0a6de": "7f0990ccfc736adfb5a22cec7c6af21c",
".git/objects/81/5fccbc566e3f135e617ee3e0d6b71b732df760": "02892fb46280e4c4a27c0b121ab78c2e",
".git/objects/81/5cb5e4434f80e806ad5ac9cae7e55701476a96": "5a6b4852f521906c33491339086290af",
".git/objects/43/85d89630753274769cf65e7e96a146f32cfc52": "9008159acc70b290ac934f863a601c25",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f6cf6f3457565dd72fcabf8f5679d1ab657a75": "4d30d8046346c43326eebdeb0ebffa2e",
".git/objects/00/7f7bd633dbfe736142ee902c53da8a0d7cc3ea": "f50baa9c82c0f656837e6a708edc20da",
".git/objects/36/9f1f2e21fea839ac2109fa74fa512d98546ff6": "0ada737f6ad2d283b83f5680202aeeeb",
".git/objects/5c/21b3673f7c9d43f49753067512fafdb88d221c": "cf1b9b1d29f73d6b74afd47bca130d4e",
".git/objects/91/5175bf51e2e5baaa32e13721c513e1595f1e18": "189846da083662854f9975300b1b8383",
".git/objects/62/cdef9774530970ddd2bbd110b97066f68de0c3": "0dd8c0d574bd8ff4528cac408b8d39c5",
".git/objects/98/2c20871f4a9bcc0bb4289f538b0b7fab35e1f6": "e0ee0de6b04f40617747ed35cd2eb91b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/5e/671a1b1089235700a411a7ffa5de17a8ca1abc": "0024844b260a01d556297a61eb09135a",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/39/9720201a5d21db22cae87d6b05c1807217e7be": "7edfdcc90c1bef04ffa83a14fc51ba0c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/5bbf6e9001794b5e3f857b82c06b29a50b6d01": "4a95e6081e4eb015560ced2a6bc54d1e",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/b8/d4785bb46a869827fffacc7f48192a665c2c9f": "c8d1c76023fdf63473240ab959fa60b8",
".git/objects/a9/261e9c3fc0e1cac6db9e9a879c52035e5c3427": "feb3a6c7f68a1ce3cd17e0487fd794ee",
".git/objects/d5/858ed042f940ce9e758ba9c25567c51df5a8ce": "57f9467586d44a81e337c60334860a59",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/63a3caa696c57d4b0da8fd3f48703b9bef3849": "d7a226088418a59c217a706d3fb77294",
".git/objects/db/01ee360c44dabf4279f1eea69c29b11f6ad68d": "721c885d927171df0effb41b8f3087ef",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/285cb2efe71197b59e62d497aeed789f49325d": "a5c3d6dfbdb5c632aaaec08165d531e7",
".git/objects/b0/46e3f10e82342b45d49ffbc4f55a8bb912a6f0": "800f45c3e400bf7a86a9f795a50b6000",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/ab3ccc3bbf7c90b61cbb850e2401ee2b449219": "801e7bb31b898e79526104008ef8e9a9",
".git/objects/ef/6b3f52b3da17d73fb7a6981858972305ef5586": "a76dab31cd98d39ebcdfd0a692b93659",
".git/objects/c3/c6e7a2afcf3ae1debdc9c09b361020bee2fde9": "f4e0dd07119a102aee73ce534d220226",
".git/objects/ea/909c008f4fe82344fe6599a204c727b6a207ac": "2ed8126ac670b3d48fd52142e932f48b",
".git/objects/cd/31bb60e8a4d568f4d8016d882ac04d88d1741f": "bd04cc437ed76640ae63189fde14bb83",
".git/objects/e6/6958eba646a5b1ad0ce166c98b4047022667b9": "335ce6856d7d494056fa1eb7d07dc233",
".git/objects/e6/c3acb2f39142787fb146922ab0efc7f4a7224a": "1df548ece9d17d48ed55550695ae38f6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/ff/717cdc60bed50690bfb9f4bf7e6b2f8ab8ba84": "a46342a5ea5f068ada2547b561827874",
".git/objects/c5/e67fac9494a7a8a7926760cee8ffdda38dc11a": "0992ee55657af10973afafaf7b86f729",
".git/objects/e9/3e91c5d672fa449e44e5e633f48d20c852e3fa": "95482720d52b9cf06dfacc17a984d0d0",
".git/objects/f1/132b5c65c9e4a6251f78ef0f604e930aa1b7a3": "b867a2eb3a3c2b53feb65bea04421b05",
".git/objects/e7/2fb76a7c2622efd106f807ac3edb5e662787f0": "74fe27fabec032aef71288772d1377de",
".git/objects/46/285078f2acf56cad7ce3b8ce0f1e9d2ee74103": "228c4a18f8442f3a5d4871562d3bbb09",
".git/objects/2d/9573b09a0307161201818bc6ca474eb8af38e6": "0345461a75005640184b30b6e1c731a7",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/cacd60271593a53e91aa865b8832289ddb4f4c": "ed79650f0f2e0c8026dbd6ad312a3786",
".git/objects/24/22cd50319ee3ef2995a929f63d7d1da39b8d69": "68f7160c8053f4e6a4fb62c983857120",
".git/objects/8d/4fb2511e391c32cfe6ade42ffbba63ebfe50c2": "6d90dd80e3c92484013851c04aee642c",
".git/objects/15/ad6e99e21d2f948ce7a61d202b28bb568fbcff": "0086d0dada29693de5af1042664c75e1",
".git/objects/12/7a7e8cdf20be76ea8bb84911a575d0ad9c434e": "16529e562d15124f4f4649bbb2811228",
".git/objects/8c/28767e7d750aed5d55de3bd7e6b6151b0f398e": "31b5fb5c8ddfb0ee506349b50e0409b1",
".git/objects/85/28bd0eaaee652fbc46615ca3cceb8cd6df2993": "0409c27a0c3c6091f27b43861e6f262b",
".git/objects/1d/449fedd18002000d2ceb8d246f82e24cf06177": "d1de2be53b04a02a7a62ffa419586afa",
".git/objects/71/188f5cb2815547a5fb785f220910324ad8aa65": "4158e15d340e315750b92098952bd603",
".git/objects/71/b1ff8a6a36554bbadc09dff27bb9c23b673861": "3d8ff6ad640ce33bd28fede3224e0d37",
".git/objects/49/6ee2ca6a2f08396a4076fe43dedf3dc0da8b6d": "6589e8096e1d164d9dddd885d15a514e",
".git/objects/78/854c7911bc2b02aa00ed681bb6fe55d5558fc5": "0cc65418f19201e3b7206f8887b7e21d",
".git/objects/13/7ca23eb73f943cbceafc6c6fa6c99b3abf5155": "8a8bc8b4c6606e68af6db7e98bcc9fc9",
".git/objects/7f/327136bdd933231039738e8b4bb6ac11aa6451": "e12705718d583b7c98a56895736d4991",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "585aa74f70de1010e15cdfdd217a0723",
".git/logs/refs/heads/main": "585aa74f70de1010e15cdfdd217a0723",
".git/logs/refs/remotes/origin/main": "179522e45ab9b3c40119ca3392e05e8c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "48ade8ef62a26412efaf21a2513a92ec",
".git/refs/remotes/origin/main": "48ade8ef62a26412efaf21a2513a92ec",
".git/index": "af47c9ac20bd2ddd8ae6d55fa860f8b8",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "1cd088d34c2d9e445de8dcaecb33308c",
"assets/AssetManifest.json": "0aeedcaf9400781fcef3b0f938752d4f",
"assets/NOTICES": "d8d42d646d7b16e94ed0d11a45a1a497",
"assets/image/FRS01950%201.png": "e1cf1a4b8942e56189d0314d520afea8",
"assets/image/first_page.jpeg": "c02c8c519b461116a776fc1e0801486b",
"assets/image/slide/8.png": "6979e6f5f9eaa3223a8f06a810520d80",
"assets/image/slide/9.png": "fd8fa92ed37dfc1e5b58a5965d96d221",
"assets/image/slide/4.png": "999153e64c3fa0e34adf56bea859ac28",
"assets/image/slide/5.png": "dfd31b78749407f51523bc7abbcee441",
"assets/image/slide/7.png": "176bc2d9bef456f96b9fb16ae565ccca",
"assets/image/slide/6.png": "5e0474fbdc7bac529d640f0617bee4c2",
"assets/image/slide/2.png": "f266962571277bda0392251c98bbfc12",
"assets/image/slide/3.png": "cc5e093f6c627186323c165332d70b4a",
"assets/image/slide/1.png": "58f7eea26df04554e0c5badf15eeb966",
"assets/image/love_page_groom.jpeg": "c25555608562cf4bddfed08ba5aea924",
"assets/image/gallery/12.png": "3e5d734718e351a2d5e48441fc73f32d",
"assets/image/gallery/13.png": "bf7e27e702e02a1fe094f91d051e602d",
"assets/image/gallery/11.png": "e39c03b44415da0b27318471170aeb64",
"assets/image/gallery/21.png": "8051f5eda35474ff28e6906a3c5b20c6",
"assets/image/gallery/22.png": "d58d04b7fa909f06c83d29c167c3e02d",
"assets/image/gallery/31.png": "443ee247e2496a611a97c543f90690a6",
"assets/image/pray_page.jpg": "7e2a808aacffa5eb8683889791c9c725",
"assets/image/love_page_bride.jpeg": "c03c3a7f1271d48e02b52690f6007361",
"assets/image/story/2.png": "93e13eafeee1535234066ed798d20c6a",
"assets/image/story/3.png": "c4bcae8d2a039a6971b2c0656250d829",
"assets/image/story/1.png": "b767b3d215541e8c86c0228e5ec2f1aa",
"assets/json/data.json": "f852e43b9fca447fd070a923f092850e",
"assets/FontManifest.json": "b0691b234101e879a3456fe40967e64c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c7b4be1e88ccda66d02a991e9865c436",
"assets/fonts/MaterialIcons-Regular.otf": "69e2ac9cd13571c4e316b280cabddf42",
"assets/assets/fonts/Wedding/Wedding.otf": "6ae4c46df15ffaff4ab94ab1f2382be2",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/TenorSans/TenorSans-Regular.ttf": "d827fd7095587fad48ecc82ac81d0207",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
