/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
// @ts-no-check
// import { imageSlide } from "../helpers/data";
// import styles from "../styles/components/FeatureStyle.module.css"
// import { AiOutlineArrowRight } from "react-icons/ai";
// import React from 'react';

// const delay = 7000;
// const Feature = () => {
//     const [index, setIndex] = React.useState(0);
//     const timeoutRef:any = React.useRef(null);

//     function resetTimeout() {
//         if (timeoutRef.current) {
//           clearTimeout(timeoutRef.current);
//         }
//       }

//       React.useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = setTimeout(
//           () =>
//             setIndex((prevIndex) =>
//               prevIndex === imageSlide.length - 1 ? 0 : prevIndex + 1
//             ),
//           delay
//         );

//         return () => {
//           resetTimeout();
//         };
//       }, [index]);
//   // const {key, heading, images } = props.imageSlide.map(data => data)
//   return (
//     <>
//       <div className={`${styles.container}`}>
//         <div className={`${styles.main} section_1`}>
//           <div className={`${styles.main__section}`}>
//             <div className={`${styles.grid__tab}`}>
//               <div className={`${styles.content}`}>
//                 <div className={`${styles.main__content} display`}>
//                   <div className={`${styles.heading}`}>
//                     <h2 className={`${styles.main__heading}`}>A better experience, for a better home</h2>
//                     <div className={`${styles.main__para}`}>
//                       <div className={`${styles.subheading__para}`}>
//                         <div className={`${styles.subheading__body}`}>
//                           Our technology powers a seamless experience from discovery & planning to post move-in living.
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={`${styles.menu__wrapper}`}>
//                     <div className={`${styles.menu}`}>
//                       {imageSlide.map((data, idx) => (
//                         <div className={`${styles.relative}`} key={idx}>
//                               <div
//                               className={`${index === idx ? " active" : styles.menu__item}`}
//                               onClick={() => {
//                               setIndex(idx);
//                             }}>
//                             <div className={`${styles.menu__item_grid}`}>
//                               <div className={`${styles.sidebar}`}>
//                                 <div className={`${styles.numbering}`}>0{idx + 1}.</div>
//                               </div>
//                               <div className={`${styles.item}`}>
//                                           <div className={`${styles.title}`}>{data.heading}</div>
//                                           <div className={`${index === idx ? " active" : styles.heading__paragraph}`}>
//                                               <div className={`${styles.paragrapgh__item}`}>
//                                                   <div className={`${styles.paragraph}`}>
//                                                   Powerful physical and virtual cards with unlimited 1.5% cashback
//                                                   </div>
//                                               </div>
//                                           </div>
//                               </div>
//                               <div className={`${styles.logo}`}>
//                                 <AiOutlineArrowRight className={`${styles.logo__item}`} />
//                               </div>
//                             </div>
//                               </div>
//                               <div className={`${index === idx ? styles.loader : styles.loader}`}
//                               onClick={() => {
//                               setIndex(idx);
//                             }} />
//                         </div>
//                       ))}{" "}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//                           <div className={`${styles.image__container}`}
//                               style={{ transform: `translate3d(0, ${-index * 27}%, 0)`, }}>
//                           {imageSlide.map((data, id) => (
//                               <div key={id} className={`${index === id ? " active" : styles.image__wrapper}`} >
//                               {data.images ? <img className={`${styles.images}`} width="400" height="300" src={data.images} /> : <video className={`${styles.images}`} width="400" height="300" src={data.video} loop autoPlay={true} />}
//                               </div>
//         ))}
//                               {/* <div className={`${styles.image__wrapper}`}>

//                               </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Feature;
// @ts-no-check
// import { imageSlide } from "../helpers/data";
import { imageSlide } from "../helpers/data";
// import imageByIndex from "../helpers/imageByIndex";
// import styles from "../styles/components/FeatureStyle.module.css";
import styles from "../styles/FeatureStyle.module.css"
import { AiOutlineArrowRight } from "react-icons/ai";
// import React from 'react';
import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarousel from "embla-carousel";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

// import Autoplay
// import imageByIndex from './imageByIndex'
// import imageByIndex from "../helpers/data";

const mockApiCall = (minWait: number, maxWait: number, callback: () => void): void => {
  const min = Math.ceil(minWait);
  const max = Math.floor(maxWait);
  const wait = Math.floor(Math.random() * (max - min + 1)) + min;
  setTimeout(callback, wait);
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

// export function LinearDeterminate() {
//   const [progresses, setProgresses] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgresses((oldProgress) => {
//         if (oldProgress === 100) {
//           return 0;
//         }
//         const diff = Math.random() * 10;
//         return Math.min(oldProgress + diff, 100);
//       });
//     }, 5000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
// }
// export const progress = (props) => {
//   const { selected, onClick } = props;

//   return (
//     <div
//       className={"embla__dot".concat(selected ? " embla__dot--selected" : "")}
//       // type="button"
//       onClick={onClick}
//     ></div>
//   );
// };
// export default function LinearDeterminate() {
//   const [progress, setProgress] = React.useState(0);

// const delay = 7000;

const Feature: React.FC<PropType> = (props) => {
  const { options, slides: propSlides } = props;
  const scrollListener = useRef<() => void>(() => undefined);
  const [slides, setSlides] = useState(propSlides);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 5000 })]);
  const [hasMoreToLoad, setHasMoreToLoad] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pointerIsDown, setPointerIsDown] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [progresses, setProgresses] = React.useState(0);

  



  const setPointerDown = useCallback(() => setPointerIsDown(true), []);
  const setPointerNotDown = useCallback(() => setPointerIsDown(false), []);

  const lastSlideIsInView = useCallback(() => {
    if (!emblaApi) return false;
    const lastSlide = emblaApi.slideNodes().length - 1;
    return emblaApi.slidesInView().indexOf(lastSlide) !== -1;
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
    setLoadingMore((isLoadingMore) => {
      if (isLoadingMore) return true;
      const shouldLoadMore = lastSlideIsInView();
      if (shouldLoadMore) emblaApi.off("scroll", scrollListener.current);
      return shouldLoadMore;
    });
  }, [emblaApi, setLoadingMore, lastSlideIsInView, setScrollProgress]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const addScrollListener = useCallback(() => {
    if (!emblaApi || !hasMoreToLoad) return;
    scrollListener.current = () => onScroll();
    emblaApi.on("scroll", scrollListener.current);
  }, [emblaApi, hasMoreToLoad, onScroll]);

  const reloadEmbla = useCallback(() => {
    if (!emblaApi) return;
    const oldEngine = emblaApi.internalEngine();
    emblaApi.reInit();
    const newEngine = emblaApi.internalEngine();
    Object.assign(newEngine.scrollBody, oldEngine.scrollBody);
    Object.assign(newEngine.location, oldEngine.location);
    Object.assign(newEngine.target, oldEngine.target);
    const { index } = newEngine.scrollTarget.byDistance(0, false);
    newEngine.index.set(index);
    newEngine.animation.start();
    setLoadingMore(false);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    
    const timer = setInterval(() => {
      setProgresses((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [setProgresses]);
  
  useEffect(() => {
    if (!emblaApi || slides?.length === emblaApi.slideNodes().length - 1) return;
    const engine = emblaApi.internalEngine();
    const boundsActive = engine.limit.reachedMax(engine.target.get());
    engine.scrollBounds.toggleActive(boundsActive);
  }, [emblaApi, slides]);

  useEffect(() => {
    if (!emblaApi || !hasMoreToLoad || pointerIsDown) return;
    if (slides?.length === emblaApi.slideNodes().length - 1) return;
    reloadEmbla();
    addScrollListener();
  }, [emblaApi, slides, pointerIsDown, hasMoreToLoad, reloadEmbla, addScrollListener]);

  useEffect(() => {
    if (!emblaApi || hasMoreToLoad) return;
    if (slides?.length === emblaApi.slideNodes().length) return;
    if (pointerIsDown && !lastSlideIsInView()) return;
    reloadEmbla();
    emblaApi.off("pointerDown", setPointerDown);
    emblaApi.off("pointerUp", setPointerNotDown);
  }, [
    emblaApi,
    slides,
    hasMoreToLoad,
    pointerIsDown,
    setPointerDown,
    setPointerNotDown,
    reloadEmbla,
    lastSlideIsInView,
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", setPointerDown);
    emblaApi.on("pointerUp", setPointerNotDown);
    addScrollListener();
  }, [emblaApi, setPointerDown, setPointerNotDown, addScrollListener]);

  useEffect(() => {
    if (!loadingMore) return;
    mockApiCall(1000, 2000, () => {
      setSlides((currentSlides) => {
        if (currentSlides.length === 4) {
          setHasMoreToLoad(false);
          return currentSlides;
        }
        const newSlideCount = currentSlides.length + 4;
        return Array.from(Array(newSlideCount).keys());
      });
    });
  }, [setSlides, loadingMore]);
  // const [index, setIndex] = React.useState(0);
  // const timeoutRef:any = React.useRef(null);

  // function resetTimeout() {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   }

  //   React.useEffect(() => {
  //     resetTimeout();
  //     timeoutRef.current = setTimeout(
  //       () =>
  //         setIndex((prevIndex) =>
  //           prevIndex === imageSlide.length - 1 ? 0 : prevIndex + 1
  //         ),
  //       delay
  //     );

  //     return () => {
  //       resetTimeout();
  //     };
  //   }, [index]);
  // const {key, heading, images } = props.imageSlide.map(data => data)
  // let value:any = idx === selectedIndex ? progresses : "";
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.main} section_1`}>
          <div className={`${styles.main__section}`}>
            <div className={`${styles.grid__tab}`}>
              <div className={`${styles.content}`}>
                <div className={`${styles.main__content} display`}>
                  <div className={`${styles.heading}`}>
                    <h2 className={`${styles.main__heading}`}>A better experience, for a better home</h2>
                    <div className={`${styles.main__para}`}>
                      <div className={`${styles.subheading__para}`}>
                        <div className={`${styles.subheading__body}`}>
                          Our technology powers a seamless experience from discovery & planning to post move-in living.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.menu__wrapper}`}>
                    <div className={`${styles.menu}`}>
                      {imageSlide.map((data, idx) => (
                        <div className={`${styles.relative}`} key={idx}>
                          <div
                            className={`${idx === selectedIndex ? " active" : styles.menu__item}`}
                            onClick={() => scrollTo(idx)}
                          >
                            
          
            
          
        
                            <div  className={`${styles.menu__item_grid}`}>
                              <div className={`${styles.sidebar}`}>
                                <div className={`${styles.numbering}`}>0{idx + 1}.</div>
                              </div>
                              <div className={`${styles.item}`}>
                                <div className={`${styles.title}`}>{data.heading}</div>
                                
                                <div
                                className={`${idx === selectedIndex ? " active" : styles.heading__paragraph}`}
                                
                                // selected={index === selectedIndex}
                                onClick={() => scrollTo(idx)}
                                >
                                  <div className={`${styles.paragrapgh__item}`}>
                                    <div className={`${styles.paragraph}`}>
                                      Powerful physical and virtual cards with unlimited 1.5% cashback
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={`${styles.logo}`}>
                                <AiOutlineArrowRight className={`${styles.logo__item}`} />
                              </div>
                          </div>
                         
                          </div>
                          {/* <div className={`${index === idx ? styles.loader : styles.loader}`}
                              onClick={() => {
                              setIndex(idx);
                            }} /> */}
                          <div>
                          <div className="">
                            {/* <div
                              key={idx}
                              // selected={index === selectedIndex}
                              className={`${idx === selectedIndex ? styles.loader : "load"}`}
                                // className={`${styles.embla__progress__bar}`}
                              style={{ transform: `translateX(${scrollProgress}%)` }}
                              /> */}
                              
                              <Box sx={{
                                width: '100%',
                            height: "1%"  }}>
                             
                                <LinearProgress 
                                 variant="determinate" value={idx === selectedIndex ? progresses : -selectedIndex} color="inherit" 
                                  // onChange={() => {
                                  //   setSelectedIndex(idx)
                                  // }}
                                />
    </Box>
                              </div>
                          </div>
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.embla__port}`} ref={emblaRef}>
                <div className={`${styles.image__container}`}>
                  {slides?.map((index) => (
                    <div key={index} className={`${styles.image__wrapper}`}>
                      {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> 
              className={`${index === imageSlide[index]?.keys && index === imageSlide[index]?.video ? "active" : styles.image__wrapper}`}*/}
                      {imageSlide[index]?.images ? (
                        <img
                          className={`${styles.embla__slide}`}
                          width="100%"
                          height="1000px"
                          object-fit="cover"
                          src={imageSlide[index]?.images}
                          alt="Your alt text"
                        />
                      ) : (
                        <video
                          className={`${styles.embla__slide}`}
                          width="100%"
                          height="1000px"
                          object-fit="cover"
                          src={imageSlide[index]?.video}
                          autoPlay={true}
                          loop
                        />
                      )}
                    </div>
                  ))}
                  {/* <div className={`${styles.image__wrapper}`}>
                              
                              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
