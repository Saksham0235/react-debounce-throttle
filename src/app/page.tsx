import Accordion from "@/components/Accordion";
import AutoComplete from "@/components/AutoCompleteSearchBar/AutoComplete";
import Parent from "@/components/CallbackParent/Parent";
import Debouncing from "@/components/Debouncing/Debouncing";
import MemoParent from "@/components/MemoParent/MemoParent";
import Throttling from "@/components/Throttling/Throttling";

export default function Home() {
  return (
<div className="flex flex-col gap-10 items-center justify-center min-h-screen py-2">
{/* <Accordion/> */}
{/* <Debouncing/> */}
{/* <Throttling/> */}
{/* <Parent/> */}
{/* <MemoParent/> */}
<AutoComplete/>
</div>
  );
}
