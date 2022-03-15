import './Prices.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { attributes } from '../../content/pages/prices.md';
import scrollTo from 'shared/functions/scrollTo.js';
import { useMemo } from 'react';
import Picture from 'components/Picture/Picture';

export default function Prices() {
  const text = attributes;

  const loc = useLocation();

  const scrollOptions = useMemo(
    () => ({
      behavior: 'auto',
      block: 'center',
      inline: 'nearest',
    }),
    []
  );

  useEffect(() => {
    switch (loc.hash) {
      case '#site':
        scrollTo(text?.sections[0]?.tag, scrollOptions);
        break;
      case '#app':
        scrollTo(text?.sections[2]?.tag, scrollOptions);
        break;
      case '#software':
        scrollTo(text?.sections[3]?.tag, scrollOptions);
        break;
      default:
        break;
    }
  }, [loc.hash, scrollOptions, text?.sections]);

  return text ? (
    <div className='prices'>
      <title>
        <h2>{text.title}</h2>
      </title>
      {text.subTitle ? <span>{text.subTitle}</span> : null}
      <Picture src={text.background} alt='background pic' className='bg-img' />
      {text.sections?.map((section, i) => {
        return (
          <div
            id={section.tag}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.932)',
              margin: '10%',
              padding: '2.5%',
              borderRadius: '1rem',
            }}
            key={i}
          >
            <div>
              <button
                style={{ borderRadius: '0.5rem' }}
                onClick={() => {
                  window.location.href = '/services#' + section.tag;
                }}
              >
                <h3>{'←'}</h3>
              </button>
            </div>
            <h3>{section.title} </h3>
            <h4>{section.text}</h4>
            {section?.subSections?.length
              ? section.subSections.map((subSection) => {
                  return (
                    <>
                      <h5>
                        {subSection.title} - {subSection.price}
                      </h5>
                      <section>
                        <p>{subSection.text}</p>
                      </section>
                    </>
                  );
                })
              : null}
            <hr />
          </div>
        );
      })}
    </div>
  ) : null;
}
