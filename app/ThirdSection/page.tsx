import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex pt-10 pb-1 flex-col md:flex-row md:justify-evenly">
      <div className="flex-col md:flex-row gap-6 md:px-10 flex">
        <div className="md:w-3/4 w-full">
          <Image
            className="rounded-xl"  // Removed conflicting classes
            src="/ecom2.png"
            alt="Description of the image"
            width={1200}  // Adjust width to a reasonable value
            height={600}  // Adjust height to a reasonable value
            layout="responsive"  // Makes the image responsive
          />
        </div>

        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="text-4xl flex justify-center text-center
                md:text-6xl
                bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
                bg-clip-text
                font-bold
                text-transparent"
          >
            Fully Customizable eCommerce
          </div>

          <div className="md:px-20 space-y-6 flex-col items-center justify-center">
            

            <div className="flex-col pt-4">
              <div className="text-lg flex items-center gap-5 text-gray-700">
                <Image
                  src="/images/icon-product.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Add unlimited products and variations. And manage your
                  inventory with ease.
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5 text-gray-700">
                <Image
                  src="/images/icon-analytics.png"
                  alt="feature-1"
                  width={70}
                  height={70}
                />
                <div>
                  Gain valuable insights into your customers and products with
                  our analytics tools.
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;