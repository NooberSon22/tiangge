const fetchCategories = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/server/products-fetch-ui.php?component=category"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.categories || !Array.isArray(data.categories)) {
      throw new Error("Invalid categories data format.");
    }

    categorySelect.innerHTML = ""; // Clear previous options
    categorySelect.appendChild(createOption("", "All Categories")); // Default option

    data.categories.forEach((category) => {
      categorySelect.appendChild(createOption(category, category));
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    showError(categorySelect, "Failed to load categories.");
  }
};

/** Fetch Types */
const fetchTypes = async () => {
  if (!typeSelect) {
    console.error("Type select element not found in the DOM.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:3000/server/products-fetch-ui.php?component=type"
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch types: ${response.statusText}`);
    }

    const data = await response.json();

    typeSelect.innerHTML = ""; // Clear previous options
    typeSelect.appendChild(createOption("", "All Types")); // Default option

    data.product_types.forEach((product_type) => {
      typeSelect.appendChild(createOption(product_type, product_type));
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    showError(typeSelect, "Failed to load types.");
  }
};


const renderPage = async() => {}