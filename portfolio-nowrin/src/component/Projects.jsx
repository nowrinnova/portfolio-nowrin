const Projects = () => {
    return (
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 md:mt-5 leading-10">
        <h1 className="text-2xl md:text-3xl py-5 text-center font-semibold text-gray-600">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Project */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="image/project1.png" alt="ClouxGame" className="w-full h-52 object-cover" />
            </figure>
            <div className="card-body">
              <div className="card-actions flex flex-wrap gap-2">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">FireBase</div>
                <div className="badge badge-outline">MongoDb</div>
                <div className="badge badge-outline">TailwindCSS</div>
              </div>
              <h2 className="card-title text-purple-700 pt-3">ClouxGame</h2>
              <p className="text-sm text-gray-600">
                ClouxGame is a game review platform where users can explore detailed game insights, reviews, and ratings. 
                Registered users can contribute their own reviews while browsing top-rated and latest games based on rating and year.
              </p>
              <div className="card-actions justify-end">
                <a href="https://game-review-site-cda75.web.app/" className="badge badge-outline text-purple-600">
                  Live Link
                </a>
              </div>
            </div>
          </div>
  
          {/* Second Project */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="image/project2.png" alt="CouponWallet" className="w-full h-52 object-cover" />
            </figure>
            <div className="card-body">
              <div className="card-actions flex flex-wrap gap-2">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">Firebase</div>
                <div className="badge badge-outline">TailwindCSS</div>
              </div>
              <h2 className="card-title text-purple-700 pt-3">CouponWallet</h2>
              <p className="text-sm text-gray-600">
                CouponWallet is a discount platform that helps users find the best restaurant deals. 
                Users can explore which dishes have special discounts, making dining more affordable and enjoyable.
              </p>
              <div className="card-actions justify-end">
                <a href="https://coupon-app-747e3.web.app/" className="badge badge-outline text-purple-600">
                  Live Link
                </a>
              </div>
            </div>
          </div>
  
          {/* Third Project */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="image/project3.png" alt="Gadget E-commerce Site" className="w-full h-52 object-cover" />
            </figure>
            <div className="card-body">
              <div className="card-actions flex flex-wrap gap-2">
                <div className="badge badge-outline">React</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">DaisyUI</div>
                <div className="badge badge-outline">JavaScript</div>
              </div>
              <h2 className="card-title text-purple-700 pt-3">Gadget E-commerce Site</h2>
              <p className="text-sm text-gray-600">
                A tech-focused e-commerce website featuring gadgets like smartphones, laptops, tablets, and accessories. 
                Users can browse, compare, and shop for the latest technology from top brands.
              </p>
              <div className="card-actions justify-end">
                <a href="https://resonant-sunshine-fee7fa.netlify.app/" className="badge badge-outline text-purple-600">
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  