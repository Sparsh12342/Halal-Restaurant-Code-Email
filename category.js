// --- Simple data model per category ---
const DATA = {
  beef: [
    {
      name: "Beef with bones",
      img: "img/beef1.png",
      cuts: ["Stew Cubes", "Stir Fry", "Roast", "Kebab"],
      pieces: ["1", "2", "Many"],
      prices: { "250g": 6.49, "500g": 12.49, "1kg": 24.49 }
    },
    {
      name: "Beef Boneless",
      img: "img/beef2.png",
      cuts: ["Short Ribs", "Back Ribs"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 9.99, "1kg": 18.99 }
    },
    {
      name: "Beef Slices/Pasanda",
      img: "img/beef3.png",
      cuts: ["Ribeye", "Sirloin", "Striploin"],
      pieces: ["1", "2", "Many"],
      prices: { "250g": 8.99, "500g": 16.99 }
    },
    {
      name: "Beef Shank/Nehari",
      img: "img/beef4.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 7.49, "1kg": 13.99 }
    },
    {
      name: "Beef Mince",
      img: "img/beef5.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Fats",
      img: "img/beef6.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Ribs",
      img: "img/beef7.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Paya",
      img: "img/beef8.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Bone Marrow",
      img: "img/beef9.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Ribeye Steak",
      img: "img/beef19.png",
      cuts: ["Ribeye", "T-Bone", "Tomohawk"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    },
    {
      name: "Beef Ox Tail",
      img: "img/beef11.png",
      cuts: ["Regular (80/20)", "Lean (90/10)"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 6.99, "1kg": 12.99 }
    }
  ],

  chicken: [
    {
      name: "Whole Chicken",
      img: "img/p1.png",
      cuts: ["Whole", "Skinless"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 4.99, "1kg": 8.99 }
    },
    {
      name: "Legs",
      img: "img/p2.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Bone Marrow",
      img: "img/p3.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Thigh Boneless",
      img: "img/p4.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Breast Boneless",
      img: "img/p5.png",
      cuts: ["Boneless", "Minced"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Mix Minced",
      img: "img/p6.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    },
    {
      name: "Chicken Tenders",
      img: "img/p8.png",
      cuts: ["Drums", "Flats", "Whole Wing"],
      pieces: ["1", "2", "Many"],
      prices: { "500g": 5.99, "1kg": 10.99 }
    }
  ],

  // --- Baby Goat ---
  "baby-goat": [
    { name: "Baby Goat Mix",       img: "img/g1.png",
      cuts: ["Curry Cut","Biryani Cut"], pieces: ["1","2","Many"],
      prices: { "1lb": 11.99 } },

    { name: "Baby Goat Shoulder",  img: "img/g2.png",
      cuts: ["Whole","Chunks"], pieces: ["1","2","Many"],
      prices: { "1lb": 13.49 } },

    { name: "Baby Goat Leg",       img: "img/g3.png",
      cuts: ["Whole","Chunks","Steaks"], pieces: ["1","2","Many"],
      prices: { "1lb": 13.99 } },

    { name: "Baby Goat Chops",     img: "img/g4.png",
      cuts: ["Rib Chops","Loin Chops"], pieces: ["1","2","Many"],
      prices: { "1lb": 14.50 } },

    { name: "Baby Goat Whole",     img: "img/g5.png",
      cuts: ["Whole","Half"], pieces: ["1","2","Many"],
      prices: { "1lb": 10.99 } },

    { name: "Baby Goat Minced",    img: "img/g7.png",
      cuts: ["Regular","Lean"], pieces: ["1","2","Many"],
      prices: { "1lb": 15.99 } },

    { name: "Baby Goat Liver",     img: "img/g8.png",
      cuts: ["Slices"], pieces: ["1","2","Many"],
      prices: { "1lb": 10.99 } },

    { name: "Baby Goat Brain (Each)", img: "img/g13.png",
      cuts: ["Whole"], pieces: ["1","2","Many"],
      prices: { "each": 3.50 } },

    { name: "Baby Goat Heart",     img: "img/g9.png",
      cuts: ["Whole","Sliced"], pieces: ["1","2","Many"],
      prices: { "1lb": 10.99 } },

    { name: "Baby Goat Neck",      img: "img/g10.png",
      cuts: ["Rings","Chunks"], pieces: ["1","2","Many"],
      prices: { "1lb": 10.99 } },

    { name: "Baby Goat Paya",      img: "img/g11.png",
      cuts: ["Cleaned"], pieces: ["1","2","Many"],
      prices: { "1lb": 6.49 } },

    { name: "Baby Goat Ribs",      img: "img/g12.png",
      cuts: ["Rib Rack","Single Ribs"], pieces: ["1","2","Many"],
      prices: { "1lb": 8.99 } },
  ],

  // --- Baby Lamb ---
  "baby-lamb": [
    { name: "Baby Lamb Whole",     img: "img/l1.png",
      cuts: ["Whole","Quartered"], pieces: ["1","2","Many"],
      prices: { "1lb": 9.99 } },

    { name: "Baby Lamb Half",      img: "img/l2.png",
      cuts: ["Half","Quartered"], pieces: ["1","2","Many"],
      prices: { "1lb": 10.99 } },

    { name: "Baby Lamb Shoulder",  img: "img/l3.png",
      cuts: ["Whole","Chunks"], pieces: ["1","2","Many"],
      prices: { "1lb": 12.49 } },

    { name: "Baby Lamb Leg",       img: "img/l4.png",
      cuts: ["Whole","Chunks","Steaks"], pieces: ["1","2","Many"],
      prices: { "1lb": 12.99 } },

    { name: "Baby Lamb Chops",     img: "img/l5.png",
      cuts: ["Rib Chops","Loin Chops","French Trim"], pieces: ["1","2","Many"],
      prices: { "1lb": 13.50 } },

    { name: "Baby Lamb Liver",     img: "img/l6.png",
      cuts: ["Slices"], pieces: ["1","2","Many"],
      prices: { "1lb": 9.99 } },

    { name: "Baby Lamb Brain (Each)", img: "img/l7.png",
      cuts: ["Whole"], pieces: ["1","2","Many"],
      prices: { "each": 3.50 } },

    { name: "Baby Lamb Minced",    img: "img/l8.png",
      cuts: ["Regular","Lean"], pieces: ["1","2","Many"],
      prices: { "1lb": 13.99 } },

    { name: "Baby Lamb Neck",      img: "img/l9.png",
      cuts: ["Rings","Chunks"], pieces: ["1","2","Many"],
      prices: { "1lb": 12.50 } },

    { name: "Baby Lamb Ribs",      img: "img/l10.png",
      cuts: ["Rib Rack","Single Ribs"], pieces: ["1","2","Many"],
      prices: { "1lb": 12.49 } },

    { name: "Baby Lamb Shank",     img: "img/l11.png",
      cuts: ["Whole","Cross-Cut"], pieces: ["1","2","Many"],
      prices: { "1lb": 8.49 } },
  ],

  // --- Ready to Cook ---
  "ready-to-cook": [
    { name: "Tandoori Legs",    img: "img/r1.png",
      cuts: ["Whole","Slit"], pieces: ["1","2","Many"],
      prices: { "1lb": 4.99 } },

    { name: "Tandoori Wings",   img: "img/r2.png",
      cuts: ["Whole Wing","Drums","Flats"], pieces: ["1","2","Many"],
      prices: { "1lb": 5.99 } },

    { name: "Fried Goat Chops", img: "img/r3.png",
      cuts: ["Rib Chops"], pieces: ["1","2","Many"],
      prices: { "1lb": 15.50 } },

    { name: "Chicken Franks 6 Pack", img: "img/r4.png",
      cuts: ["6 Pack"], pieces: ["1","2","Many"],
      prices: { "6-pack": 9.99 } },

    { name: "Beef Franks 6 Pack", img: "img/r5.png",
      cuts: ["6 Pack"], pieces: ["1","2","Many"],
      prices: { "6-pack": 9.99 } },

    { name: "Beef Chapli Kabab", img: "img/r6.png",
      cuts: ["4 pcs","6 pcs"], pieces: ["1","2","Many"],
      prices: { "each": 12.99 } },

    { name: "Chicken Chapli Kabab", img: "img/r7.png",
      cuts: ["4 pcs","6 pcs"], pieces: ["1","2","Many"],
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
    if (title) title.textContent = "Category not found";
    if (container) container.innerHTML = "<p>Invalid category.</p>";
    return;
  }

  if (title) title.textContent = cat.replace(/-/g, " ").replace(/\b\w/g, m => m.toUpperCase());

  if (!container) return;
  container.innerHTML = ""; // clear

  data.forEach(product => {
    const weights = Object.keys(product.prices);

    const img = h("img", { src: product.img, alt: product.name });
    const name = h("h2", { html: product.name });

    const cutSel = h("select", { class: "opt" }, product.cuts.map(c => h("option", { value: c }, [c])));

    // pieces selector (replaces prior 'spice')
    const piecesOptions = product.pieces && product.pieces.length ? product.pieces : ["1","2","Many"];
    const piecesSel = h("select", { class: "opt" }, piecesOptions.map(p => h("option", { value: p }, [p])));

    // skin selector
    const skinSel = h("select", { class: "opt" }, ["With Skin", "Without Skin"].map(s => h("option", { value: s }, [s])));

    const weightSel = h("select", { class: "opt" }, weights.map(w =>
      h("option", { value: w }, [`${w} — $${product.prices[w].toFixed(2)}`])
    ));

    const qty = h("input", { type: "number", min: "1", value: "1", style: "width:80px;" });

    const addBtn = h("button", { class: "btn", type: "button" }, ["Add to Cart ", h("i", { class: "bx bx-cart-alt" })]);
    addBtn.addEventListener("click", () => {
      const chosenWeight = weightSel.value;
      const price = product.prices[chosenWeight] ?? 0;
      addToCart({
        category: cat,
        name: product.name,
        cut: cutSel.value,
        pieces: piecesSel.value,
        skin: skinSel.value,
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
        h("label", { style: "margin-left:10px" }, ["Pieces: ", piecesSel]),
        h("label", { style: "margin-left:10px" }, ["Skin: ", skinSel]),
        h("label", { style: "margin-left:10px" }, ["Weight: ", weightSel]),
        h("label", { style: "margin-left:10px" }, ["Qty: ", qty]),
      ]),
      addBtn
    ]);

    container.appendChild(box);
  });
}

document.addEventListener("DOMContentLoaded", render);
