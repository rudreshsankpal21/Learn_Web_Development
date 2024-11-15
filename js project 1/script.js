let container = document.querySelector(".box");

container.addEventListener("mousemove", (e) => {
  let containerLocation = container.getBoundingClientRect();
  let mouseLocation = e.clientX - containerLocation.left;
  if (mouseLocation < containerLocation.width / 2) {
    var red = gsap.utils.mapRange(
      0,
      containerLocation.width / 2,
      255,
      0,
      mouseLocation
    );
    gsap.to(container, {
      backgroundColor: `rgb(${red},0,0)`,
      ease: Power4,
    });
  } else {
    var blue = gsap.utils.mapRange(
        containerLocation.width / 2,
        containerLocation.width,
        0,
        255,
        mouseLocation
      );
      gsap.to(container, {
        backgroundColor: `rgb(0,0,${blue})`,
        ease: Power4,
      });
  }
});

container.addEventListener("mouseleave",()=>{
gsap.to(container,{
    backgroundColor: "black"
})
})