import { getAllPerfumes } from "@/lib/function";
import { PerfumeInfo } from "./PerfumeEx";
import PerfumeList from "./PerfumeList";

export default async function LikeTest() {
  const perfumeData: { ok: number; item: PerfumeInfo[] } = await getAllPerfumes();
  const data = { ok: perfumeData.ok, item: perfumeData.item.slice(0, perfumeData.item.length - 11) };

  return (
    <PerfumeList data={data} />
    // <ul>
    //   <PerfumeEx item={perfumeList[0]} />
    //   <PerfumeEx item={perfumeList[1]} />
    //   <PerfumeEx item={perfumeList[2]} />
    //   <PerfumeEx item={perfumeList[3]} />
    //   <PerfumeEx item={perfumeList[4]} />
    //   <PerfumeEx item={perfumeList[5]} />
    // </ul>
  );
}
