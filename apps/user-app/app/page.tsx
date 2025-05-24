import Image, { type ImageProps } from "next/image";

import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import Appbar from "@repo/ui/appbar";
;


export default function ClientHome() {
  return (
    <>
      <Appbar/>
      <Button />
    </>
  );
}
