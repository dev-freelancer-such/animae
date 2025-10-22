import { CategoriesInterface, StoryInterface } from "@/models/home.models";

import imgKamado from "@/assets/images/home/img-kamado.png";
import imgLuffy from "@/assets/images/home/img-luffy.jpg";
import imgNaruto from "@/assets/images/home/img-naruto.jpg";
import imgTanjiro from "@/assets/images/home/img-tanjiro.jpg";

const bannerHomeMockup: StoryInterface[] = [
  {
    key: "kamado-nezuko",
    title: "Kamado Nezuko",
    description:
      "Kamado Nezuko is a fictional character from the popular anime and manga series 'Demon Slayer: Kimetsu no Yaiba.' She is the younger sister of the protagonist, Tanjiro Kamado. After a demon attack that killed their family, Nezuko was transformed into a demon herself. Despite her transformation, she retains some human emotions and a strong bond with her brother. Nezuko is known for her distinctive appearance, including her bamboo muzzle, which she wears to prevent herself from biting humans. Throughout the series, she fights alongside Tanjiro against demons while struggling to maintain her humanity.",
    thumbnail: imgKamado,
    altText: "Kamado Nezuko Image",
    author: "Koyoharu Gotouge",
    subtitle: "The Demon Slayer's Sister",
    views: 1250000,
    likes: 98500,
    isLiked: true,
  },
  {
    key: "uzumaki-naruto",
    title: "Uzumaki Naruto",
    description:
      "Uzumaki Naruto is the main protagonist of the anime and manga series 'Naruto,' created by Masashi Kishimoto. Naruto is a young ninja from the Hidden Leaf Village who dreams of becoming the Hokage, the village leader, to gain recognition and respect from his peers. He is known for his cheerful and determined personality, as well as his signature orange jumpsuit. Naruto possesses the powerful Nine-Tails Fox spirit sealed within him, which grants him immense chakra and strength. Throughout the series, Naruto embarks on various missions, forms strong bonds with his friends, and overcomes numerous challenges to protect his village and achieve his goals.",
    thumbnail: imgNaruto,
    altText: "Uzumaki Naruto Image",
    author: "Masashi Kishimoto",
    subtitle: "The Ninja Who Dreams of Becoming Hokage",
    views: 2100000,
    likes: 156000,
    isLiked: false,
  },
  {
    key: "luffy-monkey-d",
    title: "Monkey D. Luffy",
    description:
      "Monkey D. Luffy is the main protagonist of the anime and manga series 'One Piece,' created by Eiichiro Oda. Luffy is a young and adventurous pirate with the goal of finding the legendary treasure known as 'One Piece' and becoming the Pirate King. He is known for his carefree and optimistic personality, as well as his signature straw hat, which was given to him by the pirate Shanks. Luffy possesses the ability to stretch his body like rubber after eating a Devil Fruit called the Gomu Gomu no Mi. Throughout his journey, Luffy forms a diverse crew called the Straw Hat Pirates and embarks on thrilling adventures across the Grand Line, facing powerful enemies and uncovering the mysteries of the world.",
    thumbnail: imgLuffy,
    altText: "Monkey D. Luffy Image",
    author: "Eiichiro Oda",
    subtitle: "The Pirate King Aspirant",
    views: 3200000,
    likes: 245000,
    isLiked: true,
  },
  {
    key: "tanjiro-kamado",
    title: "Kamado Tanjiro",
    description:
      "Kamado Tanjiro is the main protagonist of the anime and manga series 'Demon Slayer: Kimetsu no Yaiba,' created by Koyoharu Gotouge. Tanjiro is a kind-hearted and determined young boy who becomes a demon slayer after his family is slaughtered by demons. He is on a quest to find a cure for his sister Nezuko, who has been turned into a demon. Tanjiro is known for his exceptional sense of smell, which allows him to track demons and sense their emotions. He wields a katana and uses Water Breathing techniques in combat.",
    thumbnail: imgTanjiro,
    altText: "Kamado Tanjiro Image",
    author: "Koyoharu Gotouge",
    subtitle: "The Demon Slayer's Resolve",
    views: 1800000,
    likes: 134000,
    isLiked: false,
  },
  {
    key: "ichigo-kurosaki",
    title: "Ichigo Kurosaki",
    description:
      "Ichigo Kurosaki is the main protagonist of the Bleach series. He is a Human who has Shinigami powers and is also a Visored. Ichigo becomes a Soul Reaper and is tasked with hunting down evil spirits and guiding departed souls to the afterlife.",
    thumbnail: imgNaruto, // Reusing image for demo
    altText: "Ichigo Kurosaki Image",
    author: "Tite Kubo",
    subtitle: "The Soul Reaper",
    views: 950000,
    likes: 67800,
    isLiked: true,
  },
  {
    key: "edward-elric",
    title: "Edward Elric",
    description:
      "Edward Elric is the Fullmetal Alchemist and the main protagonist of the series. Despite his short stature, Edward is a skilled alchemist who, along with his brother Alphonse, searches for the Philosopher's Stone to restore their bodies.",
    thumbnail: imgLuffy, // Reusing image for demo
    altText: "Edward Elric Image",
    author: "Hiromu Arakawa",
    subtitle: "The Fullmetal Alchemist",
    views: 1100000,
    likes: 89200,
    isLiked: false,
  },
  {
    key: "light-yagami",
    title: "Light Yagami",
    description:
      "Light Yagami is the main protagonist of the Death Note series. He is a brilliant student who finds a supernatural notebook that can kill anyone whose name is written in it, leading him to become the vigilante known as Kira.",
    thumbnail: imgKamado, // Reusing image for demo
    altText: "Light Yagami Image",
    author: "Tsugumi Ohba",
    subtitle: "Kira",
    views: 1650000,
    likes: 112000,
    isLiked: true,
  },
  {
    key: "natsu-dragneel",
    title: "Natsu Dragneel",
    description:
      "Natsu Dragneel is a Mage of the Fairy Tail Guild, wherein he is a member of Team Natsu. He is the younger brother of Zeref Dragneel, having originally died 400 years ago, being subsequently revived as his brother's most powerful Etherious: E.N.D.",
    thumbnail: imgTanjiro, // Reusing image for demo
    altText: "Natsu Dragneel Image",
    author: "Hiro Mashima",
    subtitle: "The Fire Dragon Slayer",
    views: 890000,
    likes: 73400,
    isLiked: false,
  },
  {
    key: "senku-ishigami",
    title: "Senku Ishigami",
    description:
      "Senku Ishigami is the main protagonist of Dr. Stone. He is known for his vast knowledge of science and his goal to rebuild civilization using scientific methods after humanity was petrified for thousands of years.",
    thumbnail: imgNaruto, // Reusing image for demo
    altText: "Senku Ishigami Image",
    author: "Riichiro Inagaki",
    subtitle: "The Science Genius",
    views: 720000,
    likes: 58900,
    isLiked: true,
  },
  {
    key: "deku-midoriya",
    title: "Izuku Midoriya",
    description:
      "Izuku Midoriya, also known as Deku, is the main protagonist of My Hero Academia. Born without a Quirk in a world where they are commonplace, Izuku's life changes when he meets the world's greatest hero, All Might.",
    thumbnail: imgLuffy, // Reusing image for demo
    altText: "Izuku Midoriya Image",
    author: "Kohei Horikoshi",
    subtitle: "Deku",
    views: 1420000,
    likes: 105000,
    isLiked: false,
  },
  {
    key: "killua-zoldyck",
    title: "Killua Zoldyck",
    description:
      "Killua Zoldyck is the third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until he ran away from home and became a Rookie Hunter. He is the best friend of Gon Freecss.",
    thumbnail: imgKamado, // Reusing image for demo
    altText: "Killua Zoldyck Image",
    author: "Yoshihiro Togashi",
    subtitle: "The Lightning Assassin",
    views: 980000,
    likes: 82100,
    isLiked: true,
  },
  {
    key: "goku-son",
    title: "Son Goku",
    description:
      "Son Goku is a Saiyan originally sent to destroy Earth as an infant. However, after a head injury, he lost his memory and became one of Earth's greatest defenders and the informal leader of the Z Fighters.",
    thumbnail: imgTanjiro, // Reusing image for demo
    altText: "Son Goku Image",
    author: "Akira Toriyama",
    subtitle: "The Saiyan Warrior",
    views: 4500000,
    likes: 387000,
    isLiked: true,
  },
  {
    key: "levi-ackerman",
    title: "Levi Ackerman",
    description:
      "Levi Ackerman is a captain in the Survey Corps, known as humanity's strongest soldier. He is the squad captain of the Special Operations Squad within the Survey Corps.",
    thumbnail: imgNaruto, // Reusing image for demo
    altText: "Levi Ackerman Image",
    author: "Hajime Isayama",
    subtitle: "Humanity's Strongest",
    views: 2800000,
    likes: 234000,
    isLiked: false,
  },
  {
    key: "saitama-onepunch",
    title: "Saitama",
    description:
      "Saitama is the main protagonist of One-Punch Man and the most powerful hero alive. Having apparently trained himself to be able to defeat any enemy with a single punch, he joined the Hero Association.",
    thumbnail: imgLuffy, // Reusing image for demo
    altText: "Saitama Image",
    author: "ONE",
    subtitle: "One Punch Man",
    views: 1950000,
    likes: 167000,
    isLiked: true,
  },
  {
    key: "rimuru-tempest",
    title: "Rimuru Tempest",
    description:
      "Rimuru Tempest is the main protagonist of That Time I Got Reincarnated as a Slime. Originally a human named Satoru Mikami, he was reincarnated as a slime in a fantasy world.",
    thumbnail: imgKamado, // Reusing image for demo
    altText: "Rimuru Tempest Image",
    author: "Fuse",
    subtitle: "The Slime Demon Lord",
    views: 1340000,
    likes: 98700,
    isLiked: false,
  },
  {
    key: "gojo-satoru",
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is one of the main protagonists of Jujutsu Kaisen. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. He is a teacher at Tokyo Jujutsu High.",
    thumbnail: imgTanjiro, // Reusing image for demo
    altText: "Gojo Satoru Image",
    author: "Gege Akutami",
    subtitle: "The Strongest Sorcerer",
    views: 2650000,
    likes: 215000,
    isLiked: true,
  },
  {
    key: "yusuke-urameshi",
    title: "Yusuke Urameshi",
    description:
      "Yusuke Urameshi is the main protagonist of the manga and anime series YuYu Hakusho. He is a Spirit Detective, tasked with investigating supernatural activity within the human world.",
    thumbnail: imgNaruto, // Reusing image for demo
    altText: "Yusuke Urameshi Image",
    author: "Yoshihiro Togashi",
    subtitle: "The Spirit Detective",
    views: 760000,
    likes: 54300,
    isLiked: false,
  },
  {
    key: "meliodas-seven",
    title: "Meliodas",
    description:
      "Meliodas is the Dragon's Sin of Wrath and captain of the Seven Deadly Sins, the husband and lover of Elizabeth Liones and the owner of the renowned tavern Boar Hat.",
    thumbnail: imgLuffy, // Reusing image for demo
    altText: "Meliodas Image",
    author: "Nakaba Suzuki",
    subtitle: "Dragon's Sin of Wrath",
    views: 1180000,
    likes: 87600,
    isLiked: true,
  },
  {
    key: "asta-black",
    title: "Asta",
    description:
      "Asta is an orphan who was raised under the care of a church in Hage after his mother abandons him on the church's doorstep. He is determined to become the next Wizard King despite being born without magic.",
    thumbnail: imgKamado, // Reusing image for demo
    altText: "Asta Image",
    author: "Yuki Tabata",
    subtitle: "The Anti-Magic User",
    views: 950000,
    likes: 71200,
    isLiked: false,
  },
  {
    key: "mob-psycho",
    title: "Shigeo Kageyama",
    description:
      "Shigeo Kageyama, nicknamed Mob, is the protagonist of the Mob Psycho 100 series. He is an esper; a person with psychic powers. He is in the Body Improvement Club and is a former assistant and disciple of Arataka Reigen.",
    thumbnail: imgTanjiro, // Reusing image for demo
    altText: "Shigeo Kageyama Image",
    author: "ONE",
    subtitle: "Mob",
    views: 890000,
    likes: 69800,
    isLiked: true,
  },
];

const storiesMockup: StoryInterface[] = [
  {
    key: "kamado-nezuko",
    title: "Kamado Nezuko",
    description:
      "Kamado Nezuko is a fictional character from the popular anime and manga series 'Demon Slayer: Kimetsu no Yaiba.' She is the younger sister of the protagonist, Tanjiro Kamado. After a demon attack that killed their family, Nezuko was transformed into a demon herself. Despite her transformation, she retains some human emotions and a strong bond with her brother. Nezuko is known for her distinctive appearance, including her bamboo muzzle, which she wears to prevent herself from biting humans. Throughout the series, she fights alongside Tanjiro against demons while struggling to maintain her humanity.",
    thumbnail: imgKamado,
    altText: "Kamado Nezuko Image",
    author: "Koyoharu Gotouge",
    subtitle: "The Demon Slayer's Sister",
    views: 1250000,
    likes: 98500,
    isLiked: true,
  },
  {
    key: "uzumaki-naruto",
    title: "Uzumaki Naruto",
    description:
      "Uzumaki Naruto is the main protagonist of the anime and manga series 'Naruto,' created by Masashi Kishimoto. Naruto is a young ninja from the Hidden Leaf Village who dreams of becoming the Hokage, the village leader, to gain recognition and respect from his peers. He is known for his cheerful and determined personality, as well as his signature orange jumpsuit. Naruto possesses the powerful Nine-Tails Fox spirit sealed within him, which grants him immense chakra and strength. Throughout the series, Naruto embarks on various missions, forms strong bonds with his friends, and overcomes numerous challenges to protect his village and achieve his goals.",
    thumbnail: imgNaruto,
    altText: "Uzumaki Naruto Image",
    author: "Masashi Kishimoto",
    subtitle: "The Ninja Who Dreams of Becoming Hokage",
    views: 2100000,
    likes: 156000,
    isLiked: false,
  },
  {
    key: "luffy-monkey-d",
    title: "Monkey D. Luffy",
    description:
      "Monkey D. Luffy is the main protagonist of the anime and manga series 'One Piece,' created by Eiichiro Oda. Luffy is a young and adventurous pirate with the goal of finding the legendary treasure known as 'One Piece' and becoming the Pirate King. He is known for his carefree and optimistic personality, as well as his signature straw hat, which was given to him by the pirate Shanks. Luffy possesses the ability to stretch his body like rubber after eating a Devil Fruit called the Gomu Gomu no Mi. Throughout his journey, Luffy forms a diverse crew called the Straw Hat Pirates and embarks on thrilling adventures across the Grand Line, facing powerful enemies and uncovering the mysteries of the world.",
    thumbnail: imgLuffy,
    altText: "Monkey D. Luffy Image",
    author: "Eiichiro Oda",
    subtitle: "The Pirate King Aspirant",
    views: 3200000,
    likes: 245000,
    isLiked: true,
  },
  {
    key: "tanjiro-kamado",
    title: "Kamado Tanjiro",
    description:
      "Kamado Tanjiro is the main protagonist of the anime and manga series 'Demon Slayer: Kimetsu no Yaiba,' created by Koyoharu Gotouge. Tanjiro is a kind-hearted and determined young boy who becomes a demon slayer after his family is slaughtered by demons. He is on a quest to find a cure for his sister Nezuko, who has been turned into a demon. Tanjiro is known for his exceptional sense of smell, which allows him to track demons and sense their emotions. He wields a katana and uses Water Breathing techniques in combat.",
    thumbnail: imgTanjiro,
    altText: "Kamado Tanjiro Image",
    author: "Koyoharu Gotouge",
    subtitle: "The Demon Slayer's Resolve",
    views: 1800000,
    likes: 134000,
    isLiked: false,
  },
  {
    key: "ichigo-kurosaki",
    title: "Ichigo Kurosaki",
    description:
      "Ichigo Kurosaki is the main protagonist of the Bleach series. He is a Human who has Shinigami powers and is also a Visored. Ichigo becomes a Soul Reaper and is tasked with hunting down evil spirits and guiding departed souls to the afterlife.",
    thumbnail: imgNaruto,
    altText: "Ichigo Kurosaki Image",
    author: "Tite Kubo",
    subtitle: "The Soul Reaper",
    views: 950000,
    likes: 67800,
    isLiked: true,
  },
  {
    key: "edward-elric",
    title: "Edward Elric",
    description:
      "Edward Elric is the Fullmetal Alchemist and the main protagonist of the series. Despite his short stature, Edward is a skilled alchemist who, along with his brother Alphonse, searches for the Philosopher's Stone to restore their bodies.",
    thumbnail: imgLuffy,
    altText: "Edward Elric Image",
    author: "Hiromu Arakawa",
    subtitle: "The Fullmetal Alchemist",
    views: 1100000,
    likes: 89200,
    isLiked: false,
  },
  {
    key: "light-yagami",
    title: "Light Yagami",
    description:
      "Light Yagami is the main protagonist of the Death Note series. He is a brilliant student who finds a supernatural notebook that can kill anyone whose name is written in it, leading him to become the vigilante known as Kira.",
    thumbnail: imgKamado,
    altText: "Light Yagami Image",
    author: "Tsugumi Ohba",
    subtitle: "Kira",
    views: 1650000,
    likes: 112000,
    isLiked: true,
  },
  {
    key: "natsu-dragneel",
    title: "Natsu Dragneel",
    description:
      "Natsu Dragneel is a Mage of the Fairy Tail Guild, wherein he is a member of Team Natsu. He is the younger brother of Zeref Dragneel, having originally died 400 years ago, being subsequently revived as his brother's most powerful Etherious: E.N.D.",
    thumbnail: imgTanjiro,
    altText: "Natsu Dragneel Image",
    author: "Hiro Mashima",
    subtitle: "The Fire Dragon Slayer",
    views: 890000,
    likes: 73400,
    isLiked: false,
  },
  {
    key: "senku-ishigami",
    title: "Senku Ishigami",
    description:
      "Senku Ishigami is the main protagonist of Dr. Stone. He is known for his vast knowledge of science and his goal to rebuild civilization using scientific methods after humanity was petrified for thousands of years.",
    thumbnail: imgNaruto,
    altText: "Senku Ishigami Image",
    author: "Riichiro Inagaki",
    subtitle: "The Science Genius",
    views: 720000,
    likes: 58900,
    isLiked: true,
  },
  {
    key: "deku-midoriya",
    title: "Izuku Midoriya",
    description:
      "Izuku Midoriya, also known as Deku, is the main protagonist of My Hero Academia. Born without a Quirk in a world where they are commonplace, Izuku's life changes when he meets the world's greatest hero, All Might.",
    thumbnail: imgLuffy,
    altText: "Izuku Midoriya Image",
    author: "Kohei Horikoshi",
    subtitle: "Deku",
    views: 1420000,
    likes: 105000,
    isLiked: false,
  },
  {
    key: "killua-zoldyck",
    title: "Killua Zoldyck",
    description:
      "Killua Zoldyck is the third child of Silva and Kikyo Zoldyck and the heir of the Zoldyck Family, until he ran away from home and became a Rookie Hunter. He is the best friend of Gon Freecss.",
    thumbnail: imgKamado,
    altText: "Killua Zoldyck Image",
    author: "Yoshihiro Togashi",
    subtitle: "The Lightning Assassin",
    views: 980000,
    likes: 82100,
    isLiked: true,
  },
  {
    key: "goku-son",
    title: "Son Goku",
    description:
      "Son Goku is a Saiyan originally sent to destroy Earth as an infant. However, after a head injury, he lost his memory and became one of Earth's greatest defenders and the informal leader of the Z Fighters.",
    thumbnail: imgTanjiro,
    altText: "Son Goku Image",
    author: "Akira Toriyama",
    subtitle: "The Saiyan Warrior",
    views: 4500000,
    likes: 387000,
    isLiked: true,
  },
  {
    key: "levi-ackerman",
    title: "Levi Ackerman",
    description:
      "Levi Ackerman is a captain in the Survey Corps, known as humanity's strongest soldier. He is the squad captain of the Special Operations Squad within the Survey Corps.",
    thumbnail: imgNaruto,
    altText: "Levi Ackerman Image",
    author: "Hajime Isayama",
    subtitle: "Humanity's Strongest",
    views: 2800000,
    likes: 234000,
    isLiked: false,
  },
  {
    key: "saitama-onepunch",
    title: "Saitama",
    description:
      "Saitama is the main protagonist of One-Punch Man and the most powerful hero alive. Having apparently trained himself to be able to defeat any enemy with a single punch, he joined the Hero Association.",
    thumbnail: imgLuffy,
    altText: "Saitama Image",
    author: "ONE",
    subtitle: "One Punch Man",
    views: 1950000,
    likes: 167000,
    isLiked: true,
  },
  {
    key: "rimuru-tempest",
    title: "Rimuru Tempest",
    description:
      "Rimuru Tempest is the main protagonist of That Time I Got Reincarnated as a Slime. Originally a human named Satoru Mikami, he was reincarnated as a slime in a fantasy world.",
    thumbnail: imgKamado,
    altText: "Rimuru Tempest Image",
    author: "Fuse",
    subtitle: "The Slime Demon Lord",
    views: 1340000,
    likes: 98700,
    isLiked: false,
  },
  {
    key: "gojo-satoru",
    title: "Gojo Satoru",
    description:
      "Gojo Satoru is one of the main protagonists of Jujutsu Kaisen. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. He is a teacher at Tokyo Jujutsu High.",
    thumbnail: imgTanjiro,
    altText: "Gojo Satoru Image",
    author: "Gege Akutami",
    subtitle: "The Strongest Sorcerer",
    views: 2650000,
    likes: 215000,
    isLiked: true,
  },
  {
    key: "yusuke-urameshi",
    title: "Yusuke Urameshi",
    description:
      "Yusuke Urameshi is the main protagonist of the manga and anime series YuYu Hakusho. He is a Spirit Detective, tasked with investigating supernatural activity within the human world.",
    thumbnail: imgNaruto,
    altText: "Yusuke Urameshi Image",
    author: "Yoshihiro Togashi",
    subtitle: "The Spirit Detective",
    views: 760000,
    likes: 54300,
    isLiked: false,
  },
  {
    key: "meliodas-seven",
    title: "Meliodas",
    description:
      "Meliodas is the Dragon's Sin of Wrath and captain of the Seven Deadly Sins, the husband and lover of Elizabeth Liones and the owner of the renowned tavern Boar Hat.",
    thumbnail: imgLuffy,
    altText: "Meliodas Image",
    author: "Nakaba Suzuki",
    subtitle: "Dragon's Sin of Wrath",
    views: 1180000,
    likes: 87600,
    isLiked: true,
  },
  {
    key: "asta-black",
    title: "Asta",
    description:
      "Asta is an orphan who was raised under the care of a church in Hage after his mother abandons him on the church's doorstep. He is determined to become the next Wizard King despite being born without magic.",
    thumbnail: imgKamado,
    altText: "Asta Image",
    author: "Yuki Tabata",
    subtitle: "The Anti-Magic User",
    views: 950000,
    likes: 71200,
    isLiked: false,
  },
  {
    key: "mob-psycho",
    title: "Shigeo Kageyama",
    description:
      "Shigeo Kageyama, nicknamed Mob, is the protagonist of the Mob Psycho 100 series. He is an esper; a person with psychic powers. He is in the Body Improvement Club and is a former assistant and disciple of Arataka Reigen.",
    thumbnail: imgTanjiro,
    altText: "Shigeo Kageyama Image",
    author: "ONE",
    subtitle: "Mob",
    views: 890000,
    likes: 69800,
    isLiked: true,
  },
];

const categoriesMockup: CategoriesInterface[] = [
  {
    key: "action",
    title: "Action",
    color: "from-red-500 to-orange-500",
  },
  {
    key: "adventure",
    title: "Adventure",
    color: "from-green-500 to-teal-500",
  },
  {
    key: "romance",
    title: "Romance",
    color: "from-pink-500 to-rose-500",
  },
  {
    key: "comedy",
    title: "Comedy",
    color: "from-yellow-500 to-amber-500",
  },
  {
    key: "drama",
    title: "Drama",
    color: "from-purple-500 to-indigo-500",
  },
  {
    key: "fantasy",
    title: "Fantasy",
    color: "from-violet-500 to-purple-500",
  },
  {
    key: "supernatural",
    title: "Supernatural",
    color: "from-gray-600 to-gray-800",
  },
  {
    key: "slice-of-life",
    title: "Slice of Life",
    color: "from-blue-400 to-cyan-400",
  },
  {
    key: "horror",
    title: "Horror",
    color: "from-red-800 to-black",
  },
  {
    key: "mystery",
    title: "Mystery",
    color: "from-indigo-600 to-blue-800",
  },
  {
    key: "sci-fi",
    title: "Sci-Fi",
    color: "from-cyan-500 to-blue-600",
  },
  {
    key: "sports",
    title: "Sports",
    color: "from-orange-500 to-red-500",
  },
];

export { bannerHomeMockup, storiesMockup, categoriesMockup };
