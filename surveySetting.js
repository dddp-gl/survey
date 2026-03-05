// surveySetting.js
// Define survey settings constants ----------------------------------------------------------------
const account = 'zafa834'; // GitHub account
const repository= 'zafa834-jp-----y2025-a100-p01';
const surveyDay = '2026/2/25';
const thema = 'Sample Thema'; 
const year = 'y2025';
const areaCodeX1 ='jp';
const areaCodeX2 ='14';
const areaCodeX3 ='';
const areaCodeX4 ='';
const areaCodeX5 ='';
const areaName1 ='japan Kanagawa';
const areaName2 ='日本 神奈川県';
const options = [3,6]; //Questions (max:6), Options(max:10,from 'a1' to 'a10')
// -------------------------------------------------------------------------------------------------


// sample
// const account = 'zafa834'; // GitHub account
// const repository= 'zafa834-jp-----y2025-a100-p01'; // meetingCode
// const surveyDay = '2026/2/25';
// const thema = 'Sample Thema';
// const year = 'y2025';//meeting year 
// const areaCodeX1 ='jp';
// const areaCodeX2 =14';
// const areaCodeX3 ='';
// const areaCodeX4 ='';
// const areaCodeX5 ='';
// const areaName1 ='japan Kanagawa';
// const areaName2 ='日本 神奈川県';
// const options = [3,6]; //Questions (max:6), Options(max:10,from 'a1' to 'a10')

// change code by environment for Node.js and browser
// for Node.js, export the variables

if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = { account,repository,surveyDay,thema,year,
        areaCodeX1,areaCodeX2,areaCodeX3,areaCodeX4,areaCodeX5,
        areaName1,areaName2,options 
    };
        
} else if (typeof window !== 'undefined') {
    // for browser, attach the variables to the window object
    window.account = account;
    window.repository = repository;
    window.surveyDay = surveyDay;
    window.thema = thema;
    window.areaCodeX1 = areaCodeX1;
    window.areaCodeX2 = areaCodeX2;
    window.areaCodeX3 = areaCodeX3;
    window.areaCodeX4 = areaCodeX4;
    window.areaCodeX5 = areaCodeX5;
    window.areaName1 = areaName1;
    window.areaName2 = areaName2;
    window.options = options;
};

// ----- 