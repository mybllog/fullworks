import React from "react";

const LogoMarquee = () => {
  const logos = [
    {
      alt: "Item 1",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/cisco.png",
    },
    {
      alt: "Item 2",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/huawei.png",
    },
    {
      alt: "Item 3",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/lenovo.png",
    },
    {
      alt: "Item 4",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/hpe-1.png",
    },
    {
      alt: "Item 5",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/hpe.png",
    },
    {
      alt: "Item 6",
      src: "https://cdn-ilacdpl.nitrocdn.com/lJqeRRaeCVsadYeMvQquWuZFSdoLsGFz/assets/images/optimized/rev-d955463/manifoldcomputers.com/wp-content/uploads/2023/08/ribbon.png",
    },
  ];

  return (
    <div className="overflow-hidden flex justify-start items-center w-[1000px] h-[200px] bg-white shadow-sm">
      <div className="flex animate-marquee space-x-5">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-[136.667px]">
              <a href="#">
                <img
                  alt={logo.alt}
                  src={logo.src}
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
