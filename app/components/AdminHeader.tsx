import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {signOut} from "next-auth/react";
import {usePathname} from "next/navigation";

const navigation = [
    {name: 'Dashboard', href: '/admin'},
    {name: 'Admin projects', href: '/admin/projects'},
    {name: 'Admin new project', href: '/admin/projects/new'},
]

export default function AdminHeader() {
    const pathname = usePathname() || "";
    const isActive = (href: string) => {
        if (href === "/admin") return pathname === "/admin";
        if (href === "/admin/projects/new") return pathname === href;
        if (href === "/admin/projects") return pathname === href || (pathname.startsWith("/admin/projects/") && pathname !== "/admin/projects/new");
        return pathname === href;
    };

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-geo border border-line bg-surface-muted p-2 text-primary hover:border-primary focus:ring-2 focus:ring-primary focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center gap-2">
                            <img
                                alt="Geo Needs"
                                src="/logo.png"
                                className="h-10 w-auto"
                            />
                            <span className="karla-font text-lg font-extrabold tracking-wider text-foreground">ADMIN</span>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex gap-2">
                                {navigation.map((item) => (
                                    isActive(item.href) ? (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current="page"
                                        className="rounded-geo bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm"
                                    >
                                        {item.name}
                                    </a>
                                    ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="rounded-geo px-4 py-2 text-sm font-semibold text-foreground/70 hover:bg-surface-muted hover:text-primary"
                                    >
                                        {item.name}
                                    </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <MenuButton
                                    className="relative flex rounded-full bg-slate-900 text-sm ring-2 ring-line focus:ring-primary focus:outline-hidden">
                                    <span className="absolute -inset-1.5"/>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="https://res.cloudinary.com/ddpqwwzwe/image/upload/v1741073087/geoneeds/svtphppm9nve84soixnf.jpg"
                                        className="size-8 rounded-full"
                                    />
                                </MenuButton>
                            </div>
                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-geo border border-line bg-surface py-1 shadow-lg transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <MenuItem>
                                    <a
                                        onClick={() => signOut()}
                                        href="#"
                                        className="block px-4 py-2 text-sm font-semibold text-foreground data-focus:bg-surface-muted data-focus:outline-hidden"
                                    >
                                        Sign out
                                    </a>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="border-t border-line bg-surface sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        isActive(item.href) ? (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current="page"
                            className="block rounded-geo bg-primary px-3 py-2 text-base font-semibold text-white"
                        >
                            {item.name}
                        </DisclosureButton>
                        ) : (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-geo px-3 py-2 text-base font-semibold text-foreground/70 hover:bg-surface-muted hover:text-primary"
                        >
                            {item.name}
                        </DisclosureButton>
                        )
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
