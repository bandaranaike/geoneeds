import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'Projects', href: '/projects'},
    {name: 'About us', href: '/about-us'},
    {name: 'Contact us', href: '/contact-us'},
]

export default function Header({currentUrl}: { currentUrl?: string }) {
    return (
        <Disclosure as="nav" className="dark:bg-gray-800 bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 hover:bg-gray-700 dark:hover:text-white focus:ring-2 dark:focus:ring-white focus:outline-hidden focus:ring-inset text-gray-700">
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
                                className="h-10 w-auto"
                            /></Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.href == currentUrl ? 'page' : undefined}
                                        className={item.href == currentUrl ? 'dark:text-white px-3 py-2 text-sm font-medium text-blue-400' :
                                            'dark:hover:text-white px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-200 hover:text-blue-500'
                                        }
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.href == currentUrl ? 'page' : undefined}
                            className={`${item.href == currentUrl ? 'block px-3 py-2 text-blue-600' : 'text-gray-600 hover:text-gray-500 block px-3 py-2'}`}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
