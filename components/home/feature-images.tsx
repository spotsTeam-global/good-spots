import Image from "next/image"

import logo from '../../public/logo-mockup.webp'
import collection from '../../public/collection-mockup.webp'
import dynamic from '../../public/dynamic-mockup.webp'

const images = [
  {
    feature: 'Keep up to speed',
    description: 'Dynamic island and timely push notifcations keep you up to speed with Spots without fighting fot your attention',
    id: 1,
    imageUrl: dynamic
  },
  {
    feature: 'Save and Share',
    description: 'Save and Share your favorite spots with friends and Family',
    id: 2,
    imageUrl: collection
  },
  {
    feature: 'Spots',
    description: 'Spots used AI transcription to organise your collections, without impatcing privacy',
    id: 3,
    imageUrl: logo
  },
]

export default function FeatureImages() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 h-fit mt-12">
      {images.map((image) => (
        <li
          key={image.id}
          className="col-span-1 flex flex-col divide-y rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-6">
            <Image
              alt=""
              src={image.imageUrl}
              className="mx-auto h-fit w-fit flex-shrink-0 rounded-sm"
              height={1000}
              width={1000} />
            {/* <h3 className="mt-6 text-sm font-medium text-gray-900">{image.feature}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{image.description}</dd>                            
            </dl> */}
          </div>
        </li>
      ))}
    </ul>
  )
}
