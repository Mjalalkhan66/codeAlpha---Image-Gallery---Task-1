const images = [];

const natureImages = [
    "1464822759023-fed622ff2c3b", "1426604966848-d7adac402bff", "1470071459604-3b5ec3a7fe05",
    "1441974231531-c6227db76b6e", "1472214103451-9374bd1c798e", "1507525428034-b723cf961d3e",
    "1519681393784-d120267933ba", "1433086966358-54859d0ed716", "1465146344425-f00d5f5c8f07",
    "1501785888041-af3ef285b470", "1470770841072-f978cf4d019e", "1518495973542-4542c06a5843",
    "1469474968028-56623f02e42e", "1506744038136-46273834b3fb", "1511497584788-876761111110",
    "1447752875215-b2761acb3c5d", "1475924156734-496f6cac6ec1", "1500382017468-9049fed747ef",
    "1497436072909-60f360e1d4b1", "1502082553048-f009c37129b9", "1439853949127-fa647821edf0",
    "1500530855697-b586d89ba3ee", "1473448912268-2022ce9509d8", "1513836279014-a89f7a76ae86",
    "1507525428034-b723cf961d3e"
];

const archImages = [
    "1513694203232-719a280e022f", "1486406146926-c627a92ad1ab", "1487958449943-2429e8be8625",
    "1512917774080-9991f1c4c750", "1479839672679-a46483c0e7c8", "1448630360428-65456885c650",
    "1513584684374-8bab748fbf90", "1503387762-592deb58ef4e", "1541888946425-d0fbb186a5b7",
    "1493397212122-2b85dda8106b", "1514924013411-cbf25faa35bb", "1429497419792-93883300b6e3",
    "1464938040520-ef2ab718869c", "1523217582562-09d0def993a6", "1517581177682-a085bb7ffb15",
    "1490644658840-3f2e3f8c5625", "1481026465463-6681514b0424", "1508873696983-2df515122519",
    "1516156008625-3a9d6067fab5", "1506146332389-18140dc7b2fb", "1481437642641-2f0ae875f836",
    "1488972685288-c3fd157d7c7a", "1504307651254-35680f356dfd", "1460317442991-0ec20938731f",
    "1512915922686-57c11dde9b6b"
];

const techImages = [
    "1518770660439-4636190af475", "1555066931-4365d14bab8c", "1526374965328-7f61d4dc18c5",
    "1519389950473-47ba0277781c", "1531297484001-80022131f5a1", "1485827404703-89b55fcc595e",
    "1517694712202-14dd9538aa97", "1504384308090-c894fdcc538d", "1525547719571-a2d4ac8945e2",
    "1535378373038-01a1e4e3b75d", "1508739773434-c26b3d09e071", "1550751827-4bd374c3f58b",
    "1581091226825-a6a2a5aee158", "1581092160607-ee22621dd758", "1581092335397-9583fe92d232",
    "1516321318423-f06f85e504b3", "1526379879527-8559ecfcaec0", "1581092580497-e0d23cbdf1dc",
    "1581092795360-fd1ca04f0952", "1581091226033-d5c48150dbaa", "1581092162384-8987c1d64718",
    "1581092580497-e0d23cbdf1dc", "1518770660439-4636190af475", "1531297484001-80022131f5a1",
    "1555066931-4365d14bab8c"
];

const animalImages = [
    "1561731216-c3a4d99437d5", "1474511320723-9a56873867b5", "1534188753412-3e26d0d618d6",
    "1456926631375-92c8ce872def", "1555169062-013468b47731", "1546182990-dffeafbe841d",
    "1517849845537-4d257902454a", "1537151608828-ea2b11777ee8", "1507146426996-ef05306b995a",
    "1425082661705-1834bfd09dca", "1470093851219-69951fcbb533", "1503777119540-0e4807498fc8",
    "1535268647677-300dbf3d78d1", "1552053831-71594a27632d", "1437622368342-7a3d73a34c8f",
    "1548767797-d8c844163c4c", "1574063413132-355dbfd83e03", "1564349683136-77e08dba1ef9",
    "1534567153574-2b12153a87f0", "1504006833117-8886a355efbf", "1518020382113-a7e8fc38eac9",
    "1534188753412-3e26d0d618d6", "1561731216-c3a4d99437d5", "1474511320723-9a56873867b5",
    "1456926631375-92c8ce872def"
];

function populateImages(list, category) {
    list.forEach((id, i) => {
        const titleName = category.charAt(0).toUpperCase() + category.slice(1) + " Image " + (i + 1);
        images.push({
            id: images.length + 1,
            title: titleName,
            category: category,
            url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`
        });
    });
}

populateImages(natureImages, "nature");
populateImages(archImages, "architecture");
populateImages(techImages, "technology");
populateImages(animalImages, "animals");

let currentCategory = "all";
let currentImages = [...images];
let currentIndex = 0;

const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCount = document.getElementById("lightboxCount");

function displayGallery() {
    galleryGrid.innerHTML = "";
    const query = searchInput.value.toLowerCase();

    currentImages = images.filter(img => {
        const matchCategory = currentCategory === "all" || img.category === currentCategory;
        const matchSearch = img.title.toLowerCase().includes(query) || img.category.toLowerCase().includes(query);
        return matchCategory && matchSearch;
    });

    currentImages.forEach((img, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${img.url}" alt="${img.title}" loading="lazy">
            <div class="card-title">${img.title}</div>
        `;
        card.onclick = () => openLightbox(idx);
        galleryGrid.appendChild(card);
    });
}

function filterGallery(category) {
    currentCategory = category;
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    displayGallery();
}

searchInput.addEventListener("keyup", displayGallery);

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add("show");
}

function closeLightbox() {
    lightbox.classList.remove("show");
}

function updateLightbox() {
    const img = currentImages[currentIndex];
    lightboxImg.src = img.url;
    lightboxTitle.textContent = img.title;
    lightboxCount.textContent = (currentIndex + 1) + " of " + currentImages.length;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightbox();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightbox();
}

document.addEventListener("keydown", function(e) {
    if (!lightbox.classList.contains("show")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
});

window.onload = displayGallery;
