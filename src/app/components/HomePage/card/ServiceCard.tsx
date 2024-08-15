import Image from 'next/image';
import Link from 'next/link';

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

const ServiceCard = ({ servic }: { servic: Service }) => {
  const { img, title, price, _id } = servic;
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src={img} width={430} height={120} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex justify-between items-center">
            <p className="text-primary font-semibold">Price: ${price}</p>
            <Link href={`/services/${_id}`}>
              <button className="btn btn-primary">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
