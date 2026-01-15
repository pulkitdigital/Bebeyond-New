import { projects2 } from "./Projects";

const getProjectsForBrand = (brandName) =>
  projects2.filter((project) => project.forBrand === brandName);

export const brands2 = [
  // Madan Uniforms
  {
    para: "Madan Uniforms is a Prayagraj-based school uniform manufacturer and retail brand serving schools, institutions, and families. Known for consistent quality, accurate school-specific designs, and reliable supply, the brand offers uniforms, winterwear, and student essentials. Madan Uniforms focuses on comfort, durability, and timely delivery for both retail and large-scale institutional requirements.",
    pathname: "madan_uniforms",
    _img: "/18 Logos/madan.webp",
    about_img: "/18 Logos/madan.webp",
    img_title: "Madan Uniforms Logo",
    brandName: "Madan Uniforms",
    ourWorks: getProjectsForBrand("madan_uniforms"),
  },

  //Amber Group
  {
    para: "Amber is a premium hospitality and dining brand offering thoughtfully curated cafe experiences, event spaces, and comfortable stays. Known for refined ambience, quality food, and warm service, Amber caters to everyday dining, celebrations, and get-togethers. Every space is designed to deliver comfort, consistency, and memorable experiences for guests seeking taste, style, and reliability under one trusted name.",
    pathname: "amber_group",
    _img: "/18 Logos/amber.webp",
    about_img: "/18 Logos/amber.webp",
    img_title: "Amber Logo",
    brandName: "Amber",
    ourWorks: getProjectsForBrand("amber_group"),
  },

  //SkyPro Aviation
  {
    para: "SkyPro Aviation is one of India’s leading pilot training academies, guided by airline-experienced instructors from top carriers. We offer a complete pathway from DGCA ground classes to flying training, licence conversion, and type rating assistance, all under one roof. Our mission is to make pilot training affordable, high-quality, and fully guided, enabling aspiring pilots to focus on developing the skills and confidence necessary for a successful aviation career.",
    pathname: "skypro_aviation",
    _img: "/18 Logos/skypro.webp",
    about_img: "/18 Logos/skypro.webp",
    img_title: "SkyPro Aviation Logo",
    brandName: "SkyPro Aviation",
    ourWorks: getProjectsForBrand("skypro_aviation"),
  },

  //First Print Publication
  {
    para: "First Print Publications, a Prayagraj-based book publishing company led by the passionate Abhishek Agrawal, approached us with a vision: to transform their online presence and create a dynamic hub for authors, scholars, and book enthusiasts. They wanted a website that would not only showcase their publishing services but also provide a seamless and engaging experience for their diverse audience. Recognizing the importance of supporting authors and scholars, we created dedicated sections for each group.",
    pathname: "first_print_publication",
    _img: "/18 Logos/fpp.webp",
    about_img: "/18 Logos/fpp.webp",
    img_title: "First Print Publication Logo",
    brandName: "First Print Publication",
    ourWorks: getProjectsForBrand("first_print_publication"),
  },

  //TTapio Cafe
  {
    para: "Ttapio Cafe is a Jammu-based specialty cafe focused on handcrafted bubble tea and comfort desserts. Known for chewy boba pearls, freshly made bubble waffles, pancakes, and indulgent beverages, Ttapio delivers consistent taste and quality with every order. The cafe serves both dine-in guests and online customers, emphasizing fresh ingredients, balanced flavours, and quick service making it a go-to spot for casual hangouts, quick cravings, and dessert lovers across the city.",
    pathname: "ttapio_cafe",
    _img: "/18 Logos/ttapio.webp",
    about_img: "/18 Logos/ttapio.webp",
    img_title: "TTapio Cafe Logo",
    brandName: "TTapio Cafe",
    ourWorks: getProjectsForBrand("ttapio_cafe"),
  },

  //Lovely Jewellers
  {
    para: "Lovely Jewellers, located in Prayagraj, is a trusted destination for elegant gold and silver jewellery crafted with precision and care. Known for timeless designs, quality craftsmanship, and reliable service, the store offers jewellery suited for everyday wear, weddings, and special occasions, blending tradition with modern style.",
    pathname: "lovely_jewellers",
    _img: "/18 Logos/lovely_jewellers.webp",
    about_img: "/18 Logos/lovely_jewellers.webp",
    img_title: "Lovely Jewellers Logo",
    brandName: "Lovely Jewellers",
    ourWorks: getProjectsForBrand("lovely_jewellers"),
  },

  //Pookie Hub
  {
    para: "Pookie Hub is Prayagraj’s cutest lifestyle store, offering quirky and affordable toys, stationery, gifts, and home décor that spark joy for all ages. From plush toys, educational games, puzzles, and traditional Indian toys to trendy stationery, art & craft kits, and creative essentials, Pookie Hub is your go-to destination for fun, thoughtful, and budget-friendly finds.",
    pathname: "pookie_hub",
    _img: "/18 Logos/pookie_hub.webp",
    about_img: "/18 Logos/pookie_hub.webp",
    img_title: "Pookie Hub Logo",
    brandName: "Pookie Hub",
    ourWorks: getProjectsForBrand("pookie_hub"),
  },

  //Backyard Sports Arena
  {
    para: "Backyard Sports Arena is Naini’s go-to destination for sports lovers, offering a modern and well-equipped space for multiple sports. Designed for both serious players and casual enthusiasts, the arena provides a professional yet welcoming environment for all skill levels. With well-maintained courts, quality equipment, and a strong focus on sportsmanship, Backyard Sports Arena promotes an active, energetic lifestyle for the local community.",
    pathname: "backyard_sports_arena",
    _img: "/18 Logos/backyard_sports_arena.webp",
    about_img: "/18 Logos/backyard_sports_arena.webp",
    img_title: "Backyard Sports Arena Logo",
    brandName: "Backyard Sports Arena",
    ourWorks: getProjectsForBrand("backyard_sports_arena"),
  },

  //Agarwal Bag House
  {
    para: "Agarwal Bag House is a one-stop destination for functional, reliable bags for everyday use, travel, business, and branding. From school bags and backpacks to handbags, trolley bags, eco-friendly jute bags, and customized bulk orders, the store delivers practical designs at fair prices—no gimmicks, just quality that works.",
    pathname: "agarwal_bag_house",
    _img: "/18 Logos/agarwal_bag_house.webp",
    about_img: "/18 Logos/agarwal_bag_house.webp",
    img_title: "Agarwal Bag House Logo",
    brandName: "Agarwal Bag House",
    ourWorks: getProjectsForBrand("agarwal_bag_house"),
  },

  //Hi-Pro Bags
  {
    para: "Hi-Pro Bags designs and manufactures dependable bags built for real, everyday use. Focused on smart construction, durable materials, and practical design, each product balances comfort, function, and style. As a wholesale-focused manufacturer, Hi-Pro delivers consistent quality, scalable production, and reliable gear for work, travel, and daily routines.",
    pathname: "hi_pro_bags",
    _img: "/18 Logos/hi_pro_bags.webp",
    about_img: "/18 Logos/hi_pro_bags.webp",
    img_title: "Hi-Pro Bags Logo",
    brandName: "Hi-Pro Bags",
    ourWorks: getProjectsForBrand("hi_pro_bags"),
  },

  //Chandra Shekhar Singh College of Pharmacy
  {
    para: "Chandra Shekhar Singh College of Pharmacy is a leading pharmacy institute in Uttar Pradesh offering M.Pharm, B.Pharm, and D.Pharm programs. Approved by PCI and affiliated with AKTU and BTE Lucknow, the college emphasizes academic excellence, modern laboratory training, experienced faculty, and industry-oriented education to prepare skilled and responsible pharmacy professionals.",
    pathname: "csscp",
    _img: "/18 Logos/csscp.webp",
    about_img: "/18 Logos/csscp.webp",
    img_title: "CSSCP Logo",
    brandName: "CSSCP",
    ourWorks: getProjectsForBrand("csscp"),
  },

  //Ibrand Solutions
  {
    para: "iBrandSolutions is a team of creators and marketers helping brands grow into trusted, profitable digital businesses. What started as a solo freelance vision is now a full-stack marketing partner delivering strategy-led creativity. By blending authentic content, data-driven decisions, and performance funnels, we help modern brands scale faster while staying real, relevant, and conversion-focused.",
    pathname: "ibrand_solutions",
    _img: "/18 Logos/ibrand_solutions.webp",
    about_img: "/18 Logos/ibrand_solutions.webp",
    img_title: "iBrandSolutions Logo",
    brandName: "iBrandSolutions",
    ourWorks: getProjectsForBrand("ibrand_solutions"),
  },

  // Scanner Adda
  {
    para: "Scanner Adda, a leading provider of scanners and imaging solutions, approached us with a goal: to establish a robust online presence and boost sales through a user-friendly e-commerce website and effective email marketing campaigns. They wanted a platform that would showcase their products, streamline the purchasing process, and nurture customer relationships. We leveraged our expertise in Shopify development, UX design, e-commerce optimization, and email marketing to achieve tangible results for Scanner Adda.",
    pathname: "scanner_adda",
    _img: "/18 Logos/Scanner Adda - Original.png",
    about_img: "/18 Logos/Scanner Adda - Original.png",
    img_title: "Scanner Adda Logo",
    brandName: "Scanner Adda",
    ourWorks: getProjectsForBrand("scanner_adda"),
  },

  //Dayanand Sagar University
  {
    para: "Dayanand Sagar University is a multidisciplinary institution focused on quality education, innovation, and research. Built on a strong academic foundation, DSU offers industry-aligned programs across engineering, sciences, management, and arts, supported by modern infrastructure, experienced faculty, and a future-ready learning environment.",
    pathname: "dayanand_sagar_university",
    _img: "/18 Logos/dsu.webp",
    about_img: "/18 Logos/dsu.webp",
    img_title: "Dayanand Sagar University Logo",
    brandName: "Dayanand Sagar University",
    ourWorks: getProjectsForBrand("dayanand_sagar_university"),
  },

  // Max Healthcare
  {
    para: "Max Healthcare is one of India’s leading healthcare providers, offering world-class medical services across multiple specialties. Known for advanced technology, experienced doctors, and patient-centric care, Max delivers comprehensive diagnosis, treatment, and preventive healthcare through its network of modern hospitals and clinics.",
    pathname: "max_healthcare",
    _img: "/18 Logos/max_healthcare.webp",
    about_img: "/18 Logos/max_healthcare.webp",
    img_title: "Max Healthcare Logo",
    brandName: "Max Healthcare",
    ourWorks: getProjectsForBrand("max_healthcare"),
  },

  // Madhu Rekha Eye Care Centre
  {
    para: "Madhu Rekha Eye Care Centre is a specialized ophthalmology clinic in Sonari, Jamshedpur, providing comprehensive eye care services. Led by experienced eye specialists, the centre focuses on accurate diagnosis, advanced treatment, and patient-centric care, offering reliable solutions for medical and surgical eye conditions with transparency and professionalism.",
    pathname: "madhu_rekha_eye_care",
    _img: "/18 Logos/madhu_rekha_eye_care.webp",
    about_img: "/18 Logos/madhu_rekha_eye_care.webp",
    img_title: "Madhu Rekha Eye Care Logo",
    brandName: "Madhu Rekha Eye Care Centre",
    ourWorks: getProjectsForBrand("madhu_rekha_eye_care"),
  },

  // Indian School of Business(ISB)
  {
    para: "The Indian School of Business (ISB) is a globally recognised institution offering advanced management programmes designed to develop future-ready leaders. With a strong focus on innovation, leadership, and real-world impact, ISB equips professionals with strategic thinking, ethical values, and global perspectives to excel across industries and geographies.",
    pathname: "indian_school_of_business",
    _img: "/18 Logos/isb.webp",
    about_img: "/18 Logos/isb.webp",
    img_title: "Indian School of Business Logo",
    brandName: "Indian School of Business",
    ourWorks: getProjectsForBrand("indian_school_of_business"),
  },

  //Jesus Lal - Universal Education
  {
    para: "Jesus Lall is the Chairman of Universal Education, focused on making education practical, inclusive, and modern. Through actionable tips and effective tools for teachers, students, and parents, he works to bridge the gap between learning and real-world application, promoting meaningful education that is accessible, relevant, and future-ready.",
    pathname: "jesus_lal_universal_education",
    _img: "/18 Logos/jesus_lal_universal_education.webp",
    about_img: "/18 Logos/jesus_lal_universal_education.webp",
    img_title: "Jesus Lall - Universal Education Logo",
    brandName: "Jesus Lall - Universal Education",
    ourWorks: getProjectsForBrand("jesus_lal_universal_education"),
  },

  // Khan Academy
  {
    para: "Khan Academy is a personalized learning platform offering practice exercises, instructional videos, and a tailored learning dashboard for learners of all ages. Covering subjects from kindergarten to early college, the platform emphasizes skill mastery, self-paced learning, and strong foundational knowledge to support academic success and long-term career readiness.",
    pathname: "khan_academy",
    _img: "/18 Logos/khan_academy.webp",
    about_img: "/18 Logos/khan_academy.webp",
    img_title: "Khan Academy Logo",
    brandName: "Khan Academy",
    ourWorks: getProjectsForBrand("khan_academy"),
  },

  // Phuhars
  {
    para: "Phuhars is a women-led, conscious clothing brand rooted in care for people, the planet, and thoughtful design. Working exclusively with natural fabrics, ethical sourcing, and eco-friendly processes, Phuhar creates timeless, travel-inspired garments that value comfort, individuality, and sustainability—offering a slow, intentional alternative to fast fashion.",
    pathname: "phuhars",
    _img: "/18 Logos/phuhars.webp",
    about_img: "/18 Logos/phuhars.webp",
    img_title: "Phuhars Logo",
    brandName: "Phuhars",
    ourWorks: getProjectsForBrand("phuhars"),
  },

  // The Hamper Exchange
  {
    para: "The Hamper Exchange is a dedicated care and wellness hamper brand offering thoughtfully curated, personalized gift hampers designed to promote relaxation and well-being. Featuring spa essentials, daily care products, and wellness-focused items, the brand provides meaningful gifting solutions for self-care, corporate gifting, and special occasions, creating calming and rejuvenating experiences through every hamper.",
    pathname: "the_hamper_exchange",
    _img: "/18 Logos/the_hamper_exchange.webp",
    about_img: "/18 Logos/the_hamper_exchange.webp",
    img_title: "The Hamper Exchange Logo",
    brandName: "The Hamper Exchange",
    ourWorks: getProjectsForBrand("the_hamper_exchange"),
  },

  // SINAAGA
  {
    para: "SINAAGA is a contemporary jewelry brand celebrating individuality, confidence, and everyday luxury. Blending tradition with modern expression, each piece is handcrafted in 18k gold-plated silver with an anti-tarnish finish. Designed to move with you, SINAAGA creates meaningful jewelry that reflects evolving identities, personal stories, and authentic self-expression.",
    pathname: "sinaaga",
    _img: "/18 Logos/sinaaga.webp",
    about_img: "/18 Logos/sinaaga.webp",
    img_title: "SINAAGA Logo",
    brandName: "SINAAGA",
    ourWorks: getProjectsForBrand("sinaaga"),
  },

  // Off Road Anarchy
  {
    para: "Off Road Anarchy is a destination for true adventure seekers driven by adrenaline and exploration. Built for those who thrive on rugged terrains and challenging trails, it celebrates the raw spirit of off-road journeys. Every ride is about pushing limits, embracing the wild, and experiencing freedom where untamed paths turn into unforgettable stories.",
    pathname: "off_road_anarchy",
    _img: "/18 Logos/off_road_anarchy.webp",
    about_img: "/18 Logos/off_road_anarchy.webp",
    img_title: "Off Road Anarchy Logo",
    brandName: "Off Road Anarchy",
    ourWorks: getProjectsForBrand("off_road_anarchy"),
  },

  // PixelClay
  {
    para: "PixelClay is a creative digital agency focused on building strong brand identities through design, strategy, and technology. From branding and websites to digital experiences and content, PixelClay helps businesses communicate clearly, look distinctive, and connect meaningfully with their audience through thoughtful, detail-driven creative solutions.",
    pathname: "pixelclay",
    _img: "/18 Logos/pixelclay.webp",
    about_img: "/18 Logos/pixelclay.webp",
    img_title: "PixelClay Logo",
    brandName: "PixelClay",
    ourWorks: getProjectsForBrand("pixelclay"),
  },

  // EducationTechPlus
  {
    para: "EducationTechPlus is a forward-focused education technology platform dedicated to transforming how learning is delivered and experienced. By equipping educators, learners, and institutions with innovative digital tools and resources, EducationTechPlus enhances engagement, accessibility, and effectiveness, helping modern education systems adapt, evolve, and prepare learners for the future.",
    pathname: "educationtechplus",
    _img: "/18 Logos/educationtechplus.webp",
    about_img: "/18 Logos/educationtechplus.webp",
    img_title: "EducationTechPlus Logo",
    brandName: "EducationTechPlus",
    ourWorks: getProjectsForBrand("educationtechplus"),
  },

  // XARM Solutions
  {
    para: "XARM Solutions is a brand experience agency that blends creativity, strategy, and technical expertise to deliver impactful events and activations. With over 15 years of innovation, XARM Solutions transforms complex ideas into immersive experiences, helping brands connect meaningfully with audiences while pushing the boundaries of modern experiential marketing.",
    pathname: "xarm_solutions",
    _img: "/18 Logos/xarm_solutions.webp",
    about_img: "/18 Logos/xarm_solutions.webp",
    img_title: "XARM Solutions Logo",
    brandName: "XARM Solutions",
    ourWorks: getProjectsForBrand("xarm_solutions"),
  },


  // CA Nishant Kumar
  {
    para: "Nishant Kumar is a Chartered Accountant, educator, and author who has mentored over 1,00,000 CA students across Foundation and Intermediate levels. Associated with Adda247, he is known for high-impact teaching, bestselling CA textbooks, All India Rank results, and a strong digital presence sharing practical insights on exams, taxation, and finance.",
    pathname: "ca_nishant_kumar",
    _img: "/18 Logos/ca_nishant_kumar.webp",
    about_img: "/18 Logos/ca_nishant_kumar.webp",
    img_title: "CA Nishant Kumar Logo",
    brandName: "CA Nishant Kumar",
    ourWorks: getProjectsForBrand("ca_nishant_kumar"),
  },

  // Humans of Bombay (HOB)
  {
    para: "Humans of Bombay (HOB) is a storytelling platform that captures real human experiences across India through powerful narratives and visual content. By sharing stories of resilience, love, struggle, and hope, HOB creates meaningful conversations, builds emotional connections, and highlights diverse voices that reflect the realities and spirit of modern India.",
    pathname: "humans_of_bombay",
    _img: "/18 Logos/humans_of_bombay.webp",
    about_img: "/18 Logos/humans_of_bombay.webp",
    img_title: "Humans of Bombay Logo",
    brandName: "Humans of Bombay",
    ourWorks: getProjectsForBrand("humans_of_bombay"),
  },

  // Indigenius Matter
  {
    para: "Indigenious Matters, an organization dedicated to amplifying Indigenous voices and promoting cultural awareness, approached us with a unique challenge: they needed engaging video content that would resonate with their audience on social media. They wanted to educate, inspire, and spark conversations, all while maintaining a consistent and professional brand identity. We started by designing a custom video template that incorporated Indigenious Matters' brand elements and ensured consistency across all their video content.",
    pathname: "indigenius_matter",
    _img: "/18 Logos/Indigenius matter - Original.png",
    about_img: "/18 Logos/Indigenius matter - Original.png",
    img_title: "Indigenius Matter Logo",
    brandName: "Indigenius Matter",
    ourWorks: getProjectsForBrand("indigenius_matter"),
  },

  // Javer Wala
  {
    para: "Jewar Wallah, a jewelry merchant with a passion for exquisite craftsmanship, wanted to expand their reach and boost sales in the competitive online marketplace. They needed a social media strategy that would not only showcase their stunning jewelry but also drive conversions and generate tangible results. Our combined social media and Meta ads strategy resulted in a significant increase in sales for Jewar Wallah.",
    pathname: "javer_wala",
    _img: "/18 Logos/JW - Original.png",
    about_img: "/18 Logos/JW - Original.png",
    img_title: "Javer Wala Logo",
    brandName: "Javer Wala",
    ourWorks: getProjectsForBrand("javer_wala"),
  },

  //Kay Pee Dies
  {
    para: "Kay Pee Dies, a leading manufacturer of tungsten carbide dies and lubricants for the wire, bar, and fastener industry, approached us with a challenge: to revamp their existing website and give it a fresh, modern look that would better reflect their expertise and commitment to quality. They wanted a website that would not only showcase their products and services but also provide a valuable resource for customers and partners. We leveraged our expertise in website design and development, content strategy, and user experience (UX) to deliver a website that exceeded Kay Pee Dies's expectations.",
    pathname: "kay_pee_dies",
    _img: "/18 Logos/Kaypeedies - Original.png",
    about_img: "/18 Logos/Kaypeedies - Original.png",
    img_title: "Kay Pee Dies Logo",
    brandName: "Kay Pee Dies",
    ourWorks: getProjectsForBrand("kay_pee_dies"),
  },

  // Kazaru
  {
    para: "We partnered with Kazaru, a leading home decor and beautification product manufacturer in Delhi, to establish a strong online presence in today's digital world. Our team of skilled web developers and creative web designers collaborated with Kazaru on this exciting project, creating a dynamic platform that captured the essence of their brand and attracted new clients. We guided them on creating compelling visuals and content, ensuring the website would resonate with their target audience and rank well for relevant searches.",
    pathname: "kazaru",
    _img: "/18 Logos/Kazaru - Original.png",
    about_img: "/18 Logos/Kazaru - Original.png",
    img_title: "Kazaru Logo",
    brandName: "Kazaru",
    ourWorks: getProjectsForBrand("kazaru"),
  },

  // National Accountancy Bureau
  {
    para: "National Accountancy Bureau (NAB), a prominent accounting firm in Prayagraj with a reputation for excellence, recognized the need to amplify its online presence in today's digital age. They envisioned a website that would not only showcase their comprehensive suite of financial services but also serve as a valuable resource hub for clients and visitors. We leveraged our expertise in website design and development, content strategy, and user experience (UX) to deliver a website that exceeded NAB's expectations.",
    pathname: "national_accountancy_bureau",
    _img: "/18 Logos/NAB - Original.png",
    about_img: "/18 Logos/NAB - Original.png",
    img_title: "National Accountancy Bureau Logo",
    brandName: "National Accountancy Bureau",
    ourWorks: getProjectsForBrand("national_accountancy_bureau"),
  },

  // National Academy of Commerce
  {
    para: "The National Academy of Commerce (NAC), a leading institution in Prayagraj dedicated to providing high-quality commerce education, recognized the need for a strong online presence to connect with students in the digital age. They partnered with us to develop a website that would not only showcase their courses and expertise but also serve as a valuable resource for students seeking guidance and support in their academic journeys. We leveraged our expertise in website design and development, content strategy, and user experience (UX) to deliver a website that exceeded NAC's expectations.",
    pathname: "national_academy_of_commerce",
    _img: "/18 Logos/NAC - Original.png",
    about_img: "/18 Logos/NAC - Original.png",
    img_title: "National Academy Of Commerce Logo",
    brandName: "National Academy Of Commerce",
    ourWorks: getProjectsForBrand("national_academy_of_commerce"),
  },

  // Sappy
  {
    para: "Sappy, a corporate gifting portal that connects businesses with a diverse range of vendors, approached us with a mission: to create a brand identity that would capture their unique value proposition and resonate with their target audience. They wanted a brand that would convey trust, efficiency, and the joy of gifting, all while establishing a strong online presence in the competitive world of corporate gifting. We leveraged our expertise in branding, logo design, visual identity, and messaging to create a brand that effectively communicated Sappy's value proposition and resonated with its target audience.",
    pathname: "sappy",
    _img: "/18 Logos/Sappy - Original.png",
    about_img: "/18 Logos/Sappy - Original.png",
    img_title: "Sappy Logo",
    brandName: "Sappy",
    ourWorks: getProjectsForBrand("sappy"),
  },

  // Sreejit
  {
    para: "Sreejit by Anupama, a Prayagraj-based startup creating handcrafted candles, needed a website to showcase their unique products and connect with customers online. We recommended Amazon's Smart Biz website builder as the perfect solution for Sreejit's needs. This project demonstrated the effectiveness of Amazon's Smart Biz website builder in empowering startups to establish a strong online presence.",
    pathname: "sreejit",
    _img: "/18 Logos/Sreejit - Original.png",
    about_img: "/18 Logos/Sreejit - Original.png",
    img_title: "Sreejit Logo",
    brandName: "Sreejit",
    ourWorks: getProjectsForBrand("sreejit"),
  },

  // Shaswat Singhal & Company
  {
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nulla recusandae, dolore veniam obcaecati repellat harum impedit dignissimos animi, neque facere explicabo? Laborum, molestias? Velit ab vitae nostrum architecto tenetur amet rerum quam atque modi, consequuntur dolorum sed? Nihil molestias mollitia quo deleniti porro doloribus tempore itaque. Obcaecati accusamus reiciendis, ad labore nostrum tenetur, sapiente amet quas minima expedita nemo necessitatibus maiores tempore praesentium officiis fugit laborum excepturi facere. Esse commodi nostrum repellat sint hic sunt dicta temporibus laudantium magnam!",
    pathname: "shaswat_singhal_and_company",
    _img: "/18 Logos/SSCO - Original.png",
    about_img: "/18 Logos/SSCO - Original.png",
    img_title: "Shaswat Singhal & Company Logo",
    brandName: "Shaswat Singhal & Company",
    ourWorks: getProjectsForBrand("shaswat_singhal_and_company"),
  },

  // The Balaji Creation
  {
    para: "We helped The Balaji Creations, a renowned jewellery designer in Delhi, transform its online presence with a stunning WordPress website. Their old website was hard coded and difficult to manage, but our team of expert web developers and designers stepped in to create a user-friendly platform that showcased their exquisite collection of handmade jewellery. The new website features a visually captivating design, responsive layout, and easy-to-use content management system, allowing The Balaji Creations to effortlessly update its online catalogue and connect with customers.",
    pathname: "the_balaji_creation",
    _img: "/18 Logos/TBC - Original.png",
    about_img: "/18 Logos/TBC - Original.png",
    img_title: "The Balaji Creation Logo",
    brandName: "The Balaji Creation",
    ourWorks: getProjectsForBrand("the_balaji_creation"),
  },

  // The Celeste Chic & Company
  {
    para: "We were so excited to partner with Sherry and her team to give The Celeste Chic & Co a complete branding makeover, from a stunning logo design and the evocative tagline 'Elegance Under the Stars' to a captivating colour palette and a user-friendly brand guide. We helped Sherry define her ideal customer profile, considering demographics, psychographics, and jewellery preferences. This ensured that all branding efforts would resonate with the right audience.",
    pathname: "the_celeste_chic_and_company",
    _img: "/18 Logos/The Celeste Chic & Co - Original.png",
    about_img: "/18 Logos/The Celeste Chic & Co - Original.png",
    img_title: "The Celeste Chic & Company Logo",
    brandName: "The Celeste Chic & Company",
    ourWorks: getProjectsForBrand("the_celeste_chic_and_company"),
  },

  // The Woods Living
  {
    para: "The Woods Living, a purveyor of exquisite handcrafted furniture and home decor, partnered with us to establish a strong brand identity and cultivate a thriving online community. They needed a brand identity that truly captured their essence and resonated with their target audience – people who appreciate handcrafted quality, unique design, and the art of creating a cozy and stylish home. We helped them craft a brand story that spoke to their commitment to quality, sustainability, and creating pieces that become cherished heirlooms.",
    pathname: "the_woods_living",
    _img: "/18 Logos/TWL - Original.png",
    about_img: "/18 Logos/TWL - Original.png",
    img_title: "The Woods Living Logo",
    brandName: "The Woods Living",
    ourWorks: getProjectsForBrand("the_woods_living"),
  },

  // Utkarsh Singhal Law Offices
  {
    para: "Utkarsh Singhal Law Offices, a leading legal firm specializing in GST litigation, knew that in today's digital world, a strong online presence is essential. They wanted to connect with potential clients, build their reputation, and establish themselves as thought leaders in the complex world of GST law. We leveraged our expertise in social media management, content creation, community building, and brand building to achieve tangible results for Utkarsh Singhal Law Offices.",
    pathname: "utkarsh_singhal_law_offices",
    _img: "/18 Logos/USLO - Original.png",
    about_img: "/18 Logos/USLO - Original.png",
    img_title: "Utkarsh Singhal Law Offices Logo",
    brandName: "Utkarsh Singhal Law Offices",
    ourWorks: getProjectsForBrand("utkarsh_singhal_law_offices"),
  },

  // Venus
  {
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nulla recusandae, dolore veniam obcaecati repellat harum impedit dignissimos animi, neque facere explicabo? Laborum, molestias? Velit ab vitae nostrum architecto tenetur amet rerum quam atque modi, consequuntur dolorum sed? Nihil molestias mollitia quo deleniti porro doloribus tempore itaque. Obcaecati accusamus reiciendis, ad labore nostrum tenetur, sapiente amet quas minima expedita nemo necessitatibus maiores tempore praesentium officiis fugit laborum excepturi facere. Esse commodi nostrum repellat sint hic sunt dicta temporibus laudantium magnam!",
    pathname: "venus",
    _img: "/18 Logos/Venus - Original.png",
    about_img: "/18 Logos/Venus - Original.png",
    img_title: "Venus Logo",
    brandName: "Venus",
    ourWorks: getProjectsForBrand("venus"),
  },

  // Whimsical Tides
  {
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat nulla recusandae, dolore veniam obcaecati repellat harum impedit dignissimos animi, neque facere explicabo? Laborum, molestias? Velit ab vitae nostrum architecto tenetur amet rerum quam atque modi, consequuntur dolorum sed? Nihil molestias mollitia quo deleniti porro doloribus tempore itaque. Obcaecati accusamus reiciendis, ad labore nostrum tenetur, sapiente amet quas minima expedita nemo necessitatibus maiores tempore praesentium officiis fugit laborum excepturi facere. Esse commodi nostrum repellat sint hic sunt dicta temporibus laudantium magnam!",
    pathname: "whimsical_tides",
    _img: "/18 Logos/Whimisical Tides - Original.png",
    about_img: "/18 Logos/Whimisical Tides - Original.png",
    img_title: "Whimsical Tides Logo",
    brandName: "Whimsical Tides",
    ourWorks: getProjectsForBrand("whimsical_tides"),
  },

  // Zebra Learn
  {
    para: "Zebra Learn, an educational service provider with a passion for innovative learning solutions, came to us with a unique challenge: they needed both an engaging e-book and a comprehensive full-length book to enhance their curriculum and cater to diverse learning styles. This was no ordinary textbook project; they wanted something special, something that would capture students' imaginations and make learning an adventure. This project showcased our versatility in educational content creation, from instructional design for e-books to comprehensive book writing and editing.",
    pathname: "zebra_learn",
    _img: "/18 Logos/Zebra Learn - Original.png",
    about_img: "/18 Logos/Zebra Learn - Original.png",
    img_title: "Zebra Learn Logo",
    brandName: "Zebra Learn",
    ourWorks: getProjectsForBrand("zebra_learn"),
  },

  // Data Gol
  {
    para: "Data Gol, a Singapore-based AI company pushing the boundaries of technology, approached us with a challenge: to design and customize their white papers and brochures in a way that would capture their innovative spirit and effectively communicate their complex AI solutions. They wanted white papers that were not only informative but also visually engaging and reflective of their brand identity. This project highlighted the importance of combining compelling content with visually engaging design to create effective marketing materials.",
    pathname: "data_gol",
    _img: "/18 Logos/DataGOL-Original.png",
    about_img: "/18 Logos/DataGOL-Original.png",
    img_title: "Data GOL Logo",
    brandName: "Data GOL",
    ourWorks: getProjectsForBrand("data_gol"),
  },

  
];
