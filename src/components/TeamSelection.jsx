export function TeamLogos({ onSelectTeam }) {
  const teams = [
    { name: "Chennai Super Kings", logo: "CSKoutline.png", url: "https://www.iplt20.com/teams/chennai-super-kings", src:"https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png" },
    { name: "Mumbai Indians", logo: "MIoutline.png", url: "https://www.iplt20.com/teams/mumbai-indians", src: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png" },
    {name: "Delhi Capitals", logo: "DCoutline.png", src: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png"},
    {name: "Gujarat Titans", src: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png"},
    {name: "Kolkata Knight Riders", src: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png"},
    {name: "Lucknow Super Gaints", src: "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png"},
    {name: "Punjab Kings", src: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png"},
    {name: "Royal Challengers Benguluru", src: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png"},
    {name: "Rajasthan Royals", src: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png"},
    {name: "Sunrisers Hyderabad", src: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png"}
  ];

  return (
    <div className="w-full text-center">
      <ul className="flex gap-x-4 justify-around">
        {teams.map((team) => (
          <li key={team.name}>
            <div className="flex justify-center items-center">
              <a href={team.url} onClick={(e) => { 
                e.preventDefault(); 
                onSelectTeam(team.name); 
              }}>
                <img className="w-auto h-20 cursor-pointer" src={team.src} alt={`${team.name} Logo`} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
