import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import ThemeToggle from "@/app/components/ThemeToggle";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Projects', href: '/projects'},
    {name: 'About us', href: '/about-us'},
    {name: 'Contact us', href: '/contact-us'},
]

export default function Header({currentUrl}: { currentUrl?: string }) {
    return (
        <Disclosure as="nav" className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-geo border border-line bg-surface-muted p-2 text-primary transition hover:border-primary focus:ring-2 focus:ring-primary focus:outline-hidden focus:ring-inset">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href={'/'}><img
                                alt="Geo Needs"
                                src="/logo.png"
                                className="h-12 w-auto"
                            /></Link>
                        </div>
                        <div className="hidden sm:ml-10 sm:block">
                            <div className="flex items-center gap-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.href == currentUrl ? 'page' : undefined}
                                        className={item.href == currentUrl ? 'rounded-geo bg-primary text-white px-4 py-2 text-sm font-semibold shadow-sm' :
                                            'rounded-geo px-4 py-2 text-sm font-semibold text-foreground/70 transition hover:bg-surface-muted hover:text-primary'
                                        }
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ThemeToggle/>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="border-t border-line bg-surface sm:hidden">
                <div className="space-y-2 px-4 pt-3 pb-4">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.href == currentUrl ? 'page' : undefined}
                            className={`${item.href == currentUrl ? 'block rounded-geo bg-primary px-4 py-3 font-semibold text-white' : 'block rounded-geo px-4 py-3 font-semibold text-foreground/75 hover:bg-surface-muted hover:text-primary'}`}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
