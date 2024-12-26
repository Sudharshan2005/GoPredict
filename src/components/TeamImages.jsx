import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsBatters() {
  const testimonials = [
    {
      name: "Ruturaj Gaikwad",
      team: "INDIA",
      quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 256 in T20Is, 170 in ODIs, 1900+ in IPL.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Orange Cap winner in IPL 2021.\n5. International Career: Made T20I debut in 2021.",
      designation: "Product Manager at TechFlow",
      src: "https://www.iplt20.com/assets/images/teams-membr-1.png",
    },
    {
      name: "MS Dhoni",
      team: "INDIA",
      quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 2000+ in T20Is, 10,000+ in ODIs, 4,800+ in IPL.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Three-time IPL champion, 2007 ICC T20 World Cup winner, 2011 ICC World Cup winner, 2013 ICC Champions Trophy winner.\n5. Leadership: Known for his calm leadership and finishing ability under pressure.",
      designation: "Former Captain of India and Chennai Super Kings",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MSDhonix.jpg/800px-MSDhonix.jpg" // Updated image URL from Wikipedia
    },
    {
      name: "Devon Conway",
      team: "NEW ZEALAND",
      quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 1500+ in T20Is, 400+ in ODIs.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Known for his consistency and stroke play, one of CSK's key openers.",
      designation: "Top-order Batsman, Chennai Super Kings",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Devon_Conway_2022.jpg/800px-Devon_Conway_2022.jpg"
    },
    {
      name: "Rahul Tripathi",
      team: "INDIA",
      quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 2500+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR), Sunrisers Hyderabad (SRH), Chennai Super Kings (CSK).\n4. Achievements: Known for his attacking style and finishing abilities, a versatile middle-order batter.",
      designation: "Middle-order Batsman, Chennai Super Kings",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rahul_Tripathi_2021.jpg/800px-Rahul_Tripathi_2021.jpg"
    },
    {
      name: "Shaik Rasheed",
      team: "CHENNAI SUPER KINGS",
      quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in IPL, played for CSK.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: A promising young talent who has impressed in domestic cricket and the U-19 circuit.",
      designation: "Batsman, Chennai Super Kings",
      src: "https://www.cricbuzz.com/a/img/v1/160x120/i1/c279503/shaik-rasheed.jpg"
    },
    {
      name: "Vansh Bedi",
      team: "Chennai Super Kings (CSK)",
      quote: "Vansh Bedi is a promising talent, looking to make his mark in the IPL. More details will be available soon as he progresses through his career.",
      designation: "Upcoming Player",
      src: "https://example.com/placeholder-image.jpg",
    },
    {
      name: "Andre Siddharth",
      team: "Chennai Super Kings (CSK)",
      quote: "A young and promising talent, eager to make an impact in the IPL. Details will emerge as he gains more experience in the tournament.",
      designation: "Upcoming Player",
      src: "https://example.com/placeholder-image.jpg",
    }
  ];

  const renderQuoteWithBreaks = (quote) => {
    return quote.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  return (
    <AnimatedTestimonials
      testimonials={testimonials.map(testimonial => ({
        ...testimonial,
        quote: renderQuoteWithBreaks(testimonial.quote),
      }))}
    />
  );
}
