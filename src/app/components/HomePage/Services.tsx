import Container from '../ui/Container';
import ServiceCard from './card/ServiceCard';
import { services } from '@/app/lib/services';

const Services = () => {
  return (
    <Container>
      <div className="text-slate-800 min-h-screen text-center mt-12">
        <div>
          <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
          <h2 className="text-[45px]">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which donot look even slightly
            believable.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            services.map((service) =>(

              <ServiceCard service={service} key={service._id}/>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default Services;
