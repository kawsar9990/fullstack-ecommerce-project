'use client'
import { Suspense } from "react";
import Page from "./Productlist";

export default function PageWrapper() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}