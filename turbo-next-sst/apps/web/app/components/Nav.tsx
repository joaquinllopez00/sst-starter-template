"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "store/hooks";

export const Nav = () => {
  const redirectToHome = () => {
    window.location.href = "/";
  };

  const { me } = useAppSelector((state) => state.user);

  return (
    <nav className="flex items-center justify-between container h-full sm:px-20 px-2 py-4">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={200}
        onClick={redirectToHome}
        style={{ cursor: "pointer" }}
      />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[200px]">
                <NavigationMenuLink>
                  <a
                    className={
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    }
                  >
                    <div className="text-sm font-medium leading-none">Managed Services</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Explore how Red Hook can help you manage your business
                    </p>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink>
                  <a
                    className={
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    }
                  >
                    <div className="text-sm font-medium leading-none">Consulting</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Red Hook can help you with your business needs and goals
                    </p>
                  </a>
                </NavigationMenuLink>

                <NavigationMenuLink>
                  <a
                    className={
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    }
                  >
                    <div className="text-sm font-medium leading-none">App Development</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Explore Red Hooks portfolio
                    </p>
                  </a>
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {me ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{me.email}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col w-[200px]">
                  <NavigationMenuLink>
                    <a
                      className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      }
                    >
                      <div className="text-sm font-medium leading-none">Profile</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">View your profile</p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <a
                      className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      }
                    >
                      <div className="text-sm font-medium leading-none">Settings</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Manage your settings</p>
                    </a>
                  </NavigationMenuLink>

                  <NavigationMenuLink>
                    <a
                      className={
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      }
                    >
                      <div className="text-sm font-medium leading-none">Logout</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Logout of your account</p>
                    </a>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem>
              <Link
                href="/login"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
              >
                Login
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
