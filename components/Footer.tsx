import Image from "next/image";
import { PHOTOS } from "@/data/photos";
import { SITE } from "@/data/site";
import { TLink } from "./PageTransition";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <Image className="foot__logo" src={PHOTOS.logo.src} width={PHOTOS.logo.w} height={PHOTOS.logo.h} alt={PHOTOS.logo.alt} sizes="190px" />
            <p className="fine" style={{ marginTop: 18 }}>
              {SITE.address[0]}<br />{SITE.address[1]}
            </p>
            <p className="fine">Pour responsibly. 21+ with valid ID for daiquiris.</p>
          </div>
          <div>
            <p className="foot__h">Follow</p>
            {/* UNVERIFIED: follower count is approximate. */}
            <a className="foot__ig" href={SITE.instagram} target="_blank" rel="noopener">
              Instagram
              <small>{SITE.instagramFollowers} followers &middot; @bourbondaiquiris_nola</small>
            </a>
            <ul style={{ marginTop: 18 }}>
              {SITE.linktree && <li><a href={SITE.linktree} target="_blank" rel="noopener">Linktree</a></li>}
              <li><a href={SITE.facebook} target="_blank" rel="noopener">Facebook</a></li>
            </ul>
          </div>
          <div>
            <p className="foot__h">Go</p>
            <ul>
              <li><TLink href="/menu">Menu</TLink></li>
              <li><TLink href="/events">Events</TLink></li>
              <li><a href={SITE.uberEats} target="_blank" rel="noopener">Order on Uber Eats</a></li>
              <li><a href={SITE.mapsLink} target="_blank" rel="noopener">Get directions</a></li>
            </ul>
          </div>
        </div>
        <div className="foot__base">
          <span>&copy; {new Date().getFullYear()} Bourbon Daiquiris Wings &amp; Things</span>
          <span>Designed by <a href="https://influential.live" target="_blank" rel="noopener">IN-FLU-ENTIAL</a></span>
        </div>
      </div>
    </footer>
  );
}
