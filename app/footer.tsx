import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col text-background items-center bg-primary bg-[url('/background.jpg')] bg-cover bg-end">
      <div className="flex flex-row w-full md:py-24 sm:py-8 md:px-48 sm:px-16  p-8">
        <div className="flex flex-col w-1/2">
          <Image
            src="/logo-white.png"
            alt="Picture of logo"
            width={48}
            height={60}
          />
          <div className="py-8 md:w-1/3 w-1/2 font-medium leading-relaxed ">
            <strong>Pathway US</strong> - Kick-start your next journey in the US
          </div>
        </div>

        <div className="flex flex-col w-1/4">
          <div className="font-semibold pb-8">Company</div>
          <div className="py-2">About</div>
          <div className="py-2">Contact</div>
          <div className="py-2">Blog</div>
        </div>
        <div className="flex flex-col w-1/4">
          <div className="font-semibold pb-8">Service</div>
          <div className="py-2">Privacy Policy</div>
          <div className="py-2">Terms of Use</div>
        </div>
      </div>
      <div className="pb-8">
        &copy; 2024. All rights reserved. &nbsp;| &nbsp;Ian Park
      </div>
    </div>
  );
}
