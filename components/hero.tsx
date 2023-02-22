
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props extends React.HTMLProps<HTMLDivElement> {
  heroImage: StaticImageData;
}

export default function Hero({
  heroImage,
}: Props) {
  return (
    <div className="mx-auto mt-6 lg:grid lg:grid-cols-3 max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8">
      <div className="relative px-6 lg:px-8 col-span-2 sm:overflow-hidden sm:rounded-lg ">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              We are working on development diligently.{' '}
              <Link href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Save Your Time with Efficient and Effective Bug Detection!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 block">
              신속하게 오류를 발견하고 사전에 이슈를 예방하세요.
            </p>
            <p className="text-lg leading-8 text-gray-600">
              제품이 출시된 후에 발생할 수 있는 비용과 노력을 줄이십시요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#" className="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-w-1 aspect-h-1 hidden overflow-hidden rounded-lg lg:block">
        <Image src={heroImage} alt="" className="h-fill w-fill object-cover object-center"/>
      </div>
    </div>
);
}