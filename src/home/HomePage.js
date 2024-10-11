import React from "react";

import items from "../mockdata/items.json";
import ItemList from "../itemList/ItemLIst";

function HomePage() {
  return (
    <section className="main-content">
      <ItemList items={items} />
    </section>
  );
}

export default HomePage;
