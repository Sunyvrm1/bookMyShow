const bookDateCont = document.querySelector(".bookDateCont");

fetch("date.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      const html = `
      <button class="bookDate">
                        <p>${item.day}</p>
                        <p class="dateBooking">${item.date}</p>
                        <p>${item.month}</p>
        </button>
      `;
      bookDateCont.insertAdjacentHTML("afterbegin", html);
    });

    const bookDate = document.querySelectorAll(".bookDate");
    bookDate[0].classList.add("bookDateActive");
    bookDate.forEach((btn) => {
      btn.addEventListener("click", () => {
        bookDate.forEach((btn) => btn.classList.remove("bookDateActive"));
        btn.classList.add("bookDateActive");
      });
    });
  });
