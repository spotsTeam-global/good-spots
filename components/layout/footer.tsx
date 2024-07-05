
export default function Footer() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get notified when we’re launching.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Discover the world’s best spots for photography, dining, fitness,
            and more—all in one place. Good Spots is a curated list of the most
            amazing locations, sourced by a community of passionate explorers
            just like you. Whether you’re searching for the perfect shoot
            location, the tastiest food joint, or the best gym, our crowdsourced
            platform has got you covered. Our platform is open-source, allowing
            everyone to contribute and ensure our list remains diverse, dynamic,
            and ever-growing. Each spot is verified by our community, ensuring
            you get the best recommendations every time.
          </p>
          <form
            action="https://supply.us22.list-manage.com/subscribe/post"
            method="POST"
            className="mx-auto mt-10 flex max-w-md gap-x-4"
          >
            <input
              type="hidden"
              name="u"
              value="cd62368140e21d3987b94f947"
            ></input>
            <input type="hidden" name="id" value="f7f7238c00"></input>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="MERGE0"
              name="MERGE0"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                r={1}
                cx={0}
                cy={0}
                id="759c1415-0410-454c-8f7c-9a820de03641"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
