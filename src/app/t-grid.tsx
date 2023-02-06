import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="Parent h-screen bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-flow-row-dense grid-cols-3 gap-3">
          <div className="col-span-2 rounded-lg bg-sky-500 p-6">01</div>
          <div className="col-span-2 rounded-lg bg-sky-500 p-6">02</div>
          <div className="rounded-lg bg-sky-500 p-6">03</div>
          <div className="rounded-lg bg-sky-500 p-6">04</div>
          <div className="rounded-lg bg-sky-500 p-6">05</div>
          <div className="col-span-2 rounded-lg bg-sky-500 p-6">06</div>
          <div className="rounded-lg bg-sky-500 p-6">07</div>
          <div className="rounded-lg bg-sky-500 p-6">08</div>
          <div className="rounded-lg bg-sky-500 p-6">09</div>
          <div className="col-span-2 rounded-lg bg-sky-500 p-6">10</div>
          <div className="rounded-lg bg-sky-500 p-6">11</div>
          <div className="rounded-lg bg-sky-500 p-6">12</div>
        </div>
      </div>
    </div>
  );
}
