import { useEffect, useRef } from "react";

const brands = [
  {
    "name": "TechCorp",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWr8Z9mlsJLJ78xZcCjitYY1_NnuzhuAXPPIb-TYZpkp0z97xbj_VcByXExiAkfBZxF2U&usqp=CAU"
  },
  {
    "name": "Brandify",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSSg2HobJrtPUurHIkCWEtDbnFG_70NAejQ&s"
  },
  {
    "name": "InnovateX",
    "logo": "https://media.licdn.com/dms/image/v2/D560BAQExmhpz3WoGhQ/company-logo_200_200/company-logo_200_200/0/1691113206850/innovatex_it_solutions_llc_logo?e=2147483647&v=beta&t=xiqldt8fYI3FKfmiL7uBQj6i6uTn7C7AOADmMIvEHHQ"
  },
  {
    "name": "Samesung",
    "logo": "https://bsmedia.business-standard.com/_media/bs/img/about-page/1562575696.png"
  },
  {
    "name": "Greenfield Saving bank",
    "logo": "https://media.licdn.com/dms/image/v2/C4E0BAQHZExucsnI82w/company-logo_200_200/company-logo_200_200/0/1630563530544/greenfield_savings_bank_logo?e=2147483647&v=beta&t=1Fc-w_H0btIIGqCVzVChfhGmMa01Eyv2Xde84-OVFcI"
  },
  {
    "name": "Sports x",
    "logo": "https://cdn.shopify.com/s/files/1/0332/2747/3031/files/SportsX_Logo_-_Use_on_BLACK_Background_bba520f9-5739-4066-aa37-e6f91f52f354.png?height=628&pad_color=fff&v=1614306347&width=1200"
  },
  {
    "name": "Sky Sports ",
    "logo": "https://pbs.twimg.com/profile_images/1772242998702583808/O9kcuGnS_400x400.jpg"
  },
  {
    "name": "Lamitex ",
    "logo": "https://logovectordl.com/wp-content/uploads/2020/04/lamitex-s-p-a-logo-vector.png"
  },
];

const Brand = () => {
    const scrollRef =  useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;
        const speed = 0.03;
    
        const scroll = () => {
          if (scrollContainer) {
            scrollAmount += speed;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
              scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
          }
          requestAnimationFrame(scroll);
        };
    
        const loopScroll = () => {
          requestAnimationFrame(() => {
            scroll();
            loopScroll();
          });
        };
    
        loopScroll();
      }, []);
    
      return (
        <div className="mt-12 overflow-hidden relative">
          <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Our Previous Collaborations</h2>
          <div ref={scrollRef} className="flex whitespace-nowrap overflow-hidden invisible:no-scrollbar my-20">
            {brands.concat(brands).map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-auto mx-4 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      );
    };

export default Brand;
