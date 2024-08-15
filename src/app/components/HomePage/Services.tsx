import Container from '../ui/Container';
import ServiceCard from './card/ServiceCard';

const getData = async () => {
  const response = await fetch(`http://localhost:3000/services/api/get-all`);
  const services = response.json();
  return services;
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

const Services = async () => {
  const { service } = await getData();
  // console.log(data.service);
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
          {service?.length > 0 &&
            service?.map((servic: Service) => (
              <ServiceCard servic={servic} key={servic._id} />
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Services;
