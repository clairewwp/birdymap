const map = L.map("map").setView([34.34, 40.52], 2);
const bird = L.icon({
  iconUrl: "https://img.icons8.com/stickers/100/000000/map-pin.png",
  iconSize: [30, 30],
  iconAnchor: [15, 15], //30/2=15 which is the center of the icon
});

const tileUrl =
  "https://api.maptiler.com/maps/winter/{z}/{x}/{y}.png?key=dBaOcO0TrkdkEPOeSxCW";
const tiles = L.tileLayer(tileUrl);
tiles.addTo(map);
let search = "";
let video = "";

async function keyword() {
  let a = this.getPopup().getContent();
  search = a.slice(21);
  document.getElementById("search1").setAttribute("value", search);
  document.getElementById("search1").style.color = "rgb(179, 82, 97);";
  try {
    const res = await fetch(`findYoutube` + "/" + search); //with the "bird", the result of videos will be more related to birds rather than showing sth that is not related to the bird
    const data = await res.json();
    video = `<iframe width="280" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" title="YouTube" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById("videos").innerHTML = video;
    const resf = await fetch(`findPhotos` + "/" + search); //with the "bird", the result of videos will be more related to birds rather than showing sth that is not related to the bird
    const dataf = await resf.json();
    photos = `<img id="bimg" src="${dataf.items[0].media.m}" ></img><img  id="bimg" src="${dataf.items[2].media.m}" >`;
    document.getElementById("photos").innerHTML = photos;
  } catch (e) {
    console.log(e);
  }
}
let locationCode = "";
async function getLocation() {
  locationCode = document.querySelector(".search").value;
  try {
    const res = await fetch(`findBird` + "/" + locationCode.toUpperCase());
    const data = await res.json();
    map.flyTo([data[10].lat, data[10].lng], 6);
    await data.map((newData) => {
      L.marker([newData.lat, newData.lng], { icon: bird })
        .addTo(map)
        .bindPopup("Name of the bird:<br>" + newData.comName)
        .on("click", keyword);
    });
  } catch (e) {
     alert(e+"Incorrect country code");
  }
}
async function getBirdData() {
  try {
    document.getElementsByClassName("search").onclick = () => {
      getLocation();
    };
  } catch (e) {
    console.log("error:" + e);
  }
}
getBirdData();
