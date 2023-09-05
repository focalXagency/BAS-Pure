/* popup */
let Blur = document.querySelector(".mkblur")
let popUp = document.querySelector("#popUp")
let btn = document.querySelector(".JI_footer_box_submit")
let closePopUp = document.querySelector("#closePopUp")

async function subscribe(event) {
  event.preventDefault();
  btn.disabled = true;
  btn.style.cursor = "not-allowed";
  const emaill = document.querySelector("#emaill").value;
  console.log({ "emaill": emaill });
  await fetch("https://back.black-analysis-solutions.com/api/store-subscribers", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ "emaill": emaill }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      Blur.style.visibility = "visible";
      popUp.style.visibility = "visible";
    })
    document.querySelector("#emaill").value = "";
    btn.disabled = false;
    btn.style.cursor = "pointer";

}

closePopUp.addEventListener("click", () => {
  Blur.style.visibility = "hidden";
  popUp.style.visibility = "hidden";
})

/* ************************************************************************** */

/*  navBar scroll */
const navBarlg = document.querySelector('.rm_navbarLG_container');
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBarlg.classList.add("scrolled");
  } else {
    navBarlg.classList.remove("scrolled");
  }
})


window.addEventListener('scroll', function () {
  const home = document.querySelector("#item1");
  const aboutUS = document.querySelector("#aboutUS");
  const Services = document.querySelector("#Services");
  const Contact = document.querySelector("#Contact");

  const whoweare = document.querySelector(".whoweare");
  const latestpro = document.querySelector(".latestpro");
  const contact = document.querySelector("#section3");
  let scroll = window.scrollY;
  let heightsec = whoweare.offsetTop - 200;
  let heightsec2 = latestpro.offsetTop - 200;
  let heightsec3 = contact.offsetTop - 200;

  if (heightsec > scroll) {
    home.classList.add("active");
    aboutUS.classList.remove("active");
  }
  if (heightsec < scroll && heightsec2 > scroll) {
    aboutUS.classList.add("active");
    Services.classList.remove("active");
    Contact.classList.remove("active");
    home.classList.remove("active");

  }
  if (heightsec < scroll && heightsec2 < scroll) {
    aboutUS.classList.remove("active");
    Services.classList.add("active");
    Contact.classList.remove("active");
    home.classList.remove("active");
  }
  if (heightsec2 < scroll && heightsec3 > scroll) {
    aboutUS.classList.remove("active");
    Services.classList.add("active");
    Contact.classList.remove("active");
    home.classList.remove("active");

  }
  if (heightsec3 < scroll) {
    aboutUS.classList.remove("active");
    Services.classList.remove("active");
    Contact.classList.add("active");
    home.classList.remove("active");
  }
});

/* <div class="offcanvas rm_navbarSM_offcanvas offcanvas-end show" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" aria-modal="true" role="dialog">
<div class="offcanvas rm_navbarSM_offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> */
let menuItems = document.querySelectorAll(".rm_navbarSM_ul_li")
let closeBtn = document.querySelector(".btn-x")
menuItems.forEach(element => {
  element.addEventListener("click", () => {
    closeBtn.click()
  })
});

/* ************************************************************************** */
/* what we do slider */

let slideContainer = document.querySelector(".rm_slider");
let slideCards = document.querySelector(".rm_whatwedo_container_cards");
let pressed = false;
let startx;
let x;

slideContainer.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - slideCards.offsetLeft;
});

slideContainer.addEventListener("mouseup", () => {
  pressed = false;
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slideContainer.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();
  x = e.offsetX
  slideCards.style.left = `${x - startx}px`;
  cheboundary()
})

function cheboundary() {
  let outer = slideContainer.getBoundingClientRect();
  let inner = slideCards.getBoundingClientRect();

  if (parseInt(slideCards.style.left) > 0) {
    slideCards.style.left = '0px';
  } else if (inner.right < outer.right) {
    slideCards.style.left = `-${inner.width - outer.width}px`
  }
}



/* setInterval(function() {
  secondElements.forEach(function(element) {
    element.style.left = element.getBoundingClientRect().x + element.offsetWidth;
  });
}, 3000);
 */
/* ****************************************************************** */
/* slider's dots */
const dot1 = document.querySelector(".rm_dot1");
const dot2 = document.querySelector(".rm_dot2");
const card = document.querySelectorAll(".rm_whatwedo_container_cards");

dot1.addEventListener("click", function () {
  dot1.classList.add("rm_dots_active");
  dot2.classList.remove("rm_dots_active");
  card.forEach((Element) => {
    Element.style.transform = "translateX(0)";
  });
});

dot2.addEventListener("click", function () {
  dot1.classList.remove("rm_dots_active");
  dot2.classList.add("rm_dots_active");
  card.forEach((Element) => {
    Element.style.transform = "translateX(-1114px)";
    Element.style.transition = "1.5s";
  });
});
/* ************************************************* */
/* small screen */
const point1 = document.querySelector(".rm_point1");
const point2 = document.querySelector(".rm_point2");
const point3 = document.querySelector(".rm_point3");
const point4 = document.querySelector(".rm_point4");
const point5 = document.querySelector(".rm_point5");
const cardss = document.querySelectorAll(".rm_card_small");

point1.addEventListener("click", function () {
  point1.classList.add('rm_dots_actives');
  point2.classList.remove('rm_dots_actives');
  point3.classList.remove('rm_dots_actives');
  point4.classList.remove('rm_dots_actives');
  point5.classList.remove('rm_dots_actives');
  cardss.forEach((Element) => {
    Element.style.transform = "translateX(516px)";
  });
});

point2.addEventListener("click", function () {
  point1.classList.remove('rm_dots_actives');
  point2.classList.add('rm_dots_actives');
  point3.classList.remove('rm_dots_actives');
  point4.classList.remove('rm_dots_actives');
  point5.classList.remove('rm_dots_actives');
  cardss.forEach((Element) => {
    Element.style.transform = "translateX(258px)";
    Element.style.transition = "1.5s";
  });
});
point3.addEventListener("click", function () {
  point1.classList.remove('rm_dots_actives');
  point2.classList.remove('rm_dots_actives');
  point3.classList.add('rm_dots_actives');
  point4.classList.remove('rm_dots_actives');
  point5.classList.remove('rm_dots_actives');
  cardss.forEach((Element) => {
    Element.style.transform = "translateX(0)";
    Element.style.transition = "1.5s";
  });
});
point4.addEventListener("click", function () {
  point1.classList.remove('rm_dots_actives');
  point2.classList.remove('rm_dots_actives');
  point3.classList.remove('rm_dots_actives');
  point4.classList.add('rm_dots_actives');
  point5.classList.remove('rm_dots_actives');
  cardss.forEach((Element) => {
    Element.style.transform = "translateX(-258px)";
    Element.style.transition = "1.5s";
  });
});
point5.addEventListener("click", function () {
  point1.classList.remove('rm_dots_actives');
  point2.classList.remove('rm_dots_actives');
  point3.classList.remove('rm_dots_actives');
  point4.classList.remove('rm_dots_actives');
  point5.classList.add('rm_dots_actives');
  cardss.forEach((Element) => {
    Element.style.transform = "translateX(-516px)";
    Element.style.transition = "1.5s";
  });
});
/* *************************************************************************** */
/* md screen */
const pointt1 = document.querySelector(".rm_dott1");
const pointt2 = document.querySelector(".rm_dott2");
const pointt3 = document.querySelector(".rm_dott3");
const mdCard = document.querySelectorAll(".rm_whatwedo_containermd_cards");

pointt1.addEventListener("click", function () {
  pointt1.classList.add('rm_dotts_active');
  pointt2.classList.remove('rm_dotts_active');
  pointt3.classList.remove('rm_dotts_active');
  mdCard.forEach((Element) => {
    Element.style.transform = "translateX(0)";
  });
});

pointt2.addEventListener("click", function () {
  pointt1.classList.remove('rm_dotts_active');
  pointt2.classList.add('rm_dotts_active');
  pointt3.classList.remove('rm_dotts_active');
  mdCard.forEach((Element) => {
    Element.style.transform = "translateX(-549px)";
    Element.style.transition = "1.5s";
  });
});
pointt3.addEventListener("click", function () {
  pointt1.classList.remove('rm_dotts_active');
  pointt2.classList.remove('rm_dotts_active');
  pointt3.classList.add('rm_dotts_active');
  mdCard.forEach((Element) => {
    Element.style.transform = "translateX(-1098px)";
    Element.style.transition = "1.5s";
  });
});


/* //////////////////////////////////////////////////////////////////// */



/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* reviews */
const reviewSlider = document.querySelector(".JI_reviews .JI_reviews_slider")

const myCards = document.querySelectorAll(".JI_reviews .JI_reviews_slider .JI_reviews_slider_card")



let c = 0

let myInt = setInterval(() => {
  if (c > 2) {
    c = 0
  }
  myCards[c].click();
  c++

}, 3000);


for (let i = 0; i < myCards.length; i++) {
  myCards[i].addEventListener("click", () => {
    // console.log(`myCards${i} is click`)
    for (let j = 0; j < myCards.length; j++) {
      myCards.forEach(card => {
        card.classList.remove("active");
        card.classList.remove("next_card");
        card.classList.remove("prev_card");
      });
      if (i == 0) {
        myCards[2].setAttribute("class", "JI_reviews_slider_card prev_card")
        myCards[0].setAttribute("class", "JI_reviews_slider_card active")
        myCards[1].setAttribute("class", "JI_reviews_slider_card next_card")
      }
      else if (i == 1) {
        myCards[2].setAttribute("class", "JI_reviews_slider_card next_card")
        myCards[1].setAttribute("class", "JI_reviews_slider_card active")
        myCards[0].setAttribute("class", "JI_reviews_slider_card prev_card")
      }
      else if (i == 2) {
        myCards[2].setAttribute("class", "JI_reviews_slider_card active")
        myCards[1].setAttribute("class", "JI_reviews_slider_card prev_card")
        myCards[0].setAttribute("class", "JI_reviews_slider_card next_card")
      }

    }
  })
}




let prevPoint;
let Differ;
let DifferArray = [];


function startDragging() {
  clearInterval(myInt);
  if (c < 0) {
    c = 0;
  }
}

function dragging(e) {
  DifferArray = [];
  prevPoint = e.pageX || e.touches[0].pageX;

}

function draggingOnTouch(e) {
  DifferArray = [];
  prevPoint = e.touches[0].pageX;
  console.log("prevPoint", prevPoint)
  console.log("touccccccccccccccccccccccccccccccccccccch start")
}

function draggingMove(e) {
  // Differ = prevPoint - (e.pageX || e.touches[e.touches.length-1].pageX);
  Differ = prevPoint - (e.pageX || e.touches[0].pageX);
  DifferArray.push(Differ);
}

function draggingMoveOnTouch(e) {
  Differ = prevPoint - e.touches[e.touches.length - 1].pageX;
  DifferArray.push(Differ);
}

const sliding = () => {
  // console.log("DifferArray[0]" , DifferArray[0])
  // console.log(" DifferArray[DifferArray.length-1]" ,  DifferArray[DifferArray.length-1])
  if (DifferArray[0] > DifferArray[DifferArray.length - 1]) {
    console.log("bigger")
    console.log("counter before ", c)
    // reviewSlider.click();
    c--;
    console.log("counter after ", c)
    // playSlider(c);
    if (c < 0) {
      c = 2
    }
    myCards[c].click();
  }
  else {
    console.log("counter before ", c)
    // reviewSlider.click();
    c++;
    console.log("counter after ", c)
    console.log("smaller")
    // playSlider(c);
    if (c > 2) {
      c = 0;
    }
    myCards[c].click();

  }
}

reviewSlider.addEventListener("mouseenter", () => {
  console.log("mouse enter")
  startDragging();
})
reviewSlider.addEventListener("mousedown", (e) => {
  dragging(e);
  console.log("mouse down")
})

reviewSlider.addEventListener("touchstart", (e) => {
  console.log("touch start")
  startDragging();
  dragging(e);
})


reviewSlider.addEventListener("mousemove", (e) => {
  draggingMove(e);
})

reviewSlider.addEventListener("touchmove", (e) => {
  draggingMove(e);
})

reviewSlider.addEventListener("mouseup", sliding);
reviewSlider.addEventListener("touchend", sliding);



reviewSlider.addEventListener("mouseleave", () => {
  console.log("mouse leave")
  myInt = setInterval(() => {
    if (c > 2) {
      c = 0
    }
    myCards[c].click();
    c++

  }, 3000);
})
/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* faqs */
const myFaqCardsHeaders = document.querySelectorAll(".JI_faq .JI_faq_container .JI_faq_card .JI_faq_card_head");
myFaqCardsHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active")
    const cardDesc = header.nextElementSibling;
    if (header.classList.contains("active")) {
      cardDesc.style.maxHeight = `${cardDesc.scrollHeight}px`
    }
    else {
      cardDesc.style.maxHeight = 0;
    }
  })
});
/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* contact us */
let contactHeader = document.querySelector(".JI_contact .JI_contact_form_accordion_head");
let serviceContainer = document.querySelector(".JI_contact .JI_contact_form_accordion_desc")
let serviceContainerChildren = document.querySelectorAll(".JI_contact .JI_contact_form_accordion_desc_p")
contactHeader.addEventListener("click", () => {
  console.log("helll")
  contactHeader.classList.toggle("active")
  if (contactHeader.classList.contains("active")) {
    serviceContainer.style.maxHeight = `${serviceContainer.scrollHeight}px`
  }
  else {
    serviceContainer.style.maxHeight = 0;
  }
  // serviceContainer.style.height = "max-height"
})

serviceContainerChildren.forEach(child => {
  child.addEventListener("click", () => {
    contactHeader.innerHTML = child.innerHTML;
    contactHeader.classList.remove("active")
    serviceContainer.style.maxHeight = 0;

  })

});


function contact(event) {
  event.preventDefault();
  const service = (document.querySelector(".JI_contact .JI_contact_form_accordion_head").innerHTML == "choose the service you need") ? "" : document.querySelector(".JI_contact .JI_contact_form_accordion_head").innerHTML;
  const name = document.querySelector("#name").value;
  const companyname = document.querySelector("#companyname").value;
  const Number = document.querySelector("#Number").value;
  const Position = document.querySelector("#Position").value;
  const email = document.querySelector("#email").value;
  const content = document.querySelector("#content").value;
  console.log({
    "name": name,
    "company_name": companyname,
    "position": Position,
    "number": Number,
    "service": service,
    "email": email,
    "content": content
  })


  fetch("https://back.black-analysis-solutions.com/api/save-message", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      "name": name,
      "company_name": companyname,
      "position": Position,
      "number": Number,
      "service": service,
      "email": email,
      "content": content
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })
}