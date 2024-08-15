import Container from '../ui/Container';
import ServiceCard from './card/ServiceCard';
// import { services } from '@/app/lib/services';

const getData = async () => {
  const response = await fetch(`http://localhost:3000/services/api/get-all`);
  const data = response.json();
  return data;
};

interface Facility {
  name: string;
  details: string;
}

interface Service {
  _id: string;
  service_id: string;
  title: string;
  img: string;
  price: string;
  description: string;
  facility: Facility[];
}

const Services = async() => {
  const data = await getData();
  console.log(data.service);
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
          {data?.service?.lenght > 0 && data?.service?.map((services :Service) => (
            <ServiceCard service={services} key={services._id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
