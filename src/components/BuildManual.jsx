import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MediaCarousel from './MediaCarousel';
import '../styles/components/_BuildManual.scss';
import Nav from './Nav';

function BuildManual() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB A --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//


  // ***
  const carousel1Items = [{ type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' }];
  const carousel1Captions = ['Part A0 Print Orientation (P.C.N.R.)*'];


  // Data for carousel 1
  const carousel2Items = [
    { type: 'img', src: '/images/manual/pres-A-2.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_coverBot.jpg', alt: 'Slide 2' },
    { type: 'video', src: '/videos/manual/anim-a01-2.mp4', alt: 'Slide 3' },
    { type: 'video', src: '/videos/manual/anim-a01-1.mp4', alt: 'Slide 4' },
  ];
  const carousel2Captions = [
    'Step Final Result',
    'Part A0 Print Orientation (P.C.N.R.)*',
    'Part A1(R) Print Orientation (P.C.N.R.)*',
    'Join: A1(R) \u27A4 A0',
    'Join: A1(L) \u27A4 A0',
  ];

  // Data for carousel 2
  const carousel3Items = [
    { type: 'img', src: '/images/manual/pres-A-3.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/A-3.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-a03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a03-2.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel3Captions = [
    'Step Final Result',
    'Part A2 Print Orientation (P.C.N.R.)*',
    'Join: A2 \u27A4 A1',
    'Join: A2 \u27A4 A1',
  ];

  // Data for carousel 3
  const carousel4Items = [
    { type: 'img', src: '/images/manual/pres-A-4.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/A-4.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/xtra-A04.jpg', alt: 'Slide 1' },

    {
      type: 'video',
      src: '/videos/manual/anim-a02-back.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a02-front.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel4Captions = [
    'Step Final Result',
    'Part A3 Print Orientation (P.C.N.R.)*',
    'Release Trigger Mechanism',
    'Join: A3 \u27A4 A0',
    'Join: A3 \u27A4 A0',
  ];

  // Data for carousel 4
  const carousel5Items = [
    { type: 'img', src: '/images/manual/pres-A-6.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_A05.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_A06.jpg', alt: 'Slide 1' },
    {
      type: 'video',
      src: '/videos/manual/anim-a06-1.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel5Captions = [
    'Step Final Result',
    'Part A5 Print Orientation (P.C.N.R.)*',
    'Part A6 Print Orientation (P.C.N.R.)*',
    'Join: A6 \u27A4 A5',
    'Join: A6 \u27A4 A5',
  ];

  // Data for carousel 5
  const carousel6Items = [
    { type: 'img', src: '/images/manual/pres-A-5.jpg', alt: 'Slide 1' }, {
      type: 'video',
      src: '/videos/manual/anim-a05-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a05-3.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a05-2.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel6Captions = [
    'Step Final Result',
    'Join: A5 \u27A4 A2 + A3',
    'Join: A5 \u27A4 A2 + A3',
    'Join: A5 \u27A4 A2 + A3',
  ];

  // Data for carousel6
  const carousel7Items = [
    { type: 'img', src: '/images/manual/pres-A-7.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-A07.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-a07-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-a07-2.mp4',
      alt: 'Alt video',
    },
  ];
  const carousel7Captions = [
    'Step Final Result',
    'Part A3 Print Orientation (P.C.N.R.)*',
    'Join: A4 \u27A4 A3',
    'Join: A4 \u27A4 A3',
  ];

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB B --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//

  // Data for carousel 7
  const carousel8Items = [
    { type: 'img', src: '/images/manual/pres-B01.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B00.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/ori-B01.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b00-1.mp4',
      alt: 'Alt video',
    },

  ];
  const carousel8Captions = [
    'Step Final Result',
    'Part B0 Print Orientation (P.C.N.R.)*',
    'Part B1 Print Orientation (P.C.N.R.)*',
    'Join: B0 \u27A4 B1',

  ];

  // Data for carousel 9
  const carousel9Items = [
    { type: 'img', src: '/images/manual/pres-B02.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B02.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b01-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b01-2.mp4',
      alt: 'Alt video',
    },

  ];

  const carousel9Captions = [
    'Step Final Result',
    'Part B2 Print Orientation (P.C.N.R.)*',
    'Join: B2 \u27A4 B1',
    'Join: B2 \u27A4 B1'

  ];

  // Data for carousel 9
  const carousel10Items = [
    { type: 'img', src: '/images/manual/pres-B03.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B03.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b02-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b02-2.mp4',
      alt: 'Alt video',
    },

  ];

  const carousel10Captions = [
    'Step Final Result',
    'Part B3 Print Orientation (P.C.N.R.)*',
    'Join: B0 \u27A4 B0 B2',
    'Join: B0 \u27A4 B0 B2',

  ];



  // Data for carousel 10
  const carousel11Items = [
    { type: 'img', src: '/images/manual/pres-B04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-b03-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carousel11Captions = [
    'Step Final Result',
    'Part B4 Print Orientation (P.C.N.R.)*',
    'Join: B0 \u27A4 B0 + B2 + B3',
    'Join: B0 \u27A4 B0 + B2 + B3',

  ];

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB C --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//

  // Data for carousel C1
  const carouselC1Items = [
    { type: 'img', src: '/images/manual/pres-C01.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C01.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/ori-C02.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-C01.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c01-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-c01-2.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselC1Captions = [
    'Step Final Result',
    'Part C1 Print Orientation (P.C.N.R.)*',
    'Part C2 Print Orientation (P.C.N.R.)*',
    'Key Connections & Order',
    'Join: C2 \u27A4 C1',
    'Join: C2 \u27A4 C1',
  ];

  // Data for carousel C2
  const carouselC2Items = [
    { type: 'img', src: '/images/manual/pres-C02.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C03.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-C02.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c02-2.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-c02-1.mp4',
      alt: 'Alt video',
    },


  ];
  const carouselC2Captions = [
    'Step Final Result',
    'Part A3 Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: A3 \u27A4 C2',
    'Join: A3 \u27A4 C2 (Both Sides)',
  ];

  // Data for carousel C3 step 13
  const carouselC3Items = [
    { type: 'img', src: '/images/manual/pres-C03.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C04.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-C03.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c03-1.mp4',
      alt: 'Alt video',
    },


  ];
  const carouselC3Captions = [
    'Step Final Result',
    'Part C4 Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: C4 \u27A4 C2',

  ];

  // Data for carousel C4
  const carouselC4Items = [
    { type: 'img', src: '/images/manual/pres-C04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C05.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-C05.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-C05-1.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c04-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-c04-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carouselC4Captions = [
    'Step Final Result',
    'Part C5 Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Key Connections',
    'Join: C5 \u27A4 C1 + C2 + A3 + C4 (Both Sides)',
    'Join: C5 \u27A4 C1 + C2 + A3 + C4 (Both Sides)',
  ];

  // Data for carousel C5
  const carouselC5Items = [
    { type: 'img', src: '/images/manual/pres-C05.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C06.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-C06.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-c05-1.mp4',
      alt: 'Alt video',
    },



  ];
  const carouselC5Captions = [
    'Step Final Result',
    'Part C6 Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: C6 \u27A4 C4',

  ];

  // Data for carousel c6
  const carouselC6Items = [
    { type: 'img', src: '/images/manual/pres-C06.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C07.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/xtra-C07.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c06-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-c06-2.mp4',
      alt: 'Alt video',
    },


  ];
  const carouselC6Captions = [
    'Step Final Result',
    'Part C7 Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: C7 \u27A4 C4 + C6',
    'Join: C7 \u27A4 C4 + C6',
  ];

  // Data for carousel C7
  const carouselC7Items = [
    { type: 'img', src: '/images/manual/pres-C07.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-C08.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c07-1.mp4',
      alt: 'Alt video',
    },



  ];
  const carouselC7Captions = [
    'Step Final Result',
    'Part C8 Print Orientation (P.C.N.R.)*',
    'Join: C8 \u27A4 C7 (Both Sides)',

  ];

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB D --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//
  // Data for carousel D00
  const carouselD0Items = [
    { type: 'img', src: '/images/manual/pres-D00.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/xtra-D01.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-D02.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-D01-03.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-d00-0.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-d00-1.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-d00-2.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselD0Captions = [
    'Step Final Result',
    'Key Connections',
    'Key Connections',
    'Key Connections',
    'Join: Sub-assemblies A \u27A4 B \u27A4 C',
    'Join: C4 \u27A4 A0',
    'Join: B4 \u27A4 A3 A4 A3',
  ];


  // Data for carousel D01
  const carouselD1Items = [
    { type: 'img', src: '/images/manual/pres-D01.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-D01.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-D01-0.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-D01-3.mp4',
      alt: 'Alt video',
    },
    {
      type: 'video',
      src: '/videos/manual/anim-D01-4.mp4',
      alt: 'Alt video',
    },


  ];
  const carouselD1Captions = [
    'Step Final Result',
    'Part D1(R) Print Orientation (P.C.N.R.)*',
    'Join: D1(R) \u27A4 A3 + A4 + A3(R) (Both Sides)',
    'Join: D1(R) \u27A4 A3 + A4 + A3(R) (Both Sides)',
    'Join: D1(R) Release Mechanism',

  ];

  // Data for carousel D02
  const carouselD2Items = [
    { type: 'img', src: '/images/manual/pres-D02R.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-D02R.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/ori-D04R.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-D02.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselD2Captions = [
    'Step Final Result',
    'Part D2(R) Print Orientation (P.C.N.R.)*',
    'Part D4(R) Print Orientation (P.C.N.R.)*',
    'Join: D4(R) \u27A4 D2(R) (Both Sides)',


  ];

  // Data for carousel D03
  const carouselD3Items = [
    { type: 'img', src: '/images/manual/pres-D03.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/xtra-D03.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-D03.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselD3Captions = [
    'Step Final Result',
    'Key Connections',
    'Join: D2(R) \u27A4 D1(R) + C8(R) (Both Sides)',


  ];
  // Data for carousel D04  
  const carouselD4Items = [
    { type: 'img', src: '/images/manual/pres-D04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-D03R.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-D04.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselD4Captions = [
    'Step Final Result',
    'Part D3(R) Print Orientation (P.C.N.R.)*',
    'Join: D3(R) \u27A4 D1(R) C8(R) (Both Sides)',


  ];

  // Data for carousel D05
  const carouselD5Items = [
    { type: 'img', src: '/images/manual/pres-D05.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-D05.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-D05.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-D05.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselD5Captions = [
    'Step Final Result',
    'Part D5(R) Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: D5(R) \u27A4 D1(R) + D2(R) (Both Sides)',


  ];


  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB E --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//

  // Data for carousel E01
  const carouselE1Items = [
    { type: 'img', src: '/images/manual/pres-E01.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-E01.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-E1.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-E01.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselE1Captions = [
    'Step Final Result',
    'Part D5(R) Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: E1 \u27A4 A4 (Partially)',


  ];


  // Data for carousel E02
  const carouselE2Items = [
    { type: 'img', src: '/images/manual/pres-E02.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-E02.jpg', alt: 'Slide 2' },
    { type: 'img', src: '/images/manual/xtra-E02.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-E02.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselE2Captions = [
    'Step Final Result',
    'Part E2(R) Print Orientation (P.C.N.R.)*',
    'Key Connections',
    'Join: E2(R) \u27A4 A4(R) (Partially, Both Sides)',
  ];


  // Data for carousel E02
  const carouselE3Items = [
    { type: 'img', src: '/images/manual/pres-E03.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/xtra-E03.jpg', alt: 'Slide 2' },

    {
      type: 'video',
      src: '/videos/manual/anim-E03-1.mp4',
      alt: 'Alt video',
    },

  ];
  const carouselE3Captions = [
    'Step Final Result',
    'Key Connections',
    'Join: E3(R) \u27A4 B4 (Both Sides)',


  ];

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB F --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//





  return (
    <div>


      <Nav />


      <div className="manual-page build-manual">
        <br />

        <section>
          <h2>PIONEER.3</h2>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY A
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>


          <section className="carousel-section">
            <MediaCarousel itemsData={carousel2Items} captions={carousel2Captions} title="1" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel3Items} captions={carousel3Captions} title="2" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel4Items} captions={carousel4Captions} title="3" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel5Items} captions={carousel5Captions} title="4" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel6Items} captions={carousel6Captions} title="5" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel7Items} captions={carousel7Captions} title="6" />
          </section>
        </section>

        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY B
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyB.png" alt="assemblyA" />
          </h3>


          <section className="carousel-section">
            <MediaCarousel itemsData={carousel8Items} captions={carousel8Captions} title="7" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel9Items} captions={carousel9Captions} title="8" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel10Items} captions={carousel10Captions} title="9" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel11Items} captions={carousel11Captions} title="10" />
          </section>

        </section>

        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY C
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyC.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC1Items} captions={carouselC1Captions} title="11" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC2Items} captions={carouselC2Captions} title="12" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC3Items} captions={carouselC3Captions} title="13" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC4Items} captions={carouselC4Captions} title="14" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC5Items} captions={carouselC5Captions} title="15" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC6Items} captions={carouselC6Captions} title="16" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselC7Items} captions={carouselC7Captions} title="17" />
          </section>

        </section>
        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY D
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyD.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselD0Items} captions={carouselD0Captions} title="18" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselD1Items} captions={carouselD1Captions} title="19" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselD2Items} captions={carouselD2Captions} title="20" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselD3Items} captions={carouselD3Captions} title="21" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselD4Items} captions={carouselD4Captions} title="21" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselD5Items} captions={carouselD5Captions} title="22" />
          </section>

        </section>

        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY E
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselE1Items} captions={carouselE1Captions} title="23" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselE2Items} captions={carouselE2Captions} title="23" />
          </section>
          <section className="carousel-section">
            <MediaCarousel itemsData={carouselE3Items} captions={carouselE3Captions} title="23" />
          </section>
        </section>

        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY F
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="1" />
          </section>
        </section>
      </div>
    </div>
  );
}

export default BuildManual;
