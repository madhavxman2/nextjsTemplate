import { Inter, Lusitana, Roboto } from "next/font/google";

// Initialize each font with the required subsets and weights
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });
export const roboto = Roboto({ subsets: ["latin"],weight:["300", "700"] });
