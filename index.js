function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  const manTime = pontoonDistance / youSpeed;
  const sharkTime = dolphin ? (sharkDistance / (sharkSpeed / 2)) : sharkDistance / sharkSpeed;
  return manTime > sharkTime ? "Alive!" : "Shark Bait!";

	if (dolphin) sharkSpeed /= 2; 

  const yourTime = pontoonDistance / youSpeed;  
  const sharkTime = sharkDistance / sharkSpeed; 

  return yourTime < sharkTime ? "Alive!" : "Shark Bait!";
}

shark(12, 50, 4, 8, true);
