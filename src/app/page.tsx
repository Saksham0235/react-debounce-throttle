import Accordion from "@/components/Accordion";
import Debouncing from "@/components/Debouncing/Debouncing";
import Throttling from "@/components/Throttling/Throttling";

export default function Home() {
  return (
<div className="flex flex-col gap-10 items-center justify-center min-h-screen py-2">
{/* <Accordion/> */}
<Debouncing/>
<Throttling/>
</div>
  );
}
