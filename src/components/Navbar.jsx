import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
// import { DialogDefault } from "./Modal";
import { useNavigate } from "react-router-dom";
 
const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              IPL
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <MenuItem onClick={() => navigate('/teams-page')}>
          <a onClick={() => navigate('/teams-page')}>Teams</a>
          </MenuItem>
          <MenuItem>
            <a href="https://www.iplt20.com/matches/results" target="_blank" rel="noopener noreferrer">Matches</a>
          </MenuItem>
          <MenuItem onClick={() => navigate('/table-page')}>
            Table
          </MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
        <MenuItem onClick={() => navigate('/teams-page')}>
          Teams
          </MenuItem>
          <MenuItem>
            <a href="https://www.iplt20.com/matches/results" target="_blank" rel="noopener noreferrer">Matches</a>
          </MenuItem>
          <MenuItem onClick={() => navigate('/table-page')}>
            Table
          </MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}


 
function NavList() {
  const navigate = useNavigate()
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/home"
        variant="small"
        color="blue-gray"
        className="font-medium"
        
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        onClick={() => navigate('/predict-page')}
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Menu
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <a href="https://www.iplt20.com/news" target="_blank" rel="noopener noreferrer">News</a>
        </ListItem>
      </Typography>
    </List>
  );
}

const handleLogout = () => {
  // localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  window.location.href = "/";
};

 
export function NavigationbarWithDropdownMultilevelMenu() {
  const navigate = useNavigate()
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mt-7 top-10 z-50 mx-auto max-w-screen-xl px-4 py-2 bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          GoPredict
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="sm" onClick={() => navigate('/predict-page')}>Get Started</Button>
          <Button onClick={handleLogout} variant="outlined" size="sm">
            Log Out
          </Button>
          {/* <DialogDefault /> */}
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth>
            Get Started
          </Button>
          <Button variant="outlined" size="sm" fullWidth>
            Log Out
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
