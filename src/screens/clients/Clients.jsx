import Client from 'components/Client/Client';
import './Clients.css';
import { attributes } from '../../content/pages/clients.md';
import Picture from 'components/Picture/Picture';

export default function Clients() {
  const text = attributes;
  return (
    <div className='clients'>
      <Picture src={text.background} alt='background' className='bg-img' />
      <div className='title'>
        <h2>{text.title}</h2>
      </div>
      <div className='subtitle'>
        <span style={{ fontSize: 'large' }}>{text.subtitle}</span>
      </div>
      <div className='subtitle'>
        <span style={{ fontSize: 'medium' }}>{text.content}</span>
      </div>
      <hr />
      <section>
        {text.clients?.map((client, i) => {
          return (
            <div className='item' key={i}>
              <Client
                src={client.pic}
                title={client.title}
                link={client.link}
                quote={client.testimonial}
                author={client.author}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
