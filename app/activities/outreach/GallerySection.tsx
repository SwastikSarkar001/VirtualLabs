import { Montserrat } from "next/font/google"
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const baseUrl = 'https://raw.githubusercontent.com/virtual-labs/outreach-web-pages-iiith/refs/heads/main/photographs/'

const images = [
  '2018-03-21-anurag-00013.jpg',
  '2018-03-21-anurag-00015.jpg',
  '2018-04-06-cbit-00034.jpg',
  '2018-07-25-chaitanya-karimnagar-00030.jpg',
  '2018-08-21-vnrvjiet-00032.jpg',
  '2018-10-25-jbrec-00028.jpg',
  '2018-10-25-jbrec-00029.jpg',
  '2019-02-2019-svec-tirupati-0008.jpg',
  '2019-02-26-svec-tirupti-00014.jpg',
  '2019-03-09-mvgr-0001.jpg',
  '2019-03-11-gitam-vizag-00011.jpg',
  '2019-03-11-gitam-vizag-00012.jpg',
  '2019-03-11-gitam-vizag-0002.jpg',
  '2019-03-11-gitam-vizag-0007.jpg',
  '2019-03-11-gitam-vizag-0009.jpg',
  '2019-03-12-gayatri-vizag-00020.jpg',
  '2019-03-12-gayatri-vizag-00023.jpg',
  '2019-03-14-aditya-engg-kakinada-00025.jpg',
  '2019-04-02-rvr-jc-00018.jpg',
  '2019-04-02-rvr-jc-00019.jpg',
  '2019-04-02-rvr-jc-00021.jpg',
  '2019-04-02-rvr-jc-00022.jpg',
  '2019-04-03-00026.jpg',
  '2019-04-03-klu-00016.jpg',
  '2019-04-03-klu-00017.jpg',
  '2019-04-03-klu-00024.jpg',
  '2019-04-03-klu-00027.jpg',
  '2019-04-05-narsaroapet-engg-college-00031.jpg',
  '2019-12-30-vignan-hydedrabad-00033.jpg',
  '2020-02-06-satyasai-0004.jpg',
  '2020-02-06-satyasai-0005.jpg',
  '2020-02-06-satyasai-0006.jpg',
]

export default function GallerySection() {
  return (
    <div className="self-stretch">
      <h1 className={`text-4xl mb-16 font-bold text-center ${montserrat.className}`}>
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16 justify-items-center mb-16">
        {
          images.map((image, index) => (
            <div key={index} className="relative w-full h-64 md:h-80 xl:h-96">
              <Image
                src={`${baseUrl}${image}`}
                alt={image}
                className="rounded-lg shadow-xl object-cover"
                fill
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.png';
                }}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
