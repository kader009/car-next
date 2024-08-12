import Container from '../ui/Container';

const BannerPage = () => {
  return (
    <div>
      <Container>
        <div className="carousel w-full">
          {banners.map((banner, index) => (
            <div
              style={{
                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${
                  index + 1
                }.jpg)`,
              }}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover rounded-xl"
              key={index}
            >
              <div>
                <h1>Lorem ipsum dolor sit</h1>
              </div>

              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={banner.prev} className="btn btn-circle">
                  ❮
                </a>
                <a href={banner.next} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const banners = [
  {
    title: 'Affordable Price For Car Servicing',
    description:
      'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide2',
    prev: '#slide4',
  },
  {
    title: 'Affordable Price For Car Servicing',
    description:
      'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide3',
    prev: '#slide1',
  },
  {
    title: 'Affordable Price For Car Servicing',
    description:
      'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide4',
    prev: '#slide2',
  },
  {
    title: 'Affordable Price For Car Servicing',
    description:
      'There are many variations of passages of  available, but the majority have suffered alteration in some form',
    next: '#slide1',
    prev: '#slide3',
  },
];

export default BannerPage;
