'use client'
import React, { Component } from "react";
import Image from 'next/image';
import styles from './header.module.css'

export default class Header extends Component {
    render() {
        return (
            <header className="sticky top-0 left-0 right-0 z-50">
                <nav id={styles.site_header} className="text-white backdrop-blur px-4 lg:px-6 py-5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <span className="self-center">
                                <Image src="/images/vcalderonoyarce-logo.svg" alt="Víctor Calderón Oyarce, vcalderonoyarce, @vcalderonoyarce" width="48" height="53"></Image>
                            </span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="https://www.linkedin.com/in/vcalderonoyarce/" target="_blank" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                <Image src="/images/linkedin.svg" alt="LinkedIn" width="20" height="20"></Image>
                            </a>
                            <a href="https://www.linkedin.com/in/vcalderonoyarce/" target="_blank" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                <Image src="/images/threads_logo.svg" alt="LinkedIn" width="20" height="20"></Image>
                            </a>

                        </div>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
                                <li>
                                    <a href="/" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" aria-current="page">Inicio</a>
                                </li>
                                <li>
                                    <a href="/about" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Acerca de</a>
                                </li>
                                <li>
                                    <a href="/blog" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Blog</a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
