import React from "react";

import { CourseCardHeader } from "./CourseCardHeader";
import { CourseCardBody } from "./CourseCardBody";

const CourseCard = () => {
  const courseList = [
    {
      id: 1,
      name: "دوره جامع React صفر تا صد ",
      teacher: "دکتر بحرالعلوم",
      href: "#",
      imageSrc:
      "./reactJs.svg",
      price: "1400",
      rate: 3,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    },
    {
      id: 2,
      name: "دوره جامع .net core صفر تا صد ",
      teacher: "دکتر بحرالعلوم",
      href: "#",
      imageSrc:
        "./netCore.svg",
      imageAlt: "",
      price: "1400",
      rate: 4,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    },
    {
      id: 3,
      name: "دوره جامع HTML5 صفر تا صد ",
      teacher: "دکتر بحرالعلوم",
      href: "#",
      imageSrc:
        "./html.svg",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
      rate: 5,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    },
    {
      id: 4,
      name: "دوره جامع pyton صفر تا صد ",
      teacher: "دکتر بحرالعلوم",
      href: "#",
      imageSrc:
        "./pyton.svg",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
      rate: 1,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    }
    // More products...
  ];
  return (
    <div className=" font-sans  ">
      
        <div className="w-[98%] grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mx-auto">
          {courseList.map((product) => (
            <div key={product.id} className="bg-white h-[389px] rounded-xl dark:bg-black ">
              <div className="relative   shadow-xl  rounded-2xl cursor-pointer p-2 ">
                <div className="w-100">
                  <CourseCardHeader
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                    name={product.name}
                  />
                </div>
                
                <div className=" w-100">
                  <CourseCardBody
                    href={product.href}
                    teacher={product.teacher}
                    rate={product.rate}
                    price={product.price}
                    name={product.name}
                    desc={product.desc}
                    duration={product.duration}
                    sDate={product.sDate}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export { CourseCard };