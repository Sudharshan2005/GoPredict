import { useState } from "react";
import { NavigationbarWithDropdownMultilevelMenu } from "../Navbar";
import { SimpleFooter } from "../Footer";
// import { TeamLogos2 } from "../TeamSelection2";
import { TeamLogos } from "../TeamSelection";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState("Chennai Super Kings");

  const handleTeamSelection = (teamName) => {
    setSelectedTeam(teamName);
  };
  
  const playerData = {
    "Chennai Super Kings": {
      color: "#dff51b",
      batters: [
        {
          name: "Ruturaj Gaikwad",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 256 in T20Is, 170 in ODIs, 1900+ in IPL.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Orange Cap winner in IPL 2021.\n5. International Career: Made T20I debut in 2021.",
          designation: "Product Manager at TechFlow",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/Gaikwad",
        },
        {
          name: "MS Dhoni",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 2000+ in T20Is, 10,000+ in ODIs, 4,800+ in IPL.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Three-time IPL champion, 2007 ICC T20 World Cup winner, 2011 ICC World Cup winner, 2013 ICC Champions Trophy winner.\n5. Leadership: Known for his calm leadership and finishing ability under pressure.",
          designation: "Former Captain of India and Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/Dhoni"
        },
        {
          name: "Devon Conway",
          team: "NEW ZEALAND",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 1500+ in T20Is, 400+ in ODIs.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Known for his consistency and stroke play, one of CSK's key openers.",
          designation: "Top-order Batsman, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/conway"
        },
        {
          name: "Rahul Tripathi",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 2500+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR), Sunrisers Hyderabad (SRH), Chennai Super Kings (CSK).\n4. Achievements: Known for his attacking style and finishing abilities, a versatile middle-order batter.",
          designation: "Middle-order Batsman, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/tripathi.png"
        },
        {
          name: "Shaik Rasheed",
          team: "CHENNAI SUPER KINGS",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in IPL, played for CSK.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: A promising young talent who has impressed in domestic cricket and the U-19 circuit.",
          designation: "Batsman, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/rasheed"
        },
        {
          name: "Vansh Bedi",
          team: "Chennai Super Kings (CSK)",
          quote: "Vansh Bedi is a promising talent, looking to make his mark in the IPL. More details will be available soon as he progresses through his career.",
          designation: "Upcoming Player",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/vansh.png",
        },
        {
          name: "Andre Siddharth",
          team: "Chennai Super Kings (CSK)",
          quote: "A young and promising talent, eager to make an impact in the IPL. Details will emerge as he gains more experience in the tournament.",
          designation: "Upcoming Player",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/siddarth.png",
        }
      ],
      allRounders: [
        {
          name: "Ravindra Jadeja",
          team: "INDIA",
          quote: "1. All-rounder.\n2. Total Runs: 300+ in T20Is, 2000+ in ODIs.\n3. Wickets: 51 in T20Is, 200+ in ODIs.\n4. IPL Teams: Chennai Super Kings (CSK).\n5. Achievements: IPL champion, ICC World Cup winner.",
          designation: "All-rounder, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/jadeja",
        },
        {
          name: "Shivam Dube",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Bowling Style: Right-arm medium-fast.\n3. Total Runs: Over 1,000 runs in IPL and domestic cricket.\n4. Total Wickets: 20+ wickets in domestic cricket.\n5. Achievements: Known for his explosive batting, especially in the middle-order. A key performer for Rajasthan Royals and Chennai Super Kings in the IPL.",
          designation: "All-rounder, Indian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/dube"
        },        
        {
          name: "Rachin Ravindra",
          team: "NEW ZEALAND",
          quote: "1. Batting Style: Left-hand batsman.\n2. Bowling Style: Slow left-arm orthodox.\n3. Total Runs: Over 800 runs in international cricket.\n4. Total Wickets: Over 25 wickets in international cricket.\n5. Achievements: Known for his all-round performance, emerging as a key player for New Zealand.",
          designation: "All-rounder, New Zealand National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/rachin"
        },
        {
          name: "Ravichandran Ashwin",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm off-break.\n2. Batting Style: Right-hand batsman.\n3. Total Wickets: 450+ in Test matches, 150+ in ODIs, 60+ in T20Is.\n4. Total Runs: 3,000+ in Tests, 700+ in ODIs.\n5. Achievements: ICC Player of the Year 2016, known for his all-round skills and tactical bowling.",
          designation: "All-rounder, Indian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/ashwin.png"
        },
        {
          name: "Vijay Shankar",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Bowling Style: Right-arm medium.\n3. Total Runs: Over 1,000 runs in IPL and domestic cricket.\n4. Total Wickets: Over 50 in domestic cricket.\n5. Achievements: Known as a dependable all-rounder and his heroics in IPL for Sunrisers Hyderabad.",
          designation: "All-rounder, Indian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/shankar.png"
        },
        {
          name: "Sam Curran",
          team: "ENGLAND",
          quote: "1. Bowling Style: Left-arm medium-fast.\n2. Batting Style: Left-hand batsman.\n3. Total Runs: 1,000+ in international cricket.\n4. Total Wickets: Over 100 wickets in international cricket.\n5. Achievements: Player of the Tournament in ICC T20 World Cup 2022, known for his impactful performances in IPL.",
          designation: "All-rounder, England National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/curran.png"
        },
        {
          name: "Deepak Hooda",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Bowling Style: Right-arm off-break.\n3. Total Runs: Over 2,000 runs in IPL and domestic cricket.\n4. Total Wickets: Over 50 wickets in domestic cricket.\n5. Achievements: Known for his explosive batting and handy off-spin bowling.",
          designation: "All-rounder, Indian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/deepak.png"
        },
        {
          name: "Jamie Overton",
          team: "ENGLAND",
          quote: "1. Bowling Style: Right-arm fast-medium.\n2. Batting Style: Right-hand batsman.\n3. Total Runs: Emerging lower-order batsman.\n4. Total Wickets: Over 100 in domestic cricket.\n5. Achievements: Known for his pace and bounce, a rising talent in England's fast-bowling lineup.",
          designation: "Bowler, England National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/overton.png"
        },
        {
          name: "Kamlesh Nagarkoti",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm fast.\n2. Batting Style: Right-hand batsman.\n3. Total Wickets: Over 50 wickets in domestic cricket.\n4. Achievements: Star performer in the ICC U-19 Cricket World Cup 2018, known for his raw pace and athleticism.",
          designation: "Bowler, Indian Domestic Circuit",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/kamlesh.png"
        },
        {
          name: "Ramakrishna Gosh",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm off-break.\n2. Batting Style: Left-hand batsman.\n3. Achievements: A promising talent in the Indian domestic circuit, looking to make a mark in the IPL and international cricket.",
          designation: "All-rounder, Indian Domestic Circuit",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/ghosh.png"
        } 
      ],
      bowlers: [
        {
          name: "Matheesha Pathirana",
          team: "SRI LANKA",
          quote: "1. Bowling Style: Right-arm fast.\n2. Total Wickets: 30+ wickets in domestic cricket.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Known for his express pace and ability to bowl in the death overs, Pathirana made his mark in the IPL with consistent performances.",
          designation: "Fast Bowler, Sri Lanka",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/pathirana"
        },
        {
          name: "Mukesh Choudhary",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm fast-medium.\n2. Total Wickets: 25+ wickets in domestic cricket.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Known for his ability to swing the ball and perform under pressure, especially in the IPL.",
          designation: "Fast Bowler, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/mukesh"
        },
        {
          name: "Khaleel Ahmed",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm medium-fast.\n2. Total Wickets: 50+ wickets in international and domestic cricket.\n3. IPL Teams: Delhi Capitals (DC), Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his ability to swing the ball and be effective in the powerplay.",
          designation: "Fast Bowler, Indian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/khaleel.png"
        },
        {
          name: "Noor Ahmad",
          team: "AFGHANISTAN",
          quote: "1. Bowling Style: Left-arm wrist-spin.\n2. Total Wickets: Over 100 wickets in domestic cricket.\n3. IPL Teams: Gujarat Titans (GT).\n4. Achievements: A promising young spinner from Afghanistan, known for his variety and ability to take wickets in the middle overs.",
          designation: "Spinner, Afghanistan",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/noor.png"
        },
        {
          name: "Shreyas Gopal",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm leg-spin.\n2. Total Wickets: 100+ wickets in domestic cricket.\n3. IPL Teams: Rajasthan Royals (RR), Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his wicket-taking ability, especially in the middle overs. A key spinner in the IPL.",
          designation: "Leg Spinner, Indian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/gopal.png"
        },
        {
          name: "Gurjapneet Singh",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm medium-fast.\n2. Total Wickets: 30+ wickets in domestic cricket.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: A rising star in Indian cricket, known for his ability to bowl in the powerplay and death overs.",
          designation: "Bowler, Indian Domestic Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/gurjapneet.png"
        },
        {
          name: "Nathan Ellis",
          team: "AUSTRALIA",
          quote: "1. Bowling Style: Right-arm fast.\n2. Total Wickets: 60+ wickets in domestic cricket.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: Known for his pace and accuracy, Nathan Ellis is a promising fast bowler who has been effective in T20 leagues.",
          designation: "Fast Bowler, Australian National Team",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/CSK/ellis.png"
        }
      ]
    },

    "Mumbai Indians": {
      color: "#4e4ef5",
      batters: [
  {
    name: "Suryakumar Yadav",
    team: "INDIA",
    quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1500+ in T20Is, 3000+ in IPL.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: Known for his innovative and aggressive stroke play, Suryakumar has been a key player for MI and India in T20Is.",
    designation: "Top-order Batsman, Mumbai Indians",
    src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/surya.webp"
  },
  {
    name: "Rohit Sharma",
    team: "INDIA",
    quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 9000+ in ODIs, 3000+ in T20Is, 5500+ in IPL.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: Five-time IPL champion, 2013 ICC Champions Trophy winner, 2007 ICC T20 World Cup winner.",
    designation: "Captain, Mumbai Indians",
    src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/rohit.webp"
  },
  {
    name: "Ryan Rickelton",
    team: "NEW ZEALAND",
    quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Over 500 in domestic T20s.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising young batsman, looking to make an impact in domestic and T20 cricket.",
    designation: "Batsman, New Zealand",
    src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/ryan.webp"
  },
  {
    name: "Robin Minz",
    team: "INDIA",
    quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Over 100 in domestic T20s.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A rising star in Indian cricket, known for his aggressive batting style.",
    designation: "Batsman, India",
    src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
  },
  {
    name: "Bevon Jacobs",
    team: "NEW ZEALAND",
    quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 150 in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for his ability to accelerate the innings, Bevon is a promising middle-order batter.",
    designation: "Batsman, New Zealand",
    src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
  },
  {
    name: "Krishnan Shrijith",
    team: "INDIA",
    quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 500 in domestic T20s.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A young talent, known for his consistency in domestic T20 leagues.",
    designation: "Batsman, India",
    src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
  }
],
      allRounders: [
        {
          name: "Hardik Pandya",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1500+ in ODIs, 1000+ in T20Is, 1000+ in IPL.\n3. IPL Teams: Mumbai Indians (MI), Gujarat Titans (GT).\n4. Achievements: Known for his all-round abilities, Hardik has been a key player for India and his IPL teams.",
          designation: "All-rounder, Gujarat Titans",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/hardik.webp"
        },
        {
          name: "Tilak Varma",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 800+ in domestic T20s.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A rising star, known for his composure and consistency as a top-order batsman.",
          designation: "All-rounder, Mumbai Indians",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/tilak.webp"
        },
        {
          name: "Naman Dhir",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 500 in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A talented all-rounder with a bright future ahead in Indian domestic cricket.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/naman.webp"
        },
        {
          name: "Will Jacks",
          team: "ENGLAND",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 200 in domestic T20s.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising all-rounder from England, known for his power hitting and bowling skills.",
          designation: "All-rounder, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Mitchell Santner",
          team: "NEW ZEALAND",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Over 500 in T20Is, 1000+ in domestic cricket.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: Known for his accuracy with the ball and finishing ability with the bat in T20 cricket.",
          designation: "All-rounder, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Vignesh Puthur",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 300 in domestic T20s.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: An emerging all-rounder in domestic cricket, known for his energetic style of play.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Raj Bawa",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Over 300 in domestic T20s.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A talented all-rounder known for his pace bowling and hard-hitting batting.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        }
      ],
      bowlers: [
        {
          name: "Jasprit Bumrah",
          team: "INDIA",
          quote: "1. Bowling Style: Fast-medium pace.\n2. Total Wickets: 300+ in international cricket.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: Known for his accuracy, variations, and pace, Bumrah is a leading bowler in India and international cricket.",
          designation: "Bowler, Mumbai Indians",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/bumrah.webp"
        },
        {
          name: "Trent Boult",
          team: "NEW ZEALAND",
          quote: "1. Bowling Style: Left-arm fast-medium pace.\n2. Total Wickets: 300+ in international cricket.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his ability to swing the ball and his incisive spells in T20 cricket.",
          designation: "Bowler, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Deepak Chahar",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm medium-fast.\n2. Total Wickets: 100+ in IPL, 20+ in T20Is.\n3. IPL Teams: Chennai Super Kings (CSK), Rajasthan Royals (RR).\n4. Achievements: Known for his ability to swing the ball and his crucial breakthroughs in the death overs.",
          designation: "Bowler, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "AM Ghazanfar",
          team: "NEW",
          quote: "1. Bowling Style: Right-arm fast-medium.\n2. Total Wickets: Emerging talent in T20 cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for pace and accuracy, Ghazanfar is an upcoming bowler to watch in domestic cricket.",
          designation: "Bowler, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Reece Topley",
          team: "ENGLAND",
          quote: "1. Bowling Style: Left-arm fast-medium.\n2. Total Wickets: 150+ in T20Is.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Known for his ability to generate bounce and break through top orders.",
          designation: "Bowler, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Lizaad Williams",
          team: "SOUTH AFRICA",
          quote: "1. Bowling Style: Right-arm fast-medium pace.\n2. Total Wickets: Emerging talent in T20 cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for pace and aggression, a promising bowler to watch.",
          designation: "Bowler, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Karn Sharma",
          team: "INDIA",
          quote: "1. Bowling Style: Leg-spin.\n2. Total Wickets: 100+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH), Mumbai Indians (MI), Chennai Super Kings (CSK).\n4. Achievements: Known for his variations and control, Karn has been a dependable leg-spinner in the IPL.",
          designation: "Bowler, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Satyanarayana Raju",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm off-spin.\n2. Total Wickets: Emerging talent in T20 cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for his tight line and length, a promising bowler in the domestic circuit.",
          designation: "Bowler, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Ashwani Kumar",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm fast.\n2. Total Wickets: Emerging talent in T20 cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for pace and aggression, a promising bowler to watch.",
          designation: "Bowler, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Arjun Tendulkar",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm pace.\n2. Total Wickets: Emerging talent in T20 cricket.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A promising fast bowler, son of cricket legend Sachin Tendulkar, making waves in the domestic circuit.",
          designation: "Bowler, Mumbai Indians",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/MI/arjun.webp"
        }
      ],
    },

    "Delhi Capitals": {
      color: "#1616db",
      batters: [
        {
          name: "KL Rahul",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 2000+ in T20Is, 6000+ in ODIs, 1500+ in IPL.\n3. IPL Teams: Punjab Kings (PBKS), Lucknow Super Giants (LSG).\n4. Achievements: Known for his consistency and versatility as an opening batsman.",
          designation: "Batsman, Lucknow Super Giants",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/rahul.webp"
        },
        {
          name: "Tristan Stubbs",
          team: "SOUTH AFRICA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in T20 cricket.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: Known for his aggressive batting style and power hitting.",
          designation: "Batsman, Mumbai Indians",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/stubbs.webp"
        },
        {
          name: "Jake Fraser-McGurk",
          team: "AUSTRALIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in T20 cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising young batsman who has impressed in domestic cricket.",
          designation: "Batsman, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/jake.webp"
        },
        {
          name: "Harry Brook",
          team: "ENGLAND",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1500+ in T20Is, 300+ in ODIs.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his explosive batting, particularly in T20 formats.",
          designation: "Batsman, Sunrisers Hyderabad",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/brook.webp"
        },
        {
          name: "Abishek Porel",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising young talent in domestic cricket, likely to make an impact soon.",
          designation: "Batsman, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/porel.webp"
        },
        {
          name: "Faf du Plessis",
          team: "SOUTH AFRICA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1500+ in T20Is, 5000+ in ODIs, 4000+ in IPL.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Known for his consistency and leadership, former captain of South Africa.",
          designation: "Batsman, Royal Challengers Bangalore",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/faf.webp"
        },
        {
          name: "Donovan Ferreira",
          team: "SOUTH AFRICA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in T20 cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A young talent known for his explosive batting.",
          designation: "Batsman, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/donovan.webp"
        },
        {
          name: "Karun Nair",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1000+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR), Kings XI Punjab (PBKS), Delhi Capitals (DC).\n4. Achievements: Known for his consistency and ability to play in the middle order.",
          designation: "Batsman, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/karun.webp"
        }
      ],
      allRounders: [
        {
          name: "Axar Patel",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 1500+ in ODIs, 700+ in T20Is, 1000+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: Known for his all-round abilities, effective with both bat and ball, a key player for India in T20Is.",
          designation: "All-rounder, Delhi Capitals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/axar.webp"
        },
        {
          name: "Ashutosh Sharma",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising all-rounder with impressive performances in domestic cricket.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/ashutosh.webp"
        },
        {
          name: "Sameer Rizvi",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for his all-round skills and ability to make an impact in both batting and bowling.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/rizvi.webp"
        },
        {
          name: "Vipraj Nigam",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: Known for his consistency in domestic cricket and his all-round abilities.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/vipraj.webp"
        },
        {
          name: "Madhav Tiwari",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising all-rounder who has shown potential in both batting and bowling.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/madhav.webp"
        },
        {
          name: "Manvanth Kumar",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A young all-rounder with potential to perform both with the bat and ball.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/manvanth.webp"
        },
        {
          name: "Tripurana Vijay",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising young all-rounder with performances that have caught attention in domestic cricket.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/tripurana.webp"
        },
        {
          name: "Darshan Nalkande",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A promising all-rounder with strong domestic performances in both batting and bowling.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/nalkande.webp"
        },
        {
          name: "Ajay Mandal",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet in IPL.\n4. Achievements: A young all-rounder with growing potential in both batting and bowling.",
          designation: "All-rounder, Emerging Talent",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/ajay.webp"
        }
      ],
      bowlers: [
        {
          name: "Kuldeep Yadav",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm chinaman bowler.\n2. Total Wickets: 120+ in ODIs, 50+ in T20Is, 80+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR), Delhi Capitals (DC).\n4. Achievements: Known for his magical wrist spin, a key bowler in India's limited-overs setup.",
          designation: "Bowler, Delhi Capitals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/kuldeep.webp"
        },
        {
          name: "Mitchell Starc",
          team: "AUSTRALIA",
          quote: "1. Bowling Style: Left-arm fast bowler.\n2. Total Wickets: 250+ in ODIs, 40+ in T20Is, 100+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his pace and yorkers, one of the world's premier fast bowlers.",
          designation: "Bowler, Kolkata Knight Riders",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/starc.webp"
        },
        {
          name: "T Natarajan",
          team: "INDIA",
          quote: "1. Bowling Style: Left-arm fast bowler.\n2. Total Wickets: 35+ in ODIs, 50+ in T20Is, 40+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his deadly yorkers, a key bowler for India in limited-overs cricket.",
          designation: "Bowler, Sunrisers Hyderabad",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/natarajan.webp"
        },
        {
          name: "Mukesh Kumar",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm fast bowler.\n2. Total Wickets: Emerging talent in international cricket.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his consistency and swing bowling in domestic cricket.",
          designation: "Bowler, Kolkata Knight Riders",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/mukesh.webp"
        },
        {
          name: "Mohit Sharma",
          team: "INDIA",
          quote: "1. Bowling Style: Right-arm fast bowler.\n2. Total Wickets: 100+ in IPL.\n3. IPL Teams: Chennai Super Kings (CSK), Delhi Capitals (DC), Gujarat Lions.\n4. Achievements: Known for his accuracy and knack for taking wickets in the death overs.",
          designation: "Bowler, Chennai Super Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/mohith.webp"
        },
        {
          name: "Dushmantha Chameera",
          team: "SRI LANKA",
          quote: "1. Bowling Style: Right-arm fast bowler.\n2. Total Wickets: 50+ in ODIs, 30+ in T20Is, 25+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his pace and aggressive bowling in international cricket.",
          designation: "Bowler, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/DC/chameera.webp"
        }
      ]            
    },

    "Gujarat Titans": {
      color: "#1a1a59",
      batters: [
        {
          name: "Shubman Gill",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1600+ in ODIs, 1300+ in T20Is, 2000+ in IPL.\n3. IPL Teams: Gujarat Titans (GT).\n4. Achievements: Known for his solid technique and ability to play in all formats, a future star of Indian cricket.",
          designation: "Top-order Batsman, Gujarat Titans",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/gill.webp"
        },
        {
          name: "Jos Buttler",
          team: "ENGLAND",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 4500+ in T20Is, 4000+ in ODIs, 3000+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his explosive batting, especially in T20s, a key player for Rajasthan Royals and England.",
          designation: "Top-order Batsman, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/buttler.webp"
        },
        {
          name: "Sherfane Rutherford",
          team: "WEST INDIES",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 300+ in T20Is, 200+ in ODIs, 1000+ in IPL.\n3. IPL Teams: Mumbai Indians (MI), Rajasthan Royals (RR).\n4. Achievements: Known for his power-hitting in the middle order, a key finisher in T20 leagues.",
          designation: "Middle-order Batsman, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/rutherford.webp"
        },
        {
          name: "Glenn Phillips",
          team: "NEW ZEALAND",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1500+ in T20Is, 1000+ in ODIs, 800+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his ability to accelerate the innings and a key finisher for New Zealand and Rajasthan Royals.",
          designation: "Top-order Batsman, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/phillips.webp"
        },
        {
          name: "Kumar Kushagra",
          team: "NEW",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Yet to play in IPL.\n4. Achievements: A young player with a lot of promise, looking to break into the IPL in the coming seasons.",
          designation: "Batsman",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/kushagra.webp"
        },
        {
          name: "Anuj Rawat",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 500+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his aggressive style at the top, has the potential to be a consistent performer in the IPL.",
          designation: "Top-order Batsman, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/rawat.webp"
        }
      ],
      allRounders: [
        {
          name: "Sai Sudharsan",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent in domestic cricket.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A promising all-rounder with a strong batting and bowling skill set.",
          designation: "All-rounder",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/sudharshan.webp"
        },
        {
          name: "M Shahrukh Khan",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 500+ in IPL.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: Known for his explosive batting and ability to finish matches in the death overs.",
          designation: "All-rounder, Punjab Kings",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/sharukh.webp"
        },
        {
          name: "Rahul Tewatia",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 500+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR), Gujarat Titans (GT).\n4. Achievements: Known for his match-winning performances with both bat and ball, especially in the T20 format.",
          designation: "All-rounder, Gujarat Titans",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/tewatia.webp"
        },
        {
          name: "Washington Sundar",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 300+ in T20Is, 200+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: A handy left-arm spinner and lower-order batsman, known for his economical bowling.",
          designation: "All-rounder, Sunrisers Hyderabad",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/sundar.webp"
        },
        {
          name: "Sai Kishore",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Yet to play in IPL.\n4. Achievements: A young all-rounder with a lot of potential, particularly with his left-arm spin.",
          designation: "All-rounder",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/kishore.webp"
        },
        {
          name: "Mahipal Lomror",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 500+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his all-round contributions, a useful middle-order batter and occasional bowler.",
          designation: "All-rounder, Rajasthan Royals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/lomror.webp"
        },
        {
          name: "Arshad Khan",
          team: "NEW",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A promising all-rounder with great potential in both batting and bowling.",
          designation: "All-rounder",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/arshad.webp"
        },
        {
          name: "Karim Janat",
          team: "NEW",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent in T20 leagues.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: Known for his aggressive batting and useful medium pace bowling.",
          designation: "All-rounder",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/karim.webp"
        },
        {
          name: "Jayant Yadav",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 200+ in Tests, 100+ in T20Is.\n3. IPL Teams: Mumbai Indians (MI), Delhi Capitals (DC).\n4. Achievements: A reliable off-spinner and lower-order batsman, with a knack for taking wickets in crucial situations.",
          designation: "All-rounder, Delhi Capitals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/jayant.webp"
        },
        {
          name: "Nishant Sindhu",
          team: "NEW",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A promising all-rounder with the potential to make an impact in the IPL.",
          designation: "All-rounder",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/nishant.webp"
        }
      ],
      bowlers: [
        {
          name: "Rashid Khan",
          team: "AFGHANISTAN",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 100+ in T20Is, 600+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH), Gujarat Titans (GT).\n4. Achievements: Known for his deadly leg-spin, one of the top wicket-takers in T20 cricket.",
          designation: "Bowler, Gujarat Titans",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/rashid.webp"
        },
        {
          name: "Mohammed Siraj",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 100+ in ODIs, 200+ in IPL.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Known for his pace and ability to swing the ball, one of India's premier fast bowlers.",
          designation: "Bowler, Royal Challengers Bangalore",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/siraj.webp"
        },
        {
          name: "Kagiso Rabada",
          team: "SOUTH AFRICA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 200+ in ODIs, 200+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: One of the top fast bowlers in world cricket, known for his pace and wicket-taking ability.",
          designation: "Bowler, Delhi Capitals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/rabada.webp"
        },
        {
          name: "Prasidh Krishna",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 50+ in ODIs, 100+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his pace and bounce, a rising star in Indian fast bowling.",
          designation: "Bowler, Kolkata Knight Riders",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/krishna.webp"
        },
        {
          name: "Gerald Coetzee",
          team: "SOUTH AFRICA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A promising young fast bowler, known for his pace and ability to generate bounce.",
          designation: "Bowler",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/coetzee.webp"
        },
        {
          name: "Gurnoor Brar",
          team: "NEW",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A left-arm bowler with potential to make an impact.",
          designation: "Bowler",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/gurnoor.webp"
        },
        {
          name: "Ishant Sharma",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 200+ in ODIs, 100+ in IPL.\n3. IPL Teams: Delhi Capitals (DC), Kolkata Knight Riders (KKR).\n4. Achievements: A seasoned fast bowler with a reputation for taking wickets in critical moments.",
          designation: "Bowler, Delhi Capitals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/ishant.webp"
        },
        {
          name: "Manav Suthar",
          team: "NEW",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A fast bowler with great potential.",
          designation: "Bowler",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/suthar.webp"
        },
        {
          name: "Kulwant Khejroliya",
          team: "NEW",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A left-arm fast bowler who has impressed in domestic cricket.",
          designation: "Bowler",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/GT/kulwant.webp"
        }
      ]                  
    },

    "Kolkata Knight Riders": {
      color: "#9c9102",
      batters: [
        {
          name: "Rinku Singh",
          team: "INDIA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 300+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his aggressive batting and match-winning performances in IPL.",
          designation: "Batsman, Kolkata Knight Riders",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/rinku.webp"
        },
        {
          name: "Quinton de Kock",
          team: "SOUTH AFRICA",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 2500+ in T20Is, 2500+ in IPL.\n3. IPL Teams: Mumbai Indians (MI), Lucknow Super Giants (LSG).\n4. Achievements: Known for his explosive batting and consistency at the top of the order.",
          designation: "Batsman, Lucknow Super Giants",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/dekock.webp"
        },
        {
          name: "Angkrish Raghuvanshi",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A promising young batsman with the potential to make an impact in T20 cricket.",
          designation: "Batsman",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/raghuvanshi.webp"
        },
        {
          name: "Rahmanullah Gurbaz",
          team: "AFGHANISTAN",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 100+ in T20Is, 150+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A dynamic opener with explosive power-hitting ability.",
          designation: "Batsman, Kolkata Knight Riders",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/gurbaz.webp"
        },
        {
          name: "Rovman Powell",
          team: "WEST INDIES",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 500+ in T20Is, 500+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: A powerful middle-order hitter known for his big-hitting ability.",
          designation: "Batsman, Delhi Capitals",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/powell.webp"
        },
        {
          name: "Ajinkya Rahane",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 3000+ in T20Is, 4000+ in IPL.\n3. IPL Teams: Mumbai Indians (MI), Rajasthan Royals (RR), Kolkata Knight Riders (KKR).\n4. Achievements: Known for his calm and composed batting, with a vast experience in T20 cricket.",
          designation: "Batsman, Kolkata Knight Riders",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/rahane.webp"
        },
        {
          name: "Manish Pandey",
          team: "INDIA",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 3500+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR), Sunrisers Hyderabad (SRH).\n4. Achievements: A consistent middle-order batsman, known for his elegant stroke play and match awareness.",
          designation: "Batsman, Sunrisers Hyderabad",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/manish.webp"
        },
        {
          name: "Luvnith Sisodia",
          team: "NEW",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Not yet part of IPL.\n4. Achievements: A promising young batsman with potential for future IPL success.",
          designation: "Batsman",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/sisodia.webp"
        }
      ],
      allRounders: [
        {
          name: "Venkatesh Iyer",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 800+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his all-round skills and match-winning performances in the middle order.",
          designation: "All-Rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/venkatesh.webp"
        },
        {
          name: "Varun Chakravarthy",
          team: "India",
          quote: "1. Batting Style: Right-arm off-spinner.\n2. Total Wickets: 50+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A mystery spinner known for his deceptive deliveries and crucial breakthroughs.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/varun.webp"
        },
        {
          name: "Andre Russell",
          team: "West Indies",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 2000+ in IPL, 300+ wickets.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his powerful hitting and all-round ability, with several match-winning performances.",
          designation: "All-Rounder, West Indies",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/russell.webp"
        },
        {
          name: "Ramandeep Singh",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 100+ in IPL.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A useful all-rounder with both bat and ball, often plays as a finisher.",
          designation: "All-Rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/ramandeep.webp"
        },
        {
          name: "Moeen Ali",
          team: "England",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 800+ in IPL.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: An explosive all-rounder known for his big-hitting ability and useful off-spin bowling.",
          designation: "All-Rounder, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/moeen.webp"
        },
        {
          name: "Anukul Roy",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his left-arm orthodox spin and ability to contribute with the bat.",
          designation: "All-Rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/ankul.webp"
        }
      ]
      ,
      bowlers: [
        {
          name: "Sunil Narine",
          team: "West Indies",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 500+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his mystery spin and ability to bowl in the powerplay and death overs.",
          designation: "Bowler, West Indies",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/narine.webp"
        },
        {
          name: "Anrich Nortje",
          team: "South Africa",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Wickets: 50+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: A fast bowler with pace and accuracy, known for his wicket-taking ability.",
          designation: "Bowler, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/nortje.webp"
        },
        {
          name: "Harshit Rana",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Wickets: Emerging talent.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: A young and promising pacer who has impressed in domestic cricket.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/harshit.webp"
        },
        {
          name: "Spencer Johnson",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Wickets: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his pace and consistent wicket-taking ability.",
          designation: "Bowler, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/johnson.webp"
        },
        {
          name: "Vaibhav Arora",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Wickets: 20+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A promising pacer known for his ability to generate swing and pace.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/arora.webp"
        },
        {
          name: "Umran Malik",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Wickets: 30+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his raw pace and ability to bowl at over 150 km/h.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/umran.webp"
        },
        {
          name: "Mayank Markande",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Wickets: 30+ in IPL.\n3. IPL Teams: Mumbai Indians (MI), Rajasthan Royals (RR).\n4. Achievements: Known for his leg-spin and ability to bowl in the middle overs.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/KKR/markande.webp"
        }
      ]
      
    },

    "Lucknow Super Gaints": {
      color: "#1a15ab",
      batters: [
        {
          name: "Rishabh Pant",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 2000+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: Known for his explosive batting and wicketkeeping skills.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/pant.webp"
        },
        {
          name: "Nicholas Pooran",
          team: "West Indies",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 1000+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH), Punjab Kings (PBKS).\n4. Achievements: Known for his big-hitting ability, especially in the middle overs.",
          designation: "Batsman, West Indies",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/pooran.webp"
        },
        {
          name: "David Miller",
          team: "South Africa",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 1000+ in IPL.\n3. IPL Teams: Rajasthan Royals (RR), Gujarat Titans (GT).\n4. Achievements: A destructive middle-order batsman, known for finishing games.",
          designation: "Batsman, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/miller.webp"
        },
        {
          name: "Aiden Markram",
          team: "South Africa",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 500+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: A solid middle-order batsman and a handy off-spin bowler.",
          designation: "Batsman, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/markram.webp"
        },
        {
          name: "Matthew Breetzke",
          team: "South Africa",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A young and promising talent in the IPL, still making his mark.",
          designation: "Batsman, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        },
        {
          name: "Aryan Juyal",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A young and promising cricketer who is making waves in domestic cricket.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/aryan.webp"
        },
        {
          name: "Himmat Singh",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 100+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: Known for his ability to play in the middle order and contribute in tough situations.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        }
      ],
      allRounders: [
        {
          name: "Abdul Samad",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 100+ in IPL.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his powerful hitting, especially in the middle order.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/samad.webp"
        },
        {
          name: "Ayush Badoni",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Lucknow Super Giants (LSG).\n4. Achievements: A promising all-rounder with the ability to finish matches.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/badoni.webp"
        },
        {
          name: "Mitchell Marsh",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1000+ in IPL.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: A versatile all-rounder known for his batting and medium-fast bowling.",
          designation: "All-rounder, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/marsh.webp"
        },
        {
          name: "Shahbaz Ahmed",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: 200+ in IPL.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: A handy all-rounder who can provide balance to the team with both bat and ball.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        },
        {
          name: "Arshin Kulkarni",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A promising young talent with potential in both batting and bowling.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/kulkarni.webp"
        },
        {
          name: "Yuvraj Chaudhary",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging player.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: A young player known for his aggressive batting and potential in the middle order.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        },
        {
          name: "Rajvardhan Hangargekar",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: A fast bowler and an all-rounder with immense potential.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        }
      ],
      bowlers: [
        {
          name: "Mayank Yadav",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A promising bowler with a growing reputation in domestic cricket.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/mayank.webp"
        },
        {
          name: "Ravi Bishnoi",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Lucknow Super Giants (LSG).\n4. Achievements: A wrist spinner known for his deceptive bowling and sharp turn.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/bishnoi.webp"
        },
        {
          name: "Avesh Khan",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 100+ in IPL.\n3. IPL Teams: Lucknow Super Giants (LSG).\n4. Achievements: A young fast bowler with the ability to bowl at pace and swing the ball.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/avesh.webp"
        },
        {
          name: "Akash Deep",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: A fast bowler with a promising future in domestic cricket.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/akash.webp"
        },
        {
          name: "Mohsin Khan",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A promising left-arm fast bowler known for his pace.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/mohsin.webp"
        },
        {
          name: "Shamar Joseph",
          team: "West Indies",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A fast bowler with the potential to make an impact in the IPL.",
          designation: "Bowler, West Indies",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/joseph.webp"
        },
        {
          name: "Manimaran Siddharth",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: A slow left-arm orthodox bowler with a promising future.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/siddharth.webp"
        },
        {
          name: "Digvesh Rathi",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A left-arm orthodox bowler with potential in domestic cricket.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        },
        {
          name: "Prince Yadav",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging player.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: A young talent with potential as a bowler.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/default.webp"
        },
        {
          name: "Akash Singh",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A young pace bowler with the ability to swing the ball.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/LSG/akash.webp"
        }
      ]      
    },

    "Punjab Kings": {
      color: "#db2e1f",
      batters: [
        {
          name: "Shreyas Iyer",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: 1000+ in IPL.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A key player for India and KKR, known for his consistency in the middle order.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/shreyas.webp"
        },
        {
          name: "Nehal Wadhera",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A young batsman with good potential in the domestic circuit.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/wadhera.webp"
        },
        {
          name: "Prabhsimran Singh",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: A promising wicket-keeper batsman with a great future ahead.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/prabhsimran.webp"
        },
        {
          name: "Josh Inglis",
          team: "Australia",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A talented Australian batsman with good potential in limited overs cricket.",
          designation: "Batsman, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/inglis.webp"
        },
        {
          name: "Vishnu Vinod",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A talented wicket-keeper batsman who is yet to establish himself in IPL.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/vishnu.webp"
        },
        {
          name: "Pyla Avinash",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A promising young cricketer from the Indian domestic circuit.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/avinash.webp"
        },
        {
          name: "Harnoor Singh",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A young talent from India with good potential in domestic cricket.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/harnoor.webp"
        }
      ],
      allRounders: [
        {
          name: "Marcus Stoinis",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Consistent performer.\n3. IPL Teams: Lucknow Super Giants (LSG).\n4. Achievements: A versatile all-rounder with the ability to impact both with bat and ball.",
          designation: "All-rounder, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/stoinis.webp"
        },
        {
          name: "Marco Jansen",
          team: "South Africa",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Promising all-rounder.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: A tall left-arm pacer and hard-hitting all-rounder with great potential in the IPL.",
          designation: "All-rounder, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/jansen.webp"
        },
        {
          name: "Shashank Singh",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A promising batsman with good hitting ability, looking to establish himself in the IPL.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/shashank.webp"
        },
        {
          name: "Glenn Maxwell",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 2000 IPL runs.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Known for his big-hitting ability, Maxwell is a key all-rounder and match-winner.",
          designation: "All-rounder, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/maxwell.webp"
        },
        {
          name: "Priyansh Arya",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A young Indian talent who could make a mark in domestic and IPL cricket.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/priyansh.webp"
        },
        {
          name: "Azmatullah Omarzai",
          team: "Afghanistan",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Promising all-rounder.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A talented all-rounder from Afghanistan, contributing with both bat and ball.",
          designation: "All-rounder, Afghanistan",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/omarzai.webp"
        },
        {
          name: "Harpreet Brar",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Solid middle-order batsman.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: Known for his ability to bowl in the middle overs and make crucial contributions with the bat.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/brar.webp"
        },
        {
          name: "Aaron Hardie",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A versatile all-rounder from Australia, looking to make an impact in the IPL.",
          designation: "All-rounder, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/hardie.webp"
        },
        {
          name: "Suryansh Shedge",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A promising young cricketer, looking to make a name in Indian cricket and IPL.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/shedge.webp"
        },
        {
          name: "Musheer Khan",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A young cricketer looking to make a mark in Indian domestic cricket.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/musheer.webp"
        },
        {
          name: "Pravin Dubey",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: A leg-spinner and lower-order batsman who can contribute both ways.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/pravin.webp"
        }
      ],
      bowlers: [
        {
          name: "Arshdeep Singh",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: A promising young pacer, known for his death-over skills.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/arshdeep.webp"
        },
        {
          name: "Yuzvendra Chahal",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Wicket-taking spinner.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: One of the most successful leg spinners in the IPL.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/chahal.webp"
        },
        {
          name: "Lockie Ferguson",
          team: "New Zealand",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Pace and aggression.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his pace and ability to bowl at high speeds, a key pacer for KKR.",
          designation: "Bowler, New Zealand",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/ferguson.webp"
        },
        {
          name: "Vijaykumar Vyshak",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: A promising medium-fast bowler with great potential.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/vijaykumar.webp"
        },
        {
          name: "Yash Thakur",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: A young bowler who can deliver key spells for his team.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/thakur.webp"
        },
        {
          name: "Kuldeep Sen",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Limited IPL experience.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A young pacer with great potential for the future.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/kuldeep.webp"
        },
        {
          name: "Xavier Bartlett",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A promising Australian fast bowler looking to make a mark in the IPL.",
          designation: "Bowler, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/PK/bartlett.webp"
        }
      ]                  
    },

    "Royal Challengers Benguluru": {
      color: "#9e1306",
      batters: [
        {
          name: "Virat Kohli",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Over 6000 IPL runs.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: One of the greatest batsmen in IPL history, multiple seasons as RCB's captain.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RCB/virat.png"
        },
        {
          name: "Phil Salt",
          team: "England",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Yet to establish a significant IPL career.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his aggressive batting style, Salt is an exciting English talent.",
          designation: "Batsman, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RCB/salt.png"
        },
        {
          name: "Rajat Patidar",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Strong IPL debut season.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Known for his consistent batting and ability to perform in crunch situations.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RCB/patidar.webp"
        },
        {
          name: "Jitesh Sharma",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging IPL talent.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: A promising finisher, known for his aggressive batting in the middle and lower order.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Devdutt Padikkal",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A breakthrough IPL season with RCB.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: Known for his elegant batting style, a promising future ahead.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Swastik Chikara",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Emerging talent.\n3. IPL Teams: None yet.\n4. Achievements: A young batsman with potential, yet to make his IPL debut.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        }
      ],
      allRounders: [
        {
          name: "Liam Livingstone",
          team: "England",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for powerful hitting.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: A versatile all-rounder, known for his aggressive batting and handy bowling.",
          designation: "All-rounder, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Krunal Pandya",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Strong middle-order contributor.\n3. IPL Teams: Mumbai Indians (MI), Lucknow Super Giants (LSG).\n4. Achievements: An experienced all-rounder, known for his explosive batting and useful spin bowling.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Tim David",
          team: "Singapore",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for his power-hitting.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A hard-hitting finisher with a reputation for clearing the boundary with ease.",
          designation: "All-rounder, Singapore",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Jacob Bethell",
          team: "England",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A new entrant with an exciting batting style.\n3. IPL Teams: None yet.\n4. Achievements: A young all-rounder with potential, yet to make his IPL debut.",
          designation: "All-rounder, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Romario Shepherd",
          team: "West Indies",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A powerful lower-order hitter.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: A hard-hitting all-rounder, known for his pace bowling and batting in the lower order.",
          designation: "All-rounder, West Indies",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Swapnil Singh",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: An underrated all-rounder.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A promising bowler and lower-order batsman, often used for his spin bowling.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RCB/swapnil.webp"
        },
        {
          name: "Manoj Bhandage",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Yet to establish a significant IPL career.\n3. IPL Teams: None yet.\n4. Achievements: A young talent, yet to make his IPL debut.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        }
      ],
      bowlers: [
        {
          name: "Josh Hazlewood",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for his consistent fast bowling.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: A key fast bowler for Australia, known for his accuracy and control in the death overs.",
          designation: "Bowler, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Bhuvneshwar Kumar",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for swing bowling and ability to bowl in all phases.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: A swing bowler with the ability to bowl in both the powerplay and at the death.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Rasikh Salam",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A promising young bowler.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A young pace bowler with potential, looking to break into the international circuit.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Yash Dayal",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Known for his pace bowling.\n3. IPL Teams: Gujarat Titans (GT).\n4. Achievements: A left-arm fast bowler with strong pace and reverse swing.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RCB/dayal.webp"
        },
        {
          name: "Suyash Sharma",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A young, promising bowler.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A new spin talent with a lot of promise, making an impact in domestic cricket.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Nuwan Thushara",
          team: "Sri Lanka",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A young fast bowler with potential.\n3. IPL Teams: None yet.\n4. Achievements: A Sri Lankan fast bowler looking to make a mark in international cricket.",
          designation: "Bowler, Sri Lanka",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Lungi Ngidi",
          team: "South Africa",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for his fast bowling and consistency.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: A key fast bowler for South Africa, known for his pace and ability to bowl at the death.",
          designation: "Bowler, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Abhinandan Singh",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A young bowler looking to make his mark.\n3. IPL Teams: None yet.\n4. Achievements: A promising talent with potential but still making his way through the domestic circuit.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        },
        {
          name: "Mohit Rathee",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A talented young bowler.\n3. IPL Teams: None yet.\n4. Achievements: A promising young bowler hoping to break into the IPL soon.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/default.png"
        }
      ]                  
    },

    "Rajasthan Royals": {
      color: "#b509af",
      batters: [
        {
          name: "Sanju Samson",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for his aggressive batting and wicketkeeping skills.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A dynamic wicketkeeper-batsman and key player for Rajasthan Royals and India.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/samson.webp"
        },
        {
          name: "Yashasvi Jaiswal",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: An exciting young talent with a fearless approach to batting.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A rising star in Indian cricket known for his consistency in domestic cricket and IPL.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/jaiswal.webp"
        },
        {
          name: "Dhruv Jurel",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A young talent known for his aggressive batting.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A young wicketkeeper-batsman with an exciting future ahead in domestic cricket and IPL.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/jurel.webp"
        },
        {
          name: "Shimron Hetmyer",
          team: "West Indies",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Known for his explosive batting in the middle order.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A powerful hitter with an ability to turn games around with his aggressive batting.",
          designation: "Batsman, West Indies",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/hetmyer.webp"
        },
        {
          name: "Vaibhav Suryavanshi",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A young player trying to make his mark in domestic cricket.\n3. IPL Teams: None yet.\n4. Achievements: An emerging talent in the domestic circuit with strong potential.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/default.webp"
        },
        {
          name: "Shubham Dubey",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A promising talent looking to showcase his skills.\n3. IPL Teams: None yet.\n4. Achievements: An exciting player with potential to make a big impact in the IPL.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/subham.webp"
        },
        {
          name: "Kunal Singh Rathore",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A talented young batsman from Rajasthan.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A solid middle-order batsman looking to make his presence felt in the IPL.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/kunal.webp"
        }
      ],
      allRounders: [
        {
          name: "Riyan Parag",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A promising all-rounder with a lot of potential.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A young player who has impressed with his bowling and batting capabilities in the IPL.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/parag.webp"
        },
        {
          name: "Nitish Rana",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A versatile middle-order batsman and handy bowler.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: A key player for KKR with his aggressive batting and occasional bowling skills.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/nitish.webp"
        },
        {
          name: "Yudhvir Singh",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A talented player working his way through the domestic circuit.\n3. IPL Teams: None yet.\n4. Achievements: A promising player, yet to make a significant IPL impact but showing promise.",
          designation: "All-rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/yudhvir.webp"
        }
      ],
      bowlers: [
        {
          name: "Jofra Archer",
          team: "England",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for his blistering pace and wicket-taking ability.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: One of the best fast bowlers in the world, key player for MI.",
          designation: "Bowler, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/archer.webp"
        },
        {
          name: "Tushar Deshpande",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A promising pacer known for his pace and aggression.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: A player to watch for his future potential in Indian cricket.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/tushar.webp"
        },
        {
          name: "Wanindu Hasaranga",
          team: "Sri Lanka",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A key all-rounder with deadly spin.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Known for his exceptional leg-spin bowling and match-winning performances for Sri Lanka.",
          designation: "Bowler, Sri Lanka",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/hasaranga.webp"
        },
        {
          name: "Maheesh Theekshana",
          team: "Sri Lanka",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A young mystery spinner with great potential.\n3. IPL Teams: Chennai Super Kings (CSK).\n4. Achievements: One of Sri Lanka's promising spin talents in international cricket.",
          designation: "Bowler, Sri Lanka",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/theekshana.webp"
        },
        {
          name: "Sandeep Sharma",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A consistent pacer with the ability to swing the ball.\n3. IPL Teams: Rajasthan Royals (RR), Sunrisers Hyderabad (SRH).\n4. Achievements: Known for his ability to break partnerships with the new ball.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/sandeep.webp"
        },
        {
          name: "Fazalhaq Farooqi",
          team: "Afghanistan",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A left-arm pacer with great potential.\n3. IPL Teams: None yet.\n4. Achievements: A promising young bowler from Afghanistan.",
          designation: "Bowler, Afghanistan",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/farooqi.webp"
        },
        {
          name: "Kwena Maphaka",
          team: "South Africa",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A promising young pace bowler with aggressive intent.\n3. IPL Teams: None yet.\n4. Achievements: Yet to make a significant IPL impact, but a rising talent in South Africa.",
          designation: "Bowler, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/kwena.webp"
        },
        {
          name: "Akash Madhwal",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A bowler with a strong domestic record.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A player to watch out for in the future with his sharp bowling skills.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/akash.webp"
        },
        {
          name: "Ashok Sharma",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A talented player working his way through the domestic circuit.\n3. IPL Teams: None yet.\n4. Achievements: A promising young bowler from India.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/ashok.webp"
        },
        {
          name: "Kumar Kartikeya",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A promising left-arm spinner in Indian cricket.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: A player with a bright future in Indian cricket, especially known for his spin bowling.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/RR/kartikeya.webp"
        }
      ]                  
    },

    "Sunrisers Hyderabad": {
      color: "#de2504",
      batters: [
        {
          name: "Heinrich Klaasen",
          team: "South Africa",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: Known for his aggressive batting style.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: A consistent performer for South Africa in limited-overs cricket.",
          designation: "Batsman, South Africa",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/klaasen.png"
        },
        {
          name: "Travis Head",
          team: "Australia",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: Known for his aggressive stroke play.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A key member of the Australian team in ODIs and T20s.",
          designation: "Batsman, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/head.png"
        },
        {
          name: "Ishan Kishan",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A dynamic wicketkeeper-batsman for India.\n3. IPL Teams: Mumbai Indians (MI).\n4. Achievements: Known for his quick-fire innings and consistency in the IPL.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/ishan.png"
        },
        {
          name: "Abhinav Manohar",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman.\n2. Total Runs: A promising young batter.\n3. IPL Teams: Gujarat Titans (GT).\n4. Achievements: One to watch for his future potential in Indian cricket.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/manohar.png"
        },
        {
          name: "Aniket Verma",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A young talent waiting for his breakthrough in domestic cricket.\n3. IPL Teams: None yet.\n4. Achievements: A rising star in Indian domestic cricket.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/verma.png"
        },
        {
          name: "Atharva Taide",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A young talent from the domestic circuit.\n3. IPL Teams: None yet.\n4. Achievements: A player with potential to shine in future IPL seasons.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/athrva.png"
        },
        {
          name: "Sachin Baby",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman.\n2. Total Runs: A domestic player with the ability to play under pressure.\n3. IPL Teams: Kerala.\n4. Achievements: A reliable middle-order batsman for his state team.",
          designation: "Batsman, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/sachin.png"
        }
      ],
      allRounders: [
        {
          name: "Pat Cummins",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman, Right-arm fast bowler.\n2. Total Runs: A key all-rounder for Australia.\n3. IPL Teams: Kolkata Knight Riders (KKR).\n4. Achievements: Known for his ability to deliver in high-pressure situations.",
          designation: "All-Rounder, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/cummins.png"
        },
        {
          name: "Abhishek Sharma",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman, Left-arm orthodox bowler.\n2. Total Runs: A young talent known for his explosive batting.\n3. IPL Teams: Sunrisers Hyderabad (SRH).\n4. Achievements: An emerging all-rounder with a bright future in Indian cricket.",
          designation: "All-Rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/abhishek.png"
        },
        {
          name: "Harshal Patel",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman, Right-arm medium-fast bowler.\n2. Total Runs: Known for his death bowling skills and variations.\n3. IPL Teams: Royal Challengers Bangalore (RCB).\n4. Achievements: Purple cap winner in IPL 2021.",
          designation: "All-Rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/harshal.png"
        },
        {
          name: "Nitish Kumar Reddy",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman, Right-arm medium-fast bowler.\n2. Total Runs: A promising player from the domestic circuit.\n3. IPL Teams: None yet.\n4. Achievements: A rising star in Indian cricket with an all-rounder's skillset.",
          designation: "All-Rounder, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/nitish.png"
        },
        {
          name: "Brydon Carse",
          team: "England",
          quote: "1. Batting Style: Right-hand batsman, Right-arm fast bowler.\n2. Total Runs: A fast bowler with great potential.\n3. IPL Teams: None yet.\n4. Achievements: Known for his speed and aggressive bowling in limited-overs cricket.",
          designation: "All-Rounder, England",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/carse.png"
        },
        {
          name: "Kamindu Mendis",
          team: "Sri Lanka",
          quote: "1. Batting Style: Left-hand batsman, Left-arm orthodox bowler.\n2. Total Runs: Known for his all-round skills.\n3. IPL Teams: None yet.\n4. Achievements: A talented young cricketer for Sri Lanka with good potential in T20 cricket.",
          designation: "All-Rounder, Sri Lanka",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/mendis.png"
        }
      ],
      bowlers: [
        {
          name: "Mohammed Shami",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman, Right-arm fast bowler.\n2. Total Runs: Known for his pace and accuracy.\n3. IPL Teams: Gujarat Titans (GT).\n4. Achievements: A leading fast bowler in the Indian cricket team.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/shami.png"
        },
        {
          name: "Rahul Chahar",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman, Right-arm leg-spin bowler.\n2. Total Runs: Known for his sharp leg-spin bowling.\n3. IPL Teams: Punjab Kings (PBKS).\n4. Achievements: A key performer for India in T20Is.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/chahar.png"
        },
        {
          name: "Adam Zampa",
          team: "Australia",
          quote: "1. Batting Style: Right-hand batsman, Right-arm leg-spin bowler.\n2. Total Runs: Known for his control in the middle overs.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A key spinner for Australia in limited-overs cricket.",
          designation: "Bowler, Australia",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/zampa.png"
        },
        {
          name: "Simarjeet Singh",
          team: "India",
          quote: "1. Batting Style: Right-hand batsman, Right-arm medium-fast bowler.\n2. Total Runs: A promising young fast bowler.\n3. IPL Teams: Delhi Capitals (DC).\n4. Achievements: An emerging pacer with a lot of potential.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/simarjeet.png"
        },
        {
          name: "Eshan Malinga",
          team: "Sri Lanka",
          quote: "1. Batting Style: Right-hand batsman, Right-arm fast bowler.\n2. Total Runs: Known for his pace and aggression.\n3. IPL Teams: None yet.\n4. Achievements: A talented fast bowler from Sri Lanka.",
          designation: "Bowler, Sri Lanka",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/malinga.png"
        },
        {
          name: "Jaydev Unadkat",
          team: "India",
          quote: "1. Batting Style: Left-hand batsman, Left-arm medium-fast bowler.\n2. Total Runs: Known for his swing and accuracy.\n3. IPL Teams: Rajasthan Royals (RR).\n4. Achievements: A key bowler for India in the shorter formats.",
          designation: "Bowler, India",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/unadkat.png"
        },
        {
          name: "Zeeshan Ansari",
          team: "Pakistan",
          quote: "1. Batting Style: Right-hand batsman, Right-arm fast bowler.\n2. Total Runs: A promising fast bowler.\n3. IPL Teams: None yet.\n4. Achievements: A talented pacer with potential in international cricket.",
          designation: "Bowler, Pakistan",
          src: "https://gopredict.s3.us-east-1.amazonaws.com/SRH/ansari.png"
        }
      ]                  
    }
  };

  const {color, batters = [], allRounders = [], bowlers = [] } = playerData[selectedTeam] || {};

  return (
    <>
      <div className="h-[210vh] w-full bg-gradient-to-b from-black to-blue-gray-900">
        <div className="p-5">
          <NavigationbarWithDropdownMultilevelMenu />
          <div className="text-center mt-14 w-auto">
            <TeamLogos onSelectTeam={handleTeamSelection} />
          </div>
          <div className="mt-14">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-blue-gray-500" style={{color: color}}>
                {selectedTeam}
              </h1>
            </div>
            <div className="mt-10">
              <h1 className="text-4xl ml-20 text-blue-gray-600 font-bold">Batters:</h1>
              <AnimatedTestimonials testimonials={batters} />
            </div>
            <div className="mt-14">
              <h1 className="text-4xl ml-20 text-blue-gray-600 font-bold">All-rounders:</h1>
              <AnimatedTestimonials testimonials={allRounders} />
            </div>
            <div className="mt-14">
              <h1 className="text-4xl ml-20 text-blue-gray-600 font-bold">Bowlers:</h1>
              <AnimatedTestimonials testimonials={bowlers} />
            </div>
          </div>
        </div>
      </div>
      <footer className="p-5">
        <SimpleFooter />
      </footer>
    </>
  );
}
