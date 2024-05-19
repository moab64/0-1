import React from "react";
import { CategoriesBox } from "../../../../Common/CategoriesCard/CategoriesBox";
import style from './../../../../../assets/images/LandingImages/CategoriesSection/categories-bg.png'


const CategoriesSection = () => {
  return (
    <>
      <div className="dark:bg-black w-[98%] mr-auto h-[752px] mt-[7px] ">
        <div className=" flex flex-row w-[98%] bg-cover bg-center dark:bg-black " style={{width: `100%` , height: `105%`   , backgroundImage: `url(${style})`}}>
          <div className="right mr-9 w-2/5 h-20 mt-[325px] flex-col justify-center text-right dark:text-white ">
            <h1 className="text-4xl text-gray-800 mb-5 font-bold dark:text-white">دسته بندی دوره ها</h1>
            <p className="w-[460px] h-[75px] text-sm text-justify font-normal dark:text-white">
              لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و  سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
          </div>
          <div className=" w-3/5 h-full flex flex-row ">
            <div className=" w-1/2 mx-5 ">
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(8).png"
                title=" تحلیل داده"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(10).png"
                title="وب دیزاین"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
            </div>
            <div className=" w-1/2 mt-[72px]">
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(9).png"
                title="امنیت شبکه "
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
              <CategoriesBox
                imgSrc="src/assets/Icons/Icon(11).png"
                title="بازی"
                desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم فراوان جوابگوی و سطرآنچنان گیرد"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CategoriesSection };