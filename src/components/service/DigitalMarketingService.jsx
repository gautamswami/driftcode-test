import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketingService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let service__items_3 = gsap.utils.toArray(".service_animation");
        let service__items_heading = gsap.utils.toArray(
          ".service_animation h3"
        );
        let service__items_content = gsap.utils.toArray(
          ".service_animation .service__content-3"
        );

        service__items_3.forEach((service_item, i) => {
          gsap.set([service__items_heading[i], service__items_content[i]], {
            x: -30,
            opacity: 0,
          });

          let service3_timeline = gsap.timeline({
            scrollTrigger: {
              trigger: service_item,
              start: "top center+=200",
              markers: false,
            },
          });

          service3_timeline.to(service__items_heading[i], {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1.5,
            stagger: {
              each: 0.2,
            },
          });
          service3_timeline.to(
            service__items_content[i],
            {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
              stagger: {
                each: 0.2,
              },
            },
            "-=1"
          );
        });
      });
      return () => tHero.revert();
    }
  }, []);

  if (typeof window !== "undefined") {
    const serviceImgItem = document.querySelectorAll(".service__item-3");

    function followImageCursor(event, serviceImgItem) {
      const contentBox = serviceImgItem.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      // serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    serviceImgItem.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(followImageCursor(event, item), 1000);
      });
    });
  }

  return (
    <>
      <section className="service__area-3 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xx-12">
              <div className="service__list-3">
                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/contact" className="service__title-3">
                      Web Application <br />
                      Development
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p>
                    <ul className="">
                      <li>+ UI Design</li>
                      <li>+ Architecture Design</li>
                      <li>+ Deployment</li>
                      <li>+ Maintainence</li>
                      <li>+ Admin Panel</li>
                    </ul>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3>
                    <Link href="/contact" className="service__title-3 ">
                      Mobile Application <br />
                      Development (Android / IOS)
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p>
                    <ul className="">
                      <li>+ UI Design</li>
                      <li>+ Architecture Design</li>
                      <li>+ Deployment on App store and Play store</li>
                      <li>+ Maintainence</li>
                      <li>+ Admin Panel</li>
                    </ul>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      Website / Webpages
                      <br />
                      Development
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p>
                    <ul className="">
                      <li>+ CMS</li>
                      <li>+ SEO</li>
                      <li>+ Maintainence</li>
                    </ul>
                  </div>
                </div>

                <div className="service__item-3 service_animation">
                  <h3 className="">
                    <Link href="/service-details" className="service__title-3">
                      Maintainence / Bug Fix
                      <br />
                    </Link>
                  </h3>
                  <div className="service__content-3">
                    <p>
                      We help brands stand out through aweful, elegant visual
                      design. Our design mainly philosophy.
                    </p>
                    <ul className="">
                      <li>+ Resolve Bug</li>
                      <li>+ Create new feature / functionality</li>
                    </ul>
                  </div>
                </div>

                <div className="service3__img-wrap">
                  <div className="service3__img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingService;
