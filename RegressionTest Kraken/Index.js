const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { options } = config;

async function executeTest(){
  let features = [
    { "feature" : "CreatePage", "before" : "CreatePage/Escenario_2", "after": "CreatePage_V4/Escenario_2"},
    { "feature" : "CreatePost", "before" : "CreatePost/Escenario_2", "after" : "CreatePost_V4/Escenario_2"},
    { "feature" : "CreateTags", "before" : "CreateTags/Escenario_1",  "after":"CreateTags_V4/Escenario_1"},
    { "feature" : "EditPost", "before" : "EditPost/Escenario_1",  "after":"EditPost_V4/Escenario_1"},
    { "feature" : "Navegacion", "before" : "Navegacion/Escenario_1",  "after":"Navegacion_V4/Escenario_1"}
  ]

  features.forEach(async feature => {
  let pathAfter = './results/'+ feature["after"]
  let pathBefore = './results/' + feature["before"]
  let featureName = feature["feature"]
  var filesBefore = fs.readdirSync(pathBefore)
  var filesAfter = fs.readdirSync(pathAfter)
    if(filesBefore.length === 0 && filesAfter.length === 0){
      return;
    }

    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");    
    console.log(filesBefore)
    for(b of filesBefore){
        const data = await compareImages(
            fs.readFileSync(`${pathBefore}/${b}`),
            fs.readFileSync(`${pathAfter}/${b}`),
            options
        );

        resultInfo[b] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        console.log(b)
        fs.writeFileSync(`./results/report/Comparacion/compare-${b}`, data.getBuffer());
    }

    fs.writeFileSync(`./results/report/${featureName}-report.html`, createReport(datetime, resultInfo, feature, filesBefore));
    fs.copyFileSync('./index.css', `./results/report/${featureName}-index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
    });
  }

  function step(b, info, feature){
	var aux = `<div class=" browser" id="test0">
				<div class=" btitle">
					<h2>Escenario: ${b}</h2>
					<p>Data: ${JSON.stringify(info)}</p>
				</div>
				<div class="imgline">
					<div class="imgcontainer">
						<span class="imgname">Reference</span>
						<img class="img2" src="../${feature["before"]}/${b}" id="refImage" label="Reference">
					</div>
					<div class="imgcontainer">
						<span class="imgname">Test</span>
						<img class="img2" src="../${feature["after"]}/${b}" id="testImage" label="Test">
					</div>
				</div>
				<div class="imgline">
					<div class="imgcontainer">
						<span class="imgname">Diff</span>
						<img class="imgfull" src="./Comparacion/compare-${b}" id="diffImage" label="Diff">
					</div>
				</div>
			</div>`
			return aux;
	}

function createReport(datetime, resInfo, feature, filesBefore){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="${feature["feature"]}-index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${filesBefore.map(b=>step(b, resInfo[b+'.png'], feature))}
            </div>
        </body>
    </html>`
}
(async ()=>console.log(await executeTest()))();