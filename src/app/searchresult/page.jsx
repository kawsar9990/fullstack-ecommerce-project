'use client';

import { Suspense } from "react";
import Page from "./product"

export default function SearchResultpage(){

    return(
        <Suspense>
        <Page />
        </Suspense>
    )
}