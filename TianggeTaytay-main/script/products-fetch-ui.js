const typeField = document.querySelector(".filter-type");
const minPriceField = document.querySelector(".min-price");
const maxPriceField = document.querySelector(".max-price");

const displayCategories = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/server/products-fetch-ui.php?component=category"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    const { categories } = data;

    categories.unshift("All Categories");

    categories.forEach((product_category) => {
      const option = document.createElement("div");
      option.innerHTML = `
            <div>
                <p>${product_category}</p>
                <img src="../assets/arrow-icon.png" alt="">
            </div>
        `;

      option.addEventListener("click", () => {
        category =
          product_category === "All Categories" ? "" : product_category;
        renderPage();
      });
      categoryField.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const displayTypes = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/server/products-fetch-ui.php?component=type"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();
    const { product_types } = data;

    product_types.forEach((product_type) => {
      const option = document.createElement("div");
      option.innerHTML = `
            <div>
                <p>${product_type}</p>
                <img src="../assets/arrow-icon.png" alt="">
            </div>
        `;

      option.addEventListener("click", () => {
        type = product_type;
        renderPage();
      });

      typeField.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const displayPriceRange = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/server/products-fetch-ui.php?component=price"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const { min_price, max_price } = await response.json();

    minPriceField.innerHTML = `&#8369;${min_price}`;
    maxPriceField.innerHTML = `&#8369;${max_price}`;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const renderUI = async () => {
  typeField.innerHTML = "";
  await displayTypes();

  minPriceField.innerHTML = "";
  maxPriceField.innerHTML = "";
  await displayPriceRange();

  categoryField.innerHTML = "";
  await displayCategories();
};

window.addEventListener("DOMContentLoaded", renderUI);
