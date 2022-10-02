'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4f89aeb9583992e56b821f4841604937",
".git/config": "a99970f2370245e32c04c98d65c9115f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7df8129ae2dee50527a97729c84255d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b33d9196b29aeb186af4d48db6de09c7",
".git/logs/refs/heads/main": "a4bdd52cc1dac3f037045855f8e6b5bb",
".git/logs/refs/remotes/origin/main": "5e5664f97eb16e223575ddb7c37976dd",
".git/objects/01/d3beb1b732a0f9babb4815dcb378333ee91d8f": "6b2442ff77b1ec02685d087488138bcc",
".git/objects/02/00d3515ecc613ebf83c66db39a49516bdff964": "dc94fee41c9c01edcca82083dca074e7",
".git/objects/02/556a7b694807dc4d6fe240f5984c380f4bf3a1": "73db9ab7e26c62ffad6a6737a22f203b",
".git/objects/07/b3c28a80e5abaee906cde2358ba9a586435e57": "93b2be5f2467073ec7524319a4a7e66b",
".git/objects/0a/318c80dc16523a6751139291707703ff2ec12a": "430561f39dd099ed5eb1bd63d886ac3e",
".git/objects/0a/5d4a85ea2f9d9be09c1d062676ede4ac30184a": "eee7eec44193b72c3238a8d4d05fd2bc",
".git/objects/10/9ad12c41bc2a0cd5387a205ebc47c02c4fdbb6": "81bc12fc659592b6d0aacb17dc09e387",
".git/objects/10/f06f970d9a1c4c39547cdde3b395ec5b1049ca": "78a8865fc959529e0ec2b6ae9677421d",
".git/objects/15/e4b67e585b1ee7a696bde745b29b64a768a4d4": "9b1d50435ea5c8d2a586a4e1abc030c9",
".git/objects/16/82fe4a53ef52a32f68a2fd2239bef9a5a2bd10": "ef94667cdfbd40e1e46034cb4f80cc21",
".git/objects/16/f911a1b426ae292c85a1d38ac2578884b4cbf2": "535987ad029411cf4dc3a9d028ca7cbb",
".git/objects/19/84fefdb914edb038790d4bba908af9256e457d": "bb9c4dec6e2297cc4d87f02755e5ee2a",
".git/objects/19/dc1a56e96fc81918c18a153017d228bbea92d1": "2e3f847b69bb00395f9125327971668c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/c026dfbd849c65a8ed894307f737a52ecd4dc0": "79f0af506d2f20c665fda0ea794e9553",
".git/objects/1f/35f4d81011dc3efd82bf4bb64ee26a84af78c0": "d84d6763b1ba4625395273605efe6bc0",
".git/objects/21/7016addd3a383848ebc218acff91c63d44e2a0": "094ed2e03065cc623ff8031585f88307",
".git/objects/21/8696a06655bb5e7e564cf5ebb7e75dd046df44": "618b892dcfec79d9831e4516b0dd1b9d",
".git/objects/22/7085e66a2fc6f01c85d7485fd226f0f2b0eb35": "43e5cbc3c53ef1df8f93ed5cff4c6404",
".git/objects/27/d84dd7a1c7e16b38c7602d7a1fadca7e5622fc": "11ab849ffd1bddf5d5bf318ac47befb7",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/35925ebfaa960ba0c9df6c9a20b1c2afd3098a": "74610a1affed6af5dd22ba1eb27ffa12",
".git/objects/32/b1452f09a4539ca30e02bc15c5301872adc940": "36ff23143bdc3af485ad55b4e393a307",
".git/objects/35/834bef1cfaa891a1a1f42ed42c6d40a4acf525": "cc604b5ec8d69b103e0c3e4977a1ce2c",
".git/objects/37/69355d8b0bd48227e8c15d4d2df779d69520c9": "cf106c591988614a1c64a0805833efb9",
".git/objects/38/06258d91adcd740bc3f8b0c0973ae9910ea035": "130adcf764869ad4dc9a43def29c5ce3",
".git/objects/38/3c715dd27199e23ec49118449273c3c1292942": "b3f96d6f5087507124d48ce40448d438",
".git/objects/3d/cae0d0d3c542aeed14d39a0879adce2298e29d": "5d5b91f60bdec978285fd3d8a7a01c6b",
".git/objects/3e/3e1e982d2712a1680f33ca2c51d446412decc8": "ecccbb65d3c04dd85ae5e60d627ae300",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/2b122e8dd4db771fe5c41498c75872a3876ade": "1cad3b0d04e76740e78be79b0bbe2c58",
".git/objects/43/36fa2b05d60782d77a59cc884e132330c2156b": "42fcf495b4e90c0677f2af0527f6ebb0",
".git/objects/44/d6c361c0ec31e65be63afe2e8b3db3cf3ec865": "c79c03e080303a12a4c2b1309887edc9",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/254387192ac7f1277574dd79edb5d535175850": "2627f40cf35a6b3d2c8e1d69220f3bf5",
".git/objects/48/4dbd0dc353051ae3d0844ca1b7b575acc8685b": "87ac33d911c7bc7e8c94a4c4439829cd",
".git/objects/4e/5639eca1d5a9d8788da4000e0f508be268c779": "f21339c3a37fcf45ab7a17a19f89d637",
".git/objects/53/21c6ee3b705eef6c8f000f05643de608b31a65": "b3e600d4938b0d1ceebd6c0bef2409e5",
".git/objects/54/2d56080dd19b2e11d8e824b82886c291f8edbc": "9c20fd0cc0ac50a8ee2985accd10c817",
".git/objects/61/24478d917d3f4c0fd2468282700e7195fae42e": "ed0d5c7365afc0396471d86726931725",
".git/objects/67/a5bd0e8b71bc2ea2500b12b9c1717f3fb216df": "97c580b023c9932c19016867e2224380",
".git/objects/68/c985a553a24f40d2ffc9bac2fb14355968c586": "40591a4239888553337c40a0f3917c70",
".git/objects/69/6f85267e2a003887e38278b29482f9132f1d86": "cffe464c9f94dacadcbe493a436f2c3c",
".git/objects/6f/36634bd1a69330f4964365d2ba1250b3a8e802": "8431b5bb27e3a61eee72e71dba54ffc4",
".git/objects/6f/ca0e277468fa8068460196452dd3484ed8414f": "64955cf7d9b1b2897c0cf49960307e55",
".git/objects/73/979ac7b688d361cfc623d6e6cdfb45fb1982fa": "81a14850f6dfcd43ca2e45428ccb42dd",
".git/objects/77/6c183e73e31b0274cc1ec6d8a10a3daf8fe524": "b01be9eb10d35c308bac027f4109531f",
".git/objects/77/e60fa4e6821bf207e28d39cb9562ebf999967d": "481c7f2f0def0f19b2983d4570bebbef",
".git/objects/78/9ed08d8396a3951d7e5b8a089e2b9612c69833": "b515ba893c2bcdefef6d6357e6b1b526",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/5675fc128c08ecb65dde0845281c4cefd80b62": "0b729c2c316b38d1398c2dba175db08d",
".git/objects/7c/4db6b51c1f77c8902a0c39422986f49447e6da": "7bd8494a105a051de3358a79d87c09d8",
".git/objects/7c/5f87d942c505c2b94a7955816438d0202f4c31": "6a2480c6093b07463e25369db05aff93",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/571dc097b5df4c3cc9031cd08e9712508adf53": "ac6c23911b198878250abd149c8778ea",
".git/objects/85/a2fd68f06add5775bcbe20ce95d78733b46352": "341ba873c964a2d68902cb938125df87",
".git/objects/85/bf59939f2a7428b3a9598121649782c63a086a": "e69d3ffed4f523c1f359a160c23bce23",
".git/objects/88/4193f93d8915dfd61bc3bd3142ae4b0d45f112": "3efaee01953ee88b52c7c391fa92678e",
".git/objects/8d/e544938c4a3174fe756a6e7a488c5a7a00ee71": "c5a2cd5ff04858e95b5ed2e98917c414",
".git/objects/8f/bc8ad4d2a8770e1721f34a8e4565cbb1837845": "054f7557e96173f8924e019335ee7907",
".git/objects/8f/e48476ad4fe02c3a052b2d9cef9939928fdac3": "0ca8b3937bb6ecdf946c46aafa5dc3dd",
".git/objects/91/a99520d3fdce3c9555f58ecee56dabb6f12553": "407dd2145a6dcc3958d7d2d86a3487c9",
".git/objects/92/047a16038b92ba7fba5bdf9f03de04e00aaf17": "aa2b5680690a31dac16a7670d3f43f6a",
".git/objects/94/5befab6bf55d55dfcae7ab8a47962ee554d5fb": "e736aa2cac1f70da9833ce5a16c5b5a2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/199d6f37bae0d03984b9fe74d20437999b08bf": "aaa1b39f639c574f0de42759198e434f",
".git/objects/9e/343fa09c76388e6b566334e1563abd59991874": "4a1e4229b7af2ad6c3be98571d7cbb53",
".git/objects/a0/6a9b186d86b793ca898222e448844c0eefee49": "c38234148dd6cad8e48392fd28b36f11",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/db888f4c8f2d9f8579afbe2a02b5361bb6624a": "160bfce634311a262caae2d5c73d7162",
".git/objects/aa/345516e33c48542ba78e2b8c66b012bd345bc5": "e4a2ae42fb8d8de7576856c4b6f2d18b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/76012b56704ea602368f259528adfab96988c4": "384e864248be560d9f50f8c06458b29a",
".git/objects/ba/4343093a04d05beae641c2e67d0bf2c55b8c6e": "552ad5d0982d2594ad3b395f19617e94",
".git/objects/bb/3dae4ba55ffc96b7863cf3aadd9dcfb3fe531f": "d98f5e78ad15bd1dec0f4a1b5025f843",
".git/objects/bb/e923d8cd43931e415a0a6f4167161c6408d177": "ffeb5fdab1a374da009891f47189f772",
".git/objects/bd/a0e375638a690f5f252b73ce0f9973edea685a": "eded18ef197c4a9de3106b93e6841232",
".git/objects/c3/32f3f52f701bf0efb1636422ed7bf1504b3a04": "6ff7ae9ceca2d2fc45f8f83fe9a13992",
".git/objects/c6/58da5bd6842b783d3e34168ee7bafbafb77698": "e55f7231b625c5cea87a63efd6303ddf",
".git/objects/c7/e41fed182f04104688c2fd1688263c3cfb0dbb": "9d3575183a7371a5514562bd48d9e98c",
".git/objects/c8/ff0507afe5bff5dc1b6e1361819fe3c5400d71": "14f88eafd7448764b2947c9c5ae8230c",
".git/objects/c9/07dcfd2f98cfd707e2831208054a4c6801a6bf": "dd6dcb78ecd9e616af5b7d552f1974a7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d4/ef2913fcad1ef6e4c6357049d92d7ee4e7814b": "8818e1969878548b65b15e8b913978ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6ee844f4bc80b1923255dcd4959c14e1a7ad36": "d9caf55d467089f83bcbb272903012a0",
".git/objects/da/a511f4688cede4956459baa8a6de6920bc55a8": "d39069b62e2deb3076ea2dd4fce32afa",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/6d44162ceefabaa57c63f5470783ff760beef1": "c26d40036810eeac7aafa5937626fc4e",
".git/objects/ea/213a7d1a3a6ee81e89461e0a2432be020d2efa": "b447bae2c0d87a2435b0e2865a3cb0ce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/6adecd085c15b1d32f41883a164eb9a777e544": "f0b7b10f8537e6e1487f54ded054264a",
".git/objects/f5/84119a2e9d3775ed354e8668ce28f30831517a": "b9fe973decde23b62806bd42084a1746",
".git/objects/fb/bc6019c22ba30fc43d85a66318bb853173083c": "ea74804298947af38c5dc2dd690e25fb",
".git/objects/fb/dd655fca70d06f289b50c9b763903b5d9c6563": "57f950edd0cd34cc88a369c563041d8b",
".git/refs/heads/main": "c46ec12d8af12e40420b0e0ad9427d41",
".git/refs/remotes/origin/main": "c46ec12d8af12e40420b0e0ad9427d41",
"assets/AssetManifest.json": "ef81fa916ddf3f8bbed175928d400b01",
"assets/assets/images/1.jpeg": "3b5161d98f0d5387518082f8791713cd",
"assets/assets/images/10.jpeg": "10027e5c65eb4f95633cd1dd62675d36",
"assets/assets/images/11.jpeg": "aebe788dcca121d0415097113449c47b",
"assets/assets/images/2.jpeg": "a79d46382d3022d7c0255cbe6c39beb4",
"assets/assets/images/3.jpeg": "ac2fadd7370a0e6f9edf63da0e29f6a6",
"assets/assets/images/4.jpeg": "1d1722786e0ebcac6bfc84c74ad33995",
"assets/assets/images/5.jpeg": "79bdc8e16780af16c84e5cf49734cb70",
"assets/assets/images/6.jpeg": "0205ce9e3cf25bdd7e1e38277bb077cd",
"assets/assets/images/7.jpeg": "0a3d6727caf73ed8c06b3c40e06c744c",
"assets/assets/images/8.jpeg": "7a8c1f210bdc65664d958cbf19b82832",
"assets/assets/images/9.jpeg": "777d0f9f8ed5d4c574b9b99efd8aafa2",
"assets/assets/images/Ananna.jpg": "2305cc70af590d7f833fadb65379cee3",
"assets/assets/images/apple-touch-icon.png": "1fb60b58848c000249af4a417d8eac6b",
"assets/assets/images/Ayon.jpg": "464e14ca6bc533e63c87218466c6b791",
"assets/assets/images/components.jpeg": "16f1bb5a7689e5f99ea7ffc53b129d0e",
"assets/assets/images/doodle.png": "187f0373e538cc433b10809a1dd59fb2",
"assets/assets/images/dot.png": "81a2106763ca4d10177a79ed67359e43",
"assets/assets/images/earth.glb": "03723d7c829e5e2feeda8a65d4e9e2fd",
"assets/assets/images/earthpic.png": "df50bd76b38f033d4d0f55114ed74a88",
"assets/assets/images/earthpic1.png": "3f664a83f873f1bd53f08b99caf4a77a",
"assets/assets/images/Earth_1.usdz": "ee087ecd34c4f65e74a096cd0c19b46e",
"assets/assets/images/Fahmida.jpeg": "d48f3dfd63e00f7fde65bb68632306e3",
"assets/assets/images/favicon-16x16.png": "3f0c3344a21531c36a9d724a4cb92d85",
"assets/assets/images/favicon-32x32.png": "7625e018702459a49355bacf9c92e863",
"assets/assets/images/favicon.ico": "a9aba65ad65a84250f45cc74bd3a1ddd",
"assets/assets/images/icon-192.png": "06e10e817c39759a2a573e7d28f6ad32",
"assets/assets/images/icon-512.png": "5b069a247bf0b9198320b09ab5e737a9",
"assets/assets/images/Mahim.jpg": "93003796d273cbea6df82d2a0d771a62",
"assets/assets/images/mechanism.jpeg": "33140034484be87d4c4d0b7e3e3bcd70",
"assets/assets/images/neon.png": "bdf204e23756ed745bae7b65eec3a51e",
"assets/assets/images/poster.png": "e4a4c5a366ee4b65dfaa2b02da9dc8fd",
"assets/assets/images/poster.webp": "c8880970864d4820515e5e1349971424",
"assets/assets/images/poster1.png": "144a3865d3dbbcf74d64a4115778faf1",
"assets/assets/images/poster2.png": "144a3865d3dbbcf74d64a4115778faf1",
"assets/assets/images/poster3.jpeg": "ac649bccef8be79af8eb672ea123c639",
"assets/assets/images/shuttle.png": "9df39e09fcb3cb9b413a46f9ab221d71",
"assets/assets/images/sifat.jpg": "4e89270aad0d5658d412f031b2d86569",
"assets/assets/images/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/images/Untitled.png": "c3fb3068ab0fe278a9e1f7e83b15ad63",
"assets/assets/images/WhatsApp%2520Image%25202022-10-02%2520at%252012.00.00%2520PM.jpeg": "d4860cf4541b065ee93c22807b50e22d",
"assets/assets/images/WhatsApp%2520Image%25202022-10-02%2520at%252012.09.50%2520PM.jpeg": "893e6371185dc738e7c1f8516b39cd1f",
"assets/assets/rocket_loader.json": "a0bd3a90bc870cdfea4896ff3784754a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8b9cc6f5b7eb4c4516589e4d1807e216",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "8399ae8e54e2273b17e9ad1ce38e5cb5",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "a9aba65ad65a84250f45cc74bd3a1ddd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "06e10e817c39759a2a573e7d28f6ad32",
"icons/Icon-512.png": "5b069a247bf0b9198320b09ab5e737a9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "910889aac415dd187641c548562dced2",
"/": "910889aac415dd187641c548562dced2",
"main.dart.js": "bd4885bcb72f091cd0b49ec0cb196c86",
"manifest.json": "6145b6bd13df75b112649d1cc2e72cdf",
"version.json": "5b6d8e2c54df43570c41646bdaacf5c1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
