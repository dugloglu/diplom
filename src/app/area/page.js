import {TextPageArea} from "../components/TextPage/TextPageArea"
import {AreaLinks} from "../components/AreaLinks/AreaLinks"

export default async function About() {
  return (
    <main className="main">
      <TextPageArea/>
      <AreaLinks/>
    </main>
  );
}