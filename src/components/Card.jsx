import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loader from "./Loader";

const Card = ({ item,loading }) => {

  return loading ? <Loader/> :   (
    <div className="relative w-[300px] bg-white shadow-md  rounded-xxl">
      <Link href={"/"}>
        <Image
          width={400}
          height={600}
          src={"https://uniformapp.in/admin_area/school_images/st%20francis.jpg"}
          alt="Product"
          className="h-[300px] object-cover rounded-t-xl duration-500 hover:scale-105"
        />
        <div className="flex flex-col gap-6 px-4 py-3 w-72 ">
        <Image
          width={40}
          height={40}
          src={"/plus.svg"}
          alt="Product"
          className="bg-white absolute top-2 right-2 rounded-full cursor-pointer"
        />
        <p className="text-base font-semibold text-blue-500 truncate block capitalize">
            Dhanbad
          </p>
          <span className="text-gray-800 mr-3 uppercase text-xl">
            IPS School
          </span>
          <p className="text-base font-semibold text-gray-500 truncate block capitalize">
            Karkend Bazar
          </p>
          
        

         
        </div>
        <button
            className="flex items-center text-white font-semibold justify-center w-[300px] mt-4  bottom-0 rounded-b-lg bg-blue-400 border px-2  py-3 text-base hover:bg-blue-600"
           
          >
            Apply Now
          </button>
      </Link>
    </div>
  );
};

export default Card;