
"use client"
import Accordion from "@/components/Accordion";
import AutoComplete from "@/components/AutoCompleteSearchBar/AutoComplete";
import Parent from "@/components/CallbackParent/Parent";
import Debouncing from "@/components/Debouncing/Debouncing";
import FiveDivs from "@/components/FiveDivsin1Row/FiveDivsOneRow";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import MemoParent from "@/components/MemoParent/MemoParent";
import RateLimiter from "@/components/RateLimiter/RateLimiter";
import { ThemeProvider } from "@/components/ThemeContext/ThemeContext";
import ThemeHome from "@/components/ThemeContext/ThemeHome";
import Throttling from "@/components/Throttling/Throttling";
import { useState } from "react";

export default function Home() {
  const [theme,setTheme]=useState("light")
  return (
<div className="flex flex-col gap-10 items-center justify-center min-h-screen py-2">
{/* <Accordion/> */}
{/* <Debouncing/> */}
{/* <Throttling/> */}
{/* <Parent/> */}
{/* <MemoParent/> */}
{/* <AutoComplete/> */}
{/* <InfiniteScroll /> */}
{/* <FiveDivs/> */}
{/* <RateLimiter /> */}
<ThemeProvider>
<ThemeHome/>
</ThemeProvider>

</div>
  );
}
