import React from "react";
import Lottie from "lottie-react";
import lottie_Food from "../../assets/animations/lottie_Food.json";
import lottie_Calendar from "../../assets/animations/lottie_Calendar.json";
import lottie_Check from "../../assets/animations/lottie_Check.json";
import lottie_Trophy from "../../assets/animations/lottie_Trophy.json";
import lottie_X from "../../assets/animations/lottie_X.json";

const LottieConsolidated = () => {
  return (
    <div>LottieConsolidated</div>
  );
};

//Calendar
const LottieCalendarComponent = () => {
  const calendarOptions = {
    animationData: lottie_Calendar,
    style: {
      height:150
    },
    loop: false, 
    autoplay:true
  }
  return (
    <Lottie 
    animationData={calendarOptions.animationData}
    style={calendarOptions.style}
    loop={calendarOptions.loop}
    autoplay={calendarOptions.autoplay}
    />
  );
};

//Check
const LottieCheckComponent = () => {
  const checkOptions = {
    animationData: lottie_Check,
    style: {
      height:150
    },
    loop: false, 
    autoplay:true
  }
  return (
    <Lottie 
    animationData={checkOptions.animationData}
    style={checkOptions.style}
    loop={checkOptions.loop}
    autoplay={checkOptions.autoplay}
    />
  )
}

//Trophy
const LottieTrophyComponent = () => {
  const trophyOptions = {
    animationData: lottie_Trophy,
    style: {
      height:200
    },
    loop: false, 
    autoplay:true
  }
  return (
    <Lottie  
    animationData={trophyOptions.animationData}
    style={trophyOptions.style}
    loop={trophyOptions.loop}
    autoplay={trophyOptions.autoplay}
    />
  )
}


//X
const LottieXComponent = () => {
  const xOptions = {
    animationData: lottie_X,
    style: {
      height:150
    },
    loop: false, 
    autoplay:true
  }
  return (
    <Lottie  
    animationData={xOptions.animationData}
    style={xOptions.style}
    loop={xOptions.loop}
    autoplay={xOptions.autoplay}
    />
  )
}

// Food
const LottieFoodComponent = () => {
  const foodOptions = {
    animationData: lottie_Food,
    style: {
      height: 200
    },
    loop: false,
    autoplay: true
  }
  return (
    <Lottie 
      animationData={foodOptions.animationData}
      style={foodOptions.style}
      loop={foodOptions.loop}
      autoplay={foodOptions.autoplay}
    />
  )
}

export { LottieConsolidated, LottieCalendarComponent, LottieCheckComponent, LottieTrophyComponent, LottieXComponent, LottieFoodComponent };
