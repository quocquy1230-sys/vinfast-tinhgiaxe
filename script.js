const color = (name, hex, fee, file) => ({ name, hex, fee, file });

const vf2Colors = [
  color("Trắng", "#f1f2f2", 0, "CE18.png"),
  color("Vàng", "#f2cf2f", 0, "CE1U.png"),
  color("Xanh lá nhạt", "#a8b7a3", 0, "CE1W.png"),
  color("Hồng", "#d9a8b8", 0, "CE21.png"),
  color("Xanh ngọc", "#26bfc2", 0, "CE2G.png"),
  color("Đỏ", "#b92332", 0, "CE2Q.png"),
  color("Be", "#c9ad82", 0, "CE2T.png"),
  color("Bạc", "#b9c1c8", 0, "vf-9.png"),
];

const vf3Colors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "Infinity Blanc.png"),
  color("Xám (Zenith Grey)", "#73777a", 0, "zenith grey.png"),
  color("Đỏ (Solar Ruby)", "#a80d25", 0, "solar ruby.png"),
  color("Xanh lá nhạt (Urban Mint)", "#9fc7b3", 8000000, "urban mint.png"),
  color(
    "Xanh dương (Sky Blue) + nóc trắng",
    "#71c7e8",
    8000000,
    "sky blue.png",
  ),
  color("Hồng (Rose Pink) + nóc trắng", "#e9a7b9", 8000000, "rose pink.png"),
  color(
    "Vàng (Summer Yellow) + nóc trắng",
    "#f3d94d",
    8000000,
    "Summer yellow.png",
  ),
];

const vf5Colors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "CE18.png"),
  color("Xám (Zenith Grey)", "#707579", 0, "CE1V.png"),
  color("Đỏ (Solar Ruby)", "#a80d25", 0, "CE2Q.png"),
  color("Xanh lá nhạt (Urban Mint)", "#9fc7b3", 8000000, "CE1W.png"),
  color("Xanh dương (Sky Blue) + nóc trắng", "#71c7e8", 8000000, "181Y.png"),
  color("Vàng (Summer Yellow) + nóc đen", "#f0d348", 8000000, "111U.png"),
];

const vf6Colors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "CE18.png"),
  color("Đen (Jet Black)", "#17191c", 0, "CE11.png"),
  color("Xám (Zenith Grey)", "#747b80", 0, "CE1V.png"),
  color("Đỏ (Solar Ruby)", "#a51e2d", 0, "CE2Q.png"),
  color("Xanh lá nhạt (Urban Mint)", "#9fc7b3", 8000000, "CE1W.png"),
];

const vf7Colors = vf6Colors.map((item) => ({
  ...item,
  fee: item.name.includes("Urban Mint") ? 12000000 : item.fee,
}));

const vf8Colors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "CE18.png"),
  color("Đen (Jet Black)", "#17191c", 0, "CE11.png"),
  color("Đỏ (Crimson Red)", "#a51e2d", 0, "CE1M.png"),
  color("Xanh lá đậm (Ivy Green)", "#33483b", 0, "CE22.png"),
  color("Trắng (Infinity Blanc) + nóc xám", "#e7e7e3", 12000000, "1V18.png"),
  color("Đen (Jet Black) + nóc đồng", "#1b1b1b", 12000000, "2911.png"),
  color("Đỏ (Crimson Velvet) + nóc đồng", "#681e27", 12000000, "2927.png"),
  color("Xám (Zenith Grey) + nóc bạc", "#8b8f91", 12000000, "171V.png"),
];

const vf8NewColors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "HC11V_CE18.png"),
  color("Đen (Jet Black)", "#17191c", 0, "HC11V_CE11.png"),
  color("Đỏ (Solar Ruby)", "#a51e2d", 0, "HC11V_CE2Q.png"),
  color("Xanh dương (Starburst)", "#83a9bf", 0, "HC11V_CE33.png"),
  color("Cam (Vitality)", "#d85322", 12000000, "HC11V_CE32.png"),
  color("Tím (Mysterioso)", "#53364f", 12000000, "HC11V_CE2O.png"),
  color("Đỏ Solar Ruby + nóc đen", "#a51e2d", 12000000, "HC11V_112Q.png"),
  color("Cam Vitality + nóc đen", "#d85322", 12000000, "HC11V_1132.png"),
  color("Cam Vitality + nóc trắng", "#e76a35", 12000000, "HC11V_1832.png"),
  color(
    "Xanh dương Starburst + nóc trắng",
    "#83a9bf",
    12000000,
    "HC11V_1833.png",
  ),
  color("Tím Mysterioso + nóc bạc", "#53364f", 12000000, "HC11V_312O.png"),
  color("Đen Jet Black + nóc bạc", "#17191c", 12000000, "HC11V_3111.png"),
];

const vf9Colors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "CE18.png"),
  color("Đen (Jet Black)", "#17191c", 0, "CE11.png"),
  color("Xám (Zenith Grey)", "#747b80", 0, "CE1V.png"),
  color("Đỏ (Crimson Red)", "#a51e2d", 0, "CE1M.png"),
  color("Xanh lá nhạt (Urban Mint)", "#9fc7b3", 0, "CE1W.png"),
  color("Bạc (Desat Silver)", "#c7c9c9", 12000000, "CE17.png"),
  color("Xanh lá đậm (Ivy Green)", "#33483b", 12000000, "CE22.png"),
];

const mpv7Colors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "CE18.png"),
  color("Đen (Jet Black)", "#17191c", 0, "CE11.png"),
  color("Xám (Zenith Grey)", "#747b80", 0, "CE1V.png"),
  color("Đỏ (Solar Ruby)", "#a51e2d", 0, "CE2Q.png"),
  color("Nâu (Introspective Brown)", "#6a493a", 10000000, "CE2N.png"),
  color("Xanh dương (Moonlit Ocean)", "#244d65", 10000000, "CE2J.png"),
];

const ecVanColors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "infinity-blanc.webp"),
  color("Đỏ (Solar Ruby)", "#a80d25", 0, "solar-ruby.webp"),
  color("Vàng (Summer Yellow)", "#f3d94d", 0, "yellow.webp"),
  color("Xanh lá nhạt (Urban Mint)", "#9fc7b3", 0, "urban-mint.webp"),
];

const limoGreenColors = [
  color("Trắng (Infinity Blanc)", "#f1f2f2", 0, "infinity-blanc.webp"),
  color("Đen (Jet Black)", "#17191c", 0, "jet-black.webp"),
  color("Đỏ (Solar Ruby)", "#a80d25", 0, "solar-ruby.webp"),
  color("Bạc (Desat Silver)", "#c7c9c9", 0, "desat-silver.webp"),
];

const cars = [
  {
    name: "VF 2",
    nameImage: "images/Bảng tên xe/VF 2.png",
    imageDir: "images/VF 2",
    promotion: 0,
    versions: [{ name: "Tiêu chuẩn ", price: 188000000 }],
    colors: vf2Colors,
  },
  {
    name: "VF 3",
    nameImage: "images/Tên xe/VF 3.png",
    imageDir: "images/VF3",
    promotion: 0,
    versions: [
      { name: "Eco - Tiêu chuẩn 2", price: 285000000 },
      { name: "Eco - Tiêu chuẩn 1", price: 278000000 },
      { name: "Plus - Tiêu chuẩn 2", price: 296000000 },
    ],
    colors: vf3Colors,
  },
  {
    name: "VF 5",
    nameImage: "images/Tên xe/VF 5.png",
    imageDir: "images/VF 5",
    promotion: 25000000,
    versions: [{ name: "Plus - Tiêu chuẩn 1", price: 496000000 }],
    colors: vf5Colors,
  },
  {
    name: "VF 6",
    nameImage: "images/Tên xe/VF 6.png",
    promotion: 0,
    versions: [
      {
        name: "Eco - Tiêu chuẩn 1",
        price: 646000000,
        imageDir: "images/VF 6 eco",
      },
      { name: "Eco - Nâng cấp", price: 650000000, imageDir: "images/VF 6 eco" },
      {
        name: "Plus - Tiêu chuẩn 2",
        price: 699000000,
        imageDir: "images/VF 6 Plus",
      },
      {
        name: "Plus - Tiêu chuẩn 1",
        price: 700000000,
        imageDir: "images/VF 6 Plus",
      },
      {
        name: "Plus - Nâng cấp",
        price: 710000000,
        imageDir: "images/VF 6 Plus",
      },
    ],
    colors: vf6Colors,
  },
  {
    name: "VF MPV 7",
    nameImage: "images/Bảng tên xe/MPV 7.png",
    imageDir: "images/MPV 7",
    promotion: 20000000,
    versions: [{ name: "Tiêu chuẩn 2", price: 750000000 }],
    colors: mpv7Colors,
  },
  {
    name: "VF 7",
    nameImage: "images/Tên xe/VF 7.png",
    imageDir: "images/VF 7",
    promotion: 0,
    versions: [
      { name: "Eco - Tiêu chuẩn 2", price: 740000000 },
      { name: "Eco - Tiêu chuẩn 1", price: 750000000 },
      { name: "Plus trần thép - Tiêu chuẩn 3", price: 920000000 },
      { name: "Plus trần thép - Tiêu chuẩn 2", price: 830000000 },
      { name: "Plus trần thép - Tiêu chuẩn 1", price: 840000000 },
      { name: "Plus trần thép - Nâng cấp", price: 889000000 },
      { name: "Plus trần kính - Tiêu chuẩn 2", price: 850000000 },
      { name: "Plus trần kính - Tiêu chuẩn 1", price: 860000000 },
      { name: "Plus trần kính - Nâng cấp", price: 909000000 },
      { name: "Plus - 2 cầu (AWD)", price: 879000000, specsKey: "awd" },
    ],
    colors: vf7Colors,
  },
  {
    name: "VF 8",
    nameImage: "images/Tên xe/VF 8.png",
    promotion: 0,
    versions: [
      {
        name: "Eco - pin CATL VN",
        price: 898000000,
        imageDir: "images/VF 8 eco",
        colorSet: "regular",
      },
      {
        name: "Eco nâng cấp - pin CATL VN",
        price: 910000000,
        imageDir: "images/VF 8 eco",
        colorSet: "regular",
      },
      {
        name: "Plus - pin CATL VN",
        price: 1079000000,
        imageDir: "images/VF 8 plus",
        colorSet: "regular",
      },
      {
        name: "Eco - pin CATL US",
        price: 918000000,
        imageDir: "images/VF 8 eco",
        colorSet: "regular",
      },
      {
        name: "Plus - pin CATL US",
        price: 1079000000,
        imageDir: "images/VF 8 plus",
        colorSet: "regular",
      },
    ],
    colorSets: { regular: vf8Colors },
  },
  {
    name: "VF 8 Thế hệ mới",
    imageDir: "images/VF8_ALL_NEW",
    promotion: 0,
    versions: [{ name: "Tiêu chuẩn 3", price: 899000000 }],
    colors: vf8NewColors,
  },
  {
    name: "VF 9",
    nameImage: "images/Tên xe/VF 9.png",
    promotion: 0,
    versions: [
      {
        name: "Eco - Tiêu chuẩn 1",
        price: 1348000000,
        imageDir: "images/VF 9 Eco",
        imagePrefix: "NE3LV_",
      },
      {
        name: "Plus trần thép - Tiêu chuẩn 1",
        price: 1529000000,
        imageDir: "images/VF 9 plus",
        imagePrefix: "NE3MV_",
      },
    ],
    colors: vf9Colors,
  },
  {
    name: "EC Van",
    imageDir: "images/ec-van",
    promotion: 0,
    versions: [
      { name: "Tiêu chuẩn 1", price: 268000000 },
      { name: "Nâng cao - Tiêu chuẩn 1", price: 286000000 },
      { name: "Nâng cao + cửa trượt - Tiêu chuẩn 1", price: 306000000 },
    ],
    colors: ecVanColors,
  },
  {
    name: "Limo Green",
    imageDir: "images/limo-green/SL1VV",
    promotion: 35000000,
    versions: [{ name: "Tiêu chuẩn 1", price: 699000000 }],
    colors: limoGreenColors,
  },
];

const namePlateImages = {
  "VF 2": "images/Bảng tên xe/VF 2.png",
  "VF 3": "images/Bảng tên xe/VF 3.png",
  "VF 5": "images/Bảng tên xe/VF 5.png",
  "VF 6": "images/Bảng tên xe/VF 6.png",
  "VF MPV 7": "images/Bảng tên xe/VF MPV 7.png",
  "VF 7": "images/Bảng tên xe/VF 7.png",
  "VF 8": "images/Bảng tên xe/VF 8.png",
  "VF 8 Thế hệ mới": "images/Bảng tên xe/VF 8.png",
  "VF 9": "images/Bảng tên xe/VF 9.png",
  "EC Van": "images/Bảng tên xe/EC Van.png",
  "Limo Green": "images/Bảng tên xe/logolimo.webp",
};

cars.forEach((car) => {
  car.nameImage = namePlateImages[car.name] || null;
});

const technicalSpecs = {
  "VF 2": [
    ["Công suất tối đa", "30 kW"],
    ["Tăng tốc 0–50 km/h", "5,3 giây"],
    ["Quãng đường di chuyển", "~210 km/lần sạc"],
  ],
  "VF 3": [
    ["Công suất tối đa", "30 kW"],
    ["Dung lượng pin khả dụng", "18,64 kWh"],
    ["Quãng đường di chuyển", "215 km"],
  ],
  "VF 5": [
    ["Công suất tối đa", "134 hp/100 kW"],
    ["Quãng đường/lần sạc", "326,4 km (NEDC)"],
    ["Chiều dài cơ sở", "2.514 mm"],
  ],
  "VF 6": {
    eco: [
      ["Công suất tối đa", "174 hp/130 kW"],
      ["Quãng đường/lần sạc", "485 km (NEDC)"],
      ["Chiều dài cơ sở", "2.730 mm"],
    ],
    plus: [
      ["Công suất tối đa", "201 hp/150 kW"],
      ["Quãng đường/lần sạc", "460 km (NEDC)"],
      ["Chiều dài cơ sở", "2.730 mm"],
    ],
  },
  "VF 7": {
    eco: [
      ["Công suất tối đa", "174 hp/130 kW"],
      ["Quãng đường/lần sạc", "440 km (NEDC)"],
      ["Chiều dài cơ sở", "2.840 mm"],
    ],
    plus: [
      ["Công suất tối đa", "201 hp/150 kW"],
      ["Quãng đường/lần sạc", "500,5 km (NEDC)"],
      ["Chiều dài cơ sở", "2.840 mm"],
    ],
    awd: [
      ["Công suất tối đa", "349 hp/260 kW"],
      ["Quãng đường di chuyển 1 lần sạc đầy", "469 km (NEDC)"],
      ["Chiều dài cơ sở", "2.840 mm"],
    ],
  },
  "VF 8": {
    eco: [
      ["Công suất tối đa", "201 hp/150 kW"],
      ["Quãng đường/lần sạc", "562 km (NEDC)"],
      ["Chiều dài cơ sở", "2.950 mm"],
    ],
    plus: [
      ["Công suất tối đa", "402 hp/300 kW"],
      ["Quãng đường/lần sạc", "457 km (WLTP)"],
      ["Chiều dài cơ sở", "2.950 mm"],
    ],
  },
  "VF 8 Thế hệ mới": [
    ["Công suất tối đa", "170 kW"],
    ["Quãng đường/lần sạc", "480–500 km (NEDC)"],
    ["Chiều dài cơ sở", "2.840 mm"],
  ],
  "VF 9": {
    eco: [
      ["Công suất tối đa", "402 hp/300 kW"],
      ["Quãng đường/lần sạc", "626 km"],
      ["Chiều dài cơ sở", "3.149 mm"],
    ],
    plus: [
      ["Công suất tối đa", "402 hp/300 kW"],
      ["Quãng đường/lần sạc", "602 km"],
      ["Chiều dài cơ sở", "3.149 mm"],
    ],
  },
  "EC Van": [
    ["Công suất tối đa", "30 kW"],
    ["Quãng đường/lần sạc", "175 km (NEDC)"],
    ["Chiều dài cơ sở", "2.520 mm"],
  ],
  "Limo Green": [
    ["Công suất tối đa", "150 kW"],
    ["Quãng đường/lần sạc", "450 km (NEDC)"],
    ["Chiều dài cơ sở", "2.840 mm"],
  ],
  "VF MPV 7": [
    ["Công suất tối đa", "150 kW"],
    ["Quãng đường/lần sạc", "450 km (NEDC)"],
    ["Chiều dài cơ sở", "2.840 mm"],
  ],
};

const list = document.querySelector("#car-list-items");
const carImage = document.querySelector("#car-image");
const carName = document.querySelector("#car-name");
const versions = document.querySelector("#versions");
const colors = document.querySelector("#colors");
const serviceDiscount = document.querySelector("#service-discount");
const registrationAreas = document.querySelectorAll(
  'input[name="registration-area"]',
);
const registrationFees = { city: 19380700, province: 6880700 };
const registrationFeeDetails = {
  city: {
    road: 1560000,
    insurance: 480700,
    plate: 14000000,
    service: 3000000,
    inspection: 340000,
  },
  province: {
    road: 1560000,
    insurance: 480700,
    plate: 1000000,
    service: 3500000,
    inspection: 340000,
  },
};
let activeCar = 1;
let activeVersion = 0;
let activeColor = 0;
const money = (value) => `${new Intl.NumberFormat("vi-VN").format(value)} ₫`;

function currentColors() {
  const car = cars[activeCar];
  const version = car.versions[activeVersion];
  return car.colorSets ? car.colorSets[version.colorSet] : car.colors;
}

function currentImage() {
  const car = cars[activeCar];
  const version = car.versions[activeVersion];
  const selectedColor = currentColors()[activeColor];
  const directory = version.imageDir || car.imageDir;
  return selectedColor.file && directory
    ? `${directory}/${version.imagePrefix || ""}${selectedColor.file}`
    : car.image;
}

function carThumbnail(car) {
  const version = car.versions[0];
  const availableColors = car.colorSets
    ? car.colorSets[version.colorSet]
    : car.colors;
  const thumbnailColor = availableColors && availableColors[0];
  const directory = version.imageDir || car.imageDir;

  return thumbnailColor && thumbnailColor.file && directory
    ? `${directory}/${version.imagePrefix || ""}${thumbnailColor.file}`
    : car.image;
}

function renderList() {
  list.innerHTML = cars
    .map((car, i) => {
      const thumbnail = carThumbnail(car);
      const label = thumbnail
        ? `<img class="car-item-image" src="${thumbnail}" alt="VinFast ${car.name}">${car.name === "VF 8 Thế hệ mới" ? '<span class="car-item-badge">Thế hệ mới</span>' : ""}`
        : `<span class="car-item-name-text">${car.name}</span>`;
      return `<button class="car-item${i === activeCar ? " active" : ""}" data-index="${i}" aria-label="Chọn ${car.name}">${label}</button>`;
    })
    .join("");
  document.querySelector("#car-count").textContent = `${cars.length} mẫu`;
}

function renderVersions() {
  versions.innerHTML = cars[activeCar].versions
    .map(
      (version, i) =>
        `<label class="version-option${i === activeVersion ? " selected" : ""}"><span>${version.name}</span><input type="radio" name="version" value="${i}" ${i === activeVersion ? "checked" : ""}></label>`,
    )
    .join("");
}

function renderColors() {
  const groups = [
    [
      "Màu cơ bản",
      currentColors()
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => item.fee === 0),
    ],
    [
      "Màu nâng cao",
      currentColors()
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => item.fee > 0),
    ],
  ].filter(([, items]) => items.length);
  colors.innerHTML = groups
    .map(
      ([label, items]) =>
        `<div class="color-group"><span>${label}</span><div>${items.map(({ item, index }) => `<button class="color-btn${index === activeColor ? " selected" : ""}" style="background:${item.hex}" data-index="${index}" aria-label="${item.name}" title="${item.name}"></button>`).join("")}</div></div>`,
    )
    .join("");
}

function showCurrentImage() {
  const src = currentImage();
  carImage.hidden = !src;
  if (src) {
    if (!carImage.src.endsWith(encodeURI(src)))
      carImage.classList.add("switching");
    carImage.src = src;
    carImage.alt = `VinFast ${cars[activeCar].name} màu ${currentColors()[activeColor].name}`;
  }
}

function renderCarName() {
  const car = cars[activeCar];
  carName.innerHTML = car.nameImage
    ? `<img src="${car.nameImage}" alt="${car.name}">`
    : `<span>${car.name}</span>`;
}

function currentSpecs() {
  const car = cars[activeCar];
  const version = car.versions[activeVersion];
  const specs = technicalSpecs[car.name];
  if (Array.isArray(specs)) return specs;
  if (version.specsKey) return specs[version.specsKey];
  if (version.colorSet === "new") return specs.new;
  return version.name.toLowerCase().startsWith("plus") ? specs.plus : specs.eco;
}

function renderSpecs() {
  currentSpecs().forEach(([label, value], index) => {
    document.querySelector(`#spec-label-${index + 1}`).textContent = label;
    document.querySelector(`#spec-value-${index + 1}`).textContent = value;
  });
}

function updateSummary() {
  const car = cars[activeCar];
  const version = car.versions[activeVersion];
  const selectedColor = currentColors()[activeColor];
  const serviceValue = serviceDiscount.checked
    ? Math.round(version.price * 0.05)
    : 0;
  const area = document.querySelector(
    'input[name="registration-area"]:checked',
  ).value;
  const registrationFee = registrationFees[area];
  const feeDetails = registrationFeeDetails[area];
  const estimated =
    version.price +
    selectedColor.fee -
    car.promotion -
    serviceValue +
    registrationFee;
  document.querySelector("#summary-model").textContent = car.name;
  document.querySelector("#summary-version").textContent = version.name;
  document.querySelector("#summary-color").textContent = selectedColor.name;
  document.querySelector("#list-price").textContent = money(version.price);
  document.querySelector("#color-name").textContent = selectedColor.name;
  document.querySelector("#color-price").textContent = selectedColor.fee
    ? `Phụ phí ${money(selectedColor.fee)}`
    : "Không thu thêm";
  document.querySelector("#color-fee").textContent = money(selectedColor.fee);
  document.querySelector("#promo-value").textContent = car.promotion
    ? `− ${money(car.promotion)}`
    : money(0);
  document.querySelector("#service-value").textContent = serviceValue
    ? `− ${money(serviceValue)}`
    : money(0);
  document.querySelector("#registration-fee").textContent =
    money(registrationFee);
  document.querySelector("#registration-area-name").textContent =
    area === "city" ? "TP.HCM / Hà Nội" : "Tỉnh khác";
  document.querySelector("#fee-road").textContent = money(feeDetails.road);
  document.querySelector("#fee-insurance").textContent = money(
    feeDetails.insurance,
  );
  document.querySelector("#fee-plate").textContent = money(feeDetails.plate);
  document.querySelector("#fee-service").textContent = money(
    feeDetails.service,
  );
  document.querySelector("#fee-inspection").textContent = money(
    feeDetails.inspection,
  );
  document.querySelector("#fee-total").textContent = money(registrationFee);
  document.querySelector("#estimated-price").textContent = money(estimated);
  document.querySelector("#promotion-note").textContent = car.promotion
    ? `${car.name} được giảm thêm ${money(car.promotion)} theo chương trình hiện hành.`
    : "";
}

function selectCar(index) {
  activeCar = index;
  activeVersion = 0;
  activeColor = 0;
  serviceDiscount.checked = false;
  renderCarName();
  renderList();
  renderVersions();
  renderColors();
  renderSpecs();
  showCurrentImage();
  updateSummary();
  closeMenu();
}

function closeMenu() {
  document.querySelector(".car-list").classList.remove("open");
  document.querySelector("#overlay").classList.remove("show");
  document.querySelector("#mobile-menu").setAttribute("aria-expanded", "false");
}

list.addEventListener("click", (event) => {
  const button = event.target.closest(".car-item");
  if (button) selectCar(Number(button.dataset.index));
});

versions.addEventListener("change", (event) => {
  activeVersion = Number(event.target.value);
  activeColor = 0;
  document
    .querySelectorAll(".version-option")
    .forEach((option, i) =>
      option.classList.toggle("selected", i === activeVersion),
    );
  renderColors();
  renderSpecs();
  showCurrentImage();
  updateSummary();
});

colors.addEventListener("click", (event) => {
  const button = event.target.closest(".color-btn");
  if (!button) return;
  activeColor = Number(button.dataset.index);
  document
    .querySelectorAll(".color-btn")
    .forEach((item, i) => item.classList.toggle("selected", i === activeColor));
  showCurrentImage();
  updateSummary();
});

serviceDiscount.addEventListener("change", updateSummary);
registrationAreas.forEach((option) =>
  option.addEventListener("change", updateSummary),
);
document
  .querySelector("#print-quote")
  .addEventListener("click", () => window.print());
document.querySelector("#mobile-menu").addEventListener("click", () => {
  document.querySelector(".car-list").classList.add("open");
  document.querySelector("#overlay").classList.add("show");
  document.querySelector("#mobile-menu").setAttribute("aria-expanded", "true");
});
document.querySelector("#overlay").addEventListener("click", closeMenu);
carImage.addEventListener("load", () => {
  carImage.classList.remove("switching");
});

renderList();
renderVersions();
renderColors();
renderCarName();
renderSpecs();
showCurrentImage();
updateSummary();
