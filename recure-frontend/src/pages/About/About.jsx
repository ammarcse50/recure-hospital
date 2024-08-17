const About = () => {
  return (
    <>
      <div className="md:flex items-end">
        <div className="md:w-1/2 mb-10">
          <h1 className="md:text-5xl text-3xl font-nsans-bold">
            About <span className="text-red-500">Us</span>
          </h1>
          <span className="divider w-1/3 divider-error"></span>
          <span className="font-nsans-light">
            Integrated Hospital Service with Mordern Facility
          </span>
          <h1 className="font-nsans-medium md:text-4xl my-10">
            Message from Managing Director
          </h1>
          <span className="divider w-[90%] divider-error"></span>
          <p className="font-nsans-light text-wrap mx-3 text-justify">
            <span>
              It is indeed a great pleasure for me to introduce our brand new
              state – of – the -art technology hospital in the region of
              Chittagong. Nowadays, if anyone needs good treatment, they need to
              look forward to Dhaka or Abroad. Because good and well facilitated
              hospitals are not available in the port city of Chittagong.
            </span>
            <span>
              So, we needed to decentralize and step forward to establish well
              facilitate and modern hospital in Chittagong city. Moreover, we
              felt that our integrated Township of Chittagong city, the second
              capital and largest sea-port of Bangladesh, would be incomplete
              without a good health care facility like xyz Hospital that is
              going to be a well-equipped modern multi specialty hospital. In
              view of that, xyz Hospital was incorporated in Chittagong,
              Bangladesh in the year 2013 under the company act 1994.
            </span>
            <span>
              We as a team are quite optimistic that it will render the required
              level of expertise and services to the community. XYZ is a
              multidisciplinary hospital with all major medical specialties and
              with special focuses on center of excellences in Orthopedic
              Surgery and Thaumatology, Urology and Nephology, Obstetrics and
              Gynecology, Gastroenterology, Family medicine, ENT, and so on with
              Minimally Invasive Surgeries.
            </span>
            <span>
              XYZ is committed to provide the highest quality health care
              services to local community while being financially affordable.
              Achieving a high level of quality is the result of many factors:
            </span>
            <span>
              <ul className="list-disc ml-4">
                <li>Caring people</li>
                <li>Medical expertise</li>
                <li>Clinical excellence</li>
                <li>Health care management</li>
              </ul>
            </span>
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/about.png"
            className="rounded-xl w-full h-full"
            alt=""
          />
        </div>
      </div>

      <div className="md:flex items-center ">
        <div className="md:w-1/2">
          <h1 className="md:text-5xl text-3xl font-nsans-bold">FACILITIES</h1>
          <span className="divider w-1/2 divider-error"></span>
          <p className="font-nsans-medium">
            We constantly invest in high-end equipment.
          </p>
          <span className="font-nsans-light">
            We designed our hospital service that deliver effective relationship
            between medical and other health and social care team. An
            appropriate balance of specialist care and general care coordinated
            expertly and holistically around patient’s need.
          </span>{" "}
          <br />
          <span className="font-nsans-light">
            At recure transfer of care arrangement that realistically allocate
            responsibility for further action when patients move from one care
            setting to another. Patients experience is valued as much as
            clinical effectiveness.
          </span>{" "}
          <br />
          <span className="font-nsans-light">
            Patients have effective and timely access to care, including
            appointments, tests, treatment and move out of the hospital.
            Services are tailored to meet the needs of individual patients,
            including vulnerable patients.
          </span>
        </div>
        <div className="md:w-1/2">
          <img src="/images/doctor1.jpg" alt="" />
        </div>
      </div>
      {/* <div className="hidden md:block  md:w-full h-[400px] lg:h-[600px] my-10">
        <div className="h-full w-full">
          <div className="absolute hidden lg:block w-[1280px] h-[400px] lg:h-[600px] bg-black/50 " />
          <img
            src="/images/banner.jpg"
            className="h-full w-full rounded-xl object-cover"
            alt=""
          />
        </div>
      </div> */}

      <div className="hero h-[400px] lg:h-[600px] bg-[url('/images/banner.jpg')] my-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              We promised to take care… and delivered
            </h1>
            <p className="mb-5">
              Most awaited hospital in this locality with pretty much all kinds
              of Facilities and Luxurious Care health units. apart from that it
              is now the bicest private hospital in chittagong. However it is
              now fully decorated and hopefully they will provide superior
              health care. <br />Mohsin Rid Visitor
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
