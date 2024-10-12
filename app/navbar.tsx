"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Activity",
    "System",
    "Deployments",
    "My Settings",
    "Help & Feedback",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="flex flex-row fixed top-0 z-50 sm:px-8 md:px-48 py-3 bg-white justify-between"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close" : "Open"} />
      </NavbarContent>

      {/* Brand for Mobile */}
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <Image src="/logo.png" alt="Picture of logo" width={24} height={32} />
        </NavbarBrand>
      </NavbarContent>

      {/* Brand and Links for Desktop */}
      <NavbarContent className="hidden sm:flex items-center" justify="center">
        <NavbarBrand className="lg:pr-4 sm:pr-2">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Picture of logo"
              width={24}
              height={32}
            />
          </Link>
        </NavbarBrand>
        <NavbarItem className="lg:px-4 sm:px-2">
          <Link
            className="text-black hover:text-primary transition focus:outline-none"
            href="#"
          >
            <p className="font-medium">About</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:px-4 sm:px-2" isActive>
          <Link
            className="text-black hover:text-primary transition focus:outline-none"
            href="#"
            aria-current="page"
          >
            <p className="font-medium">Contact</p>
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:px-4  sm:px-2" isActive>
          <Link
            className="text-black hover:text-primary transition focus:outline-none"
            href="#"
            aria-current="page"
          >
            <p className="font-medium">Blog</p>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Compare Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          {/* Don't display for the url path */}
          {currentPath !== "/compare" && (
            <Button
              disableRipple
              disableAnimation
              as={Link}
              href="/compare"
              radius="sm"
              variant="solid"
              className="md:flex sm:flex hidden items-center gap-5 self-start rounded-lg bg-primary pl-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <p className="font-medium -m-1">Compare</p>
              <div className="text-white -m-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                </svg>
              </div>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
