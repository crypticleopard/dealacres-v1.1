import Image from "next/image";
const Card = ({ title, content }) => {
  return (
    <div className=" bg-gradient-to-r from-purple-100 shadow-customindigo shadow-lg to-white border-blue-100 bg-opacity-70 hover:border rounded-xl h-24 sm:h-20 w-56 mb-3 sm:w-64 md:w-64 mx-2  hover:shadow-blue-200 hover:shadow-sm  flex ">
      <div className="flex-shrink-0 h-24 sm:h-20 w-1/3 rounded-tl-xl rounded-bl-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/home.jpg"
          height={96}
          width={96}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-wrap w-2/3">
        <div className=" pb-3 pt-3 pl-2 flex flex-col h-full">
          <h3 className="text-lg font-bold text-gray-800">
            {title}
          </h3>
          <p className="mt-1 text-xs text-gray-800 sm:max-w-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
