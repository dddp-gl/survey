// surveySetting.js
// Define survey settings constants ----------------------------------------------------------------
const account = 'zafa834'; // GitHub account
const repository= 'dddp-jp-----y2025-a100-p01';
const surveySheet= 'doc1/surveySheet.md';
const surveyDay = '2026/3/12';
const thema = 'Sample Thema';
const year = 'y2025';//meeting year
const areaCode ='jp----';
const areaName1 ='japan';
const areaName2 ='日本';
const options = [3,3,2,2]; 
const subAreaLevel = 3; 
const crossData= 'yes';

// sample
// const account = 'zafa834'; // GitHub account
// const repository= 'dddp-jp-----y2025-a100-p01'; // meetingCode
// const surveySheet= doc1/serveySheet.md; // seuveySheet
// const surveyDay = '2026/2/25';　(Error Example) 2026/02/25
// const thema = 'Sample Thema';
// const year = 'y2025';//meeting year
// const areaCode ='jp-14---';
// const areaName1 ='japan Kanagawa';
// const areaName2 ='日本　神奈川県';
// const options = [3,3,2,2]; //Number of options per question,max question number is 10
// const subAreaLevel = 3; // detail level of report
// const crossData = 'yes'; // 'no' or 'yes' (if 'yes',export cross-analysis data for interrelated questions in the survey.)

// change code by environment for Node.js and browser
// for Node.js, export the variables

if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = { account,repository,surveySheet,surveyDay,
        thema,year,areaCode, areaName1,areaName2,options,subAreaLevel,crossData
    }
} else if (typeof window !== 'undefined') {
    // for browser, attach the variables to the window object
    window.account = account;
    window.repository = repository;
    window.surveySheet = surveySheet;
    window.surveyDay = surveyDay;
    window.thema = thema;
    window.year = year;
    window.areaCode = areaCode;
    window.areaName1 = areaName1;
    window.areaName2 = areaName2;
    window.options = options;
    window.subAreaLevel = subAreaLevel;
    window.crossData = crossData;
};

// -----
