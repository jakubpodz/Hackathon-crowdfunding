import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  console.log(allcampaign);

  const daysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const difference = deadlineDate.getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return Math.floor(remainingDays);
  };

  // Log the days left for each campaign to debug
  allcampaign?.forEach(campaign => {
    const remainingDays = daysLeft(campaign.deadline);
    console.log(`Campaign: ${campaign.title}, Deadline: ${campaign.deadline}, Days Left: ${remainingDays}`);
  });

  // Ensure allcampaign is defined and is an array before filtering
  const filteredCampaigns = Array.isArray(allcampaign)
    ? allcampaign.filter(campaign => {
        const remainingDays = daysLeft(campaign.deadline);
        return campaign.title && campaign.description && campaign.target > 0 && remainingDays > 0;
      })
    : [];

  const getSVGDesign = (index) => {
    switch (index % 5) {
      case 0:
        return (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="10,10 20,30 0,30" fill="white" />
            <polygon points="80,20 90,40 70,40" fill="white" />
            <polygon points="40,60 50,80 30,80" fill="white" />
            <polygon points="60,70 75,95 45,95" fill="white" />
            <polygon points="25,35 35,55 15,55" fill="white" />
          </svg>
        );
      case 1:
        return (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="30,30 50,70 10,70" fill="white" />
            <polygon points="60,20 80,60 40,60" fill="white" />
            <polygon points="45,50 65,90 25,90" fill="white" />
          </svg>
        );
      case 2:
        return (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="10,10 15,25 5,25" fill="white" />
            <polygon points="30,30 40,50 20,50" fill="white" />
            <polygon points="50,50 65,75 35,75" fill="white" />
            <polygon points="70,70 90,95 50,95" fill="white" />
          </svg>
        );
      case 3:
        return (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="10,10 20,30 0,30" fill="white" opacity="0.8" />
            <polygon points="80,20 90,40 70,40" fill="white" opacity="0.7" />
            <polygon points="40,60 50,80 30,80" fill="white" opacity="0.6" />
            <polygon points="60,70 75,95 45,95" fill="white" opacity="0.5" />
          </svg>
        );
      case 4:
        return (
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <polygon points="10,10 40,50 0,50" fill="white" />
            <polygon points="60,60 90,90 50,90" fill="white" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-16 text-2xl font-bold leading-5">{title}</p>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {filteredCampaigns.map((campaign, i) => (
          <div
            onClick={() => (setDonate(campaign), setOpenModel(true))}
            key={i + 1}
            className="cursor-pointer border overflow-hidden transition-shadow duration-300 bg-white rounded"
          >
            <div className="relative w-full h-64 rounded overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-orange-500"></div>
              {getSVGDesign(i)}
            </div>

            <div className="py-5 pl-2">
              <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <a
                href="/"
                aria-label="Article"
                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-2xl font-bold leading-5">
                  {campaign.title}
                </p>
              </a>
              <p className="mb-4 text-gray-700">{campaign.description}</p>
              <div className="flex space-x-4">
                <p className="font-semibold"> Target: {campaign.target} ETH</p>

                <p className="font-semibold">
                  Raised: {campaign.amountCollected} ETH
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
