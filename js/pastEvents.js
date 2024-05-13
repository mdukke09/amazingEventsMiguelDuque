let events = [
  {
    _id: 1,
    image: 'images/food_fair.jpg',
    name: 'Festival of the collectivities',
    date: '2022-12-12',
    description:
      'Enjoy your favorite dishes from different countries in a unique event for the whole family.',
    category: 'Food Fair',
    place: 'Room A',
    capacity: 45000,
    assistance: 42756,
    price: 5,
  },
  {
    _id: 2,
    image: 'images/outing_to_the_museum.jpg',
    name: 'Art Exhibition',
    date: '2022-11-02',
    description:
      "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.",
    category: 'Museum',
    place: 'Field',
    capacity: 82000,
    assistance: 65892,
    price: 15,
  },
  {
    _id: 3,
    image: 'images/costume_party.jpg',
    name: 'Halloween Night',
    date: '2024-02-12',
    description: 'Come in your scariest costume character to win amazing prizes.',
    category: 'Costume Party',
    place: 'Room C',
    capacity: 12000,
    estimate: 9000,
    price: 12,
  },
  {
    _id: 4,
    image: 'images/music_concert.jpg',
    name: 'Metallica in concert',
    date: '2024-01-22',
    description: 'The only concert of the most emblematic band in the world',
    category: 'Music Concert',
    place: 'Room A',
    capacity: 138000,
    estimate: 138000,
    price: 150,
  },
  {
    _id: 5,
    image: 'images/marathon.jpg',
    name: '10K for life',
    date: '2022-03-01',
    description: 'Come and exercise, improve your health and lifestyle.',
    category: 'Race',
    place: 'Soccer Field',
    capacity: 30000,
    assistance: 25698,
    price: 3,
  },
  {
    _id: 6,
    image: 'images/books.jpg',
    name: 'School Book Fair',
    date: '2022-10-15',
    description: 'Bring your unused school book and bring the one you need.',
    category: 'Book Exchange',
    place: 'Room D1',
    capacity: 150000,
    assistance: 123286,
    price: 1,
  },
  {
    _id: 7,
    image: 'images/cinema.jpg',
    name: 'Avengers',
    date: '2024-10-15',
    description:
      "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
    category: "Let's go to the cinema",
    place: 'Room D1',
    capacity: 9000,
    estimate: 9000,
    price: 250,
  },
];

function crearTarjeta(events) {
  let container = document.getElementById('padreTarjetas');

  events.forEach(function (event) {
    let div = document.createElement('div');

    div.className = 'd-flex d-sm-block justify-content-center col-12 col-lg-3 col-md-4 col-sm-5';
    div.innerHTML = `
      <div class="card shadow m-3 border p-2 d-flex justify-content-between text-center">
        <div class="d-flex flex-column align-items-center">
          <img
            src="${event.image}"
            class="cardImg d-block object-fit-cover rounded"
            alt="${event.name}"
          />
          <br />
          <h5>${event.name}</h5>
          <p>${event.description}</p>
        </div>
        <div data-bs-theme="light">
          <button type="button" aria-label="Price" class="btn btn-light">Price</button>
          <button type="button" aria-label="Detail" class="btn btn-light">Detail</button>
        </div>
      </div>
    `;

    container.appendChild(div);
  });
}

let eventsPasados = events.filter((event) => new Date(event.date) < new Date());

crearTarjeta(eventsPasados);
