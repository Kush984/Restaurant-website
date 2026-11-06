const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const dateInput = document.getElementById("date");

// Past dates are not allowed
const today = new Date();
const localToday = new Date(
  today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const date = dateInput.value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const request = document.getElementById("request").value.trim();

  if (!/^[0-9]{10}$/.test(phone)) {
    bookingMessage.textContent =
      "Please enter a valid 10-digit phone number.";
    return;
  }

  if (date < localToday) {
    bookingMessage.textContent =
      "Please select today or a future date.";
    return;
  }

  const booking = {
    bookingId: "MB" + Date.now(),
    name,
    phone,
    email,
    date,
    time,
    guests,
    request
  };

  // Get existing bookings
  const bookings = JSON.parse(
    localStorage.getItem("moonbiteBookings") || "[]"
  );

  // Save new booking
  bookings.push(booking);

  localStorage.setItem(
    "moonbiteBookings",
    JSON.stringify(bookings)
  );

  bookingMessage.innerHTML = `
    <div class="booking-success">
      <h2>✓ Booking Submitted!</h2>
      <p>Thank you, ${escapeHTML(name)}!</p>
      <p>Your Booking ID: <strong>${booking.bookingId}</strong></p>
      <p>Date: ${escapeHTML(date)}</p>
      <p>Time: ${escapeHTML(time)}</p>
      <p>Guests: ${escapeHTML(guests)}</p>
      <p>Your booking has been saved in this browser.</p>
    </div>
  `;

  bookingForm.reset();
  dateInput.min = localToday;
});

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function(char) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char];
  });
}