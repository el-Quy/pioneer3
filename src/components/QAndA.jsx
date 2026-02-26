import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import '../styles/pages/_ContactPage.scss';
import ContactForm from './ContactForm';
import { useEffect } from 'react';
import Nav from './Nav';

function QAndA() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const faqs = [
    { q: "I found a bug", a: "Please report any problem in the contact form below. Thank you for being part of this!" },
    { q: "Will there be a physical product sold?", a: "Not in the works right now.  I'm focused gauging the community responsefor now." },
    { q: 'A part will does not properly', a: 'Verify all supports are cleaned off and do not post-cure the part.  Simply clean n rinse it thouroughly.  If all fails, please do come in touch through the contact form below.' },
    { q: 'How easy is this build?', a: 'I would say intermediary. There is a learning curve to the 3d resin printing process.  Being organized goes a long way.  I recommend printing the steps as you go.  Follow the steps.' },
    { q: "Are you really giving it for free?", a: "Some contribution is always welcome but my goal here is share the build and grow the following.  This is an investment." },
    {
      q: 'Why this strange shape for the ship??',
      a: 'Thanks for asking! Two reasons: first, it was meant as a parody of the classic Benchee 3D print test. Second, when you flip it upside down, it totally looks like a mech head.'
    },
    { q: 'Why over curing is not recommended?', a: 'Post-curing can cause the material to become brittle and may lead to cracking or warping of the printed part. It is best to avoid post-curing to ensure the part has the flexibility to fit into the joints. A deep clean is often sufficient.' },
    { q: "How much resin does a single build consume", a: "If you include print supports plus the residual uncured film, expect to use about 1 kg of resin per build." },
    { q: "Graphic Novel?", a: "Yup! It's coming up!" },


  ];

  return (
    <>
      <Nav />

      <section className="contact-intro">
        <h2>FAQ</h2>
        <p>&nbsp;&nbsp;Got questions? Trust me, someone else wondered the same thing. Dive below — the answers live there. And if not, congrats on being the first… reach out and let me know. </p>
      </section>

      <Accordion className="faq" allowMultiple transition transitionTimeout={200}>
        {faqs.map((item, idx) => (
          <AccordionItem
            key={idx}
            header={
              <div className="accordion-header">
                <span>{item.q}</span>
                <span className="arrow">▼</span>
              </div>
            }
          >
            {item.a}
          </AccordionItem>
        ))}
      </Accordion>

      <ContactForm />
    </>
  );
}

export default QAndA;
