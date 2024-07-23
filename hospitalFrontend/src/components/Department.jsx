import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      description:
        "Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents. It encompasses a range of health services.",
      imageUrl: "/pedia.jpg",
      reference: "https://en.wikipedia.org/wiki/Pediatrics",
    },
    {
      name: "Orthopedics",
      description:
        "Orthopedics is the branch of surgery concerned with conditions involving the musculoskeletal system. It includes bones, joints, and related tissues.",
      imageUrl: "/ortho.jpg",
      reference: "https://en.wikipedia.org/wiki/Orthopedic_surgery",
    },
    {
      name: "Cardiology",
      description:
        "Cardiology deals with disorders of the heart as well as parts of the circulatory system. It includes diagnosis and treatment of heart conditions.",
      imageUrl:
        "https://eremedium.in/wp-content/uploads/2022/06/18-Importance-of-Cardiology-Videos.jpg",
      reference: "https://en.wikipedia.org/wiki/Cardiology",
    },
    {
      name: "Neurology",
      description:
        "Neurology focuses on the diagnosis and treatment of disorders of the nervous system, including the brain, spinal cord, and nerves.",
      imageUrl: "/neuro.jpg",
      reference: "https://en.wikipedia.org/wiki/Neurology",
    },
    {
      name: "Oncology",
      description:
        "Oncology is the branch of medicine that deals with the prevention, diagnosis, and treatment of cancer, involving various therapeutic strategies.",
      imageUrl:
        "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/iStock-1181263174edit-1024x575.jpg?w=1155&h=1528",
      reference: "https://en.wikipedia.org/wiki/Oncology",
    },
    {
      name: "Radiology",
      description:
        "Radiology involves the use of medical imaging technologies to diagnose and treat diseases. Techniques include X-rays, CT scans, and MRIs.",
      imageUrl:
        "https://shantilalhospital.com/wp-content/uploads/2024/01/doctor-getting-patient-ready-ct-scan-scaled.jpg",
      reference: "https://en.wikipedia.org/wiki/Medical_imaging",
    },
    {
      name: "Physical Therapy",
      description:
        "Physical Therapy (PT) involves the treatment of injury or deformity by physical methods such as massage, heat treatment, and exercise.",
      imageUrl:
        "https://health.usf.edu/-/media/v3/usf-health/medicine/DPT/dr-physical-therapy.ashx",
      reference: "https://en.wikipedia.org/wiki/Physical_therapy",
    },
    {
      name: "Dermatology",
      description:
        "Dermatology focuses on the diagnosis and treatment of skin disorders. It includes conditions such as acne, eczema, and skin cancers.",
      imageUrl: "/derma.jpg",
      reference: "https://en.wikipedia.org/wiki/Dermatology",
    },
    {
      name: "ENT",
      description:
        "ENT (Ear, Nose, and Throat) specialists focus on the diagnosis and treatment of disorders related to the ear, nose, and throat regions.",
      imageUrl: "/ent.jpg",
      reference: "https://en.wikipedia.org/wiki/Otorhinolaryngology",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 1,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container departments mt-20"> {/* Add margin-top to push content below navbar */}
      <h2>Check Departments👉👉</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        ssr={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px" // Add padding to each item
      >
        {departmentsArray.map((item, index) => (
          <div
            key={index}
            className="boxshadow bg-white border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto lg:ml-4 z-0"
            style={{ marginBottom: "20px" }} // Add margin-bottom to create space between items
          >
            <div className="min-h-[200px]">
              <img
                src={item.imageUrl}
                className="w-full h-full object-cover rounded-lg"
                alt={item.name}
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
              <a href={item.reference}>
                <button
                  type="button"
                  className="mt-6 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
                >
                  Know more
                </button>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Departments;
