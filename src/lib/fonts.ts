import { Baloo_2, Sniglet } from "next/font/google";

export const baloo = Baloo_2({
    subsets: ["latin"],
    variable: "--font-baloo",
    weight: ["400", "500", "600", "700"],
});

export const sniglet = Sniglet({
    subsets: ["latin"],
    variable: "--font-sniglet",
    weight: ["400", "800"],
});
