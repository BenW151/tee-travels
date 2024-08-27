<template>
  <div class="resources">
    <Header
      imageUrl="/images/index-background.png"
      imageAlt="TODO alt"
      title="Travel Gear"
      subtitle="My Essential Gear."
      headerClass="header-small">
    </Header>

    <section class="contents">
      <LayoutGridContainer>
        <ListsPageIndex :labels="pageIndexLabels" />
      </LayoutGridContainer>
    </section>

    <section class="about text-left">
      <LayoutGridContainer>
        <TextSectionLabel labelText="Travel Essentials" />
        <TextParagraphWithTitle subtitleTag="h3">
          <template #title>Travel Essentials</template>
          <template #body>
            <p>
              When it comes to travel, having the right gear can make all the
              difference. Whether you're embarking on a weekend getaway or a
              month-long adventure, investing in reliable, lightweight, and
              versatile equipment is essential. From durable backpacks that can
              withstand the rigors of travel to compact, high-performance
              cameras that capture every moment, we've carefully curated a
              selection of must-have items. Our recommendations are designed to
              enhance your journey, ensuring you're prepared for any situation
              while keeping your load light. Discover gear that balances
              practicality with comfort, helping you travel smarter and more
              efficiently.
            </p>
          </template>
        </TextParagraphWithTitle>
        <ImageWithTextOverlay
          imageUrl="/images/girl.png"
          imageAlt="Copenhagen, Denmark"
          overlayText="Copenhagen, <br /> Denmark"
          textPosition="right" />
      </LayoutGridContainer>
    </section>

    <ItemGridItems labelText="Hiking" id="hiking">
      <template #title>Hiking Gear</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://www.amazon.com.au/Digital-Oiadek-Autofocus-Vlogging-Teenagers/dp/B0D3DRXXJ4/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ovO6wI1fXCYiVPSZA3DlVerUuMubzGpS6CcphNH4OQgfEmPT1s5n5aRQRo8ZAEaYe31Tn12rqbsRbd3TpRVZJQmR5n8NOpngtCKXgliPbb2i2PnHBCRhVAUK0J0Fgyb4EUXOXMvfTUxzvOzVjzVodqrDqhp7HL8JR7UfBu24bMy5BrVL51n_0h71bm8MC8fDD9JeaF6s2mqYkOcBNbc2GljYgjo9HZdNNzHAV7SecAMlJA3cgrBv_IpjdT7mXzxrpzv8ehyaJQS6Fc8-W6MnuvGXWVKOn5Bio_UOqrDnI88.eDWuM-gl4WS7QwrZJi-3efjpgp23l9Arm6BjsHpzytc&dib_tag=se&keywords=camera&qid=1724724810&sr=8-5"
        itemImage="/images/gear/camera.png"
        itemImageAlt="Image 1 description"
        itemLabel="Camera"
        itemDescription="Description of gear item 1." />
      <ItemGridItem
        itemUrl="https://www.amazon.com.au/Digital-Oiadek-Autofocus-Vlogging-Teenagers/dp/B0D3DRXXJ4/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ovO6wI1fXCYiVPSZA3DlVerUuMubzGpS6CcphNH4OQgfEmPT1s5n5aRQRo8ZAEaYe31Tn12rqbsRbd3TpRVZJQmR5n8NOpngtCKXgliPbb2i2PnHBCRhVAUK0J0Fgyb4EUXOXMvfTUxzvOzVjzVodqrDqhp7HL8JR7UfBu24bMy5BrVL51n_0h71bm8MC8fDD9JeaF6s2mqYkOcBNbc2GljYgjo9HZdNNzHAV7SecAMlJA3cgrBv_IpjdT7mXzxrpzv8ehyaJQS6Fc8-W6MnuvGXWVKOn5Bio_UOqrDnI88.eDWuM-gl4WS7QwrZJi-3efjpgp23l9Arm6BjsHpzytc&dib_tag=se&keywords=camera&qid=1724724810&sr=8-5"
        itemImage="/images/gear/camera.png"
        itemImageAlt="Image 1 description"
        itemLabel="Gear Item 1"
        itemDescription="Description of gear item 1." />
      <ItemGridItem
        itemUrl="https://www.amazon.com.au/Digital-Oiadek-Autofocus-Vlogging-Teenagers/dp/B0D3DRXXJ4/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ovO6wI1fXCYiVPSZA3DlVerUuMubzGpS6CcphNH4OQgfEmPT1s5n5aRQRo8ZAEaYe31Tn12rqbsRbd3TpRVZJQmR5n8NOpngtCKXgliPbb2i2PnHBCRhVAUK0J0Fgyb4EUXOXMvfTUxzvOzVjzVodqrDqhp7HL8JR7UfBu24bMy5BrVL51n_0h71bm8MC8fDD9JeaF6s2mqYkOcBNbc2GljYgjo9HZdNNzHAV7SecAMlJA3cgrBv_IpjdT7mXzxrpzv8ehyaJQS6Fc8-W6MnuvGXWVKOn5Bio_UOqrDnI88.eDWuM-gl4WS7QwrZJi-3efjpgp23l9Arm6BjsHpzytc&dib_tag=se&keywords=camera&qid=1724724810&sr=8-5"
        itemImage="/images/gear/camera.png"
        itemImageAlt="Image 1 description"
        itemLabel="Gear Item 1"
        itemDescription="Description of gear item 1." />
    </ItemGridItems>

    <ItemGridItems labelText="Camera" id="camera">
      <template #title>Camera Equipment</template>
      <template #body>
        <p>
          Here are some of the best hiking gear recommendations that will ensure
          you're prepared for your next adventure.
        </p>
      </template>
      <ItemGridItem
        itemUrl="https://www.amazon.com.au/Digital-Oiadek-Autofocus-Vlogging-Teenagers/dp/B0D3DRXXJ4/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ovO6wI1fXCYiVPSZA3DlVerUuMubzGpS6CcphNH4OQgfEmPT1s5n5aRQRo8ZAEaYe31Tn12rqbsRbd3TpRVZJQmR5n8NOpngtCKXgliPbb2i2PnHBCRhVAUK0J0Fgyb4EUXOXMvfTUxzvOzVjzVodqrDqhp7HL8JR7UfBu24bMy5BrVL51n_0h71bm8MC8fDD9JeaF6s2mqYkOcBNbc2GljYgjo9HZdNNzHAV7SecAMlJA3cgrBv_IpjdT7mXzxrpzv8ehyaJQS6Fc8-W6MnuvGXWVKOn5Bio_UOqrDnI88.eDWuM-gl4WS7QwrZJi-3efjpgp23l9Arm6BjsHpzytc&dib_tag=se&keywords=camera&qid=1724724810&sr=8-5"
        itemImage="/images/gear/camera.png"
        itemImageAlt="Image 1 description"
        itemLabel="Camera"
        itemDescription="Description of gear item 1." />
      <ItemGridItem
        itemUrl="https://www.amazon.com.au/Digital-Oiadek-Autofocus-Vlogging-Teenagers/dp/B0D3DRXXJ4/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ovO6wI1fXCYiVPSZA3DlVerUuMubzGpS6CcphNH4OQgfEmPT1s5n5aRQRo8ZAEaYe31Tn12rqbsRbd3TpRVZJQmR5n8NOpngtCKXgliPbb2i2PnHBCRhVAUK0J0Fgyb4EUXOXMvfTUxzvOzVjzVodqrDqhp7HL8JR7UfBu24bMy5BrVL51n_0h71bm8MC8fDD9JeaF6s2mqYkOcBNbc2GljYgjo9HZdNNzHAV7SecAMlJA3cgrBv_IpjdT7mXzxrpzv8ehyaJQS6Fc8-W6MnuvGXWVKOn5Bio_UOqrDnI88.eDWuM-gl4WS7QwrZJi-3efjpgp23l9Arm6BjsHpzytc&dib_tag=se&keywords=camera&qid=1724724810&sr=8-5"
        itemImage="/images/gear/camera.png"
        itemImageAlt="Image 1 description"
        itemLabel="Gear Item 1"
        itemDescription="Description of gear item 1." />
      <ItemGridItem
        itemUrl="https://www.amazon.com.au/Digital-Oiadek-Autofocus-Vlogging-Teenagers/dp/B0D3DRXXJ4/ref=sr_1_5?dib=eyJ2IjoiMSJ9.ovO6wI1fXCYiVPSZA3DlVerUuMubzGpS6CcphNH4OQgfEmPT1s5n5aRQRo8ZAEaYe31Tn12rqbsRbd3TpRVZJQmR5n8NOpngtCKXgliPbb2i2PnHBCRhVAUK0J0Fgyb4EUXOXMvfTUxzvOzVjzVodqrDqhp7HL8JR7UfBu24bMy5BrVL51n_0h71bm8MC8fDD9JeaF6s2mqYkOcBNbc2GljYgjo9HZdNNzHAV7SecAMlJA3cgrBv_IpjdT7mXzxrpzv8ehyaJQS6Fc8-W6MnuvGXWVKOn5Bio_UOqrDnI88.eDWuM-gl4WS7QwrZJi-3efjpgp23l9Arm6BjsHpzytc&dib_tag=se&keywords=camera&qid=1724724810&sr=8-5"
        itemImage="/images/gear/camera.png"
        itemImageAlt="Image 1 description"
        itemLabel="Gear Item 1"
        itemDescription="Description of gear item 1." />
    </ItemGridItems>
  </div>
</template>

<script setup>
const pageIndexLabels = [
  { title: "Hiking", link: "hiking" },
  { title: "Camera", link: "camera" },
];

useHead({
  title: "Tee Travels | Destinations",
  meta: [
    {
      name: "description",
      content:
        "Providing professional web development services focused on creating modern, responsive, and user-friendly websites tailored to your needs.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://benward.io/",
    },
  ],
});
</script>

<style scoped></style>

<style>
.text-left .paragraph-with-title {
  grid-column: 1 / 9;
  grid-row-start: 2;
}

.text-left .image {
  grid-column: 10 / 17;
  grid-row-start: 2;
  height: 40vw;
}

.text-right .paragraph-with-title {
  grid-column: 9 / 17;
  grid-row-start: 2;
}

.text-right .image {
  grid-column: 1 / 8;
  grid-row-start: 2;
  height: 40vw;
}
</style>
