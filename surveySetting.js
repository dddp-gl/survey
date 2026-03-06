// surveySetting.js
// Define survey settings constants ----------------------------------------------------------------
const account = 'zafa834'; // GitHub account
const repository= 'zafa834-jp-----y2025-a100-p01'; // meetingCode
const surveySheet= doc1/suerveySheet.md; // seuveySheet
const surveyDay = '2026/2/25';
const thema = 'Sample Thema';
const year = 'y2025';//meeting year
const areaCode ='jp-14---';
const areaName1 ='japan Kanagawa';
const areaName2 ='日本　神奈川県';
const options = [5,3]; //Questions (max:6)

// sample
// const account = 'zafa834'; // GitHub account
// const repository= 'zafa834-jp-----y2025-a100-p01'; // meetingCode
// const surveySheet= doc1/suerveySheet.md; // seuveySheet
// const surveyDay = '2026/2/25';
// const thema = 'Sample Thema';
// const year = 'y2025';//meeting year
// const areaCode ='jp-14---';
// const areaName1 ='japan Kanagawa';
// const areaName2 ='日本　神奈川県';
// const options = [5,3]; //Questions (max:6)
// change code by environment for Node.js and browser
// for Node.js, export the variables

if (typeof module !== 'undefined' && module.exports) {
    // Node.js
    module.exports = { account,repository,surveySheet,surveyDay,
        thema,year,areaCode, areaName1,areaName2,options
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
};

// -----
