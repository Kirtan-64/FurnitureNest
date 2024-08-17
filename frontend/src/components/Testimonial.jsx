const Testimonial = () => {
    return (
        <section className="py-12 text-blue-900 sm:py-16 lg:py-24">
  <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center">
      <div className="text-center">
        <p className="text-lg font-medium text-blue-600">
          What clients say about their experience with us
        </p>
        <h2 className="mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl">
          Client Testimonials
        </h2>
      </div>
      <div className="order-3 mt-8 text-center md:mt-16">
        <button className="rounded-lg border-2 border-blue-700 bg-blue-700 px-6 py-2 font-medium text-white transition hover:translate-y-1">
          More reviews on TrustPilot
        </button>
      </div>
      <div className="relative mx-auto mt-20 grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
        <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div className="flex flex-1 flex-col justify-between border border-blue-600 p-6 lg:py-7 lg:px-5">
            <div className="flex-1">
              <p className="text-2xl font-bold -mx-5 px-4 border-blue-500">
                Absolutely recommended!
              </p>
              <blockquote className="mt-8 flex-1">
                <p className=" leading-relaxed text-blue-900">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium dolores facere repellendus, velit quis fugiat.
                </p>
              </blockquote>
            </div>
            <div className="-mx-5  mt-8 inline-flex items-center text-center px-8 py-1">
              <div className="">
                <p className="text-base font-bold">James Khawalski</p>
                <p className="mt-0.5 text-sm">CEO, Mavoline</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div className="flex flex-1 flex-col justify-between border border-blue-600 p-6 lg:py-7 lg:px-5">
            <div className="flex-1">
              <p className="text-2xl font-bold -mx-5 px-4 border-blue-500">
                Service was amazing!
              </p>
              <blockquote className="mt-8 flex-1">
                <p className=" leading-relaxed text-blue-900">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium dolores facere repellendus, velit quis fugiat.
                </p>
              </blockquote>
            </div>
            <div className="-mx-5  mt-8 inline-flex items-center text-center px-8 py-1">
              <div className="">
                <p className="text-base font-bold">Jacob Jones</p>
                <p className="text-blue-90 mt-0.5 text-sm">
                  Youtube Personality
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div className="flex flex-1 flex-col justify-between border border-blue-600 p-6 lg:py-7 lg:px-5">
            <div className="flex-1">
              <p className="text-2xl font-bold -mx-5 px-4 border-blue-500">
                Saved me 1000s of hours
              </p>
              <blockquote className="mt-8 flex-1">
                <p className=" leading-relaxed text-blue-900">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium dolores facere repellendus, velit quis fugiat.
                </p>
              </blockquote>
            </div>
            <div className="-mx-5  mt-8 inline-flex items-center text-center px-8 py-1">
              <div className="">
                <p className="text-base font-bold">Jenny Wilson</p>
                <p className="text-blue-90 mt-0.5 text-sm">
                  Esports Commentator
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-1 flex flex-col overflow-hidden shadow-xl shadow-blue-200">
          <div className="flex flex-1 flex-col justify-between border border-blue-600 p-6 lg:py-7 lg:px-5">
            <div className="flex-1">
              <p className="text-2xl font-bold -mx-5 px-4 border-blue-500">
                Service was amazing!
              </p>
              <blockquote className="mt-8 flex-1">
                <p className=" leading-relaxed text-blue-900">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium dolores facere repellendus, velit quis fugiat.
                </p>
              </blockquote>
            </div>
            <div className="-mx-5  mt-8 inline-flex items-center text-center px-8 py-1">
              <div className="">
                <p className="text-base font-bold">Jacob Jones</p>
                <p className="text-blue-90 mt-0.5 text-sm">
                  Youtube Personality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default Testimonial;