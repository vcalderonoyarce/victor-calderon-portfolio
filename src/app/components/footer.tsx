'use client'
import React, { Component } from "react"
import Image from 'next/image'

export default class Footer extends Component { 
    render() {
        return <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Built with <Image className="inline-block align-middle" src="/images/nextjs.svg" alt="NextJS" width="60" height="12"></Image>.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    }
}