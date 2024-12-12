import { Typography } from "@material-tailwind/react";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function SimpleFooter() {
  const links = [
    {
      label: "About Us",
      description: "Learn more about our mission and values.",
      avatarSrc: "https://example.com/about-avatar.png",
      joined: "January 2024",
    },
    {
      label: "License",
      description: "View our licensing details and usage terms.",
      avatarSrc: "https://example.com/license-avatar.png",
      joined: "January 2024",
    },
    {
      label: "Contribute",
      description: "Get involved with our open-source projects.",
      avatarSrc: "https://example.com/contribute-avatar.png",
      joined: "January 2024",
    },
    {
      label: "Contact Us",
      description: "Reach out for questions or support.",
      avatarSrc: "https://example.com/contact-avatar.png",
      joined: "January 2024",
    },
  ];

  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between mb-0 pb-0">
      <Typography color="white" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {links.map((link, index) => (
          <li key={index}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  {link.label}
                </Typography>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 text-left">
                  <Avatar>
                    <AvatarImage src={link.avatarSrc} />
                    <AvatarFallback>{link.label.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 text-left">
                    <h4 className="text-sm font-semibold text-left">
                      {link.label}
                    </h4>
                    <p className="text-sm text-left">{link.description}</p>
                    <div className="flex items-center pt-2 text-left">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                      <span className="text-xs text-muted-foreground text-left">
                        Joined {link.joined}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </li>
        ))}
      </ul>
    </footer>
  );
}