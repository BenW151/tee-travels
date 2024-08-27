<template>
  <div>
    <ItemGridItems labelText="Regions">
      <template #title>Regions</template>
      <template #body>
        <p>
          Explore the regions I've had the pleasure of visiting. Each
          destination has its own unique character and charm, offering a diverse
          range of experiences and stories. Click through to read about my
          adventures in these places, discover local tips, and see the
          highlights of each country I've explored. I hope my travels inspire
          your own journey to these amazing locations!
        </p>
      </template>

      <ItemGridItem
        itemUrl="/destinations/europe"
        itemImage="/images/denmark-cover.png"
        itemImageAlt="Europe Cover"
        itemLabel="Europe"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/asia"
        itemImage="/images/japan-cover.png"
        itemImageAlt="Asia Cover"
        itemLabel="Asia"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/north-america"
        itemImage="/images/canada-cover.png"
        itemImageAlt="North America Cover"
        itemLabel="North America"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/central-america"
        itemImage="/images/guatemala-cover.png"
        itemImageAlt="Central America Cover"
        itemLabel="Central America"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/south-america"
        itemImage="/images/argentina-cover.png"
        itemImageAlt="South America Cover"
        itemLabel="South America"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/middle-east"
        itemImage="/images/jordan-cover.png"
        itemImageAlt="Middle East Cover"
        itemLabel="Middle East"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/africa"
        itemImage="/images/tanzania-cover.png"
        itemImageAlt="Africa Cover"
        itemLabel="Africa"
        :isDestination="true"
        />
      <ItemGridItem
        itemUrl="/destinations/oceania"
        itemImage="/images/australia-cover.png"
        itemImageAlt="Oceania Cover"
        itemLabel="Oceania"
        :isDestination="true"
        />
    </ItemGridItems>
  </div>
</template>

<script setup></script>

<style scoped>
</style>
