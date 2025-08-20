// --- Simple data model per category ---
const DATA = {
  beef: [
    {
      name: "Beef with bones",
      img: "img/beef1.png",
      cuts: ["Stew Cubes", "Stir Fry", "Roast", "Kebab"],
      spice: ["None", "Mild", "Medium", "Hot"],
      prices: { "250g": 6.49, "500g": 12.49, "1kg": 24.49 }
    },
    {
      name: "Beef Boneless",
      img: "img/beef2.png",
      cuts: ["Short Ribs", "Back Ribs"],
      spice: ["None", "BBQ Rub", "Tandoori"],
      prices: { "500g": 9.99, "1kg": 18.99 }
    },
    {
      name: "Beef Slices/Pasanda",
      img: "img/beef3.jpg",
      cuts: ["Ribeye", "Sirloin", "Striploin"],
      spice: ["None", "Black Pepper", "Garlic Butter"],
      prices: { "250g": 8.99, "500g": 16.99 }
    },
    {
      name: "Beef Shank/Nehari",
      img: "img/beef4.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 7.49, "1kg": 13.99 }
    },
    {
      name: "Beef Mince Regular",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Mince Lean",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Fats",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Ribs",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Paya",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Bone Marrow",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Ribeye Steak",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef T-Bone Steak",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Tomohawk Steak",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Ox Tail",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      spice: ["None", "Seekh Kebab Mix"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    
  ],
  chicken: [
    {
      name: "Whole Chicken",
      img: "img/p1.png",
      cuts: ["Whole", "Skinless"],
      spice: ["None", "Tandoori", "Peri-Peri"],
      prices: { "500g": 4.99, "1kg": 8.99 }
    },
    {
      name: "Legs",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Bone Marrow",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Thigh Boneless",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Breast Boneless",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Breast Minced",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Mix Minced",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Tenders",
      img: "img/p5.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      spice: ["Tandoori"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
  ],
  // --- Baby Goat ---
"baby-goat": [
  { name: "Baby Goat Mix",       img: "img/cat-3.png",
    cuts: ["Curry Cut","Biryani Cut"], spice: ["None","Masala"],
    prices: { "1lb": 11.99 } },

  { name: "Baby Goat Shoulder",  img: "img/cat-3.png",
    cuts: ["Whole","Chunks"], spice: ["None","Masala"],
    prices: { "1lb": 13.49 } },

  { name: "Baby Goat Leg",       img: "img/cat-3.png",
    cuts: ["Whole","Chunks","Steaks"], spice: ["None","Masala"],
    prices: { "1lb": 13.99 } },

  { name: "Baby Goat Chops",     img: "img/cat-3.png",
    cuts: ["Rib Chops","Loin Chops"], spice: ["None","Herb Rub"],
    prices: { "1lb": 14.50 } },

  { name: "Baby Goat Whole",     img: "img/cat-3.png",
    cuts: ["Whole","Quartered"], spice: ["None"],
    prices: { "1lb": 10.99 } },

  { name: "Baby Goat Half",      img: "img/cat-3.png",
    cuts: ["Half","Quartered"], spice: ["None"],
    prices: { "1lb": 11.99 } },

  { name: "Baby Goat Minced",    img: "img/cat-3.png",
    cuts: ["Regular","Lean"], spice: ["None","Seekh Kebab Mix"],
    prices: { "1lb": 15.99 } },

  { name: "Baby Goat Liver",     img: "img/cat-3.png",
    cuts: ["Slices"], spice: ["None"],
    prices: { "1lb": 10.99 } },

  { name: "Baby Goat Brain (Each)", img: "img/cat-3.png",
    cuts: ["Whole"], spice: ["None"],
    prices: { "each": 3.50 } },

  { name: "Baby Goat Heart",     img: "img/cat-3.png",
    cuts: ["Whole","Sliced"], spice: ["None"],
    prices: { "1lb": 10.99 } },

  { name: "Baby Goat Neck",      img: "img/cat-3.png",
    cuts: ["Rings","Chunks"], spice: ["None"],
    prices: { "1lb": 10.99 } },

  { name: "Baby Goat Paya",      img: "img/cat-3.png",
    cuts: ["Cleaned"], spice: ["None"],
    prices: { "1lb": 6.49 } },

  { name: "Baby Goat Ribs",      img: "img/cat-3.png",
    cuts: ["Rib Rack","Single Ribs"], spice: ["None"],
    prices: { "1lb": 8.99 } },
],

// --- Baby Lamb ---
"baby-lamb": [
  { name: "Baby Lamb Whole",     img: "img/cat-4.png",
    cuts: ["Whole","Quartered"], spice: ["None"],
    prices: { "1lb": 9.99 } },

  { name: "Baby Lamb Half",      img: "img/cat-4.png",
    cuts: ["Half","Quartered"], spice: ["None"],
    prices: { "1lb": 10.99 } },

  { name: "Baby Lamb Shoulder",  img: "img/cat-4.png",
    cuts: ["Whole","Chunks"], spice: ["None","Herb Rub"],
    prices: { "1lb": 12.49 } },

  { name: "Baby Lamb Leg",       img: "img/cat-4.png",
    cuts: ["Whole","Chunks","Steaks"], spice: ["None","Herb Rub"],
    prices: { "1lb": 12.99 } },

  { name: "Baby Lamb Chops",     img: "img/cat-4.png",
    cuts: ["Rib Chops","Loin Chops","French Trim"], spice: ["None","Herb Rub"],
    prices: { "1lb": 13.50 } },

  { name: "Baby Lamb Liver",     img: "img/cat-4.png",
    cuts: ["Slices"], spice: ["None"],
    prices: { "1lb": 9.99 } },

  { name: "Baby Lamb Brain (Each)", img: "img/cat-4.png",
    cuts: ["Whole"], spice: ["None"],
    prices: { "each": 3.50 } },

  { name: "Baby Lamb Minced",    img: "img/cat-4.png",
    cuts: ["Regular","Lean"], spice: ["None","Seekh Kebab Mix"],
    prices: { "1lb": 13.99 } },

  { name: "Baby Lamb Neck",      img: "img/cat-4.png",
    cuts: ["Rings","Chunks"], spice: ["None"],
    prices: { "1lb": 12.50 } },

  { name: "Baby Lamb Ribs",      img: "img/cat-4.png",
    cuts: ["Rib Rack","Single Ribs"], spice: ["None"],
    prices: { "1lb": 12.49 } },

  { name: "Baby Lamb Shank",     img: "img/cat-4.png",
    cuts: ["Whole","Cross-Cut"], spice: ["None"],
    prices: { "1lb": 8.49 } },
],

// --- Ready to Cook ---
"ready-to-cook": [
  { name: "Tandoori Legs",    img: "img/cat-5.png",
    cuts: ["Whole","Slit"], spice: ["Tandoori"],
    prices: { "1lb": 4.99 } },

  { name: "Tandoori Wings",   img: "img/cat-5.png",
    cuts: ["Whole Wing","Drums","Flats"], spice: ["Tandoori"],
    prices: { "1lb": 5.99 } },

  { name: "Fried Goat Chops", img: "img/cat-5.png",
    cuts: ["Rib Chops"], spice: ["House Seasoning"],
    prices: { "1lb": 15.50 } },

  { name: "Chicken Franks 6 Pack", img: "img/cat-5.png",
    cuts: ["6 Pack"], spice: ["Classic"],
    prices: { "6-pack": 9.99 } },

  { name: "Beef Franks 6 Pack", img: "img/cat-5.png",
    cuts: ["6 Pack"], spice: ["Classic"],
    prices: { "6-pack": 9.99 } },

  { name: "Beef Chapli Kabab", img: "img/cat-5.png",
    cuts: ["4 pcs","6 pcs"], spice: ["Mild","Medium","Hot"],
    prices: { "each": 12.99 } },

  { name: "Chicken Chapli Kabab", img: "img/cat-5.png",
    cuts: ["4 pcs","6 pcs"], spice: ["Mild","Medium","Hot"],
    prices: { "each": 12.99 } },
],

};

// --- Utils ---
function $(sel, root = document) { return root.querySelector(sel); }
function h(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else el.setAttribute(k, v);
  });
  children.forEach(c => el.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return el;
}
function getParam(name) {
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

// --- Cart (localStorage for now) ---
const CART_KEY = "shm_cart_v1";
function readCart() { try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); } catch { return []; } }
function writeCart(items) { localStorage.setItem(CART_KEY, JSON.stringify(items)); updateCartCount(); }
function addToCart(item) { const cart = readCart(); cart.push(item); writeCart(cart); }
function updateCartCount() { $("#cart-count") && ($("#cart-count").textContent = readCart().length); }

// --- Render page based on ?cat= ---
function render() {
  const cat = getParam("cat");
  const data = DATA[cat];
  const title = $("#cat-title");
  const container = $("#items");

  updateCartCount();

  if (!data) {
    title.textContent = "Category not found";
    container.innerHTML = "<p>Invalid category.</p>";
    return;
  }

  title.textContent = cat.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase());

  container.innerHTML = ""; // clear
  data.forEach(product => {
    const weights = Object.keys(product.prices);

    const img = h("img", { src: product.img, alt: product.name });
    const name = h("h2", { html: product.name });

    const cutSel = h("select", { class: "opt" }, product.cuts.map(c => h("option", { value: c }, [c])));
    const spiceSel = h("select", { class: "opt" }, product.spice.map(s => h("option", { value: s }, [s])));
    const weightSel = h("select", { class: "opt" }, weights.map(w => h("option", { value: w }, [`${w} — $${product.prices[w].toFixed(2)}`])));

    const qty = h("input", { type: "number", min: "1", value: "1", style: "width:80px;" });

    const addBtn = h("button", { class: "btn", type: "button" }, ["Add to Cart ", h("i", { class: "bx bx-cart-alt" })]);
    addBtn.addEventListener("click", () => {
      const chosenWeight = weightSel.value;
      const price = product.prices[chosenWeight] ?? 0;
      addToCart({
        category: cat,
        name: product.name,
        cut: cutSel.value,
        spice: spiceSel.value,
        weight: chosenWeight,
        qty: Number(qty.value || 1),
        unitPrice: price
      });
      addBtn.textContent = "Added!";
      setTimeout(() => (addBtn.innerHTML = "Add to Cart <i class='bx bx-cart-alt'></i>"), 900);
    });

    const box = h("div", { class: "box" }, [
      img,
      h("span", {}, ["Customize your order"]),
      name,
      h("div", { class: "options" }, [
        h("label", {}, ["Cut: ", cutSel]),
        h("label", { style: "margin-left:10px" }, ["Spice: ", spiceSel]),
        h("label", { style: "margin-left:10px" }, ["Weight: ", weightSel]),
        h("label", { style: "margin-left:10px" }, ["Qty: ", qty]),
      ]),
      addBtn
    ]);

    container.appendChild(box);
  });
}

document.addEventListener("DOMContentLoaded", render);

