import Image from 'next/image'
import maps from '../../public/iPhone 15 Pro.png'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  GlobeEuropeAfricaIcon,
  BookOpenIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import FeatureImages from './feature-images'
import { Description } from '@radix-ui/react-dialog'

const features = [
  {
    name: "Uninterupted adventures",
    description:
      "Use spots home screen widget to save your location in an instant, add a quick voice note on the move and spots will transcribe it and save all the details in your proile. Keep exploring without the distraction of your socials.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Create collections and share with friends.",
    description:
      "Restaurants, venues, hiking spots or anything you want, create collections of your favoruite spots. Share them with friends. Your parents won't have to search for a travel guide again!",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Location saver, archive, or travel journal?",
    description:
      "A simple app to save your locations or a complete Travel Journal right in your pocket, use it however you like.",
    icon: BookOpenIcon,
  }
];

export default function Features() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-600 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-2 lg:px-4">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Be Present.</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-xl">
                        Focus on the Journey, Capture the Moments.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Spots was built for both explorers finding their next adventure and the city slicker zipping around town.
                        Save your favorite hiking spots or that cool looking food spot you just walked past.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-md font-semibold leading-7 text-white">
                                    <feature.icon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-400" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            {/* <div className="w-full p-4">
                <FeatureImages />
            </div> */}
        </div>
    )
}


