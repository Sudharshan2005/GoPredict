import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";

import { SimpleFooter } from "../Footer";
import { AnimatedTestimonialsBatters } from "../TeamImages";
import { TeamLogos } from "../TeamSelection";

export function TeamsPage() {
    return (
        <>
        <div className='h-[200vh] w-full bg-gradient-to-b from-black to-blue-gray-900'>
          <div className='p-5'>
            <NavigationbarWithDropdownMultilevelMenu />
            <div className="text-center mt-14 w-auto">
              <TeamLogos />
            </div>
            <div className="mt-14">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-gray-500">TEAM NAME</h1>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl ml-20 text-blue-gray-600">Batters:</h1>
                <AnimatedTestimonialsBatters />
              </div>
              <div className="mt-10">
                <h1 className="text-2xl ml-20 text-blue-gray-600">All-Rounders:</h1>
                <AnimatedTestimonialsBatters />
              </div>
              <div className="mt-10">
                <h1 className="text-2xl ml-20 text-blue-gray-600">Bowlers:</h1>
                <AnimatedTestimonialsBatters />
              </div>
            </div>
          </div>
        </div>
        <footer className="p-5">
            <SimpleFooter />
          </footer>
        </>
      )
}