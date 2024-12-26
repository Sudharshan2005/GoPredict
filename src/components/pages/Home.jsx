import { NavigationbarWithDropdownMultilevelMenu } from '../Navbar';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { SimpleFooter } from '../Footer';
import TypeWriterPredict from '../TypeWriter';

export function Home() {
  return (
    <div className="h-[170vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
      <header className="p-5">
        <NavigationbarWithDropdownMultilevelMenu />
      </header>

      <main className="p-5 space-y-2">
        <TypeWriterPredict />
        <ContainerScroll />
      </main>

      <footer className='ml-3 mr-3'>
        <SimpleFooter />
      </footer>
    </div>
  );
}
