import { TLink } from "@/components/PageTransition";

export default function NotFound() {
  return (
    <section className="phead" style={{ minHeight: "80svh" }}>
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>Wrong <span className="em">turn</span></h1>
        <p className="lede">That page isn&rsquo;t on the board.</p>
        <p style={{ marginTop: 28 }}><TLink className="btn" href="/">Back home</TLink></p>
      </div>
    </section>
  );
}
