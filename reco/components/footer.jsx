
import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-white bg-[#013C5A] py-10">
            <div className="w-full px-6 py-6">
                <hr className="mb-4 border-white" />

                {/* Reach Us and Company sections side by side */}
                <div className="flex flex-col md:flex-row justify-between gap-0 ">
                    {/* Reach Us Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Reach Us</h3>

                        <div className="flex items-center gap-2 mb-3">
                            <Image src="/phonecall.svg" width={20} height={20} alt="Phone Icon" />
                            <p className="text-lg">+1012 3456 789</p>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                            <Image src="/email.svg" width={20} height={20} alt="Email Icon" />
                            <p className="text-lg">revive@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image src="/location.svg" width={20} height={20} alt="Location Icon" />
                            <p className="text-lg">132 vizag xyx kksdvsdkvkn kssddm</p>
                        </div>
                    </div>

                    {/* Company Section */}
                    <div className="flex-1 md:text-left">
                        <h6 className="text-lg font-bold mb-3">Company</h6>
                        <p className="mb-1">About</p>
                        <p className="mb-1">Contact</p>
                        <p>Service</p>
                    </div>
                    <div className="flex-1 md:text-left">
                        <h6 className="text-lg font-bold mb-3">Legal</h6>
                        <p className="mb-1">Privacy & Policy</p>
                        <p className="mb-1">Terms & Services </p>
                        <p className="mb-1">Terms Of Use</p>
                        <p className="mb-1">Refund Policy</p>
                    </div>
                    <div className="flex-1 md:text-left">
                        <h6 className="text-lg font-bold mb-3">Quick Links</h6>
                        <p className="mb-1">Techlabz Keybox</p>
                        <p className="mb-1">Downloads </p>
                        <p className="mb-1">Forum</p>
                    </div>
                    <div className="flex-1 md:text-left bg-gray-400 rounded-4xl mx-2 px-2">
                        <h6 className="text-lg font-bold mb-3 px-3 py-1">Join Our Newsletter</h6>
                        <input type="email" name="email" placeholder="Your Email Address" className="bg-black px-2 p-1 italic" />
                        <button type="submit" className="bg-[#013C5A] px-2 italic p-1">Subscribe</button>
                        <p className="mb-1 py-2">Will send you weekly updates for your better tool management.</p>
                    </div>
                </div>

                {/* Footer bottom text */}
                <p className="text-center mt-6">© 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}