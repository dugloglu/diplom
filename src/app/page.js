import {TextPageHome} from "./components/TextPage/TextPageHome"
import {Banner} from "./components/Banner/Banner"
import  FeedBackForm  from "./components/FeedBackForm/FeedBackForm"


export default async function Home() {
  return (
    <main className="main">
      <Banner/>
      <TextPageHome/>
      <FeedBackForm />
    </main>
  );
}