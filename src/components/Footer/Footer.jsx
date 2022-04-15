import './Footer.css';
import { Fragment } from 'react';
import Picture from 'components/Picture/Picture';
import { attributes } from '../../content/components/footer.md';

export default function Footer() {
  const text = attributes;
  return (
    <Fragment>
      <footer>
        <section>
          {text.quick.title ? <h6>{text.quick.title}</h6> : null}
          {text.quick.links.map((link) => (
            <a href={link.link}>
              {link.text}
              <hr />
            </a>
          ))}
        </section>
        <section>
          {text.middle.title ? <h6>{text.middle.title}</h6> : null}
          {text.middle.links.map((link) => (
            <a href={link.link}>
              {link.text}
              <hr />
            </a>
          ))}
        </section>
        <section>
          {text.social.title ? <h6>{text.social.title}</h6> : null}
          {text.social.links.map((link) => (
            <a rel='noreferrer' target='_blank' href={link.link}>
              <Picture src={link.pic} alt='social link' />
              {link.text}
              <hr />
            </a>
          ))}
          <a href={`mailto:${text.social.email.text}`}>
            <Picture src={text.social.email.pic} alt='mail' />
            {text.social.email.text}
            <hr />
          </a>
          <a href={`tel:${text.social.phone.text}`}>
            <Picture src={text.social.phone.pic} alt='mail' />
            {text.social.phone.text}
            <hr />
          </a>
        </section>
      </footer>
      <div className='legal'>
        {new Date().getFullYear() === 2022
          ? '2022'
          : `2022-${new Date().getFullYear()}`}{' '}
        CJT Devs, LLC
      </div>
    </Fragment>
  );
}
