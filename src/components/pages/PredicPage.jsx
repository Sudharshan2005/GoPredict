import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { Flipping } from "../FlippingWords";
import { AceternityCards } from "../HoverCard";
import { SimpleFooter } from "../Footer";

export function PredictForm() {
    return (
        <>
        <div className='h-[110vh] w-full bg-gradient-to-b from-black to-blue-gray-900'>
          <div className='p-5'>
            <NavigationbarWithDropdownMultilevelMenu />
            <Flipping />
            <div className="flex flex-row justify-around mt-24">
              <AceternityCards details={{text: "Winner",buttonLabel: "GoWinner",tagline: "Unlock insights for match outcomes."}} />
              <AceternityCards details={{text: "Score",buttonLabel: "GoScore",tagline: "Estimate the innings score."}} />
            </div>
          </div>
        </div>
        <footer className="p-5">
            <SimpleFooter />
          </footer>
        </>
      )
}

