import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="Parent h-screen bg-slate-900 text-white">
      <div className="container px-2">
        <img
          className="float-left w-64"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
        <img
          className="float-right w-32"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
        <p className="clear-both">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nisi
          eaque impedit dicta ut saepe magni autem perferendis a, iste cumque
          fugit incidunt mollitia possimus consectetur, neque cupiditate porro
          vitae.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nisi
          eaque impedit dicta ut saepe magni autem perferendis a, iste cumque
          fugit incidunt mollitia possimus consectetur, neque cupiditate porro
          vitae.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nisi
          eaque impedit dicta ut saepe magni autem perferendis a, iste cumque
          fugit incidunt mollitia possimus consectetur, neque cupiditate porro
          vitae.
        </p>
      </div>
    </div>
  );
}
