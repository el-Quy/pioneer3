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


  // Data for carousel 1
  const carousel1Items = [{ type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' }];
  const carousel1Captions = ['Part A-0 Print Orientation (P.C.N.R.)*'];


  // Data for carousel 2
  const carousel2Items = [
    { type: 'img', src: '/images/manual/pres-A-2.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_receiver.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori_coverBot.jpg', alt: 'Slide 2' },
    { type: 'video', src: '/videos/manual/anim-a01-2.mp4', alt: 'Slide 3' },
    { type: 'video', src: '/videos/manual/anim-a01-1.mp4', alt: 'Slide 4' },
  ];
  const carousel2Captions = [
    'Step Final Result',
    'Part A-0 Print Orientation (P.C.N.R.)*',
    'Part A-1(R) Print Orientation (P.C.N.R.)*',
    'Join: A-1(R) \u27A4 A-0',
    'Join: A-1(L) \u27A4 A-0',
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
    'Part A-2 Print Orientation (P.C.N.R.)*',
    'Join: A-2 \u27A4 A-1',
    'Join: A-2 \u27A4 A-1',
  ];

  // Data for carousel 3
  const carousel4Items = [
    { type: 'img', src: '/images/manual/pres-A-4.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/A-4.jpg', alt: 'Slide 1' },
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
    'Part A-3 Print Orientation (P.C.N.R.)*',
    'Join: A-3 \u27A4 A-0',
    'Join: A-3 \u27A4 A-0',
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
    'Part A-5 Print Orientation (P.C.N.R.)*',
    'Part A-6 Print Orientation (P.C.N.R.)*',
    'Join: A-6 \u27A4 A-5',
    'Join: A-6 \u27A4 A-5',
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
    'Join: A-3 \u27A4 A-0',
    'Join: A-3 \u27A4 A-0',
    'Join: A-3 \u27A4 A-0',
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
    'Part A-3 Print Orientation (P.C.N.R.)*',
    'Join: A-4 \u27A4 A-3',
    'Join: A-4 \u27A4 A-3',
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
    'Part B-0 Print Orientation (P.C.N.R.)*',
    'Part B-1 Print Orientation (P.C.N.R.)*',
    'Join: B-0 \u27A4 B-1',

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
    'Part B-2 Print Orientation (P.C.N.R.)*',
    'Join: B-2 \u27A4 B-1',
    'Join: B-2 \u27A4 B-1'

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
    'Part B-3 Print Orientation (P.C.N.R.)*',
    'Join: B-0 \u27A4 B-0 B-2',
    'Join: B-0 \u27A4 B-0 B-2',

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
    'Part B-4 Print Orientation (P.C.N.R.)*',
    'Join: B-0 \u27A4 B-0 B-2 B-3',
    'Join: B-0 \u27A4 B-0 B-2 B-3',

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
    'Part C-1 Print Orientation (P.C.N.R.)*',
    'Part C-2 Print Orientation (P.C.N.R.)*',
    'Assembly Order Reference',
    'Join: C-2 \u27A4 C-1',
    'Join: C-2 \u27A4 C-1',
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
    'Part C-3 Print Orientation (P.C.N.R.)*',
    'Assembly Joints',
    'Join: C-3 \u27A4 C-0',
    'Join: C-3 \u27A4 C-0 (Both Sides)',
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
    'Step 11 Preview',
    'Part C-4 Print Orientation (P.C.N.R.)*',
    'Assembly Joints',
    'Join: C-4 \u27A4 C-0',

  ];

  // Data for carousel C4
  const carouselC4Items = [
    { type: 'img', src: '/images/manual/pres-C04.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
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
    'Part C-4 Print Orientation (P.C.N.R.)*',
    'Join: C-4 \u27A4 C-0',
    'Join: C-4 \u27A4 C-0',
  ];

  // Data for carousel C5
  const carouselC5Items = [
    { type: 'img', src: '/images/manual/pres-C05.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
    {
      type: 'video',
      src: '/videos/manual/anim-c05-1.mp4',
      alt: 'Alt video',
    },



  ];
  const carouselC5Captions = [
    'Step Final Result',
    'Part C-5 Print Orientation (P.C.N.R.)*',
    'Join: C-5 \u27A4 C-0',
    'Join: C-5 \u27A4 C-0',
  ];

  // Data for carousel c6
  const carouselC6Items = [
    { type: 'img', src: '/images/manual/pres-C06.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/pres-C07.jpg', alt: 'Slide 1' },
    { type: 'img', src: '/images/manual/ori-B04.jpg', alt: 'Slide 2' },
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
    'Part C-6 Print Orientation (P.C.N.R.)*',
    'Join: C-6 \u27A4 C-0',
    'Join: C-6 \u27A4 C-0',
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
    'Part C-8 Print Orientation (P.C.N.R.)*',
    'Join: C-8 \u27A4 C-7 (Both Sides)',

  ];

  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB D --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//


  //-------------------------------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------- DATA FOR SUB E --------------------------------------------------------//
  //-------------------------------------------------------------------------------------------------------------------------------//


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
            <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="1" />
          </section>
        </section>
        <section>
          <h3 className="subassembly-title">
            SUB-ASSEMBLY E
            <span className="post-cure-warning">Post-Curing NOT Recommended*(PCNR)</span>{' '}
            <img className="overflow-image" src="./images/decorative/assemblyA.png" alt="assemblyA" />
          </h3>
          <section className="carousel-section">
            <MediaCarousel itemsData={carousel1Items} captions={carousel1Captions} title="1" />
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
