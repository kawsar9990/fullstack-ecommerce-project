'use client'
import { Suspense } from "react";
import Page from "./product";

export default function PageWrapper() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}