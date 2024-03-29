import { type MRT_ColumnDef } from 'mantine-react-table'

export type Event = {
  Url: string
  Status: string
  Title: string
  Kind: string
  Dates: string | number
  Country: string
  Location: string
  Description: string
  Image: string
}

export const columns: MRT_ColumnDef<Event>[] = [
  {
    accessorKey: 'Url',
    header: 'Url',
    enableEditing: false,
    size: 80,
  },
  {
    accessorKey: 'Title',
    header: 'Title',
    size: 80,
  },
  {
    accessorKey: 'Kind',
    header: 'Kind',
    size: 80,
  },
  {
    accessorKey: 'Dates',
    header: 'Dates',
    size: 80,
  },
  {
    accessorKey: 'Country',
    header: 'Country',
    size: 80,
  },
  {
    accessorKey: 'Location',
    header: 'Location',
    size: 80,
  },
  {
    accessorKey: 'Description',
    header: 'Description',
    size: 200,
  },
  {
    accessorKey: 'Image',
    header: 'Image',
    size: 80,
  },
]

export const fakeData: Event[] = [
  {
    Url: 'https://www.eventalways.com/warsaw-motor-show',
    Status: 'READY',
    Title: 'WARSAW MOTOR SHOW',
    Kind: 'Exhibitions',
    Dates: '14 Jun 2024 - 16 Jun 2024',
    Country: 'Poland',
    Location: 'Ptak Warsaw Expo  62, Aleja Katowicka, Nadarzyn , Warsaw 05-830, Mazovia, Poland',
    Description: 'International Auto Show in Poland',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1703232223.jpg',
  },
  {
    Url: 'https://www.eventalways.com/electronics-show',
    Status: 'PARSED',
    Title: 'ELECTRONICS SHOW',
    Kind: 'Exhibitions',
    Dates: '21 Jun 2024 - 23 Jun 2024',
    Country: 'Poland',
    Location: 'Ptak Warsaw Expo  62, Aleja Katowicka, Nadarzyn , Warsaw 05-830, Mazovia, Poland',
    Description:
      'International Trade Fair of Consumer Electronics is a place where leading companies providing hardware, technologies and services related to consumer electronics will be presented',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1702278470.jpg',
  },
  {
    Url: 'https://www.eventalways.com/eurobiotech',
    Status: 'PARSED',
    Title: 'EUROBIOTECH',
    Kind: 'Exhibitions',
    Dates: '27 Jun 2024 - 28 Jun 2024',
    Country: 'Poland',
    Location: 'Krakw  Krakw , Krakw 30, Lesser Poland Voivodeship, Poland',
    Description: 'Central European Congress of Life Science',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1701082838.jpg',
  },
  {
    Url: 'https://www.eventalways.com/animal-days',
    Status: 'PARSED',
    Title: 'ANIMAL DAYS',
    Kind: 'Exhibitions',
    Dates: '28 Jun 2024 - 30 Jun 2024',
    Country: 'Poland',
    Location: 'Ptak Warsaw Expo  62, Aleja Katowicka, Nadarzyn , Warsaw 05-830, Mazovia, Poland',
    Description:
      'The largest event in Poland dedicated to accompanying animals. Pets, food, hygiene articles and accessories...',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1704887570.jpg',
  },
  {
    Url: 'https://www.eventalways.com/fair-katowice',
    Status: 'PARSED',
    Title: 'FAIR KATOWICE',
    Kind: 'Exhibitions',
    Dates: '04 Sep 2024 - 06 Sep 2024',
    Country: 'Poland',
    Location: 'Katowice International Fair  1B, Bytkowska, Katowice , Katowice 40-955, Silesian, Poland',
    Description: 'International Fair of Mining, Power Industry and Metallurgy',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1702449058.jpg',
  },
  {
    Url: 'https://www.eventalways.com/certified-export-import-business-advance-training-in-surat',
    Status: 'PARSED',
    Title: 'Certified Export Import Business Advance Training in Surat',
    Kind: 'Workshops',
    Dates: 45327,
    Country: 'Poland',
    Location:
      'Near Collector Office  Near Collector Office, Kharwawad, Nanpura, Surat, Surat , Surat 395001, Gujarat, India',
    Description:
      'Course Details -\n\n1. Any Graduate MBA student willing to become an Exporter Importer.\n\n2. Businessmen have their shop factory products or are willing to Export their Products.\n\n3. Anyone willing to work in the Export-Import Industry, start their own business, or work as a Consultant.\n\n4. Those who want to go abroad and gain specialized knowledge in such areas.\n\nProgram Schedule:- 1.5 Month\n\nFor more Details\nCall On: +91 757 580 6926\nOr\nVisit: https://surat.iiiem.in/',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1706006195.jpg',
  },
  {
    Url: 'https://www.eventalways.com/certified-export-import-business-advance-training-in-ahmedabad',
    Status: 'PARSED',
    Title: 'Certified Export Import Business Advance Training in Ahmedabad',
    Kind: 'Workshops',
    Dates: 45327,
    Country: 'Poland',
    Location:
      'Iscon Avenue  2HP6+4C5, Chimanlal Girdharlal Road, Mithakhali, Navrangpura, Ahmedabad, Ahmedabad , Ahmedabad 380009, Gujarat, India',
    Description:
      'Course Details -\n\n1. Any Graduate MBA student willing to become an Exporter Importer.\n\n2. Businessmen have their shop factory products or are willing to Export their Products.\n\n3. Anyone willing to work in the Export-Import Industry, start their own business, or work as a Consultant.\n\n4. Those who want to go abroad and gain specialized knowledge in such areas.\n\nProgram Schedule:- 1.5 Month\n\nFor more Details:-\nCall On: +91 757 303 6066\nOr\nVisit:- https://ahmedabad.iiiem.in/',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1706005352.jpg',
  },
  {
    Url: 'https://www.eventalways.com/international-conference-on-economics-and-social-science1',
    Status: 'PARSED',
    Title: 'International Conference on Economics and Social Science',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 06 Feb 2024',
    Country: 'Poland',
    Location:
      'Baiyoke Boutique Hotel  120, 359, Soi Ratchaprarop 3, Khwaeng Thanon Phaya Thai, Khet Ratchathewi , Thailand 10400, Krung Thep Maha Nakhon, Thailand',
    Description:
      'International Conference on Economics and Social Science (ICESS) aimed at presenting current research being carried out in that area and scheduled to be held on 5th - 6th February, 2024 in Bangkok, Thailand . The idea of the conference is for the scientists, scholars, engineers and students from the Universities all around the world and the industry to present ongoing research activities, and hence to foster research relations between the Universities and the industry. This conference provides opportunities for the delegates to exchange new ideas and application experiences face to face, to establish business or research relations and to find global partners for future collaboration.',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1704523213.jpg',
  },
  {
    Url: 'https://www.eventalways.com/international-conference-on-food-and-agricultural-engineering',
    Status: 'PARSED',
    Title: 'International Conference on Food and Agricultural Engineering',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 06 Feb 2024',
    Country: 'Poland',
    Location:
      'Baiyoke Boutique Hotel  120, 359, Soi Ratchaprarop 3, Khwaeng Thanon Phaya Thai, Khet Ratchathewi , Thailand 10400, Krung Thep Maha Nakhon, Thailand',
    Description:
      'International Conference on Food and Agricultural Engineering (ICFAE) aimed at presenting current research being carried out in that area and scheduled to be held on 5th - 6th February, 2024 in Bangkok, Thailand . The idea of the conference is for the scientists, scholars, engineers and students from the Universities all around the world and the industry to present ongoing research activities, and hence to foster research relations between the Universities and the industry. This conference provides opportunities for the delegates to exchange new ideas and application experiences face to face, to establish business or research relations and to find global partners for future collaboration.',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1704522917.jpg',
  },
  {
    Url: 'https://www.eventalways.com/international-conference-on-tourism-transport-and-logistics1',
    Status: 'PARSED',
    Title: 'International Conference on Tourism, Transport, and Logistics',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 06 Feb 2024',
    Country: 'Poland',
    Location:
      'Baiyoke Boutique Hotel  120, 359, Soi Ratchaprarop 3, Khwaeng Thanon Phaya Thai, Khet Ratchathewi , Thailand 10400, Krung Thep Maha Nakhon, Thailand',
    Description:
      'International Conference on Tourism, Transport, and Logistics (ICTTL) aimed at presenting current research being carried out in that area and scheduled to be held on 5th - 6th February, 2024 in Bangkok, Thailand . The idea of the conference is for the scientists, scholars, engineers and students from the Universities all around the world and the industry to present ongoing research activities, and hence to foster research relations between the Universities and the industry. This conference provides opportunities for the delegates to exchange new ideas and application experiences face to face, to establish business or research relations and to find global partners for future collaboration.',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1704521252.jpg',
  },
  {
    Url: 'https://www.eventalways.com/mayo-clinic-obgyn-clinical-and-surgical-updates-staying-current-and-ahead-of-the-curve-224',
    Status: 'PARSED',
    Title: 'Mayo Clinic OB/GYN Clinical and Surgical Updates: Staying Current and Ahead of the Curve 2024',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 08 Feb 2024',
    Country: 'Poland',
    Location: 'Napa Valley Marriott Hotel and Spa  3425 Solano Ave. , Napa 94558, California, United States',
    Description:
      "Mayo Clinic's OB/GYN practice has more than a 30-year history of conducting innovative and transformational courses for providers in obstetrics, gynecology, family medicine, internal medicine, and women's health. We are pleased to offer our sixth annual enterprise-wide clinical and surgical OB/GYN course drawing leading experts from Mayo Clinic Arizona, Florida, Rochester, and Mayo Clinic Health System. Live and livestream options available.\n\n**New for 2024, join for an extra day of programming on the role of coaching in medicine and surgery (additional information below)\n\nHighlights encompassing all areas of OBGYN include practical talks, specifically:\n-Contemporary management of obesity\n-Preparing for cesarean hysterectomy and septic abortion\n-Shared decision making in providing contemporary fibroid care beyond hysterectomy\n-Adolescent abnormal uterine bleeding\n-Evolving cervical cancer screening guidelines and the role of self-collection\n-Isthmocele management\n-Management of endometrial cancer and cancer survivorship\n-Advanced maternal age and medical comorbidities in pregnancy\n-Management of sexual dysfunction and pain\n\nHands-on laboratories including:\n-Laparoscopic suturing\n-Obstetric ultrasound case studies\n-Pelvic pain and integrative health in general practice\n-Gynecologic procedures and ultrasound\n-Stump the audience, experts, and generative artificial intelligence\n-ACOG endorsed Emergencies in Clinical Obstetrics (ECO) Simulation Course\n\nAcademy for Surgical Coaching:\nJoin the Academy for Surgical Coaching for a Surgical Coach Training Session for a face-to-face surgical coach training open to all surgeons, with a focus on coaching gynecologic surgeons. You will learn the mindset and skillset necessary to be a great surgical coach. Hands-on practice and interactive conversation guide the training. Going through the training will allow you to join the international A4SC roster and be able to coach through the Academy for an honorarium. The Surgical Coach Training Course will take place Sunday, February 4 and consists of a 6.5-hour, full-group session that involves a didactic component, interactive reflection, and small group breakouts to apply coaching skills. The registration fee for the coaching is $1,200 USD (this is separate from Mayo Clinic fee). Participants may receive 5.25 CME. See the website for more details.\n\nThis course is designed for practicing obstetricians, gynecologists, family practitioners, general internists, nurse midwives, nurse practitioners, physician assistants, nurses, residents, fellows and others who have an interest in women's healthcare.\n\nURL:\nTickets: https://go.evvnt.com/2049978-0?pid=10018\n\nPrices:\nGeneral Session - M.D., D.O., Ph.D.: USD 950.00,\nGeneral Session - Resident, Fellow, Nurse, NP, PA, Midwife Allied Health Professional: USD 850.00,\nWorkshop - Lap Suturing Workshop: USD 250.00,\nWorkshop - Gyn Procedures and Gyn Ultrasound: USD 250.00,\nWorkshop - OB Ultrasound Case Studies: USD 250.00,\nWorkshop - Pelvic Pain and Integrative Health: USD 350.00,\nWorkshop - Emergencies in Clinical Obstetrics: USD 500.00,\nWorkshop - Coaching and Career Development Speed Dating Dinner: USD 100.00",
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1699189585.jpg',
  },
  {
    Url: 'https://www.eventalways.com/work-up-and-product-isolation',
    Status: 'PARSED',
    Title: 'WORK UP AND PRODUCT ISOLATION',
    Kind: 'Exhibitions',
    Dates: '05 Feb 2024 - 06 Feb 2024',
    Country: 'Poland',
    Location: '',
    Description:
      'This is a online short course that will look at the importance of designing simple, practical reaction quenches, work-ups and product isolations. The course will be in two sections of 60-90 minutes held over two consecutive days as follow:\n\nMonday, February 5 | 2.30pm – 5.00pm GMT – Session 1\n\nFriday, February 6 | 2.30pm – 5.00pm GMT – Session 2\n\nThis short course will discuss the importance of designing simple, practical reaction quenches, work-ups and product isolations for a range of reaction and product types e.g. highly exothermic quenches, products with poor stability, removal of reagent by-products, consideration of impurities and meeting the needs of process intermediates as well as final products. The focus of this short course will be to design processes suitable for large scale operation and the importance of laboratory experimental design and execution to adequately model the large-scale process.\n\nURLs:\nTickets: https://go.evvnt.com/2017502-0?pid=10018\nBooking: https://go.evvnt.com/2017502-2?pid=10018\nInquiries: https://go.evvnt.com/2017502-3?pid=10018\nWebsite: https://go.evvnt.com/2017502-4?pid=10018\n\nPrice:\nGeneral Admission: GBP 499.00',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1697713322.jpg',
  },
  {
    Url: 'https://www.eventalways.com/endocrine-update-224',
    Status: 'PARSED',
    Title: 'Endocrine Update 2024',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 09 Feb 2024',
    Country: 'Poland',
    Location:
      'Wyndham Grand Rio Mar Puerto Rico Golf and Beach Resort  6000 Boulevard Ro Mar , Ro Grande 00745, Ro Grande, Puerto Rico',
    Description:
      "Designed for endocrinologists and interested internists and surgeons, this course addresses gaps in medical knowledge and barriers in clinical practice to improve the outcomes of patients with endocrine and metabolic disorders. This program will consist of lecture, small group, panel discussion formats covering best practices, barriers to optimal patient outcomes and new approaches to the evaluation and management of complex and common endocrine disorders. In addition, this year's program will bring new delivery formats to the audience, including clinical debates and clinicopathological conferences.\n\nCourse Highlights:\n- Updates on best practices and new approaches to the evaluation and management of complex and common endocrine disorders\n- Interactive case-based presentations\n- Small group breakout sessions and networking opportunities\n- Dedicated time for questions and discussion\n- Access to course recordings for one year\n\nAdditional details visit: ce.mayo.edu/endo2024\n\nTickets: https://go.evvnt.com/1911258-0?pid=10018\n\nPrices:\nRegistration - M.D., D.O., Ph.D.: USD 1200.00,\nRegistration - Allied Health, NP, PA, Resident, Fellow, Retirees: USD 1000.00",
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1693202015.jpg',
  },
  {
    Url: 'https://www.eventalways.com/capacity-middle-east-224',
    Status: 'PARSED',
    Title: 'Capacity Middle East 2024',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 08 Feb 2024',
    Country: 'Poland',
    Location: 'Grand Hyatt Dubai  Near,,, , United Arab Emirates',
    Description:
      "Capacity Middle East is the region's leading meeting for digital infrastructure, connecting 2,600+ key ICT players from the Middle East and beyond, representing carrier, cloud, peering, hyperscale, content, finance, edge, software, equipment, data centre, and satellite industries.\n\n#CapacityMiddleEast | #KeepingTheWorldConnected\n\nURLs:\nTickets: https://go.evvnt.com/1836560-0?pid=10018\nWebsite: https://go.evvnt.com/1836560-2?pid=10018\n\nPrice:\nGeneral Admission: USD 1295.00\n\nVenue details: Grand Hyatt Dubai, Near Sheikh Rashid Rd, Dubai, United Arab Emirates",
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1695717610.jpg',
  },
  {
    Url: 'https://www.eventalways.com/assertiveness-training-course-5th-february-224-impact-factory-london',
    Status: 'PARSED',
    Title: 'Assertiveness Training Course - 5th February 2024 - Impact Factory London',
    Kind: 'Conferences',
    Dates: 45327,
    Country: 'Poland',
    Location:
      'Impact Factory | Professional Development | Training and Courses  52 Upper Street , London N1 0QH, England, United Kingdom',
    Description:
      'The original "too nice for your own good" assertiveness course.\n\nThe course focuses on making choices, including understanding that you have more choice than you think. \n\nIt\'s a practical course which will help you feel more confident in your ability to deal with pushy people.\n\nWe look at how you can make easy changes in your behaviour so that you will no longer feel pressured into doing things you\'d rather not.\n\nThe idea is to feel better about saying no without having to change who you are.\n\nCourse Objectives:\n\n* Dealing with Feelings\n* Setting Boundaries\n* Giving Clear Messages\n* Closing Conversations\n* Increased Confidence\n* Tools You Can Use\n* Difficult People and Situations\n* The Art of Saying No\n* Moving Things Forward\n* Managing Conflict\n\nWhat Our Clients Say:\n\nConsumer Council for Water - Assertiveness Training Course\n\n"Being part of the assertiveness course was like a different world, one that I have since made sure I am actively living in. So thank you, I have recommended it to almost all friends and colleagues."\n\nFarah Hasson - Policy Support Officer - Consumer Council for Water\n\nURLs:\nBooking: https://go.evvnt.com/1673852-0?pid=10018\nYouTube: https://go.evvnt.com/1673852-3?pid=10018\nWebsite: https://go.evvnt.com/1673852-4?pid=10018\nTwitter: https://go.evvnt.com/1673852-5?pid=10018\nFacebook: https://go.evvnt.com/1673852-6?pid=10018\nLinkedIn: https://go.evvnt.com/1673852-7?pid=10018\nInquiries: https://go.evvnt.com/1673852-8?pid=10018\nBrochure: https://go.evvnt.com/1673852-9?pid=10018\n\nPrice:\nOne Day Course: GBP 550.00',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1682169163.jpg',
  },
  {
    Url: 'https://www.eventalways.com/imaging-update-in-costa-rica-feb-5-8-224',
    Status: 'PARSED',
    Title: 'Imaging Update in Costa Rica- Feb. 5-8, 2024',
    Kind: 'Conferences',
    Dates: '05 Feb 2024 - 08 Feb 2024',
    Country: 'Poland',
    Location: 'JW Marriott Guanacaste Resort and Spa  Hacienda , Pinilla 50309, Provincia de Guanacaste, Costa Rica',
    Description:
      'At the conclusion of this activity, participants should be able to:\n\n-Use contemporary imaging techniques and protocols to accurately diagnose, stage and manage diseases\n-Outline MR protocols and techniques in musculoskeletal imaging for improved clinical diagnosis of diseases\n-Describe the imaging anatomy and protocols that are necessary to arrive at a diagnosis of cardiac diseases\n-Develop differential diagnosis that relates to the pertinent imaging and clinically relevant findings for each of the cases covered in this course\n-Outline the fundamentals of the latest advanced techniques in MRI, CT, ultrasound, and interventional imaging including their current roles and limitations in clinical practice\n-Integrate information presented in this course into efforts to improve the imaging skills of the participants\n\nURLs:\nWebsite: https://go.evvnt.com/1605797-0?pid=10018\nTickets: https://go.evvnt.com/1605797-2?pid=10018\nVirtual: https://go.evvnt.com/1605797-3?pid=10018\n\nPrices:\nPracticing Physician/Industry: USD 1395.00,\nMilitary/Retired: USD 1295.00,\nPA/Nurse: USD 1195.00,\nResident/Fellow: USD 1095.00,\nTechnologist: USD 995.00\n\nSpeakers: Debra M. Ikeda, MD, FACR, FSBI, TBA, TBA, TBA',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1679222282.jpg',
  },
  {
    Url: 'https://www.eventalways.com/metro-show',
    Status: 'PARSED',
    Title: 'Metro Show',
    Kind: 'Exhibitions',
    Dates: '05 Feb 2024 - 09 Feb 2024',
    Country: 'Poland',
    Location: 'Vancouver  Vancouver , Vancouver, British Columbia, Canada',
    Description:
      'METRO is a business to business wholesale industry buying show held four times a year in Vancouver, British Columbia. If you are the Owner or Buyer of a retail store (physical storefront or online), this show is for you.',
    Image: 'https://www.eventalways.com/media/eventbanner/large/undefined-banner-1638274134.jpg',
  },
]
