window.addEventListener("mousemove", (dets) => {
  var rect = document.querySelector(".box");
  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    250 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (250 + rect.getBoundingClientRect().width / 2),
    dets.clientX
  );
  gsap.to(".box", {
    left: xval,
  });
});
