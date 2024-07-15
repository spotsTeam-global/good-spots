import Image from 'next/image'
import mockup from '../../public/phone-mockup.webp'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { PinContainer } from '../ui/3d-pin'
import SignupFixed from '../layout/signup-fixed'


const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function AppInfo() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                    <div className="px-6 lg:px-0 lg:pt-4">
                        <div className="mx-auto max-w-2xl">
                            <div className="max-w-lg">
                                <div className="mt-24 sm:mt-32 lg:mt-16">
                                    <a href="#" className="inline-flex space-x-6">
                                        <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                                            Launching 2024
                                        </span>
                                    </a>
                                </div>
                                <h2 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Keep track of your adventures, one spot at a time.
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Easily capture every memorable location with just a press of a button. Whether it’s a food truck, a cozy diner, a potential filming location, or your favorite park bench, Spots has you covered. Never forget a special place again with Spots.
                                </p>
                                <h3 className="mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Sign up</h3>
                                <p className="mt-6 text-lg leading-8 text-gray-600"> Join our waiting list for updates on when we're launching and be the first to get access</p>
                                <div className="mt-8">                                    
                                    <SignupFixed />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                        <div
                            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
                            aria-hidden="true"
                        />
                        <div className="shadow-lg md:rounded-3xl">
                            <div className=" [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                                <div
                                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                                    aria-hidden="true"
                                />
                                <div className="h-[40rem] w-full flex items-center justify-center ">
                                    <PinContainer
                                        title="Spot Saved"
                                        containerClassName=""
                                        className=""
                                    >
                                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[30rem] h-[30rem]">
                                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-600">
                                                Your favorite spots all in one place.
                                            </h3>
                                            <div className="text-base !m-0 !p-0 font-normal">
                                                <span className="text-slate-500 ">
                                                    Opens in an instant, saves your location and uses your voice to make notes.
                                                </span>
                                            </div>
                                            <div className="flex flex-1 w-full rounded-lg mt-4" />
                                            <Image
                                                src={mockup}
                                                height={1000}
                                                width={1000}
                                                alt="phone"
                                            />
                                            {/* <div className="flex flex-1 w-full rounded-lg mt-1  opacity-25" /> */}
                                        </div>
                                    </PinContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
            </div>
        </div>
    )
}

