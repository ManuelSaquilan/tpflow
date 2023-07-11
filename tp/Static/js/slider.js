const btnright = document.querySelector(".right");
  const btnleft = document.querySelector(".left");

  const content = document.querySelector(".slider-wrapper");

  btnright.addEventListener("click", ()=> {
    content.scrollLeft += 800;
  });
  btnleft.addEventListener("click", ()=> {
    content.scrollLeft -= 800;
  });
  