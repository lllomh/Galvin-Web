const artworkSlugs = [
  'make-hay-while-sun-shines-hzcxm',
  'the-reek',
  'adare-cottages',
  'bunratty',
  'farmleigh-house',
  'wild-atlantic-way',
  'whispers-of-summer1',
  'blue-elegance',
  'sunrise-skerries',
  'sunset-salthill',
  'better-together',
  'the-calf',
  'natures-bounty',
  'the-bridge',
  'the-farm',
  'limousin',
  'bales-of-gold',
  'symmetry',
  'cow',
  'taking-a-rest',
  'gougane-barra',
  'grand-canal',
  'havin-a-gander',
  'the-blue-door',
  'the-carmelite-and-st-patricks-churches',
  'after-the-rain',
  'ready-and-waiting',
  'kinsale-harbour',
  'bluebell-wood',
  'kilcatherine-bridge',
  'pink-petals-and-berries',
  'farmer-and-sheep',
  'anticipation',
  'morning-reflections',
  'cycle-track',
  'lake'
];

async function scrapeImages() {
  const results = [];
  
  for (const slug of artworkSlugs) {
    const url = `https://www.johngalvinfineart.com/original-art-for-sale/${slug}`;
    console.log(`Fetching: ${url}`);
    
    try {
      const response = await fetch(url);
      const html = await response.text();
      
      // Look for image URLs in the HTML
      const imgMatch = html.match(/https:\/\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi);
      if (imgMatch && imgMatch.length > 0) {
        results.push({ slug, imageUrl: imgMatch[0] });
        console.log(`Found: ${imgMatch[0]}`);
      }
    } catch (error) {
      console.error(`Error fetching ${slug}:`, error.message);
    }
  }
  
  console.log('\n\nResults:', JSON.stringify(results, null, 2));
}

scrapeImages();
